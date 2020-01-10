import axios from '../uitl/request'
const student = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr:[],
        list:[],
        //当前页
        count:1,
        //当前页的索引
        start:0,
        //条数
        emit:15,
        //总页数
        sum:0
    },
    mutations: {
        setList(state, obj){
            state.cardArr = obj;
            state.sum = Math.ceil(state.cardArr.length / state.emit);0
        },
        btnSecah(state, data){
            console.log(data);
            if(data.region && data.grade_name){
                state.cardArr = state.cardArr.filter(item=>item.student_name === data.grade_name && item.room_text === data.region);
            }else if(data.names){
                state.cardArr = state.cardArr.filter(item=>item.student_name === data.names);
            }else if(data.student_id){
                state.cardArr = state.cardArr.filter(item=>item.student_id === data.student_id);
            }else if(data.region){
                state.cardArr = state.cardArr.filter(item=>item.room_text === data.region);
            }else if(data.grade_name){
                state.cardArr = state.cardArr.filter(item=>item.grade_name === data.grade_name);
            }
        },
    },
    actions: {
        getList({commit}){
            axios.get('/api/manger/student').then(({data}) => {
                commit('setList', data.data);
            })
        }
    }
}
export default student;

