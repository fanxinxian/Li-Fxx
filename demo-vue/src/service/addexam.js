import axios from '../uitl/request'
import { Message } from 'element-ui';
const addexams = {
    /**
     * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
     */
    namespaced: true,
    state: {
        cardArr: [],
        testTimeList:[]
    },
    mutations: {
        addCard(state, obj){
            state.cardArr = obj;
        },
        set_testTime(state, obj){
            state.testTimeList = obj;
        }
    },
    actions: {
        //考试课程获取
        addCardFun({commit}){
            axios.get('/api/exam/subject').then(({data})=>{
                commit("addCard", data.data)
            })
        },
        //考试类型
        testTime({commit}){
            axios.get('/api/exam/examType').then(({data})=>{
                commit("set_testTime", data.data)
            })
        },
        //创建接口
        addtestFn(state, {name, num = 4, date2, date1, start_time, end_time}){
            axios.post('/api/exam/exam', {title:name, number:num, subject_id:date2, exam_id:date1, start_time:start_time, end_time: end_time}).then(res=>{
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
        }
    }
}
  
//导出
export default addexams;
