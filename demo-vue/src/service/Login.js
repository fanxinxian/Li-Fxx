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
        getList(user_name, user_pwd){
            axios.post('/api/user/login', {user_name, user_pwd }).then(res =>{
                if(res.data.code === 1){
                    Message({
                        message:res.data.msg,
                        type:"success",
                        duration:5000
                    })
                    cookie.set('token', res.data.token);
                    this.$router.push('/home');
                }else{
                    Message({
                        message:res.data.msg,
                        type:"error",
                        duration:5000
                    })
                }
            })
        }
    }
}
export default Login;

