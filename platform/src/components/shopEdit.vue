<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box personalblock">
      <b-row align-h = "center" class="editShop-box">
        <b-col cols="12" class="text-center personalcenter-box editPic">
          <b-row align-h = "center" class="phonePersonal-text">
            <b-col cols="6" sm="4">
              <cropper :shopImg='shopImg'></cropper>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="personalcenter-box">
         <div class="personalimform">
            <b-row align-h = "center" class="phonePersonal-text">
              <b-col cols="6" sm="4" class="text-left">
                <h4>店铺名</h4>
                <b-form-input v-model="shopEditData.name" class="input-item peraonal-input" placeholder="请输入店铺名">
                </b-form-input>
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
                <b-form-input v-model="shopEditData.link" class="input-item peraonal-input" placeholder="店铺链接">
                </b-form-input>
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
            <h4 class="classShopTit">店铺类型</h4>
          </div>
        </b-col>
        <b-col cols="12" class="text-left personalcenter-box">
          <b-navbar toggleable="md" type="dark" variant="light" class="class-box">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <span class="classBtn">店铺类型</span>
              <b-collapse is-nav id="nav_collapse">
                <b-container style="margin:0">
                  <b-row class="">
                    <b-col @click="chooseShopClasBtn(index,shopClassItem.id)" v-for="(shopClassItem,index) in shopClassData" :key="shopClassItem.id" cols="3" sm="2"  lg="2" class="classItem-box" :class="{classItem_active:isactiveData[index].isactive}">
                      <span>{{shopClassItem.name}}</span>
                    </b-col> 
                   <!--  <b-col cols="3" sm="2" lg="1" class="classItem-box">
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
                    </b-col> -->
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
              <b-col @click="saveShopEditBtn" cols="5" sm="3" class="classItem-box classItem_active">
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
import cropper from '../components/base/cropper'
export default {
  components: {
    cropper
  },
  data () {
    return {
      text:'',
      isactiveData:[
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false},
          {isactive:false}
      ],
      chooseClassData:[],
      shopImg:require('../common/images/upload.png'),
      shopEditData:{
        name: '' ,
        link: '',
      },
      shopClassData:''
    }
  },
  created() {
    this.getParams();
    this.getShopClass();
  },
  methods: {
    chooseShopClasBtn(index,chooseCont){
      this.isactiveData[index].isactive=!this.isactiveData[index].isactive
      if(this.isactiveData[index].isactive){
        this.chooseClassData.push(chooseCont)
        console.log(this.chooseClassData)
      }else{
        this.chooseClassData.splice(index,1)
        console.log(index,this.chooseClassData)
      }
    },
    //保存店铺
    saveShopEditBtn(){
      this.$axios({
          method: 'post',
          url: 'site/create',
          data: {
            name:this.shopEditData.name,
            thumb: this.shopImg,
            link:this.shopEditData.link,
            category:this.chooseClassData
          }
      }).then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getParams () {
      // 取到路由带过来的参数 
      let routerParams = this.$route.params.shopEditData
      // 将数据放在当前组件的数据内
      if(routerParams){
        this.shopEditData = routerParams
        this.chooseClassData=this.shopEditData.categoryIds
        console.log(this.chooseClassData,111)
      }
    },
    //获取店铺类型数据
    getShopClass() {
        this.$axios({
            method: 'post',
            url: 'category/list'
        }).then(res=>{
          console.log(res);
          this.shopClassData = res.data.data;
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },
  watch: {
  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件
    '$route': 'getParams'
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
    padding-bottom: 0;
  }
  .classItem-box{
    color: #1b1b1b;
    font-size:14px; 
    padding:0 8px;
    height: 40px;
    margin-right:25px;
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
  .classItem_active{
    background-color: #d33a31;
    border-radius: 4px;
    color: #fff;
  }
  .navbar-brand{
    color:#1b1b1b;
  }
  .classBtn{
    font-size:0px; 
    opacity:0;
  }
  /* 小屏幕 */
  @media (max-width: 1050px) {
  .classItem-box{
    font-size:13px; 
  }
}
@media (max-width: 992px) {
  .classItem-box{
    margin-right: 10px;
  }
}
@media (max-width: 768px) {
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
  .classBtn{
    color:#fff;
    opacity:1;
    font-size:12px;
  }
  .classShopTit{
    font-size:0px; 
    opacity:0;
  }
}
</style>
