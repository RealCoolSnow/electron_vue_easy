<!--
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-05 21:05:38
 * @LastEditTime: 2020-09-17 15:51:50
-->
<template>
  <div class="about">
    <div>
      <a href="#" @click="goHome">{{$t('home')}}</a> |
      <span>{{$t('about')}}</span>
    </div>
    <div>
      this is about page.
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data: function () {
    return {
    }
  },
  components: {
  },
  created () {

  },
  methods: {
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>
<style type="text/less" lang="less">
@import "~@/styles/index";
.about {
  padding: 20px 20px;
  text-align: center;
}
</style>
