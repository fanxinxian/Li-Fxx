import axios from '../uitl/request'
const card = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        gradeArr:[]
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        addGrade(state, obj){
            state.gradeArr = obj;
        }
    },
    actions: {
        addCardFun({commit}){//查看班级管理
            axios.get('/api/manger/grade').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        addGradeFun({commit}){//添加班级
            axios.post('/api/manger/grade').then((data)=>{
                commit('addGrade', data.data)
            })
        }
        
    }
}
  
//导出
export default card;