<template>
    <div class="currect">
        <div class="header">
            <el-form class="el-form" :model="form">
                <el-form-item label="状态" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <el-form :model="form">
            <el-form-item label="班级" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择班级">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
            <span class="button">查询</span>
        </div>
        <div class="content">
            <p style="margin:30px;padding-top:20px;">试卷列表</p>
            <el-table
            :data="cardArr"
            style="width: 100%">
        <el-table-column
            label="班级"
            prop="id">
            {{this.$route.query.id}}
        </el-table-column>
        <el-table-column
            label="姓名"
            prop="student_name">
        </el-table-column>
        <el-table-column
            label="阅卷状态"
            prop=''>
        </el-table-column>
        <el-table-column
            label="开始时间"
            prop="start_time">
        </el-table-column>
        <el-table-column
            label="结束时间"
            prop="end_time">
        </el-table-column>
        <el-table-column
            label="成材率"
            prop="room_text">
        </el-table-column>
        <el-table-column
            label="操作"
            prop="name">
        <template slot-scope="scope">
        <el-button
          size="mini"
          class="el-button"
          @click="handleEdit(scope.row)">批卷</el-button>
          <span></span>
        </template>
    </el-table-column>
  </el-table>
        </div>
        <Knockout :pagesize="pagesize" :cardArr="cardArr" :currentPage="currentPage" @Change="Change"/>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Knockout from './knockout '
export default {
    props:{

    },
    components:{
        Knockout
    },
    data(){
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            currentPage:1,
            pagesize:7,
            id:'',
            formLabelWidth: '120px'
        }
    },
    computed:{
        ...mapState('Grade', ['cardArr', 'row'])
    },
    methods:{
        Change(val){
            this.currentPage = val;
        },
        ...mapActions('Grade', ['currect']),
        handleEdit(){

        }
    },
    created(){
        this.currect();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.currect{
    width: 100%;
    height: 100%;
}
.button{
    width:120px;
    height: 35px;
    margin:35px;
    font-size:14px;
    color: #fff;
    display: block;
    text-align: center;
    line-height: 35px;
    border-radius: 5px;
    background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
.header{
    display: flex;
    height: 100px;
    margin-top:30px;
    border-radius: 10px;
    background-color: #fff;
}
.el-form{
    margin-top: 35px;
}
.content{
    background-color: #fff;
}
</style>
<style scoped lang="scss">
.el-button{
    border:none;
    background: none;
}
</style>
