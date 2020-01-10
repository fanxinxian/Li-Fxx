<template>
<el-container class="nnn">
    <el-header>
        <h2>添加考试</h2>
    </el-header>
<el-main class="main">
        <div class="main-top1">
            <h3>题目信息</h3>
            <span>题干</span>
            <el-input v-model="input" placeholder="请输入题目内容,不超过20个字"></el-input>
        </div>
<div class="main-top2">
            <span>题目主题</span>
    <div class="edit_container">
        <quill-editor class="quill-editor"
            v-model="inputs" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        </div>
</div>
<div class="main-top3">
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="请选择考试类型">
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="请选择课程类型">
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="请选择题目类型">
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-form>
</div>
<div class="main-top4">
            <span>答案信息</span>
    <div class="edit_container">
        <quill-editor 
            v-model="inputs" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        </div>
</div>
    </el-main>
<el-footer>
    <el-button type="primary" style="background:#00f;width:150px">提交</el-button>
</el-footer>
</el-container>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器


export default {
    props:{
    },
    components:{
        quillEditor
    },
    data(){
        return {
            input: '',
            inputs:'',
            editorOption: {},
            labelPosition: 'top',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        };
    },
    computed:{
        // editor() {
        //     return this.$refs.myQuillEditor.quill;
        // }
    },
    methods:{
        onEditorReady() { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件

    },
    created(){
        
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
.nnn{
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
    background: #fff;
}
  .quill-editor{
      width: 100%;
      height: 200px;
  }
  .main-top2{
      margin-top:55px;
  }

</style>
