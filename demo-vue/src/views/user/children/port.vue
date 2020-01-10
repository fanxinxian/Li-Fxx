<template>
    <div>
        <el-table
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                prop="api_authority_text"
                label="api权限名称"
                width="320">
            </el-table-column>
            <el-table-column
                prop="api_authority_url"
                label="api权限url"
                width="320">
            </el-table-column>
            <el-table-column
                prop="api_authority_method"
                label="api权限方法"
                width="280">
            </el-table-column>
        </el-table>
        <Knockout :pagesize="pagesize" :cardArr="cardArr" :currentPage="currentPage" @Change="Change"/>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Knockout from '../../../components/knockout '
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
        ...mapState('UserList', ['cardArr'])
    },
    methods:{
        ...mapActions('UserList', [
            'port'
        ]),
        Change(val){
            this.currentPage = val;
        }
    },
    created(){
        this.port();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
