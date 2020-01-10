<template>
    <div class="index">
   <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="添加用户" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="更新用户" name="second">配置管理</el-tab-pane>
  </el-tabs>
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
            activeName: 'first'
        }
    },
    computed:{

    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.index{
    width: 315px;
    height:280px;
    border: 1px solid #ccc;
}
</style>
