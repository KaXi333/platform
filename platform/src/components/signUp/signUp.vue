<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="7" class="sign-input">
          <h3>注册</h3>
          <div class="input-area">
            <b-form @submit="onSignUp">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="手机号码" v-model="user.email">
                </b-form-input>
              </div>
              <div class="form-group form-group1" style="margin-bottom:0;">
                <b-row class="code-bigbox">
                  <b-col cols="8" class="" >
                    <b-form-input class="input-item" required placeholder="验证码">
                    </b-form-input>
                  </b-col>
                  <b-col cols="4" class="phoneCode">
                    <p>获取验证码</p>
                  </b-col> 
                </b-row>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="密码" v-model="user.password">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="确认密码" v-model="user.passwordConfirm">
                </b-form-input>
              </div>
              <input type="submit" name="commit" value="注 册" class="signBtn" data-disable-with="注 册">
            </b-form>
          </div>
          <div class="links-area">
            <span class="help-term-content"> 注册即表示同意 <a target="_blank" href="/terms_of_service">使用条款</a> </span>
            <hr>
            <span class="new-registration-link">已经有帐号？</span><router-link to="/sign_in">登录</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from '../../api/index'
import {ShowDeviseFn} from '../../common/util/util'  

export default {
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      isShowDevise:false,
      user: {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  mounted () {
    //获取浏览器窗口大小
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.documentElement.clientWidth
            this.screenWidth = window.screenWidth
        })()
    }
    //控制isShowDevise显示隐藏
    this.isShowDevise=ShowDeviseFn(this.screenWidth,this.isShowDevise)
  },
  watch: {
    //监听浏览器窗口大小
    screenWidth (val) {
        this.screenWidth = val
        this.isShowDevise=ShowDeviseFn(this.screenWidth,this.isShowDevise)
    }
  },
  methods: {
    onSignUp (evt) {
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
  
</style>
