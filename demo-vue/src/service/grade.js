import axios from '../uitl/request'
const card = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        gradeArr:[],
        row:''
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        addGrade(state, obj){
            state.gradeArr = obj;
        },
        set_currect(state, obj){
            state.cardArr = obj;
        },
        set_row(state, row){
            state.row = row;
        },
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
        }, 
        currect({commit, state}){
            axios.get('/api/exam/student', {params:{grade_id:state.row.grade_name}}).then(res=>{
                // console.log(res);
                commit('set_currect', res.data.exam)
            })
        }
    }
}
  
//导出
export default card;
