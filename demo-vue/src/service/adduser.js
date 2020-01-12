import axios from '../uitl/request'
import { Message } from 'element-ui';
const adduser = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        list: [],
        userList:[],
        viewList:[],
        apiList:[]
    },
    mutations: {
        addCard(state, obj){
            state.list = obj;
        },
        set_user(state, obj){
            state.userList = obj;
        },
        set_viewList(state, obj){
            state.viewList = obj;
        },
        set_apilist(state, obj){
            state.apiList = obj;
        }
    },
    actions: {
        //获取用户数据
        list_user({commit}){
            axios.get('/api/user/user').then(({data})=>{
                commit('set_user', data.data)
            })
        },
        //获取身份id
        adduserlist({commit}){
            axios.get('/api//user/identity').then(({data})=>{
                commit("addCard", data.data);
            })
        },
        //添加
        addlist_adduser(state, {user_name, identity_id, user_pwd}){
            axios.post('/api/user', {user_name, identity_id, user_pwd}).then(res=>{
                if(res.data.code === 1){
                    Message({
                        message: res.data.msg,
                        type: 'success',
                        duration: 2000
                    })
                }else{
                    Message({
                        message: res.data.err.errors[0].message,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        //添加身份
        adduser_id(state, {identity_text}){
            axios.get('/api/user/identity/edit', {identity_text}).then(res=>{
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
        set_jurisdiction(state, {api_authority_text, api_authority_url, api_authority_method}){
            axios.get('/api/user/authorityApi/edit', {api_authority_text, api_authority_url, api_authority_method}).then(res=>{
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
        set_view({commit}){
            axios.get('/api/user/view_authority').then(({data})=>{
                commit('set_viewList', data.data);
            })
        },
        set_view_id(state, view_authority_text){
            let view_id = 5;
            axios.get('/api/user/authorityView/edit', {view_authority_text, view_id: view_id++}).then(res=>{
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
        //获取权限
        set_api_({commit}){
            axios.get('/api/user/identity_api_authority_relation').then(({data})=>{
                commit('set_apilist', data.data)
            })
        },
        //设置权限
        set_api_id(state, {identity_id, api_authority_id}){
            axios.post('/api/user/setIdentityApi', {identity_id, api_authority_id}).then(res=>{
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
        // set_user_id(state, {identity_id, view_authority_id}){
        //     console.log(identity_id, view_authority_id);
        //     axios.post('/api/user/setIdentityView', {identity_id, view_authority_id}.then(res=>{
        //         console.log(res);
        //         if(res.data.code === 1){
        //              Message({
        //                 message: res.data.msg,
        //                 type: 'success',
        //                 duration: 2000
        //             })
        //         }else{
        //             Message({
        //                 message: res.data.msg,
        //                 type: 'error',
        //                 duration: 2000
        //             })
        //         }
        //     })
        // }
    }
} 
//导出
export default adduser;
