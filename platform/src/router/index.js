import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import SignIn from '@/components/signIn/signIn'
import EditPassword from '@/components/signIn/editPassword'
import SignUp from '@/components/signUp/signUp'
import shopDetail from '@/components/shopDetail'
import personalSeller from '@/components/personalSeller'
import personal from '@/components/personal'
import shopEdit from '@/components/shopEdit'
import search from '@/components/search'
import changePhone from '@/components/changePhone'
import changeEmail from '@/components/changeEmail'
import changePassword from '@/components/changePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/editPassword',
      name: 'EditPassword',
      component: EditPassword
    },
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/personalSeller',
      name: 'personalSeller',
      component: personalSeller
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/shopEdit',
      name: 'shopEdit',
      component: shopEdit
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/changePhone',
      name: 'changePhone',
      component: changePhone
    },
    {
      path: '/changeEmail',
      name: 'changeEmail',
      component: changeEmail
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    }
  ]
})
