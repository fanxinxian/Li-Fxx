import axios from '../uitl/request'
const student = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        tabList:[],
        list:[],
        count:1,
        start:0,
        emit:10,
    },
    mutations: {
        setList(state, obj){
            state.tabList = obj;
            state.list = state.tabList.slice(state.start = (state.count - 1) * state.emit, state.emit);
        },
        btnSecah(state, data){
            if(data.name){
                state.list = state.tabList.filter(item=>item.student_name === data.name);
            }else if(data.student_id){
                state.list = state.tabList.filter(item=>item.student_name === data.student_id);
            }else{
                console.log(data);
            }
        }
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

