<template>
    <div class="home">
<el-container>
          <el-header class="head">
              <el-header class="head-left">
          <img src="/1.jpg" alt="">
      </el-header>
      <el-dropdown class="head-right" style="text-align: right;">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>我的班级</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>范新贤</span>
    </el-header>
  <el-container>
    <el-aside width="200px">
          <el-aside width="200px">
    <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>试题管理</template>
        <el-menu-item-group>
            <router-link to="/home/addtext">
            <el-menu-item index="1-1">添加试题</el-menu-item>
            </router-link>
          
            <router-link to="/home/classify">
            <el-menu-item index="1-2">试题分类</el-menu-item>
            </router-link>
          
            <router-link to="/home/look">
            <el-menu-item index="1-3">查看试题</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item-group>
          
            <router-link to="/home/adduser">
            <el-menu-item index="2-1">添加用户</el-menu-item>
            </router-link>
          
            <router-link to="/home/show">
            <el-menu-item index="2-2">用户展示</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>考试管理</template>
        <el-menu-item-group>
          
            <router-link to="/home/addexam">
            <el-menu-item index="3-1">添加考试</el-menu-item>
            </router-link>
          
            <router-link to="/home/list">
            <el-menu-item index="3-2">试题列表</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>班级管理</template>
        <el-menu-item-group>
          
            <router-link to="/home/grade">
            <el-menu-item index="3-1">班级管理</el-menu-item>
            </router-link>
          
            <router-link to="/home/room">
            <el-menu-item index="3-2">教室管理</el-menu-item>
            </router-link>
          
            <router-link to="/home/student">
            <el-menu-item index="3-3">学生管理</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>阅卷管理</template>
        <el-menu-item-group>
          
            <router-link to="/home/await">
            <el-menu-item index="3-1">待批班级</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
    </el-aside>
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        
        return {
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.home{
    width: 100%;
    height: 100%;
    a{
      text-decoration: none;
    }
}
.head-left >img{
    width: 144px;
    height:60px;
}
.el-header, .el-footer {
    background-color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .head{
      display: flex;
  }
  .head-left{
      flex: 3;
    //   text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .head-right{
      flex: 7;
  }
  .el-aside {
    background-color: #242A3F;
    text-align: center;
    line-height: 200px;

  }


  .el-main {
    background-color: #f0f2f5;
  }
  .el-container{
      height: 100%;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
