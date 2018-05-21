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
                <p @click="changePhoneBtn" class="changecont">修改</p>
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
                <p @click="changeEmailBtn" class="changecont">修改</p>
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
                <p @click="changePasswordBtn" class="changecont">修改</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4" class="" >
          <div class="personalImg">
            <b-img   class="" :src = "require('../common/images/store.png')" fluid />
            <div class="addImg" ><p>点击跟换</p></div>
          </div>
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
     changePhoneBtn(){
      this.$router.push({
        path: 'changePhone',   
        name: 'changePhone',  
        params: {   
            pathUrl: 'personal',  
        }  
      });
    },
    changeEmailBtn(){
      this.$router.push({
        path: 'changeEmail',   
        name: 'changeEmail',  
        params: {   
            pathUrl: 'personal',  
        }  
      });
    },
    changePasswordBtn(){
      this.$router.push({
        path: 'changePassword',   
        name: 'changePassword',  
        params: {   
            pathUrl: 'personal',  
        }  
      });
    }
  }
}
</script>

<style scoped>
  
</style>
