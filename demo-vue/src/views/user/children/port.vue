<template>
    <div>
        <el-table
            :data="userList"
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
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    props:{
        
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState('UserList', ['userList'])
    },
    methods:{
        ...mapActions('UserList', [
            'port'
        ])
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
