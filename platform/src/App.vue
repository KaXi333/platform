<template>
  <div id="app">
    <top-navbar></top-navbar>
    <router-view/>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import TopNavbar from '@/components/topNavbar'
import BottomInfo from '@/components/bottomInfo'

export default {
  name: 'App',
  components: {
    'top-navbar': TopNavbar,
    'bottom-info': BottomInfo
  }
}
</script>

<style>
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html{
  font-size: 12px;
}
</style>
