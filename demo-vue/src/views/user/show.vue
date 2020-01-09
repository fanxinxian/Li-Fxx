<template>
    <div class="adduser">
        <p style="font-size:20px;margin:10px 0 10px 10px;background-color: #E9EEF3;">添加用户</p>
        <div class="content-box">
            <div class="header" style="margin-top:20px;">
                <el-button class="el-button" plain><router-link to="/home/show/userlist">用户管理</router-link></el-button>
                <el-button plain><router-link to="/home/show/Identity">身份数据</router-link></el-button>
                <el-button plain><router-link to="/home/show/prot">api接口权限</router-link></el-button>
                <el-button plain><router-link to="/home/show/jurisdiction">身份证和api接口的关系</router-link></el-button>
                <el-button plain><router-link to="/home/show/permissions">试图接口权限</router-link></el-button>
                <el-button plain><router-link to="/home/show/relation">身份和视图权限接口关系</router-link></el-button>
                
            </div>
            <h3></h3>
            <div>
                <router-view></router-view>
            </div>
        </div>
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
.adduser{
    width: 100%;
    height: 100%;
}
.el-table{
    width: 100%;
    height: 100%;
}
.el-button{
    margin:0;
    height: 35px;
    font-size: 12px;
    line-height: 8px;
}
.content-box{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    color: #000;
    width: 100%;
    height: 100%;
    display: block;
}
</style>
