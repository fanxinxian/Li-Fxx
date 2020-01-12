import axios from '../uitl/request'
const lists = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        TypeList:[],
        TimeList:[],
        formInline: {
            user: '',
            region: ''
        },
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        set_textList(state, obj){
            state.TypeList = obj;
        },
        set_testTime(state, obj){
            state.TimeList = obj;
        },
        onSubmit(state, {user, region}){
            if(user){
                state.cardArr = state.cardArr.filter(item=>item.subject_text === user);
            }else if(region){
                state.cardArr = state.cardArr.filter(item=>item.exam_name === region);
            }else if(user, region){
                state.cardArr = state.cardArr.filter(item=>item.subject_text === user && item.exam_name === region);
            }
            state.formInline = {
                user: '',
                region: ''
            }
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/exam/exam').then(res=>{
                commit("addCard", res.data.exam)
            })
        },
        textList({commit}){
            axios.get('/api/exam/subject').then(res=>{
                commit('set_textList', res.data.data);
            })
        },
        testTime({commit}){
            axios.get('/api/exam/examType').then(({data})=>{
                commit("set_testTime", data.data)
            })
        }
    }
}
  
//导出
export default lists;
