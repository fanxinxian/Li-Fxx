import axios from '../uitl/request'
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
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/manger/room').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        
    }
}
  
//导出
export default rooms;
