<template>
    <div>
        <el-table 
            class="el-table"
            :data="userList"
            style="width: 100%">
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
            'identity'
        ])
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


