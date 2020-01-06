const axios = require('axios');
const Status = require('./status.json');
const { Message } = require('element-ui');
const instance = axios.create();
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let title = Status[`${error.response.status}`];
    Message.success = {
        message: title,
        type: success,
        duration: 5000
    }
    return Promise.reject(error);
});
export default instance;