<template>
    <div class="knockout">
        <el-pagination
            background
            :page-size='pagesize'
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="cardArr.length">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name:'knockout',
    props:['pagesize', 'currentPage', 'cardArr'],
    components:{
        
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        handleCurrentChange(val){
            this.$emit('Change', val);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.knockout{
    float: right;
}
</style>
