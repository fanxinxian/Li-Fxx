import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex';
import Grade from '../service/grade'
Vue.use(Vuex);
//构造store
const store = new Vuex.Store({
    modules: {
        Grade
    }
})
// 导出store
export default store
=======
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
>>>>>>> fxx
