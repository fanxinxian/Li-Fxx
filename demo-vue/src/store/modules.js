import Vue from 'vue'
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
