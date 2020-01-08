import Vue from 'vue'
import Vuex from 'vuex';
import Grade from '../service/grade'
import student from '../service/student'
import Login from '../service/Login'
import UserList from '../service/user'
Vue.use(Vuex);
//构造store
const store = new Vuex.Store({
    modules: {
        student,
        Login,
        Grade,
        UserList
    }
})

export default store
