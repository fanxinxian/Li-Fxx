<template>
    <div class="student">
        <p style="font-size:20px;margin:10px 0 0 10px;background-color: #E9EEF3;">学生管理</p>
        <div class="header">
            <el-input v-model="sizeForm.names" placeholder="输入学生姓名" size="small" class="el-input"></el-input>
            <el-input v-model="sizeForm.student_id" placeholder="输入学号" size="small" class="el-input"></el-input>
            <el-select v-model="sizeForm.region"  size="small" placeholder="请输入教室号" class="el-option">
                <el-option class="el-option " v-for="(item,ind) in cardArr" :key="ind" :label="item.room_text" :value="item.room_text"></el-option>
            </el-select>
            <el-select v-model="sizeForm.grade_name"   size="small" placeholder="班级名" class="el-option">
                <el-option v-for="(item,ind) in cardArr" :key="ind" :label="item.grade_name" :value="item.grade_name"></el-option>
            </el-select>
            <el-button type="primary" size="small" class="el-button" @click="btnSecah(sizeForm)">搜索</el-button>
            <el-button type="primary" size="small" class="el-button" @click="btnReset">重置</el-button>
        </div>
         <el-table
            class="el-table"
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%;">
                <el-table-column
                    label="姓名"
                    prop="student_name">
                </el-table-column>
                <el-table-column
                    label="学号"
                    prop="student_id">
                </el-table-column>
                <el-table-column
                    label="班级"
                    prop="grade_name">
                </el-table-column>
                <el-table-column
                    label="教室"
                    prop="room_text">
                </el-table-column>
                <el-table-column
                    label="密码"
                    prop="student_pwd">
                </el-table-column>
                <el-table-column
                    label="操作"
                    prop="name">
                    <span>批卷</span>
                </el-table-column>
        </el-table>
    <div class="block">
        <Konckout :pagesize="pagesize" :cardArr="cardArr" :currentPage="currentPage" @Change="Change"/>
    </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations} from 'vuex'
import Konckout from '../../components/knockout '
export default {
    name:'student',
    props:{

    },
    components:{
        Konckout
    },
    data(){
        return {
            sizeForm:{
                region:'',
                names:'',
                student_id:'',
                grade_name:''
            },
            currentPage:1,
            pagesize:15
        }
    },
    computed:{
        ...mapState('student', [
            'cardArr', 'list', 'sum', 'count'
        ]),
    },
    methods:{
        Change(val){
            this.currentPage = val;
        },
        ...mapMutations('student', ['btnSecah']),
        ...mapActions('student', [
            'getList',
        ]),
        btnReset(){
            this.sizeForm = {
                region:'',
                names:'',
                student_id:''
            }
            this.getList();
        },
    },
    created(){
        this.getList();
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
.student{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.el-input{
    width: 190px;
    height:35px ;
    margin:0 20px;
}
.el-option{
    width: 170px;
    height:35px ;
    margin-right:25px;
}
.el-button{
    width:120px;
    margin:20px;
    font-size:12px;
    background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
.el-pagination{
    height: 40px;
    padding-left: 60%;
    background-color: #fff;
}
.el-select-dropdown__item.selected{
    color: #444444;
    overflow-y: auto;
}
</style>
