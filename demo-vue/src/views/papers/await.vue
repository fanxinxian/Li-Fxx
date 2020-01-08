<template>
    <div class="await">
         <p style="font-size:20px;margin:10px 0 10px 10px;background-color: #E9EEF3;">学生管理</p>
         <el-table
         class="el-table"
            :data="tableData = (cardArr.slice(start = (count - 1) * emit, emit))"
            style="width: 100%;height:500px;">
            <el-table-column
                label="班级"
                prop="grade_name">
            </el-table-column>
            <el-table-column
                label="课程名称"
                prop="subject_text">
            </el-table-column>
            <el-table-column
                label="阅卷状态"
                prop="grade_name">
            </el-table-column>
            <el-table-column
                label="成材率"
                prop="room_text">
            </el-table-column>
            <el-table-column
                label="操作"
                prop="name">
                <span>批卷</span>
            </el-table-column>
        </el-table>
    <div class="block">
    <el-pagination
        style='width:100%;background:#fff;padding-left:60%;'
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="sum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="cardArr.length">
    </el-pagination>
    </div>
    </div>
</template>
<script>
import { mapActions, mapState} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            sum:111,
            start:0,
            count:1,
            emit:10,
            currentPage4:4
        }
    },
    computed:{
        ...mapState('Grade', ['cardArr'])
    },
    methods:{
        ...mapActions('Grade', ['addCardFun']),
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleCurrentChange(){

        },
        handleSizeChange(){

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
    height: 100% !important;
}
</style>
