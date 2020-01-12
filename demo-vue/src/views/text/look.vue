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
      <div class="li">
          <li @click="all" class="all">All</li>
          <li v-for="(item,idx) in cardArr" :key="idx"
          :class="idx==index?'active':''" @click="son(item,idx)">
          <span>{{item.subject_text}}</span>
      </li>
      </div>
  </ul>
        </div>
        <div class="maintop-2">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="考试类型:">
                <el-select v-model="formInline.user">
                <el-option  v-for="(item,ind) in examArr" :key="ind" :label="item.exam_name"  :value="item.exam_name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="题目类型">
                <el-select v-model="formInline.region">
                <el-option v-for="(item,ind) in questArr" :key="ind" :label="item.questions_type_text" :value="item.questions_type_text"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" @click="onSubmit(formInline)" icon="el-icon-search" style="background:#00f;">查询</el-button>
            </el-form-item>
</el-form>
        </div>
    </el-main>
    <div class="main-bottom">
        <ul>
            <li  v-for="(item,index) in datalist" :key="index">
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
                    <!-- <a href="">编辑</a> -->
                </div>
            </li>
        </ul>
    </div>
    <div><img src="/1.png" alt="" class="img"></div>
</el-container>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
    props:{
        
    },
    components:{

    },
    data(){
        return {
            index:-1,
            datalist:[],
            All:'',
            fullscreenLoading: false,
            formInline: {
                user: '',
                region: ''
            },
            tab:'All'
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
        son(item, idx = 0){
            this.index = idx;
            this.tab = item.subject_text;
        },
        handleClick() {
        },
        ...mapActions('Look', [
            'addCardFun',
            'examTypeFun',
            'QuestionsFun',
            'newyyFun'
        ]),
        ...mapMutations('Look', ['onSubmit']),
        onSubmit() {
            const loading = this.$loading({
                lock: true,
                text: '查询中,请稍后',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 1200);
            setTimeout(()=>{
                if(this.tab !== "All"){
                    let arrnew = this.newArr.filter(item=>item.subject_text.includes(this.tab) && item.exam_name.includes(this.formInline.user) && item.questions_type_text.includes(this.formInline.region))
                    if(arrnew.length){
                        let arr = this.newArr.filter(item=>item.exam_name.includes(this.formInline.user) && item.questions_type_text.includes(this.formInline.region))
                        this.datalist = arr
                    }else{
                        <div>
                            <img src="/1.png" alt="" class="img"/>
                        </div>
                    }
                    this.datalist = arrnew
                }
                this.formInline.user = '', 
                this.formInline.region = ''
            }, 1000)
        },
        all(){
        }
    },
    created(){
        this.addCardFun(),
        this.examTypeFun(),
        this.QuestionsFun(),
        this.newyyFun()
        this.datalist = this.newArr
    },
    mounted(){

    }
}
</script>
<style lang="scss">
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
        span{
            width:100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            display: block;
        }
    }
}
.active{
     background: #00f;
     color: #fff;
     border-radius: 5px;
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
.img{
    margin-left: 350px;
    border-radius: 10px;
}
</style>
