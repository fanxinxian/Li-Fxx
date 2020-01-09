import Vue from 'vue'
import Vuex from 'vuex';
import Grade from '../service/grade'
import Room from '../service/room'
import student from '../service/student'
import Login from '../service/Login'
import Classify from '../service/classify'
import Look from '../service/look'
import List from '../service/list'
import Addexam from '../service/addexam'
import UserList from '../service/user'
Vue.use(Vuex);
//构造store
const store = new Vuex.Store({
    modules: {
        student,
        Login,
        Grade,
        Room,
        Classify,
        Look,
        List,
        Addexam,
        UserList
    }
})

export default store
