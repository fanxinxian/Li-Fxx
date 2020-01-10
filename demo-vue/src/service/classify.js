import axios from '../uitl/request'
import { Message } from 'element-ui';
const rooms = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        dialogFormVisible:true
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
<<<<<<< HEAD
        addQuestionsFun(state, obj){
            let sort = Math.random() * 1
            console.log(sort)
            axios.get('/api/exam/insertQuestionsType', {params:{text:obj, sort}}).then(res=>{
                console.log(res)
=======
        addQuestionsFun(state, {text, sort}){
            console.log( typeof sort)
            if(typeof sort !== Number){
                Message({
                    message: 'id请输入数值',
                    type: 'error',
                    duration: 3000
                })
                return 
            }
            axios.get('/api/exam/insertQuestionsType', {text, sort}).then(res=>{
                console.log(res);
                if(res.data.code === 1){
                    Message({
                        message: res.data.msg,
                        type: 'success',
                        duration: 3000
                    })
                }
>>>>>>> fxx
            })
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/exam/getQuestionsType').then(({data})=>{
                commit("addCard", data.data)
            })
        },
       
    }
} 
//导出
export default rooms;
