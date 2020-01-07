<template>
  <div class="login">
    <div class="login-box">
        <h3>考试管理</h3>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item class="el-form-item"  prop="name" style="margin-left:-100px">
                <el-input v-model.number="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="pass" style="margin-left:-100px">
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary"  class="el-button"  @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
            <el-checkbox v-model="checked" class="el-checkbox" style="font-size:14px">记住密码</el-checkbox>
            <el-link type="primary" class="el-link">忘记密码</el-link>
        </el-form>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: {},
    components: {},
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
            setTimeout(() => {
                if (Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (typeof value === String ) {
                        callback(new Error('必须是字符串类型'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        return {
            checked:'',
            ruleForm: {
                pass: '',
                checkPass: '',
                name: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                name: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        };
    },
    computed: {},
    methods: {
        submitForm(formName) {
            let {name, pass} = this.ruleForm;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.getList(name, pass);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        ...mapActions(['getList'])
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../img/u=1766048813,3019784974&fm=26&gp=0.jpg") no-repeat;
  background-size: 100%;
}
.login-box{
    width: 380px;
    height: 420px;
    top: 120px;
    right:200px;
    position: absolute;
    border-radius: 5px;
    background-color: #fff;
    h3{
        text-align: center;
        margin:15px 0;
    }
}
.el-input{
    width: 88%;
    height: 25px;
    margin:4% 4%;
}
.el-button{
    width: 250px;
    margin-left:-30px;
    margin-bottom: 20px;
}
.el-checkbox{
    margin:0 0 0 30px;
    font-size: 12px;
}
.el-link{
    margin-left:200px;
}
.el-form-item__error{
    left:30px !important;
    position: absolute;
}
</style>
