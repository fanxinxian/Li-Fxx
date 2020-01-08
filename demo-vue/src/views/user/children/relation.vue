<template>
    <div>
        <el-table
            :data="userList"
            style="width: 100%">
            <el-table-column
                prop="view_authority_text"
                label="身份"
                width="380">
            </el-table-column>
            <el-table-column
                prop="view_id"
                label="视图名称"
                width="280">
            </el-table-column>
            <el-table-column
                prop="view_id"
                label="视图id"
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
            'relation'
        ])
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
