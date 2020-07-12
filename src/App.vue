<template>
  <div id="app">
      <el-container style="position: fixed;z-index: 200;width: 100%;mpadding-right: -30px">
          <el-header style="">
              <el-menu mode="horizontal">
                  <el-menu-item index="1">
                      <img width="100px" src="https://img.kaikeba.com/logo-new@2x.png">
                  </el-menu-item>
                  <el-menu-item index="2">
                      <router-link to="/">
                          首页
                      </router-link>
                  </el-menu-item>
                  <el-menu-item index="3" style="float: right">
                      <router-link to="/cart">
                          <el-badge :value="cartTotal" style="position:fixed;margin-top: -10px;margin-left: 10px">
                          </el-badge>
                          <i class="el-icon-shopping-cart-1"></i>
                      </router-link>
                  </el-menu-item>
              </el-menu>
          </el-header>
      </el-container>
      <router-view></router-view>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
    data(){
      return{
      }
    },
    computed:{
      ...mapGetters({
          cartTotal:'cartTotal'
      })
    }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: -8px;
    margin-left: -8px;
    margin-right: -8px;
}
</style>
