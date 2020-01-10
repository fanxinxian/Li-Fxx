<template>
    <div>
        <el-table
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                prop="identity_text"
                label="身份名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="api_authority_text"
                label="api权限名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="api_authority_url"
                label="api权限url">
            </el-table-column>
             <el-table-column
                prop="api_authority_method"
                label="api权限方法">
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
            'jurisdiction'
        ]),
        Change(val){
            this.currentPage = val;
        }
    },
    created(){
        this.jurisdiction();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
