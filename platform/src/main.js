// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './common/iconfont/iconfont.css'
import axios from 'axios'
import store from './vuex/store'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import './common/stylus/loginRes.styl'
import './common/stylus/common.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(ElementUI)
axios.defaults.baseURL='http://192.168.3.75:8000/home/api/v1';
Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
