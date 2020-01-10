<template>
    <div class="await">
         <p style="font-size:20px;margin:10px 0 10px 10px;background-color: #E9EEF3;">待批班级</p>
         <el-table
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%">
        <el-table-column
            label="班级名"
            prop="grade_name">
        </el-table-column>
        <el-table-column
            label="课程名称"
            prop="subject_text">
        </el-table-column>
        <el-table-column
            label="阅卷状态"
            prop="name">
        </el-table-column>
        <el-table-column
            label="成材率"
            prop="room_text">
        </el-table-column>
        <el-table-column
            label="操作"
            prop="name">
        <template slot-scope="scope">
        <el-button
          style="border:none;background:none"
          size="mini"
          @click="handleEdit(scope.row)">批卷</el-button>
        </template>
    </el-table-column>
  </el-table>
    <div>
        <Knockout :currentPage="currentPage" :pagesize="pagesize" :cardArr="cardArr" @Change="Change"/>
    </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations} from 'vuex'
import Knockout from '../../components/knockout '
export default {
    props:{

    },
    components:{
        Knockout
    },
    data(){
        return {
            currentPage:1,
            pagesize:15
        }
    },
    computed:{
        ...mapState('Grade', ['cardArr'])
    },
    methods:{
        ...mapActions('Grade', ['addCardFun']),
        ...mapMutations('Grage', ['set_row']),
        handleEdit(row) {
            this.$router.push({path:'/home/correct', query:{id:row.grade_name}});
        },
        Change(val){
            this.currentPage = val;
        }
    },
    created(){
        this.addCardFun();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.el-table{
    
}
</style>
