import axios from '../uitl/request'
import { Message } from 'element-ui';
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
        addGradeFun( state, {grade, room, subject}){//添加班级
            axios.post('/api/manger/grade', {grade_name:grade, room_id:room, subject_id:subject}).then(({data})=>{
            })
        },
        deleteFun( state, grade_id){//删除班级
            axios.delete('/api/manger/grade/delete', {grade_id}).then(res=>{
                if(res.data.code === 1){
                    Message({
                        message: res.data.msg,
                        type: 'success',
                        duration: 2000
                    })
                }else{
                    Message({
                        message: res.data.msg,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }, 
        currect({commit, state}){
            axios.get('/api/exam/student', {grade_id:state.row.grade_name}).then(res=>{
                commit('set_currect', res.data.exam)
            })
        },
        updataList(){
            axios.PUT('/api/manger/grade/update', {}).then(res=>{
                if(res.data.code === 1){
                    Message({
                        message: res.data.msg,
                        type: 'success',
                        duration: 2000
                    })
                }else{
                    Message({
                        message: res.data.msg,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    }
}
  
//导出
export default card;
