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
      <div>
        <b-container>
          <b-row>
            <b-col cols="12" class="recommend text-left">
              <p></p>
              <span>热门店铺</span>
            </b-col> 
          </b-row>
          <b-row>
            <b-col v-for="(siteitem,index) in siteList" :key="siteitem.id" cols="4" sm="3" class="storeName" @click="toshopDetailBtn(index)">
              <div class="storeName-bc">
                <b-img :src = "siteitem.thumb" fluid />
              </div>
              <p>{{siteitem.name}}</p>
            </b-col>
         
          </b-row>
          <b-row align-h = "center">
            <b-col cols="3" sm="2" class="">
              <div class="checkMore">查看更多</div>
            </b-col> 
          </b-row>
        </b-container>
      </div>
      <div>
      <b-container>
        <b-row>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
          </b-col>
          <b-col cols="4"sm="2" class="showImg storeName">
            <div class="storeName-bc">
              <b-img :src = "require('../common/images/store.png')" fluid />
            </div>
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
      sliding: null,
      cur_page:1,
      siteList:''
    }
  },
  created() {
      this.getData();
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    // 进入店铺详情页面
    toshopDetailBtn(index){
      this.$router.push({
        path:'shopDetail',
        name:'shopDetail',
        params:{
          shopDetailIdData:this.siteList[index].id
        }
      });
    },
    // 获取店铺数据
    getData() {
        this.$axios({
            method: 'post',
            url: 'site/list',
            data: {
              type:'all',
              page: this.cur_page,
              limit:'7'
            }
        }).then(res=>{
          console.log(res);
          this.siteList = res.data.data;
        })
        .catch(err=>{
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
  .carousel-indicators li{
    width: 8px;
    height:8px;
    border-radius: 5px;
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
  .checkMore{
    border-radius: 4px;
    height:20px;
    line-height: 18px;
    font-size: 10px;
    margin-top: 5px;
    margin-bottom: 13px;
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
