import axios from '../uitl/request'
const rooms = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        examArr: [],
        questArr:[],
        newArr:[]
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        examType(state, obj){
            state.examArr = obj;
        },
        Questions(state, obj){
            state.questArr = obj
        },
        newyy(state, obj){
            state.newArr = obj
        }
    },
    actions: {
        addCardFun({commit}){//
            axios.get('/api/exam/subject').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        examTypeFun({commit}){
            axios.get('/api/exam/examType').then(({data})=>{
                commit("examType", data.data)
            })
        },
        QuestionsFun({commit}){
            axios.get('/api/exam/getQuestionsType').then(({data})=>{
                commit("Questions", data.data)
            })
        },
        newyyFun({commit}){
            axios.get('/api/exam/questions/new').then(({data})=>{
                commit("newyy", data.data)
            })
        }
    }
}
  
//导出
export default rooms;
