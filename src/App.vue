<template>
  <div id="app">
    <router-view/>
    <!-- 底部菜单 -->
    <div class='maintabBar'><main-tab-bar></main-tab-bar></div>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
  export default {
    name: 'App',
    components:{
      MainTabBar
    },
    methods: {
      //
    },
    created:function () {
      // console.log(this.$store)
    }
  }
</script>

<style>
  .maintabBar{
    display:flex;
    bottom:0;
    left:0;
    z-index:9;
  }
</style>
