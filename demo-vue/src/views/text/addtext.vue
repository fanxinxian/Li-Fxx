<template>
    <div class="add">
        <div class="ant-layout">
        <h2>添加试题</h2>
        <div class="ant-layout-content">
        <div>
        <form action class="ant-form ant-form-vertical">
            <h3>题目信息</h3>
            <div class>题干</div>
            <div style="height:40px;marginTop:10px;">
            <el-input
                v-model="total.input"
                placeholder="请输入目标标题,不超过20字"
                @change="change({
                    data:e.target.value
                })"
            ></el-input>
            </div>
            <div class="ant-form-item-label">题目主题</div>
            <div class="ant-row ant-form-item">
            <div class="for-container">
            <div class="for-controlbar-lis">
                <ul>
                    <li title="上一步 (ctrl+z)">
                        <i class="icon ion-ios-undo"></i>
                    </li>
                    <li title="上一步 (ctrl+z)">
                        <i class="icon ion-ios-redo"></i>
                    </li>
                    <li>H1</li>
                    <li>H2</li>
                    <li>H3</li>
                    <li>H4</li>
                </ul>
              </div>
                <div class="for-editor">
                    <div class="for-editor-block">
                        <ul class="for-line-num">
                            <li>1</li>
                        </ul>
                    <div class="for-editor-content">
                        <pre></pre>
                        <textarea placeholder="请输入内容" v-model="total.textarea1"></textarea>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="ant-form-item-label">请选择考试类型</div>
            <!-- <select name="" id=""></select> -->
            <div>
                <el-select v-model="total.value" placeholder="请选择">
                <el-option
                    v-for="item in testGenreList"
                    :key="item.value"
                    :label="item.exam_name"
                    :value="item.exam_id"
                ></el-option>
            </el-select>
            </div>
            <div class="ant-form-item-label">请选择课程类型</div>
            <!-- <select name="" id=""></select> -->
            <div>
            <el-select v-model="total.value1" placeholder="请选择" >
            <el-option
              v-for="item in testSubjectList"
              :key="item.value"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
            </el-select>
            </div>
           <div class="ant-form-item-label">请选择题目类型</div>
            <!-- <select name="" id=""></select> -->
            <div>
            <el-select v-model="total.value2" placeholder="请选择">
            <el-option
                v-for="item in testList"
                :key="item.value"
                :label="item.questions_type_text"
                :value="item.questions_type_id"
            ></el-option>
            </el-select>
            </div>
            <div class="ant-form-item-label">题目主题</div>
            <div class="ant-row ant-form-item">
            <div class="for-container">
                <div class="for-controlbar-lis">
                    <ul>
                        <li title="上一步 (ctrl+z)">
                            <i class="icon ion-ios-undo"></i>
                        </li>
                        <li title="上一步 (ctrl+z)">
                            <i class="icon ion-ios-redo"></i>
                        </li>
                        <li>H1</li>
                        <li>H2</li>
                        <li>H3</li>
                        <li>H4</li>
                    </ul>
                </div>
            <div class="for-editor">
                <div class="for-editor-block">
                  <ul class="for-line-num">
                    <li>1</li>
                  </ul>
                  <div class="for-editor-content">
                    <pre></pre>
                    <textarea placeholder="请输入内容" v-model="total.textarea2"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-button type="primary" style="marginButton:100px;" @click="open2">提交</el-button>
        </form>
      </div>
    </div>
  </div>
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
            title:'',
            total:{
                input:'',
                textarea1:'',
                value:'',
                value1:'',
                value2:''
            },
            testGenreList:[],
            testSubjectList:[],
            testList:[]
        }
    },
    computed:{

    },
    methods:{
        open2(){
            
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.add{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
