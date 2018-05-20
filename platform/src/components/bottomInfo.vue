<template>
  <footer>
    <div class="footer-container">
      <b-row style="margin:0"> 
        <b-col cols="12" class="text-center footer-link">
          <span><a href="">关于</a></span>|
          <span><a href="">客户服务</a></span>|
          <span><a href="">服务条款</a></span>|
          <span><a href="">网站导航</a></span>|
          <span><a href="">意见反馈</a></span>
        </b-col > 
      </b-row>
      <b-row style="margin:0"> 
        <b-col cols="12" class="text-center copyright">
          <span>XXX公司版权所有@1997-2018 XXX科技有限公司运营:粤网文[2018] 0415-135号</span>|
        </b-col> 
      </b-row>  
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.footer-container{
  padding: 20px 0;
  padding-top: 80px;
  background-color: #f9f9f9;
}
.footer-link{
  font-size: 14px;
  margin-bottom: 16px;
}
.footer-link span a{
  color:#808080;
}
.copyright{
  font-size: 14px;
  color:#808080;
}
 /* 手机移动端 */
@media (max-width: 576px) {
  .footer-container{
    padding: 10px 0;
    padding-top: 40px;
  }
  .footer-link{
    font-size: 10px;
    margin-bottom: 8px;
  }
  .copyright{
    font-size: 10px;
  }
}
</style>
