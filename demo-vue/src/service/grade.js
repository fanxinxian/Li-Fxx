import axios from '../uitl/request'
const card = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        gradeArr:[],
        delArr:[]
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        delCard(state, obj){
            state.delArr = obj
        }
    },
    actions: {
        addCardFun({commit}){//查看班级管理
            axios.get('/api/manger/grade').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        addGradeFun( state, {grade, room, subject}){//添加班级
            axios.post('/api/manger/grade', {grade_name:grade, room_id:room, subject_id:subject}).then(({data})=>{
                console.log(data);
            })
        },
        deleteFun( state, {id}){//删除班级
            axios.delete('/api/manger/grade/delete', {grade_id:id}).then(res=>{
                console.log(res)
            })
        }
    }
}
  
//导出
export default card;
