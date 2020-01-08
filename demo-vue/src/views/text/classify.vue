<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>试题分类</h2>
    </el-header>
    <el-main>
        <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加类型</el-button>

<el-dialog title="创建新类型" :visible.sync="dialogFormVisible" class="dialog">
  <el-form :model="form">
    <el-form-item>
      <el-input v-model="form.name" autocomplete="off" placeholder="请输入类型名称"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    <el-button @click="dialogFormVisible = false">取 消</el-button>
  </div>
</el-dialog>
<el-table
    :data="cardArr"
    style="width: 100%">
    <el-table-column
      prop="questions_type_id"
      label="类型ID"
      width="350">
    </el-table-column>
    <el-table-column
      prop="questions_type_text"
      label="类型名称"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="260">
      <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
      </template> -->
    </el-table-column>
  </el-table>
    </el-main>
</el-container>
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
        ...mapState('Classify', [
            'cardArr'
        ])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        ...mapActions('Classify', [
            'addCardFun'
        ])
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
    margin-top: 30px;
  }


</style>
