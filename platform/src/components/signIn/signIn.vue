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
                  <b-form-input class="input-item" required placeholder="手机号码" v-model="user.email">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="密码" v-model="user.password">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row>
                    <b-col cols="8" class="">
                      <b-form-input class="input-item" required placeholder="验证码">
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
                  <b-form-input class="input-item" required placeholder="手机号码" v-model="user.email">
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row style="padding-right:0;margin-right:0">
                    <b-col cols="9" class="">
                      <b-form-input class="input-item" required placeholder="验证码">
                      </b-form-input>
                    </b-col>
                    <b-col cols="3" class="phoneCode">
                        获取验证码
                    </b-col> 
                  </b-row>
                </div>
                <input type="submit" name="commit" value="登 录" class="signBtn" data-disable-with="登 录">
              </b-form>
            </div>
          </div>
          <div class="fastLogin" @click="chooseLginBtn">{{chooseLoginNmae}}</div>
          <div class="links-area">
            <span class="new-password-link"><a href="#">忘记密码</a></span>
            <hr>
            <span class="new-registration-link"> 还没有帐号？</span><router-link to="/sign_up">注册</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '../../common/stylus/loginRes.styl'
import api from '../../api/index'
import identify from '../base/identify'

export default {
  components:{
    identify
  },
  data () {
    return {
      isShowLoginWay:true,
      chooseLoginNmae:"快捷登录",
      identifyCodes:"1234567890",
      identifyCode:'',
      identifyCodevalue:"",
      contentWidth:120,
      contentHeight:50,

      user: {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  mounted(){
    this.identifyCode="",
    this.makeCode(this.identifyCodes,4)
  },
  methods: {
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
    chooseLginBtn(){
      this.isShowLoginWay=!this.isShowLoginWay
      if(this.isShowLoginWay){
        this.chooseLoginNmae="其他登录方式>" 
      }else{
        this.chooseLoginNmae="快捷登录>"
      }
      
    },
    onSignIn (evt) {
      evt.preventDefault()
      api.signUp(this.user).then((res) => {
        if (res.data.code === 200) {
          window.location = '/'
        } else {
          alert('请输入正确的邮箱和密码')
        }
      })
        .catch(function (error) {
          console.log(error)
        })
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
            height 50px
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
          margin 100px auto 10px auto
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
