<template>
    <div class="grade">
        <el-container>
    <el-header>
        <h2>添加考试</h2>
    </el-header>
    <el-main>
    <el-form ref="form" label-width="120px">
  <el-form-item label="试卷名称">
    <el-input style="width:300px" v-model="sizeForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="请选择考试类型">
    <el-select v-model="sizeForm.date1">
      <el-option  v-for="(item,ind) in testTimeList" :key="ind" :label="item.exam_name"  :value="item.exam_name"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="请选择课程">
    <el-select v-model="sizeForm.date2">
      <el-option  v-for="(item,ind) in cardArr" :key="ind" :label="item.subject_text"  :value="item.subject_text"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="设置题量">
    <el-input-number v-model="sizeForm.num" controls-position="right" @change="handleChange" :min="3" :max="10"></el-input-number>
  </el-form-item>
  <el-form-item label="考试时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.start_time" style="width:400px"></el-date-picker>
    </el-col>
     <el-col class="line" :span="2">---</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="sizeForm.end_time" style="width:400px"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">创建试卷</el-button>
  </el-form-item>
</el-form>
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
            sizeForm: {
                name: '',
                date1: '',
                date2: '',
                end_time:'',
                start_time:'',
                num:''
            },
        };
    },
    computed:{
        ...mapState('Addexam', [
            'cardArr', 'testTimeList'
        ])
    },
    methods:{
        handleChange(value) {
            console.log(value);
        },
        ...mapActions('Addexam', [
            'addCardFun', 'testTime', 'addtestFn'
        ]),
        onSubmit() {
            this.sizeForm.start_time = this.sizeForm.start_time * 1;
            this.sizeForm.end_time = this.sizeForm.end_time * 1;
            this.addtestFn(this.sizeForm);
            this.sizeForm = {
                name: '',
                date1: '',
                date2: '',
                end_time:'',
                start_time:'',
                num:''
            }
        },
    },
    created(){
        this.addCardFun();
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
  .el-main {
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    margin-top: 20px;
  }


</style>
