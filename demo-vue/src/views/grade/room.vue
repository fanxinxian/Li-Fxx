<template>
    <div class="grade">
        <el-container>
            <el-header>
                <h2>教室管理</h2>
            </el-header>
            <el-main>
                <el-button type="primary" icon="el-icon-plus" @click="addlist">添加教室</el-button>
                <el-dialog title="添加教室" :visible.sync="dialogFormVisible" class="dialog">
                <el-form :model="form">
                <el-form-item label="教室号">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Surelist">确 定</el-button>
  </div>
      </el-dialog>
        <el-table
    :data="cardArr"
    style="width: 100%">
    <el-table-column
      prop="room_text"
      label="教室号"
      width="740">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="260">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
    <el-button @click="sure">取 消</el-button>
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
            tableData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            dialogVisible: false,
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
            id:'',
            formLabelWidth: '120px'
        };
    },
    computed:{
        ...mapState('Room', [
            'cardArr', 
        ])
    },
    methods:{
        Surelist(){
            this.addlistFn(this.form.name);
            this.dialogFormVisible = false;
            this.addCardFun();
        },
        addlist(){
            this.dialogFormVisible = true;
        },
        deletes(){
            this.deleteFn(this.id);
            this.dialogVisible = false;
        },
        handleClick(row) {
            console.log(row)
            this.id = row.room_id
            this.dialogVisible = true;
        },
        sure(){
            this.dialogVisible = false;
        },
        ...mapActions('Room', [
            'addCardFun', 'deleteFn', 'addlistFn'
        ]),
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
