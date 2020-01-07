import axios from '../uitl/request'
const student = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        tableData:[],
        total:20,
        eiemt:1,
        sum:0
    },
    mutations: {
        setList(state, obj){
            state.tableData = obj;
            state.sum = Math.ceil(state.tableData.length / state.total)
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

