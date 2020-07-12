<template>
    <div style="width: auto;padding-top: 75px;margin-left:50px;margin-right: 50px">
        <el-table
                :data="cart"
                style="width: 100%">
            <el-table-column
                    label="ID"
                    prop="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="名称"
                    prop="title"
                    width="180">
            </el-table-column>
            <el-table-column label="图片">
                <template slot-scope="scope">
                    <img :src="scope.row.img" style="height: 50px"/>
                </template>
            </el-table-column>
            <el-table-column
                    label="数量"
                    prop="count"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="onAdd(scope.$index)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="onReduce(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                // cart: []
            }
        },
        computed:{
            ...mapState({
               cart:state=>state.cart
            })
        },
        methods:{
            onReduce(index){
                this.$store.commit('cartreduce',index)
            },
            onAdd(index){
                this.$store.commit('cartadd',index)
            }
        }
    }
</script>

<style scoped>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .table{
        display: flex;
    }
</style>