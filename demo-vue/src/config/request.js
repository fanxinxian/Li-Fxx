const axios = require('axios');
const Status = require('./status.json');
const { Message } = require('element-ui');
let instance = axios.create();
instance.interceptors.request.use(function (config) {
    if(config.url !== '/api/user/login'){
        let  token  =  localStorage.getItem('token');
        config.headers.token = token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let title = Status[`${error.response.status}`];
    Message({
        message: title,
        type: 'success',
        duration: 5000
    })
    return Promise.reject(error);
});
export default instance
