import axios from '../uitl/request'
import { Message } from 'element-ui';
const rooms = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
       
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/manger/room').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        deleteFn(state, grade_id){
            axios.delete('/api/manger/grade/delete', {grade_id}).then(res=>{
                if(res.data.code === 1){
                    Message({
                        message:res.data.msg,
                        type:"success",
                        duration:1000
                    })
                }else{
                    Message({
                        message:res.data.msg,
                        type:"error",
                        duration:1000
                    })
                }
            })
        },
        addlistFn(state, room_text){
            axios.post('/api//manger/room', {room_text}).then(res=>{
                if(res.data.code === 1){
                    Message({
                        message:res.data.msg,
                        type:"success",
                        duration:1000
                    })
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
  
//导出
export default rooms;
