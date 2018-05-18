<template>
  <div >
    <b-container class="bv-example-row">
      <b-row align-v = "center" class="header-box">
          <b-col cols="9" sm="4" class="text-left">
            <b-img class="header-img" :src = "require('../common/images/logo.png')" fluid /> 
          </b-col>
          <b-col v-if="!isShowSearch" cols="0" sm="6">
            <i class="iconfont icon-sousuo"></i>
            <b-form-input placeholder="商品" ></b-form-input>
          </b-col>
          <!-- <b-col v-if="!isShowUser" cols="6" sm="2">
            <b-dropdown id="ddown1" text="用户管理" class="m-md-2">
              <b-dropdown-item>钱包</b-dropdown-item>
              <b-dropdown-item>退出</b-dropdown-item>
            </b-dropdown>
          </b-col> -->
          <b-col class="sigInUp text-right" v-if="!isShowUser" cols="3" sm="2">
            <a >钱包</a>
            <a style="color:#d33a31">退出</a>  
          </b-col>
          <b-col class="sigInUp" v-if="isShowUser" cols="3" sm="2">
            <a @click="toLogin">登录</a>
            <a @click="toRegister" style="color:#d33a31">注册</a>  
          </b-col>
          <b-col v-if="isShowSearch" cols="12" sm="6" style="margin-top:10px;">
            <i class="iconfont icon-sousuo"></i>
            <b-form-input placeholder="商品" ></b-form-input>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {ShowDeviseFn} from '../common/util/util'
export default {
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      isShowSearch:false,
      isShowUser:true
    }
  },
   mounted () {
    //获取浏览器窗口大小
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.documentElement.clientWidth
            this.screenWidth = window.screenWidth
        })()
    }
    //控制isShowDevise显示隐藏
    this.isShowSearch=ShowDeviseFn(this.screenWidth,this.isShowDevise)
  },
  watch: {
    //监听浏览器窗口大小
    screenWidth (val) {
        this.screenWidth = val
        this.isShowSearch=ShowDeviseFn(this.screenWidth,this.isShowDevise)
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/sign_in');
    },
    toRegister(){
       this.$router.push('/sign_up');
    }
  }
}
</script>

<style scoped>
 .container{
    margin:0 auto;
    padding: 0;
 }
 .header-box{
  margin:0;
  padding: 8px 0;
 }
 .form-control{
   border-radius:2rem;  
 }
 .icon-sousuo{
  position: absolute;
  left:25px;
  top:50%;
  transform: translateY(-50%);
 }
 .form-control{
  padding-left: 40px;
 }
 .sigInUp{
  padding: 0;
 }
 .sigInUp a{
  margin-right: 5px;
  font-size: 14px;
  color:#1a1a1a;
 }
</style>
