import axios from '../uitl/request'
const lists = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        findCourseArr: [],
        typeArr:[]
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/exam/exam').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        // findCourseFun({commit}){
        //     axios.get('/api/exam/subject',{subject_text}).then(({data})=>{
        //         console.log(data);
        //     })
        // },
        // typeFun({commit}){
        //     axios.get('/api/exam/examType').then(res=>{
        //         console.log(res)
        //     })
        // }
    }
}
  
//导出
export default lists;
