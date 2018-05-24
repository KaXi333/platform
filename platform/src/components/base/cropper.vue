<template>
  <div style="height:100%">
  <div class="personalImg">
    <b-img  class="" :src = "imgs" fluid />
    <div v-if="!isShowZwt" class="addImg" >
      <div v-if="isShowCropper" class="cropper-box">
        <input class="addImgBtn" @change='add_img'  type="file" accept="image/png,image/jpg,image/gif">
        <p>点击跟换</p>
      </div>
    </div>
    <div v-if="isShowZwt" class="addImg" style="background:rgb(0,0,0,0);" >
      <div v-if="isShowCropper" class="cropper-box">
        <input class="addImgBtn" @change='add_img'  type="file" accept="image/png,image/jpg,image/gif">
      </div>
    </div>
  </div>
  <div v-if="!isShowCropper" class="cropperdiglog">
    <div class="cropperContent">
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
      <h3 class="cropperSureCss">
        <b-button variant = "secondary">取消</b-button>
        <b-button @click="cropperSureBtn" variant = "primary">确定</b-button>
      </h3>
    </div>
  </div>  
  </div>
</template>

<script>
import vueCropper from 'vue-cropper'
export default {
  components: {
    vueCropper
  },
  props:{
    //接收店铺图片
    shopImg:{
        type:String,
        default:''
    }
  },          
  data () {
    return {
      file:null,
      isShowZwt:false,
      isShowCropper:true,
      defaultshopImg:require('../../common/images/upload.png'),
      imgs:this.shopImg,
      example2: {
        img: this.imgs,
        info: true,
        size: 1,
        // outputType: 'jpeg',
        canScale: true,
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
  created() {
    this.isShowZwtFn()
  },
  methods:{
    isShowZwtFn(){
      console.log(this.shopImg,8)
      if(this.imgs==this.defaultshopImg){
        this.isShowZwt=true
      }
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
    cropperSureBtn(){
      this.$refs.cropper.getCropData((data) => {
        this.imgs = data
        this.isShowCropper=!this.isShowCropper
        this.isShowZwt=false
        this.$axios({
          method: 'post',
          url: 'member/uploadBase64',
          data: {
            upload:this.imgs
          }
        }).then(res=>{
          console.log(res);
          this.$emit('shopUponImg',res.data.data.key)
        })
        .catch(err=>{
          console.log(err)
        })
      }) 
    }
  },
  watch: {
    imgs: function(val){
      console.log(753);
    }
  }
}
</script>

<style scoped>
  .personalImg{
    position:relative;
    top:50%;
    transform:translateY(-50%);
  }
  .addImg{
    background:rgb(0,0,0,0.4);
    z-index: 1000;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    text-align: center;
  }
  .addImg p{
    color:#fff;
    font-size: 16px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
  .cropperdiglog{
    position: fixed;
    top: 0;
    left:0;
    z-index: 1000;
    width: 100%;height:100%;
  }
  .cropperContent{
    margin: 100px auto;
    width: 60%;
    height:60%;
    z-index: 10000;
    position: relative;
  }
  .cropperSureCss{
    position: absolute;
    bottom:0;
    right:0;
    width: 100%;
    background-color: #fff;
    margin-bottom: 0;
    text-align: right;
    padding:10px;
  }
  .cropperSureCss button{
    margin-right: 15px;
  }
 /* 手机移动端 */
@media (max-width: 576px) {
 .addImg p{
    font-size: 14px;
  }
}
</style>
