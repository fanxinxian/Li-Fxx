import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
//试题管理
import Addtext from '../views/text/addtext.vue'
import Classify from '../views/text/classify.vue'
import Look from '../views/text/look.vue'
//用户管理
import Adduser from '../views/user/adduser.vue'
import Show from '../views/user/show.vue'
//考试管理
import Addexam from '../views/exam/addexam.vue'
import List from '../views/exam/list.vue'
//班级管理
import Grade from '../views/grade/grade.vue'
import Room from '../views/grade/room.vue'
import Student from '../views/grade/student.vue'
//阅卷管理
import Await from '../views/papers/await.vue'
//用户管理
import UserList from '../views/user/children/userlist'
import Relation from '../views/user/children/relation'
import Permissions from '../views/user/children/permissions'
import Jurisdiction from '../views/user/children/jurisdiction'
import Identity from '../views/user/children/identity'
import Prot from '../views/user/children/port'
//批卷页面
import Correct  from '../components/correct '
//个人中心
import Personage from '../components/personage.vue'
//我的班级
import Class from '../components/class.vue'
//设置
import Set from '../components/set.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[ 
            {
                path:'/home/addtext',
                component:Addtext
            }, {
                path:'/home/classify',
                component:Classify
            }, {
                path:'/home/look',
                component:Look
            }, {
                path:'/home/adduser',
                component:Adduser,
            }, {
                path:'/home/show',
                component:Show,
                children:[
                    {
                        path:'/home/show',
                        redirect:'/home/show/userlist'
                    }, 
                    {
                        path:'/home/show/userlist',
                        component: UserList
                    }, {
                        path:'/home/show/relation',
                        component:Relation
                    }, {
                        path:'/home/show/jurisdiction',
                        component:Jurisdiction
                    }, {
                        path:"/home/show/Identity",
                        component:Identity
                    }, {
                        path:'/home/show/permissions',
                        component:Permissions
                    }, {
                        path:'/home/show/prot',
                        component:Prot
                    }
                ]
            }, {
                path:'/home/addexam',
                component:Addexam
            }, {
                path:'/home/list',
                component:List
            }, {
                path:'/home/grade',
                component:Grade
            }, {
                path:'/home/room',
                component:Room
            }, {
                path:'/home/student',
                component:Student
            }, {
                path:'/home/await',
                component:Await
            }, {
                path:'/home/correct',
                component:Correct
            }, {
                path:'/home/personage',
                component:Personage
            }, {
                path:'/home/class',
                component:Class
            }, {
                path:'/home/set',
                component:Set
            }
        ]
    }, {
        path:'/login',
        component:Login
    }
    
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
