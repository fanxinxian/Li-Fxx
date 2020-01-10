<template>
    <div class="grade">
<el-container>
    <el-header>
        <h2>添加用户</h2>
    </el-header>
    <el-main class="main">
       <AdduserHead></AdduserHead>
       <AdduserHead></AdduserHead>
       <AdduserHead></AdduserHead>
       <AdduserHead></AdduserHead>
    </el-main>
</el-container>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import AdduserHead from './adduser-head/index'
export default {
    props:{
    },
    components:{
        AdduserHead
    },
    data(){
        return {
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
            },
            text:'',
            formLabelWidth: '120px'
        };
    },
    computed:{
        ...mapState('Classify', [
            'cardArr',
            // 'dialogFormVisible'
        ])
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
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
      display: flex;
   
  }
</style>
