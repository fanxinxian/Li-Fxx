<template>
    <div class="grade">
    <el-container>
    <el-header>
        <h2>试卷列表</h2>
    </el-header>
    <el-main class="maintop">
            <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="考试类型:">
<<<<<<< HEAD
                <el-select v-model="formInline.region">
                <el-option  v-for="(item,ind) in TimeList" :key="ind" :label="item.exam_name"  :value="item.exam_name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程:">
                <el-select v-model="formInline.user">
                <el-option v-for="(item,ind) in TypeList" :key="ind" :label="item.subject_text"  :value="item.subject_text"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(formInline)" icon="el-icon-search">查询</el-button>
            </el-form-item>
        </el-form>
        </div>
=======
                <el-select v-model="text">
                <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.exam_name"  :value="item.exam_name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程:">
                <el-select v-model="name">
                <el-option v-for="(item,ind) in cardArr" :key="ind" :label="item.subject_text"  :value="item.subject_text"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" icon="el-icon-search" style="background:#00f">查询</el-button>
            </el-form-item>
</el-form>
>>>>>>> lj
    </el-main>
    <div class="main-bottom">
        <div class="main-bottom-top">
            <h2>试卷列表</h2>
        </div>
    <el-table
        :data="cardArr"
        style="width: 100%">
        <el-table-column
            prop="title"
            label="试卷信息"
            width="180">
        </el-table-column>
        <el-table-column
            prop="grade_name"
            label="班级"
            width="180">
        </el-table-column>
        <el-table-column
            prop="user_name"
            label="创建人">
        </el-table-column>
        <el-table-column
            prop="start_time"
            label="开始时间">
        </el-table-column>
        <el-table-column
            prop="end_time"
            label="结束时间">
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
<<<<<<< HEAD
            tableData:[]
=======
            text:'',
            name:'',
            form:{
                text:'',
                name:'', 
                title:'',
                grade_name:'',
                user_name:'',
                start_time:'',
                end_time:'',
            }
>>>>>>> lj
        };
    },
    computed:{
        ...mapState('List', [
<<<<<<< HEAD
            'cardArr', 
            'TypeList', 
            'TimeList',
            'formInline'
=======
            'cardArr',
            'findCourseArr',
            'typeArr'
>>>>>>> lj
        ])
    },
    methods:{
        ...mapMutations('List', ['onSubmit']),
        handleClick(row) {
            console.log(row);
        },
        ...mapActions('List', [
<<<<<<< HEAD
            'addCardFun', 
            'textList', 
            'testTime'
        ]),
=======
            'addCardFun',
            'findCourseFun',
            'typeFun'
        ]),
        onSubmit() {
            console.log('submit!');
        },
        //详情
>>>>>>> lj
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
    created(){
        this.addCardFun();
        this.textList();
        this.testTime();
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
