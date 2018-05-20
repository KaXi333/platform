<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center" class="shopde-box">
        <b-col cols="8" class="text-left shopConten">
          <h3>商家名称</h3>
          <p>简介，即简明扼要的介绍。是当事人全面而简洁地介绍情况的一种书面表达方式，它是应用写作学研简介，即简明扼要的介绍。是当事人全面而简洁地介绍情况的一种书面表达方式，它是应用写作学研究的一种日常应用文体。究的一种日常应用文体简介，即简明扼要的介绍。是当事人全面而简洁地介绍情况的一种书面表达方式，它是应用写作学研究的一种日常应用文体。。</p>
        </b-col>
        <b-col cols="4" class="" >
          <b-img class="shopImg" :src = "require('../common/images/store.png')" fluid />
        </b-col> 
      </b-row>
      <b-row>
        <b-col cols="12" class="recommend text-left">
          <p></p>
          <span>热门店铺</span>
        </b-col> 
      </b-row>
      <b-row>
        <b-col cols="4" sm="3" class="storeName">
          <b-img :src = "require('../common/images/store.png')" fluid />
          <p>店铺名</p>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <b-img :src = "require('../common/images/store.png')" fluid />
          <p>店铺名</p>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <b-img :src = "require('../common/images/store.png')" fluid />
          <p>店铺名</p>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <b-img :src = "require('../common/images/store.png')" fluid />
          <p>店铺名</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .shopde-box{
    padding:30px 15px;
  }
  .shopConten{
    color:#1b1b1b;
  }
  .shopConten h3{
    font-size: 24px;
  }
  .shopConten p{
    font-size: 16px;
    margin-top: 15PX;
    text-indent: 2em;
  }
   /* 手机移动端 */
@media (max-width: 576px) {
  .shopde-box{
    padding:15px 7px;
  }
  .shopConten h3{
    font-size: 16px;
  }
  .shopConten p{
    font-size: 12px;
    margin-top: 7PX;
  }
}
</style>
