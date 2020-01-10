import axios from '../uitl/request'
const user = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        set_identity(state, obj){
            state.cardArr = obj;
        },
        set_port(state, obj){
            state.cardArr = obj;
        },
        set_jurisdiction(state, obj){
            state.cardArr = obj;
        },
        set_permissions(state, obj){
            state.cardArr = obj;
        },
        set_relation(state, obj){
            state.cardArr = obj;
        }
    },
    actions: {
        addCardFun({commit}){
            axios.get('/api/user/user').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        identity({commit}){
            axios.get('/api/user/identity').then(({data})=>{
                commit("set_identity", data.data)
            }) 
        },
        port({commit}){
            axios.get('/api/user/api_authority').then(({data})=>{
                commit("set_port", data.data)
            }) 
        },
        jurisdiction({commit}){
            axios.get('/api/user/identity_api_authority_relation').then(({data})=>{
                commit("set_jurisdiction", data.data)
            }) 
        },
        permissions({commit}){
            axios.get('/api/user/view_authority').then(({data})=>{
                commit("set_permissions", data.data)
            }) 
        },
        relation({commit}){
            axios.get('/api/user/identity_view_authority_relation').then(({data})=>{
                commit("set_relation", data.data)
            }) 
        }
    }
}
  
//导出
export default user;

