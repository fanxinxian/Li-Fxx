<template>
  <div class="home">
    <el-container class="container">
            <el-header class="header">
                <div class="el-left">
                    <img src="../../public/timg.jpeg" alt="">
                </div>
                <div class="el-right">
                    <div class="user" >
                       <div class="span">
                         <span class="photo"></span>
                        <span>欢迎 w916peach</span>
                       </div>
                        <ul class="selectList">
                              <router-link to="/home/personage">
                                <li>个人中心</li>
                              </router-link>
                            <router-link to="/home/class">
                                <li>我的班级</li>
                            </router-link>
                            <hr style="border:0.5px solid #e3e3e3;">
                            <router-link to="/home/set">
                              <li>设置</li>
                            </router-link>
                            <li @click="bank">退出登录</li>
                        </ul>
                    </div>
                </div>
            </el-header>
      <el-container class="main">
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#242A3F"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>试题管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/home/addtext">
                  <el-menu-item index="1-1"><span>添加试题</span></el-menu-item>
                  </router-link>
                  <router-link to="/home/classify">
                  <el-menu-item index="1-2"><span>试题分类</span></el-menu-item>
                  </router-link>
                  <router-link to="/home/look">
                  <el-menu-item index="1-3"><span>查看试题</span></el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#242A3F">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/home/adduser">
                  <el-menu-item index="1-4"><span>添加用户</span></el-menu-item>
                  </router-link>
                  <router-link to="/home/show">
                  <el-menu-item index="1-5"><span>用户展示</span></el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-menu
            default-active="3"
            class="el-menu-vertical-demo"
            background-color="#242A3F">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>考试管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/home/addexam">
                  <el-menu-item index="1-6"><span>添加考试</span></el-menu-item>
                  </router-link>
                  <router-link to="/home/list">
                  <el-menu-item index="1-7"><span>试卷列表</span></el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
            background-color="#242A3F">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/home/grade">
                  <el-menu-item index="1-8"><span>班级管理</span></el-menu-item>
                  </router-link>
                  <router-link to="/home/room">
                  <el-menu-item index="1-9"><span>教室管理</span></el-menu-item>
                  </router-link>
                
                  <router-link to="/home/student">
                  <el-menu-item index="1-10"><span>学生管理</span></el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <el-menu
            default-active="5"
            class="el-menu-vertical-demo"
            background-color="#242A3F">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>阅卷管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/home/await">
                  <el-menu-item index="1-11"><span>待批班级</span></el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

        </el-aside>
        <el-main>
          <div class="box">
            <div class="title">
              {{$route.meta.title}}
            </div>
              <div class="view">
                <router-view></router-view>
              </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isactive:false
        }
    },
    methods:{
        bank(){
            this.$router.push('/login')
        },
        button(){
            this.style.background = '#000'
        }
    }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column；
}
.container{
  display: flex;
    flex-direction: column；
}
.main{
  width: 100%;
  height: 100%;
  overflow: auto;
}
 .el-header {
    background-color: #fcfcfc;
    color: #333;
    width: 100%;
    height: 60px;
    display: flex;
    .el-left{
        width: 70%;
        height: 60px;
        line-height:90px;
        display: flex;
        align-items: center;
        img{
          width: 120px;
          height: 30px;
          margin-left: 50px;
        }
    }
    .el-right{
        width: 30%;
        height: 60px;
        display: flex;
        .user{
            width: 200px;
            height: 60px;
            margin: 0 auto;
            .span{
                width: 320px;
                height: 60px;
                display: flex;
                justify-content:center;
                align-items: center;
                .photo{
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  background: #ccc;
                  margin-right: 5px;
                }
            }
            
        }
        .user:hover .selectList{
            display: block;
        }
        .selectList{
            width: 120px;
            height: 140px;
            background: #fff;
            position: fixed;
            top: 60px;
            right:8%;
            font-size: 12px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            display: none;
            z-index: 999;
            border: 0.5px solid #ccc;
            li{
                width: 100%;
                height: 25%;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
                z-index: 999;
            }
            li:hover{
                background: rgba(182, 227, 244, 0.611);
            }
        }
    }
  }

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .box{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      header{
          width: 100%;
          height: 80px;
          line-height: 80px;
          font-size:25px;
      }
  }
.el-aside{
  background: #242A3F;
  ul{
    li{
      span{
        color: #fff;
      }
    }
  }
  li:hover{
    font-size: 13px;
    transform: 0.1;
  }
}
.view{
    width: 100%;
    height: 100%;
}

</style>
