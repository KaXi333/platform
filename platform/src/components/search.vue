<template>
  <div>
    <div>
      <b-container class="classBigbox">
      <b-navbar toggleable="md" type="dark" variant="light" class="class-box">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <span class="classBtn">分类:</span>
          <b-collapse is-nav id="nav_collapse">
            <b-container>
              <b-row>
                <b-col cols="3" sm="2" lg="1" class="classItem-box classItem-active">
                  <span>不限类型</span>
                </b-col> 
                <b-col cols="3" sm="2" lg="1" class="classItem-box">
                  <span>服饰鞋包</span>
                </b-col>
                <b-col cols="3" sm="2" lg="1" class="classItem-box">
                  <span>家具用品</span>
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
                <b-col cols="3" sm="2" lg="1" class="classItem-box">
                  <span>珠宝/首饰</span>
                </b-col> 
              </b-row>
            </b-container>
          </b-collapse> 
        </b-navbar>
        </b-container>
    </div>
    <div class="showImg-box">
      <b-container>
        <b-row>
          <b-col cols="6" class="showImg">
            <b-img :src = "require('../common/images/ad1.png')" fluid />
          </b-col>
          <b-col cols="6" class="showImg">
            <b-img :src = "require('../common/images/ad2.png')" fluid />
          </b-col>  
        </b-row>
      </b-container>  
    </div>
    <div>
      <b-container>
        <b-row>
          <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一有一句话说出就是祸, 有一句话能点得着火有一句话说出就是祸, 有一句话能点得着火有一句话说出就是祸, 有一句话能点得着火句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="shop-box">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col> 
           <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col> 
           <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col>
          <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col>
          <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col>
          <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一句话能点得着火</p>
              </b-col> 
              <b-col cols="6" class="">
                <b-img class="header-img" :src = "require('../common/images/store.png')" fluid />
              </b-col> 
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    toshopDetailBtn(){
      this.$router.push('/shopDetail');
    }
  }
}
</script>

<style scoped>
  .shop-bgbox{
    padding-right: 0;
    margin-bottom: 15px;
  }
  .shop-bc{
    background-color: #f9f9f9;
    margin:0;
    padding: 12px 0;
    min-height: 139px;
  }
  .shop-box {
    text-align: left;
  }
  .shop-box span{
    font-size: 18px;
    color:#1b1b1b;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .shop-box p{
    color:#808080;
    font-size: 14px;
    margin: 0;
    margin-top: 5px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .showImg-box{
    margin-top:20px; 
    margin-bottom:35px;
  }
  .showImg{
    padding-right: 0;
  }
  
  .classBigbox{
    padding-right:0;
    padding-bottom:20px;
    border-bottom:1px solid #f2f2f2;
  }
  .classItem-box{
    color: #1b1b1b;
    font-size:12px; 
    padding:0 8px;
    height: 25px;
    margin-top: 10px;
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
  .shop-bgbox{
    margin-bottom: 8px;
  }
  .shop-bc{
    padding: 6px 0;
    min-height: 107px;
  }
  .shop-box span{
    font-size: 14px;
  }
  .shop-box p{
    font-size: 12px;
    margin-top: 3px;
  }
  .showImg-box{
    margin-top:10px; 
    margin-bottom:17px;
  }
  .classBigbox{
    padding:0 5px;
    padding-bottom:10px;
  }
  .class-box{
    background-color: #17a2b8!important;
  }
  .classBtn{
    color:#fff;
  }
  .classItem-box{
    color:#fff;
    font-size: 10px;
    height:20px;
    margin-top: 5px;
  }
  .classItem-box span{
    line-height: 20px;
  }
}
</style>
