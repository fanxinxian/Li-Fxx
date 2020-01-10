import axios from '../uitl/request'
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
        addQuestionsFun(state, obj){
            let sort = Math.random() * 1
            console.log(sort)
            axios.get('/api/exam/insertQuestionsType', {params:{text:obj, sort}}).then(res=>{
                console.log(res)
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
