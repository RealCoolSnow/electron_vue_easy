<!--
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-05 21:05:38
 * @LastEditTime: 2020-09-17 15:52:04
-->
<template>
  <div class="home">
    <div>
      <span>{{$t('home')}}</span> |
      <a href="#" @click="goAbout">{{$t('about')}}</a>
    </div>
    <img src="../../assets/logo.jpg" class="img"/>
  </div>
</template>
<script>
export default {
  name: 'home',
  data: function () {
    return {
    }
  },
  components: {
  },
  created () {

  },
  methods: {
    goAbout () {
      this.$router.replace('/about')
    }
  }
}
</script>
<style type="text/less" lang="less">
@import "~@/styles/index";
.home {
  padding: 20px 20px;
  text-align: center;
  .img {
    width: 120px;
    height: 120px;
    margin-top: 20px;
  }
}
</style>
