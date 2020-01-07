<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>班级管理</h2>
    </el-header>
    <el-main>
      <el-button type="primary" icon="el-icon-plus" @click="addgrade">添加班级</el-button>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="grade_name"
      label="班级名"
      width="220">
    </el-table-column>
    <el-table-column
      prop="subject_id"
      label="课程名"
      width="400">
    </el-table-column>
    <el-table-column
      prop="room_id"
      label="教室号"
      width="220">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="260">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
    {{cardArr}}
</el-container>
    </div>
    
</template>
<script>
// import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tableData: [],
            grade_name:'',
            room_id:'',
            subject_id:''
        }
    },
    computed:{
        ...mapState(['cardArr'])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        addgrade(){
            // const {grade_name, room_id, subject_id} = this
            // axios.post('/api/manger/grade', {grade_name, room_id, subject_id}).then(res=>{
            //     console.log(res, 'res')
            // })
        },
        ...mapActions(['addCardFun'])
    },
    created(){
        this.addCardFun()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
 .el-header{
    background: #EAEEF3;
    text-align: center;
    line-height: 60px;
    h2{
        display: flex;
        font-size: 21px;
    }
  }
  .el-main {
    background-color: #fff;
    color: #333;
  }


</style>
