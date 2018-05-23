<template>
  <div >
    <b-container class="bv-example-row">
      <b-row align-v = "center" class="header-box">
          <b-col cols="7" sm="4" class="text-center">
            <b-img @click="toHmoe" class="header-img" :src = "require('../common/images/logo.png')" fluid /> 
          </b-col>
          <b-col v-if="!isShowSearch" cols="0" sm="6">
            <i @click="searchBtn" class="iconfont icon-sousuo"></i>
            <b-form-input placeholder="商品" ></b-form-input>
          </b-col>
          <b-col class="sigInUp text-right" v-if="!isShowuserFn" cols="5" sm="2">
            <a >钱包</a>
            <a @click="topersonCenbtn">个人中心</a>
            <a style="color:#d33a31" @click="loginOutFn">退出</a>  
          </b-col>
          <b-col class="sigInUp" v-if="isShowuserFn" cols="5" sm="2">
            <a @click="toLogin">登录</a>
            <a @click="toRegister" style="color:#d33a31">注册</a>  
          </b-col>
          <b-col v-if="isShowSearch" cols="12" sm="6" style="margin-top:10px;">
            <i @click="searchBtn" class="iconfont icon-sousuo"></i>
            <b-form-input placeholder="商品" ></b-form-input>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import store from '@/vuex/store'
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
  computed:{
    //判断用户是否登录状态
    isShowuserFn(){
      if(store.state.token){
        this.isShowUser=false
      }else{
        this.isShowUser=true
      }
      return this.isShowUser
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/sign_in');
    },
    toRegister(){
      this.$router.push('/sign_up');
    },
    toHmoe(){
      this.$router.push('/');
    },
    topersonCenbtn(){
      if(store.state.isMerchant==2){
        this.$router.push('/personal');
      }else if(store.state.isMerchant==1){
        this.$router.push('/personalSeller');
      }
    },
    searchBtn(){
      this.$router.push('/search');
    },
    //退出登录
    loginOutFn(){
      this.$store.commit('removetoken');//清楚token
      this.$store.commit('removeMerchant');//清除isMerchant
      this.$router.push('/sign_in');
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
  padding: 15px 0;
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
 /* 手机移动端 */
@media (max-width: 576px) {
  .header-box{
    padding: 6px 0;
  }
}
@media (max-width: 340px) {
  .sigInUp a{
    margin-right: 3px;
    font-size: 12px;
  }
}
</style>
