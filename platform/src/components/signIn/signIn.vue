<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="7" class="sign-input">
          <div v-if="!isShowLoginWay">
            <h3>登录</h3>
            <div class="input-area">
              <b-form @submit="onSignIn">
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="手机号码" v-model="user.phone">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-form-input class="input-item" required type="password" placeholder="密码" v-model="user.password">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="8" class="">
                      <b-form-input class="input-item" required placeholder="验证码" v-model="user.code">
                      </b-form-input>
                    </b-col>
                    <b-col cols="4" class="code-box">
                      <div class="code" @click="refreshCode">
                        <identify :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></identify>
                      </div>
                    </b-col> 
                  </b-row>
                </div>
                <input type="submit" name="commit" value="登 录" class="signBtn" data-disable-with="登 录">
              </b-form>
            </div>
          </div>
          <div v-if="isShowLoginWay">
            <h3>快捷登录</h3>
            <div class="input-area">
              <b-form @submit="onSignIn">
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="手机号码" v-model="user.phone">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="8" class="">
                      <b-form-input class="input-item" required placeholder="验证码" v-model="user.code">
                      </b-form-input>
                    </b-col>
                    <b-col cols="4" class="phoneCode">
                      <p>获取验证码</p>
                    </b-col> 
                  </b-row>
                </div>
                <input type="submit" name="commit" value="登 录" class="signBtn" data-disable-with="登 录">
              </b-form>
            </div>
          </div>
          <!-- <div class="fastLogin" @click="chooseLginBtn">{{chooseLogin}}</div> -->
          <div class="links-area">
            <span class="new-password-link" @click="toEdPassword"><a>忘记密码</a></span>
            <hr>
            <span class="new-registration-link"> 还没有帐号？</span><router-link to="/sign_up">注册</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import identify from '../base/identify'
import store from '@/vuex/store'
export default {
  components:{
    identify
  },
  data () {
    return {
      isShowLoginWay:false,
      chooseLoginNmae:"快捷登录",
      identifyCodes:"1234567890",
      identifyCode:'',
      identifyCodevalue:"",
      contentWidth:120,
      contentHeight:50,

      user: {
        phone: '',
        password: '',
        code:''
      }
    }
  },
  mounted(){
    this.identifyCode="",
    this.makeCode(this.identifyCodes,4)
  },
  computed: {
    chooseLogin: function () {
      if(this.isShowLoginWay){
        this.chooseLoginNmae="其他登录方式>" 
      }else{
        this.chooseLoginNmae="快捷登录>"
      }
      return this.chooseLoginNmae
    }
  },
  methods: {
    // 验证码
    randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode(){
      this.identifyCode="",
      this.makeCode(this.identifyCodes,4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode)
    },
    // 选择登录方式
    chooseLginBtn(){
      this.isShowLoginWay=!this.isShowLoginWay  
    },
    // 忘记密码
    toEdPassword(){
      this.$router.push('/editPassword');
    },
    // 登录
    onSignIn (evt) {
      evt.preventDefault()
      console.log(this.user.code)
      if(this.user.code!=this.identifyCode){
        alert('验证码错误')
      }else{
        this.$axios({
           method: 'post',
           url: '/oauth',
           data: {
              mobile: this.user.phone,
              password: this.user.password
           }
        }).then(res=>{
        if(res.data.code === 0){
          console.log(res)
          this.$router.push('/');
          this.$store.commit('changetoken',res.data.data.token);
          this.$store.commit('changeMerchant',res.data.data.isMerchant);
        }else{
          alert('请输入正确的手机和密码')
        } 
        })
        .catch(err=>{
         console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
      .input-area
        form
          .form-group
            margin-bottom 15px
            .input-item
              height 50px
              margin-bottom 30px
          .signBtn
            box-shadow 0 2px 4px 0 rgba(69,146,69,0.5)
            border-radius 4px
            background-color #43cb83
            width 100%
            font-size 16px
            color #fff
            outline none
      .fastLogin
        font-size 16px
        margin-top 15px       
      .links-area
        text-align center
        .new-password-link
          display block
          margin 50px auto 10px auto
          a
            color #9B9B9B
          a:hover
              color #43CB83
              box-shadow none
        .new-registration-link
          color #9B9B9B
        a
          color #43CB83
</style>
