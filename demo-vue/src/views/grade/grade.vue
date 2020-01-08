<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>班级管理</h2>
    </el-header>
    <el-main class="elmain">
      <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加班级</el-button>
<el-dialog title="添加班级" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="班级名" :label-width="formLabelWidth">
      <el-input autocomplete="off" placeholder="班级名"></el-input>
    </el-form-item>
      <el-form-item label="教室号" :label-width="formLabelWidth">
      <el-select placeholder="请选择教室号">
        <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.room_text"  value="room_text"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="课程名" :label-width="formLabelWidth">
      <el-select placeholder="请选择课程名">
        <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.subject_text"  value="subject_text"></el-option>
      </el-select>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="sure">确 定</el-button>
  </div>
</el-dialog>
        <el-table
    :data="cardArr"
    style="width: 100%">
    <el-table-column
      prop="grade_name"
      label="班级名"
      width="220">
    </el-table-column>
    <el-table-column
      prop="subject_text"
      label="课程名"
      width="400">
    </el-table-column>
    <el-table-column
      prop="room_text"
      label="教室号"
      width="220">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="230">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        |<el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
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
            gridData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
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
            formLabelWidth: '120px'
        };
    },
    computed:{
        ...mapState('Grade', [
            'cardArr',
            'gradeArr'
        ])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        ...mapActions('Grade', [
            'addCardFun',
            'addGradeFun'
        ]),
        sure(){//确定按钮
            this.dialogFormVisible = false
            console.log(1)
        }
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
    border-radius: 10px;
    margin-top: 20px;
  }


</style>
