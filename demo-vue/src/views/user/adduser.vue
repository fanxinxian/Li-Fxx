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
    <el-input v-model="form.pwd" type="password" placeholder="输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份id">
      <el-option  v-for="(item, ind) in list" :key="ind" :label="item.identity_text" :value="item.identity_text"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="srues" class="sure">确定</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>  
  </el-tab-pane>
  <el-tab-pane label="更新用户">
<el-form ref="form" :model="form" class="form">
  <el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份id">
        <el-option  v-for="(item, ind) in userList" :key="ind" :label="item.user_name" :value="item.user_name"></el-option>
    </el-select>
  <el-form-item>
    <el-input v-model="form.name" placeholder="输入用户名"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="form.name" placeholder="输入密码"></el-input>
  </el-form-item>
    <el-select v-model="form.region" placeholder="请选择身份名称">     
       <el-option  v-for="(item, ind) in list" :key="ind" :label="item.identity_text" :value="item.identity_text"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary"  class="sure">确定</el-button>
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
    <el-input v-model="form.identity_text" placeholder="输入身份名称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="set_identity_text"  class="sure">确定</el-button>
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
    <el-input v-model="form.api_authority_text" placeholder="请输入api接口权限名称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="form.api_authority_url" placeholder="请输入api接口权限url"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="form.api_authority_method" placeholder="请输入接口权限方法"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="btn_jurisdiction" class="sure">确定</el-button>
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
    <el-select v-model="form.view_authority_text" placeholder="请选择已有视图">
      <el-option  v-for="(item, ind) in viewList" :key="ind" :label="item.view_authority_text" :value="item.view_authority_text"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="btn_view" class="sure">确定</el-button>
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
    <el-select v-model="form.identity_id" placeholder="请选择身份id">
      <el-option  v-for="(item, ind) in list" :key="ind" :label="item.identity_text" :value="item.identity_text"></el-option>
    </el-select>
<el-select v-model="form.api_authority_id" placeholder="请选择api接口权限">
      <el-option  v-for="(item, ind) in apiList" :key="ind" :label="item.api_authority_text" :value="item.api_authority_text"></el-option>
</el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="btn_api_id"  class="sure">确定</el-button>
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
<el-select v-model="form.identity_id" placeholder="请选择身份id">
      <el-option  v-for="(item, ind) in list" :key="ind" :label="item.identity_text" :value="item.identity_text"></el-option>
</el-select>
<el-select v-model="form.view_authority_id" placeholder="请选择视图权限id">
       <el-option  v-for="(item, ind) in viewList" :key="ind" :label="item.view_authority_text" :value="item.view_authority_text"></el-option>
</el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="btn_user_id" class="sure">确定</el-button>
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
import { Message } from 'element-ui';
import {mapState, mapActions} from 'vuex'
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
                pwd:'',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                identity_text:'',
                api_authority_text:'',
                api_authority_url:'',
                api_authority_method:'',
                view_authority_text:'',
                api_authority_id:'',
                identity_id:"",
                view_authority_id:''
            }
        }
    },
    computed:{
        ...mapState('Adduser', ['list', 'userList', 'viewList', 'apiList'])
    },
    methods:{
        ...mapActions('Adduser', [
            'adduserlist',
            'addlist_adduser',
            'list_user',
            'adduser_id',
            'set_jurisdiction',
            'set_view',
            'set_view_id',
            'set_api_',
            'set_api_id',
            'set_user_id'
        ]),
        srues(){
            this.addlist_adduser({user_name:this.form.name, identity_id: this.form.region, user_pwd:this.form.pwd})
            this.form = {
                name:'',
                region:'',
                pwd:''
            }
        },
        set_identity_text(){
            if(this.form.identity_text){
                this.adduser_id({identity_text:this.form.identity_text})
            }else{
                Message({
                    message: '不能为空',
                    type: 'error',
                    duration: 2000
                })
            }
        },
        btn_jurisdiction(){
            let {api_authority_method, api_authority_text, api_authority_url} = this.form;
            if(api_authority_text && api_authority_url && api_authority_method){
                this.set_jurisdiction({api_authority_text, api_authority_url, api_authority_method})
            }else{
                Message({
                    message: '不能为空',
                    type: 'error',
                    duration: 2000
                })
            }
        },
        btn_view(){
            if(this.form.view_authority_text){
                this.set_view_id(this.form.view_authority_text);
            }else{
                Message({
                    message: '不能为空',
                    type: 'error',
                    duration: 2000
                })
            }
        },
        btn_api_id(){
            let {api_authority_id, identity_id } = this.form;
            if(api_authority_id, identity_id){
                this.set_api_id({api_authority_id, identity_id})
            }else{
                Message({
                    message: '不能为空',
                    type: 'error',
                    duration: 2000
                })
            }
        },
        btn_user_id(){
            let {api_authority_id, identity_id } = this.form;
            if(api_authority_id, identity_id){
                this.set_api_id({api_authority_id, identity_id})
            }else{
                Message({
                    message: '不能为空',
                    type: 'error',
                    duration: 2000
                })
            }
        }
    },
    created(){
        this.adduserlist();
        this.list_user();
        this.set_view();
        this.set_api_();
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
