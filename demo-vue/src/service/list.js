import axios from '../uitl/request'
const lists = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
<<<<<<< HEAD
        TypeList:[],
        TimeList:[],
        formInline: {
            user: '',
            region: ''
        },
=======
        findCourseArr: [],
        typeArr:[]
>>>>>>> lj
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
<<<<<<< HEAD
            console.log(state.cardArr);
        },
        set_textList(state, obj){
            state.TypeList = obj;
            // console.log(state.TypeList);
        },
        set_testTime(state, obj){
            state.TimeList = obj;
        },
        onSubmit(state, {user, region}){
            if(user){
                state.cardArr = state.cardArr.filter(item=>item.subject_text === user);
                console.log('2', state.cardArr);
            }else if(region){
                state.cardArr = state.cardArr.filter(item=>item.exam_name === region);
                console.log('3', state.cardArr);
            }else if(user, region){
                state.cardArr = state.cardArr.filter(item=>item.subject_text === user && item.exam_name === region);
                console.log('1', state.cardArr);
            }
            state.formInline = {
                user: '',
                region: ''
            }
=======
>>>>>>> lj
        }
    },
    actions: {
        addCardFun({commit}){
<<<<<<< HEAD
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
=======
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
>>>>>>> lj
    }
}
  
//导出
export default lists;
