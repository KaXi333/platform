<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box personalblock">
      <b-row align-h = "center" class="editShop-box">
        <b-col cols="12" class="text-center personalcenter-box editPic">
          <b-row align-h = "center" class="phonePersonal-text">
            <b-col cols="6" sm="4">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="personalcenter-box">
         <div class="personalimform">
            <b-row align-h = "center" class="phonePersonal-text">
              <b-col cols="6" sm="4" class="text-left">
                <h4>店铺名</h4>
                <b-form-input class="input-item peraonal-input" placeholder="请输入店铺名"></b-form-input>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sign-box personalblock1">
      <b-row align-h = "center" class="editShop-box">
        <b-col cols="12" class="text-left personalcenter-box">
          <div class="personalimform">
            <h4>店铺链接</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="12">
                <b-form-input class="input-item peraonal-input" placeholder="店铺链接"></b-form-input>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sign-box personalblock1">
      <b-row align-h = "center" class="editShop-box">
        <b-col cols="12" class="text-left personalcenter-box">
          <div class="personalimform">
            <h4>店铺类型</h4>
          </div>
        </b-col>
        <b-col cols="12" class="text-left personalcenter-box">
          <b-navbar toggleable="md" type="dark" variant="light" class="class-box">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <!-- <span class="classBtn">店铺类型</span> -->
              <b-collapse is-nav id="nav_collapse">
                <b-container>
                  <b-row class="">
                    <b-col cols="3" sm="2" lg="1" class="classItem-box classItem-active">
                      <span>服饰鞋包</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>家居用品</span>
                    </b-col>
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>家装家饰</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>美容护理</span>
                    </b-col>
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>母婴用品</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>3C数码</span>
                    </b-col>
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>珠宝/首饰</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>运动/户外</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>食品/保健</span>
                    </b-col>
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>玩乐/收藏</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>游戏/话费</span>
                    </b-col> 
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>汽车配件</span>
                    </b-col>
                    <b-col cols="3" sm="2" lg="1" class="classItem-box">
                      <span>书籍音像</span>
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse> 
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sign-box personalblock1">
      <b-row align-h = "center" class="editShop-box">
        <b-col cols="12" class="personalcenter-box">
         <div class="personalimform">
            <b-row align-h = "center" class="phonePersonal-text">
              <b-col cols="5" sm="3" class="classItem-box classItem-active">
                <span>保存</span>
              </b-col> 
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '../common/stylus/personal.css'
export default {
  data () {
    return {
      text:''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .editShop-box{
    padding: 30px 15px;
  }
  .editPic{
    margin-bottom: 30px;
  }
  .input-item{
    font-size: 16px;
  }
  .personalblock{
    margin-bottom:0;
  }
  .personalblock1{
    margin-top: 10px;
    margin-bottom: 0;
  }


  .class-box{
    background-color: #fff !important;
    padding-top: 15px;
    padding-left: 0;
  }
  .classItem-box{
    color: #1b1b1b;
    font-size:14px; 
    padding:0 8px;
    height: 40px;
    margin-right:30px;
    line-height: 40px;
    text-align:center;
  }
  .classItem-box:hover{
    background-color: #d33a31;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  .classItem-box span{
    line-height: 25px;
  }
  .classItem-active{
    background-color: #d33a31;
    border-radius: 4px;
    color: #fff;
  }
  .navbar-brand{
    color:#1b1b1b;
  }
  .classBtn{
    color: #1b1b1b;
    font-size:14px; 
    padding-right:8px;
  }
  /* 手机移动端 */
@media (max-width: 576px) {
   .editPic{
    margin-bottom: 15px;
  }
  .editShop-box{
    padding: 10px 6px;
  }
  .input-item{
    font-size: 14px;
  }
  .personalblock1{
    margin-top: 5px !important;
  }
  .sign-box{
    margin-bottom: 5px !important;
  }
  .classItem-box{
    font-size:12px; 
    padding:0 4px;
    height: 30px;
    margin-top: 5px;
    margin-right:0;
    line-height: 30px;
  }
  .class-box{
    background-color: #17a2b8 !important;
    padding-top: 0px;
  }
}
</style>
