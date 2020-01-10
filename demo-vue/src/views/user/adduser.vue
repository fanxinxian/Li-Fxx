<template>
    <div class="grade">
<el-container>
    <el-header>
        <h2>添加用户</h2>
    </el-header>
    <div class="main">
<div class="tab1">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="添加用户">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-input v-model="form.name" placeholder="输入用户名"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="form.name" placeholder="输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份id">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>  
  </el-tab-pane>
  <el-tab-pane label="更新用户">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份id">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  <el-form-item>
    <el-input v-model="form.name" placeholder="输入用户名"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="form.name" placeholder="输入密码"></el-input>
  </el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份名称">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>    
  </el-tab-pane>
</el-tabs>
</div>
<div class="tab2">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="添加身份">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-input v-model="form.name" placeholder="输入身份名称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form> 
  </el-tab-pane>
</el-tabs>
</div>
<div class="tab3">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="添加api接口权限">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-input v-model="form.name" placeholder="请输入api接口权限名称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="form.name" placeholder="请输入api接口权限url"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="form.name" placeholder="请输入接口权限方法"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form> 
  </el-tab-pane>
</el-tabs>
</div>
<div class="tab4">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="添加试图接口权限">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择已有视图">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>  
  </el-tab-pane>
</el-tabs>
</div>
<div class="tab5">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="给身份设置api接口权限内">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份id">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
<el-select v-model="form.region" placeholder="请选择api接口权限">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
</el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form> 
  </el-tab-pane>
</el-tabs>
</div>
<div class="tab6">
<el-tabs type="border-card" class="cardtop">
  <el-tab-pane label="给身份设置视图权限">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
<el-select v-model="form.region" placeholder="请选择身份id">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
</el-select>
<el-select v-model="form.region" placeholder="请选择视图权限id">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
</el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form> 
  </el-tab-pane>
</el-tabs>
</div>
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
            activeName: 'adduser',
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
            }
        };
    },
    computed:{
        ...mapState('Classify', [
            'cardArr',
            // 'dialogFormVisible'
        ])
    },
    methods:{
        ...mapActions('Classify', [
            'addCardFun',
        ]),
        ...mapMutations('Classify', [
            'addQuestionsFun',
        ]),
        sure(){
            this.addQuestionsFun(this.text)
            this.dialogFormVisible = false;
            this.addCardFun()
        },
        onSubmit() {
            console.log('submit!');
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
.grade{
    width: 100%;
    height: 100%;
    display: flex;

}
 .el-header{
    background: #EAEEF3;
    text-align: center;
    line-height: 60px;
    h2{
        display: flex;
        font-size: 21px;
    }
  }
  .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
  }
.tab1,.tab2,.tab3,.tab4,.tab5,.tab6{
      width:380px;
      height:300px;
      border: 0.5px solid #ccc;
      border-radius: 10px;
  }
.cardtop{
    background: #EAEEF3;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.sure{
    background: #00f;
    width: 100px;
}

</style>
