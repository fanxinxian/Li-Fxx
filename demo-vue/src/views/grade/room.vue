<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>教室管理</h2>
    </el-header>
    <el-main>
        <el-button type="primary" icon="el-icon-plus">添加教室</el-button>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="教室号"
      width="600">
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
</el-container>
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
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            },  {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }]
        }
    },
    computed:{

    },
    methods:{
        handleClick(row) {
            console.log(row);
        }
    },
    created(){

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
