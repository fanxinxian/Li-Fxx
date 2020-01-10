import axios from '../uitl/request'
const lists = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: []
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
            console.log(state.cardArr);
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/exam/exam').then(res=>{
                console.log(res);
                commit("addCard", res.data.exam)
            })
        }
    }
}
  
//导出
export default lists;
