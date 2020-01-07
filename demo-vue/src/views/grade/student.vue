<template>
    <div class="student">
        <p style="font-size:20px;margin:15px 0 30px 10px">学生管理</p>
        <div class="header">
            <el-input v-model="name" placeholder="输入学生姓名" size="small" class="el-input"></el-input>
            <el-select v-model="sizeForm.region"  size="small" placeholder="请选择活动区域" class="el-option">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="sizeForm.region"  size="small" placeholder="请选择活动区域" class="el-option">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-button type="primary" size="medium" class="el-button">主要按钮</el-button>
            <el-button type="primary" size="medium" class="el-button">主要按钮</el-button>
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
            name:'',
            sizeForm:{
                region:''
            }
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

.el-input{
    width: 190px;
    margin:0 10px;
}
.el-option{
    width: 150px;
    margin-left:15px;
}
// .el-button{
//     width: 75px;
// }
</style>
