<template>
    <div class="student">
        <p style="font-size:20px;margin:10px 0 10px 10px">学生管理</p>
        <div class="header">
            <el-input v-model="name" placeholder="输入学生姓名" size="small" class="el-input"></el-input>
            <el-select v-model="sizeForm.region"  size="small" placeholder="请输入教室号" class="el-option">
                <el-option class="el-option " v-for="(item,ind) in tableData" :key="ind" :label="item.room_text" value="shanghai"></el-option>
            </el-select>
            <el-select v-model="sizeForm.region"  size="small" placeholder="班级名" class="el-option">
                <el-option v-for="(item,ind) in tableData" :key="ind" :label="item.grade_name"  value="shanghai"></el-option>
            </el-select>
            <el-button type="primary" size="small" class="el-button">搜索</el-button>
            <el-button type="primary" size="small" class="el-button">重置</el-button>
        </div>
         <el-table
         class="el-table"
            :data="tableData"
            style="width: 100%;height:500px;">
            <el-table-column
                label="姓名"
                prop="student_name">
            </el-table-column>
            <el-table-column
                label="学号"
                prop="student_id">
            </el-table-column>
            <el-table-column
                label="班级"
                prop="grade_name">
            </el-table-column>
            <el-table-column
                label="教室"
                prop="room_text">
            </el-table-column>
            <el-table-column
                label="密码"
                prop="student_pwd">
            </el-table-column>
            <el-table-column
                label="操作"
                prop="name">
                删除
            </el-table-column>
        </el-table>
    <div class="block">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="sum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
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
            name:'',
            sizeForm:{
                region:''
            },
        }
    },
    computed:{
        ...mapState('student', [
            'tableData',
        ]),
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        ...mapActions('student', [
            'getList'
        ]),
    },
    created(){
        this.getList();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.el-input{
    width: 190px;
    height:35px ;
    margin:0 20px;
}
.el-option{
    width: 170px;
    height:35px ;
    margin-right:25px;
}
.el-button{
    width:120px;
    margin:20px;
    font-size:12px !important;
    background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
.el-table{
    overflow-y: auto;
}
.el-pagination{
    height: 40px;
    padding-left: 60%;
    background-color: #fff;
}
.el-select-dropdown__item.selected{
    color: #444444;
    overflow-y: auto;
}
</style>
