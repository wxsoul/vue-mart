<template>
    <div style="padding-left: 10px">
        <el-row :gutter="15">
            <el-col :span="6" v-for="(item,index) in book" :key="index" style="padding-top: 15px;display: flex">
                <el-card>
                    <img :src="item.img" alt="" class="image">
                    <div style="padding: 14px">
                        <span>{{item.title}}</span>
                        <el-button type="text" class="button">
                            <i class="el-icon-circle-plus" @click="addCart($event,item)"></i>
                        </el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="ball-wrap">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
                <div class="ball" v-show="ball.show">
                    <div class="inner">
                        <div class="el-icon-circle-plus"></div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                book:[],
                ball:{
                    show:false,
                    el:null
                }
            }
        },
        async created(){
            let ret = await axios.get('/api/vue')
            this.book = ret.data.data
            // console.log(ret)
        },
        methods: {
            addCart($event,item){
                this.ball.el = $event.target
                this.ball.show = true
                this.$store.commit('addcart',item)
            },
            beforeEnter(el){
                let dom = this.ball.el
                let rect = dom.getBoundingClientRect()
                let x = window.innerWidth - rect.left - 70
                let y = rect.top - 16
                el.style.display = ""
                el.style.transform = `translate3d(0,${y}px,0)`

                let inner = el.querySelector('.inner')
                inner.style.transform = `translate3d(-${x}px,0,0)`
            },
            enter(el,done){
                // let dom = this.ball.el
                this._offset = document.body.offsetHeight

                el.style.transform = 'translate3d(0,0,0)'
                let inner = el.querySelector('.inner')
                inner.style.transform = `translate3d(0,0,0)`
                el.addEventListener('transitionend',done)
            },
            afterEnter(el){
                this.ball.show = false
                el.style.display = 'node'
            }
        }
    }
</script>

<style scoped>
    .image{
        width: 100%;
    }
    /*.button{*/
    /*    width: 50px;*/
    /*}*/
    .el-menu-vertical-demo{
        width: 200px;
        height: 100%;
        float: left;
    }
    .ball-wrap .ball{
        position: fixed;
        right: 40px;
        top: 16px;
        color: red;
        z-index: 20000;
        transition: all 1.5s linear;
    }
    .ball-wrap .ball .inner{
        width: 16px;
        height: 16px;
        transition: all 1s linear;
    }
</style>