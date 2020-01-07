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
            <el-form-item  prop="checkPass" style="margin-left:-100px">
                <el-input type="password" v-model="ruleForm.checkPass" placeholder="再次输入密码" autocomplete="off"></el-input>
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
import { Message } from 'element-ui';
import axios from 'axios'
export default {
    props: {},
    components: {},
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
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
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
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
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
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
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                    axios.post('/api/user/login', {user_name:this.ruleForm.name, user_pwd:this.ruleForm.pass }).then(res =>{
                        console.log(res, 'res');
                        if(res.data.code === 1){
                            Message({
                                message:res.data.msg,
                                type:"success",
                                duration:1000
                            })
                            localStorage.setItem('token', res.data.token);
                            this.$router.push('/home')
                        }else{
                            Message({
                                message:res.data.msg,
                                type:"error",
                                duration:1000
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
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
  background: url("../img/8712338c7c51458fa356af8571bb6c3f.jpg") no-repeat;
  background-size: 100%;
  opacity: 0.9;
}
.login-box{
    width: 400px;
    height: 400px;
    top: 100px;
    left:80px;
    position: absolute;
    opacity: 0.85;
    border-radius: 10px;
    border: 3px solid rgba(157, 255, 0, 0.55);
    background-color: #fff;
    h3{
        text-align: center;
        margin:15px 0;
    }
}
.el-input{
    width: 88%;
    height: 25px;
    margin:4% 6%;
    // border-radius: 6px;
    // border:1px solid #dddddd;
}
.el-button{
    width: 250px;
    margin-left:-25px;
}
.el-checkbox{
    margin:0 0 0 30px;
    font-size: 12px;
}
.el-link{
    margin-left:200px;
}
.el-form-item__error{
    left:30px;
    position: absolute;
}
</style>
