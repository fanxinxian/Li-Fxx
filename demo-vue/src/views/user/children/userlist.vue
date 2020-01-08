<template>
    <div>
        <el-table
            :data="userList"
            style="width: 100%">
            <el-table-column
                prop="user_name"
                label="用户名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="user_name"
                label="密码"
                width="180">
            </el-table-column>
            <el-table-column
                prop="identity_text"
                label="身份">
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
            'addCardFun'
        ])
    },
    created(){
        this.addCardFun();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style> 

