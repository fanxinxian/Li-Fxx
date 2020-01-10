import axios from'axios';
import Stanum from'../config/status.json';
import Router from '../router/index';
import Cookie from 'js-cookie';
import { Message } from 'element-ui';
let instance = axios.create();
instance.defaults.timeout = 3000;

instance.interceptors.request.use(function (config) {
    if(config.url !== '/api/user/login'){
        let token = Cookie.get('token');
        if (!token) {
            Router.replace('/login')
        }
        config.headers['authorization'] = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let title = Stanum[`${error.response.status}`];
    Message({
        message: title,
        type: 'error',
        duration: 3000
    })
    return Promise.reject(error);
});

export default{
    get(url, params){
        return instance.get(url, {params})
    },
    post(url, params){
        return instance.post(url, params)
    },
    delete(url, params){
        return instance.delete(url, {data:params})
    },
    put(url, params){
        return instance.put(url, params)
    }
}
