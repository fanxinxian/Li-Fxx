<template>
    <div class="grade">
<el-container>
    <el-header>
        <h2>试卷列表</h2>
    </el-header>
    <el-main class="maintop">
        <div class="maintop-2">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="考试类型:">
                <el-select v-model="formInline.region">
                <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.exam_name"  value="exam_name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程:">
                <el-select v-model="formInline.region">
                <el-option v-for="(item,ind) in cardArr" :key="ind" :label="item.questions_type_text"  value="questions_type_text"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            </el-form-item>
</el-form>
        </div>
    </el-main>
    <div class="main-bottom">
        <div class="main-bottom-top">
            <h2>试卷列表</h2>
        <div class="span">

        </div>
        </div>
        <el-table
    :data="cardArr"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="试卷信息"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="班级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="创建人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="开始时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="结束时间"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    {{cardArr}}
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
            formInline: {
                user: '',
                region: ''
            },
            tableData:[]
        };
    },
    computed:{
        ...mapState('List', [
            'cardArr'
        ])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        ...mapActions('List', [
            'addCardFun'
        ]),
        onSubmit() {
            console.log('submit!');
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
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
  .maintop {
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    height: 120px;
  }

.main-bottom{
    width: 100%;
    height: auto;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    margin-top: 20px;
    ul{
        display: flex;
        flex-direction: column;
        li{
            height: 125px;
            margin:20px;
            border-bottom: 1px solid #ccc;
            display: flex;
            .li-left{
                flex: 9;
                margin:20px;
                display: flex;
                flex-direction: column;
            }
            .li-right{
                flex: 1;
            }
        }
        li:hover{
            background: rgb(250, 249, 249);
        }
    }
}
.main-bottom-top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin: 10px;
    display: flex;
    h2{
        font-size: 21px;
        flex:7;
    }
    .span{
        flex:3;
        display: flex;
    }
}
.tag{
    width: 100%;
    height: 100%;
    display: flex;
    margin: 10px 0;
    .el-tag{
        margin-right: 10px;
        height: 22px;
        line-height: 22px;
    }
}

.li-right{
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        text-decoration: none;
        color: #00f;
    }
}

</style>
