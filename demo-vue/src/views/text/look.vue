<template>
    <div class="grade">
<el-container>
    <el-header>
        <h2>查看试题</h2>
    </el-header>
    <el-main class="maintop">
        <div class="maintop-1">
  <ul class="ul">
      <span style="font-size:14px">课程类型:</span>
      <span style="font-size:12px;margin:0 -30px 0 20px" class="all" @click="all">All</span>
      <div class="li">
          <li v-for="(item,index) in cardArr" :key="index">
          {{item.subject_text}}
      </li>
      </div>
  </ul>
        </div>
        <div class="maintop-2">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="考试类型:">
                <el-select v-model="formInline.region">
                <el-option  v-for="(item,ind) in examArr" :key="ind" :label="item.exam_name"  value="exam_name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目类型">
                <el-select v-model="formInline.region">
                <el-option v-for="(item,ind) in questArr" :key="ind" :label="item.questions_type_text"  value="questions_type_text"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" icon="el-icon-search" style="background:#00f;">查询</el-button>
            </el-form-item>
</el-form>
        </div>
    </el-main>
    <div class="main-bottom">
        <ul>
            <li  v-for="(item,index) in newArr" :key="index">
                    <div class="li-left">
                        <span type="success">{{item.title}}</span>
                        <div class="tag">
                            <el-tag>{{item.questions_type_text}}</el-tag>
                            <el-tag type="info">{{item.subject_text}}</el-tag>
                            <el-tag type="warning">{{item.exam_name}}</el-tag>
                        </div>
                        <span style="color:#00f;font-size:14px">{{item.user_name}}发布</span>
                    </div>
                <div class="li-right">
                    <a href="">编辑</a>
                </div>
            </li>
        </ul>
    </div>
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
        ...mapState('Look', [
            'cardArr',
            'examArr',
            'questArr',
            'newArr'
        ])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        ...mapActions('Look', [
            'addCardFun',
            'examTypeFun',
            'QuestionsFun',
            'newyyFun'
        ]),
        onSubmit() {
            console.log('submit!');
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        all(){
            this.nextSbiling.style.background = '#00f'
        }
    },
    created(){
        this.addCardFun(),
        this.examTypeFun(),
        this.QuestionsFun(),
        this.newyyFun()
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
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
  }
.maintop-1{
    width: 100%;
    height: 100px;
    line-height: 80px;
    .ul{
        display: flex;
        span{
            flex: 0.6;
        }
    }
    .li{
        flex: 9.4;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
    }
}
.all{
    cursor: pointer;
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
