<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="7" class="sign-input">
          <div v-if="!isShowPassword">
            <h3>找回密码</h3>
            <div class="input-area">
              <b-form>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="手机号" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="8" class="">
                      <b-form-input class="input-item" required placeholder="验证码">
                      </b-form-input>
                    </b-col>
                    <b-col cols="4" class="phoneCode">
                      <p>获取验证码</p>
                    </b-col> 
                  </b-row>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="6" class="phoneCode">
                      <p @click="nextStupBtn">下一步</p>
                    </b-col>
                    <b-col cols="6" class="phoneCode changeBackBtn">
                      <p @click="loginBackBtn">返回</p>
                    </b-col> 
                  </b-row>
                </div>
              </b-form>
            </div>
          </div>
          <div v-if="isShowPassword">
            <h3>设置密码</h3>
            <div class="input-area">
              <b-form>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="设置密码" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="确认密码" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="6" class="phoneCode">
                      <p @click="nextStupSureBtn">确认</p>
                    </b-col>
                    <b-col cols="6" class="phoneCode changeBackBtn">
                      <p @click="passwordBackBtn">返回</p>
                    </b-col> 
                  </b-row>
                </div>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isShowPassword:false,
      chooseLoginNmae:"快捷登录",
      user: {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    loginBackBtn(){
      this.$router.push('/sign_in')
    },
    nextStupBtn(){
      this.isShowPassword=!this.isShowPassword
    },
    passwordBackBtn(){
      this.isShowPassword=!this.isShowPassword
    },
    nextStupSureBtn(){

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
