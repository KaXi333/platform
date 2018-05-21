<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box personalblock">
      <b-row align-h = "center" class="personal-box">
        <b-col cols="8" class="text-left personalcenter-box">
          <h3>账号信息</h3>
          <div class="personalimform">
            <h4>手机</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
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
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
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
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p @click="changePasswordBtn" class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4" class="" >
          <div class="personalImg">
            <b-img   class="" :src = "imgs" fluid />
            <div class="addImg" >
              <div v-if="isShowCropper" class="cropper-box">
                <input class="addImgBtn" @change='add_img'  type="file" accept="image/png,image/jpg,image/gif">
                <p>点击跟换</p>
              </div>
              <div v-if="!isShowCropper" class="cropper-box">
              <vueCropper
                ref="cropper"
                :img="imgs"
                :outputSize="example2.size"
                :outputType="example2.outputType"
                :info="example2.info"
                :canScale="example2.canScale"
                :autoCrop="example2.autoCrop"
                :autoCropWidth="example2.autoCropWidth"
                :autoCropHeight="example2.autoCropHeight"
                :fixed="example2.fixed"
                :fixedNumber="example2.fixedNumber"
              ></vueCropper>
              </div>
            </div>
          </div>
        </b-col> 
      </b-row>
      <b-row align-h = "center" class="businessImform-box">
        <b-col cols="12" class="text-left personalcenter-box">
          <b-row align-h = "between" class="phonePersonal-text">
            <b-col cols="9" sm="6">
              <h3>商户信息</h3>
            </b-col>
            <b-col cols="3" sm="2" class="text-right">
              <p @click="clipImgBtn" class="personal-saveBtn">保存</p>
            </b-col>
          </b-row>
          <div class="personalimform">
            <h4>商户名</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="12">
                <b-form-input class="input-item peraonal-input" placeholder="请输入商户名称"></b-form-input>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>商户简介</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="12">
                <b-form-textarea class="textarea-box"
                   v-model="text"
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
              <p class="personal-saveBtn">保存</p>
            </b-col>
          </b-row>
          <div class="personalimform">
            <b-row class="phonePersonal-text">
              <b-col cols="4" sm="2" class="scaner-bigbox">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="scaner-box">
                    <h4>微信二维码</h4>
                  </b-col>
                  <b-col cols="12">
                    <b-img class="personalImg" :src = "require('../common/images/upload.png')" fluid />
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="4" sm="2" class="scaner-bigbox">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="scaner-box">
                    <h4>支付宝二维码</h4>
                  </b-col>
                   <b-col cols="12">
                    <b-img class="personalImg" :src = "require('../common/images/upload.png')" fluid />
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
                    <b-form-input class="input-item peraonal-input" placeholder="请输入商户名称"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6" sm="6" class="">
                <b-row class="phonePersonal-text">
                  <b-col cols="12" class="">
                    <h4>银联卡账号</h4>
                  </b-col>
                  <b-col cols="12">
                    <b-form-input class="input-item peraonal-input" placeholder="请输入商户名称"></b-form-input>
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
        <b-col cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </div>
          <p>店铺名</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="toShopEdit">编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span>删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </div>
          <p>店铺名</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="toShopEdit">编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span>删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </div>
          <p>店铺名</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="toShopEdit">编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span>删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </div>
          <p>店铺名</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span @click="toShopEdit">编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span>删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName">
          <div class="storeName-bc">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </div>
          <p>店铺名</p>
          <b-row class="shopEditBtn-box">
            <b-col cols="6" class="shopEditBtn text-left">
              <span>编辑</span>
            </b-col>
            <b-col cols="6" class="shopEditBtn text-left">
              <span>删除</span>
            </b-col>  
          </b-row>
        </b-col>
        <b-col cols="4" sm="3" class="storeName text-center">
          <div style="background:#f9f9f9;height:100%;">
            <h4 class="addShopCss"><span>添加店铺</span></h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '../common/stylus/personal.css'
import vueCropper from 'vue-cropper'
export default {
  components: {
    vueCropper
  },
  data () {
    return {
      text:'',
      file:null,
      isShowCropper:true,
      imgs:require('../common/images/store.png'),
      example2: {
        img: this.imgs,
        info: true,
        size: 1,
        // outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 300,
        autoCropHeight: 300,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      }
    }
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
    toShopEdit(){
      this.$router.push('/shopEdit');
    },
    add_img(event){
      var img1=event.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(event.target.value)) {
         alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
         return false
       }
      var reader =new FileReader();
      reader.readAsDataURL(img1);
      var that=this;
      reader.onloadend=function(){
          that.imgs=reader.result
          that.isShowCropper=!that.isShowCropper
      }         
    },
    clipImgBtn(){
      this.$refs.cropper.getCropData((data) => {
        this.imgs = data
        this.isShowCropper=!this.isShowCropper
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
  .addImgBtn{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 99999;
    opacity: 0;
  }
  .cropper-box{
    width: 100%;
    height:100%;
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
