<template>
  <footer>
    <div class="footer-container">
      <b-row> 
        <b-col cols="12" class="text-center footer-link">
          <span><a href="">关于</a></span>|
          <span><a href="">客户服务</a></span>|
          <span><a href="">服务条款</a></span>|
          <span><a href="">网站导航</a></span>|
          <span><a href="">意见反馈</a></span>
        </b-col > 
      </b-row>
      <b-row> 
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
  margin-top: 80px;
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
</style>
