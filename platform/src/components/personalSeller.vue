<template>
  <div class="signUp-wrapper">       
    <b-container class="sign-box personalblock">
      <b-row align-h = "center" class="personal-box">
        <b-col cols="7" sm="8" lg="9" class="text-left personalcenter-box">
          <h3>账号信息</h3>
          <div class="personalimform">
            <h4>手机</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input v-model="shopSellerData.mobile" class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p @click="changePhoneBtn" class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>邮箱</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input v-model="shopSellerData.email" class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p @click="changeEmailBtn" class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>密码</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input v-model="shopSellerData.name" type="password" class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p @click="changePasswordBtn" class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="5" sm="4" lg="3" >
          <cropper @shopUponImg="headImgBackFn" :shopImg='shopImg'></cropper>
        </b-col>
      </b-row>
      <b-row align-h = "center" class="businessImform-box">
        <b-col cols="12" class="text-left personalcenter-box">
          <b-row align-h = "between" class="phonePersonal-text">
            <b-col cols="9" sm="6">
              <h3>商户信息</h3>
            </b-col>
            <b-col cols="3" sm="2" class="text-right">
              <p @click="saveSellerInfo" class="personal-saveBtn">保存</p>
            </b-col>
          </b-row>
          <div class="personalimform">
            <h4>商户名</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="12">
                <b-form-input v-model="shopSellerData.name" class="input-item peraonal-input" placeholder="请输入商户名称"></b-form-input>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>商户简介</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="12">
                <b-form-textarea class="textarea-box"
                   v-model="shopSellerData.description"
                   placeholder="请输入商户简介"
                   :rows="5"
                   :max-rows="5">
                </b-form-textarea>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sign-box personalblock1">
      <b-row align-h = "center" class="businessImform-box businessPadd">
        <b-col cols="12" class="text-left personalcenter-box">
          <b-row align-h = "between" class="phonePersonal-text">
            <b-col cols="10" sm="6">
              <b-row class="payAddress">
                <b-col cols="3" sm="3">
                  <h3>收款地址</h3>
                </b-col>
                <b-col cols="9" sm="9" style="padding-left:0 !important;">
                  <b-form-input class="input-item peraonal-input payInput" placeholder="注:必须填写或上传一个有效账号(二维码)"></b-form-input>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="2" sm="2" class="text-right">
              <p @click="saveAccountBtn" class="personal-saveBtn">保存</p>
            </b-col>
          </b-row>
          <div class="personalimform">
            <b-row class="phonePersonal-text">
              <b-col cols="5" sm="2" class="scaner-bigbox">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="scaner-box">
                    <h4>微信二维码</h4>
                  </b-col>
                  <b-col cols="12">
                    <cropper @shopUponImg="WeChatImgBackFn" :shopImg='ewmImg'></cropper>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="5" sm="2" class="scaner-bigbox">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="scaner-box">
                    <h4>支付宝二维码</h4>
                  </b-col>
                   <b-col cols="12">
                    <cropper @shopUponImg="AlipayImgBackFn" :shopImg='zfbImg'></cropper>
                  </b-col>  
                </b-row>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform account-box">
            <b-row align-h = "between" class="phonePersonal-text">
              <b-col cols="6" sm="6" class="">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="">
                    <h4>支付宝账号</h4>
                  </b-col>
                  <b-col cols="12">
                    <b-form-input v-model="shopSellerData.alipayAccount" class="input-item peraonal-input" placeholder="请输入账户"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6" sm="6" class="">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="">
                    <h4>银联卡账号</h4>
                  </b-col>
                  <b-col cols="12">
                    <b-form-input v-model="shopSellerData.unionpayAccount" class="input-item peraonal-input" placeholder="请输入账户"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sign-box personalblock1 shopAdmin-box">
      <b-row>
        <b-col cols="12" class="recommend text-left">
          <span>店铺管理</span>
        </b-col> 
      </b-row>
      <b-row>
        <b-col v-for="(merchantitem,index) in merchantList" :key="merchantitem.id" cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "merchantitem.thumb" fluid />
          </div>
          <p>{{merchantitem.name}}</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="toShopEdit(index)">编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="delShop(index)">删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName text-center">
          <div style="background:#f9f9f9;height:100%;">
            <h4 @click="addShopBtn" class="addShopCss"><span>添加店铺</span></h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '../common/stylus/personal.css'
import cropper from '../components/base/cropper'
export default {
  components: {
    cropper
  },
  data () {
    return {
      merchantList:'',
      shopSellerData:'',
      shopImg:require('../common/images/upload.png'),
      zfbImg:require('../common/images/upload.png'),
      ewmImg:require('../common/images/upload.png'),
      shopImgKey:'',//头像Key值
      ewmImgKey:'',
      zfbImgKey:'',
      cur_page:1
    }
  },
  created() {
    this.getSellerData();
    this.getData();
  },
  methods: {
    changePhoneBtn(){
      this.$router.push('/changePhone');
    },
    changeEmailBtn(){
      this.$router.push('/changeEmail');
    },
    changePasswordBtn(){
      this.$router.push('/changePassword');
    },
    //从子组件获取头像的imgUrl Key值
    headImgBackFn(key){
      this.shopImgKey=key
      console.log(this.shopImgKey)
    },
    //从子组件获取微信二维码的 Key值
    WeChatImgBackFn(key){
      this.ewmImgKey=key
      console.log(this.ewmImgKey)
    },
    //从子组件获取微信二维码的 Key值
    AlipayImgBackFn(key){
      this.zfbImgKey=key
      console.log(this.zfbImgKey)
    },
    //设置收款信息,商户账户,支付二维码
    saveAccountBtn(){
      this.$axios({
          method: 'post',
          url: 'member/setReceivable',
          data: {
            alipayThumb:this.zfbImgKey,
            wechatThumb:this.ewmImgKey,
            alipayAccount:this.shopSellerData.alipayAccount,
            unionpayAccount:this.shopSellerData.unionpayAccount
          }
      }).then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err)
      })
    },
    //修改商户基本信息
    saveSellerInfo(){
      this.$axios({
          method: 'post',
          url: 'member/updateBaseInfo',
          data: {
            name:this.shopSellerData.name,
            description:this.shopSellerData.description,
            picture:this.shopImgKey
          }
      }).then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err)
      })
    },
    //添加店铺
    addShopBtn(){
      this.$router.push({
        path:'shopEdit'
      });
    },
    //编辑店铺
    toShopEdit(index){
      this.$router.push({
        path:'shopEdit',
        name:'shopEdit',
        params:{
          shopEditData:this.merchantList[index]
        }
      });
    },
    //删除店铺
    delShop(index){
      this.$axios({
          method: 'post',
          url: 'site/destroy',
          data: {
            id:this.merchantList[index].id
          }
      }).then(res=>{
        console.log(res);
        this.getData();
      })
      .catch(err=>{
        console.log(err)
      })
    },
    // 获取当前商户店铺数据
    getData() {
        this.$axios({
            method: 'post',
            url: 'site/list',
            data: {
              type:'merchant',
              page: this.cur_page,
              limit:'7'
            }
        }).then(res=>{
          console.log(res);
          this.merchantList = res.data.data;
        })
        .catch(err=>{
          console.log(err)
        })
    },
    // 获取当前商户信息数据
    getSellerData() {
        this.$axios({
            method: 'post',
            url: 'member/info'
        }).then(res=>{
          console.log(123,res);
          this.shopSellerData=res.data.data
          if(this.shopSellerData.picture){console.log(999,res);
            this.shopImg=this.shopSellerData.picture
            console.log(this.shopImg) 
          }
          if(this.shopSellerData.alipayThumb){
            this.zfbImg=this.shopSellerData.alipayThumb
            console.log(this.zfbImg)
          }
          if(this.shopSellerData.wechatThumb){
            this.ewmImg=this.shopSellerData.wechatThumb
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .businessImform-box{
    padding: 10px 15px;
  }
  .personal-saveBtn{
    background:#d33a31;
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-bottom: 0;
    height:40px;
    line-height: 40px;
    border-radius: 4px;
  }
  .input-item{
    font-size: 16px;
  }
  .textarea-box{
    margin-top:20px;
    margin-bottom: 40px;
    font-size: 16px;
  }
  .personalblock{
    margin-bottom:0;
  }
  .personalblock1{
    margin-top: 10px;
    margin-bottom: 0;
  }
  .payAddress h3{
    margin-bottom: 0;
    line-height: 40px;
  }
  .payInput{
    margin:0 auto;
    border: none;
    background: #fff !important;
    font-size: 12PX !important;
    padding: 0;
    margin-bottom: 20px;

  }
  .businessPadd{
    padding: 30px 15px;
  }
  .scaner-bigbox{
    margin-right: 10px;
  }
  .scaner-box{
    margin-bottom: 15px;
  }
  .account-box{
    margin-top: 20px;
  }
  .shopAdmin-box{
    padding:0 30px;
    padding-bottom: 30px;
  }
  .shopEditBtn-box{
    padding: 0 15px;
    margin-top: 5px;
  }
  .shopEditBtn{
    font-size: 16px;
    color:#808080;
    background: #f9f9f9;
    height:30px;
    line-height: 30px;
  }
  .shopEditBtn span:hover{
    color:#1a1a1a;
  }
  .addShopCss{
    position:relative;
    top:50%;
    transform:translateY(-50%);
    width: 80%;
    height:80px;
    line-height: 80px;
    color:#d33a31;
    border:1px solid #d33a31;
    border-radius: 4px;
    margin:0 auto;
    font-size: 16px;
  }
  
  /* 手机移动端 */
@media (max-width: 576px) {
  .businessImform-box{
    padding: 5px 6px;
  }
  .textarea-box{
    margin-top:10px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  .payAddress{
    padding: 0 6px;
  }
 .payAddress h3{
    line-height: 30px;
    font-size: 14px;
  }
  .payInput{
    font-size: 10PX;
    margin-bottom: 10px;
  }
  .personal-saveBtn{
    font-size: 14px;
    line-height: 30px;
    height:30px;
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
  .scaner-bigbox{
    margin-right: 6px;
  }
  .scaner-box{
    margin-bottom: 8px;
  }
  .businessPadd{
    padding: 10px 8px;
  }
  .account-box{
    margin-top: 10px;
  }
  .shopAdmin-box{
    padding:0 15px;
    padding-bottom: 15px;
  }
  .shopEditBtn{
    font-size: 14px;
    height:20px;
    line-height: 20px;
  }
   .addShopCss{
    height:40px;
    line-height: 40px;
    font-size: 12px;
  }
}
</style>
