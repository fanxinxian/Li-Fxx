<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>班级管理</h2>
    </el-header>
    <el-main class="elmain">

    <el-button type="primary" icon="el-icon-plus" 
      @click="addclass">添加班级</el-button>
<el-dialog :title="flag===true?'添加班级':'修改班级'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="班级名" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="grade" placeholder="班级名"></el-input>
    </el-form-item>
      <el-form-item label="教室号" :label-width="formLabelWidth">
      <el-select placeholder="请选择教室号" v-model="room">
        <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.room_text"  :value="item.room_id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="课程名" :label-width="formLabelWidth">
      <el-select placeholder="请选择课程名" v-model="subject">
        <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.subject_text"  :value="item.subject_id"></el-option>
      </el-select>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="openFullScreen2(form)"> 确 定 </el-button>
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
        <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
</el-container>
    <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%">
          <span>您确定要删除么？</span>
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="deletes">确 定</el-button>
  </span>
</el-dialog>
    </div>
    
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            fullscreenLoading: false,
            gridData: [],
            grade:'',
            room:'',
            subject:'',
            flag:false,
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                grade:'',
                room:'',
                subject:'',
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            formLabelWidth: '120px',
            dialogVisible:false,
            id:'',
            roid:'',
            name:'',
            subname:'',
            roomid:''
        };
    },
    computed:{
        ...mapState('Grade', [
            'cardArr',
            'gradeArr',
            'delArr'
        ])
    },
    methods:{
        //添加
        addclass(){
            this.dialogFormVisible = true;
            this.grade = '',
            this.room = '',
            this.subject = '';
            this.flag = true;
        },
        //修改
        handleClick(index, row) {
            this.dialogFormVisible = true;
            this.flag = false
            this.grade = row.grade_name 
            this.subject = row.subject_text
            this.room = row.room_text 
            this.roid = row.grade_id

        },
        ...mapActions('Grade', [
            'addCardFun',
            'addGradeFun',
            'deleteFun',
            'updataList'
        ]),
        del(row){
            this.id = row.grade_id
            this.dialogVisible = true;
        },
        deletes(){
            this.deleteFun(this.id);
            this.dialogVisible = false;
            this.addCardFun();
        },
        //确定按钮
        openFullScreen2() {
            let {grade, room, subject, roid, name, subname, roomid} = this;
            if(this.flag === true){
                this.addGradeFun({grade, room, subject});
                this.addCardFun();  
            }else if(this.flag === false){
                this.updataList({roid, name, subname, roomid})
            }
            this.dialogFormVisible = false;
            const loading = this.$loading({
                lock: true,
                text: '修改中,请稍后',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 1500);
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
