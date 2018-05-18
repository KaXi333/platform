<template>
  <div>
    <div class="slide-box">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="2000"
                  img-width="1024"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >
        <b-carousel-slide :img-src="require('../common/images/slideShow/banner1.png')">
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../common/images/slideShow/banner2.png')">
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../common/images/slideShow/banner3.png')">
        </b-carousel-slide> 
      </b-carousel>
    </div>
    <div>
      <b-container>
        <b-row>
          <b-col cols="12" class="recommend text-left">
            <p></p>
            <span>精选推荐</span>
          </b-col> 
        </b-row> 
        <b-row>
          <b-col cols="6" sm="4" class="shop-bgbox">
            <b-row align-v = "center" class="shop-bc">
              <b-col cols="6" class="shop-box">
                <span>店铺名</span>
                <p>有一句话说出就是祸, 有一有一句话说出就是祸, 有一句话能点得着火有一句话说出就是祸, 有一句话能点得着火有一句话说出就是祸, 有一句话能点得着火句话能点得着火</p>
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
      <b-container style="padding-right:0;padding-bottom:20px;border-bottom:1px solid #f2f2f2;">
      <b-navbar toggleable="md" type="dark" variant="light" style="padding:0 0 0 15px">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <span class="classBtn">分类:</span>
          <b-collapse is-nav id="nav_collapse">
            <!-- <b-navbar-nav>
              <b-nav-item href="#">不限类型</b-nav-item>
              <b-nav-item href="#">服饰鞋包</b-nav-item>
              <b-nav-item href="#">家具用品</b-nav-item>
              <b-nav-item href="#">家装家饰</b-nav-item>
              <b-nav-item href="#">美容护理</b-nav-item>
              <b-nav-item href="#">母婴用品</b-nav-item>
              <b-nav-item href="#">3C数码</b-nav-item>
              <b-nav-item href="#">运动/户外</b-nav-item>
              <b-nav-item href="#">食品/保健</b-nav-item>
              <b-nav-item href="#">玩乐/收藏</b-nav-item>
              <b-nav-item href="#">游戏/话费</b-nav-item>
              <b-nav-item href="#">汽车配件</b-nav-item>
              <b-nav-item href="#">书籍音像</b-nav-item>
              <b-nav-item href="#">珠宝/首饰</b-nav-item>
            </b-navbar-nav> -->
            <b-container>
              <b-row>
                <b-col cols="3" sm="1" class="classItem-box classItem-active">
                  <span>不限类型</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>服饰鞋包</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>家具用品</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>家装家饰</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>美容护理</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>母婴用品</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>3C数码</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>运动/户外</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>食品/保健</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>玩乐/收藏</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>游戏/话费</span>
                </b-col> 
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>汽车配件</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>书籍音像</span>
                </b-col>
                <b-col cols="3" sm="1" class="classItem-box">
                  <span>珠宝/首饰</span>
                </b-col> 
              </b-row>
            </b-container>
          </b-collapse> 
        </b-navbar>
        </b-container>
      </div>
      <div>
        <b-container>
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
          <b-row align-h = "center">
            <b-col cols="4" sm="2" class="">
              <div class="checkMore">查看更多</div>
            </b-col> 
          </b-row>
        </b-container>
      </div>
      <div>
      <b-container>
        <b-row>
          <b-col cols="4"sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
          <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
           <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
          <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
           <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
          <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
           <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
           <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
          </b-col>
          <b-col cols="4" sm="2" class="showImg storeName">
            <b-img :src = "require('../common/images/store.png')" fluid />
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
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
  .carousel-indicators li{
    width: 8px;
    height:8px;
    border-radius: 5px;
  }
  .recommend p{
    width: 4px;
    height:20px;
    background-color: #d33a31;
    line-height: 100%;
    margin:auto 0;
    float: left;
    margin-right: 10px;
    margin-top: 2px;
  }
  .recommend{
    margin-top:30px;
    margin-bottom: 15px;
  }
  .recommend span{
    float: left;
    font-size: 16px;
    color:#1b1b1b;
  }
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


  .classItem-box{
    color: #1b1b1b;
    font-size:14px; 
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

  .storeName{
    padding-right: 0;
    margin-bottom: 15px;
  }
  .storeName p{
    font-size: 20px;
    color: #1b1b1b;
    padding: 8px 0;
    margin:0;
    background-color: #f9f9f9;
  }
  .checkMore{
    border:1px solid #d33a31;
    border-radius: 4px;
    height:30px;
    line-height: 30px;
    color:#d33a31;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 40px;
  }
</style>
