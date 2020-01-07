import Vue from 'vue'
import Vuex from 'vuex'
import student from '../service/student'
import Login from '../service/Login'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        student,
        Login
    }
})

export default store;
