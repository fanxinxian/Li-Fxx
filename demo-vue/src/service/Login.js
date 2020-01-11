import axios from '../uitl/request'
import { Message } from 'element-ui';
import cookie from 'js-cookie'
const Login = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        staudent_list:[]
    },
    mutations: {
        
    },
    actions: {
        getList(state, {name, pass}){
            console.log( {name, pass})
            axios.post('/api/user/login', {user_name:name, user_pwd:pass }).then(res =>{
                console.log(res);
                if(res.data.code === 1){
                    Message({
                        message:res.data.msg,
                        type:"success",
                        duration:1000
                    })
                    cookie.set('token', res.data.token);
                    location.href = '/home'
                }else{
                    Message({
                        message:res.data.msg,
                        type:"error",
                        duration:1000
                    })
                }
            })
        }
    }
}
export default Login;

