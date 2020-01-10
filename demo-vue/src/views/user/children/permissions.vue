<template>
    <div>
        <el-table
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                prop="view_authority_text"
                label="视图权限名称"
                width="380">
            </el-table-column>
            <el-table-column
                prop="view_id"
                label="视图id"
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
            'relation'
        ]),
        Change(val){
            this.currentPage = val;
        }
    },
    created(){
        this.relation();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
