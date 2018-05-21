<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row align-h = "center">
        <b-col md="7" class="sign-input">
          <div>
            <h3>修改密码</h3>
            <div class="input-area">
              <b-form>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="原密码" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="新密码" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-form-input class="input-item" required placeholder="确认密码" >
                  </b-form-input>
                </div>
                <div class="form-group">
                  <b-row class="code-bigbox">
                    <b-col cols="6" class="phoneCode">
                      <p>确定</p>
                    </b-col>
                    <b-col cols="6" class="phoneCode changeBackBtn">
                      <p @click="personalBackBtn">返回</p>
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
    }
  },
  methods: {
    personalBackBtn(){
      if(this.$route.params.pathUrl=='personal'){
        this.$router.push('/personal')
      }else{
        this.$router.push('/personalSeller')
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
     
</style>
