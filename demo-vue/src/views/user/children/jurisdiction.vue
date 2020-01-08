<template>
    <div>
        <el-table
            :data="userList"
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
            'jurisdiction'
        ])
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
