<template>
    <div class="identity">
        <el-table 
            class="el-table"
            :data="cardArr.slice((currentPage - 1)*pagesize, currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                prop="identity_text"
                label="身份">
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
            'identity'
        ]),
        Change(val){
            this.currentPage = val;
        }
    },
    created(){
        this.identity();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
</style>



