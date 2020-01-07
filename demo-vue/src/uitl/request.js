import axios from'axios';
import Stanum from'../config/status.json';
import Router from '../router/index';
import Cookie from 'js-cookie';
import { Message } from 'element-ui';
let instance = axios.create();
instance.defaults.timeout = 5000;
// if (process.env.NODE_ENV === 'development') {
//     instance.defaults.baseURL = '/dev'
// } else if (process.env.NODE_ENV === 'test') {
//     instance.defaults.baseURL = '/test'
// } else if (process.env.NODE_ENV === 'producation') {
//     instance.defaults.baseURL = '/pro' 
// }
instance.interceptors.request.use(function (config) {
    if(config.url !== '/api/user/login'){
        let token = Cookie.get('token');
        console.log(token);
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
        type: 'success',
        duration: 5000
    })
    return Promise.reject(error);
});

export default instance
