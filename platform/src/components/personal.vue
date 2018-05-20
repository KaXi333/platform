<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center" class="personal-box">
        <b-col cols="8" class="text-left personalcenter-box">
          <h3>账号信息</h3>
          <div class="personalimform">
            <h4>手机</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>邮箱</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
          <div class="personalimform">
            <h4>密码</h4>
            <b-row class="phonePersonal-text">
              <b-col cols="9" sm="6">
                <b-form-input class="input-item peraonal-input" disabled></b-form-input>
              </b-col>
              <b-col cols="3" sm="2">
                <p class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4" class="" >
          <b-img class="personalImg" :src = "require('../common/images/store.png')" fluid />
        </b-col> 
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import '../common/stylus/personal.css'
export default {
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  
</style>
