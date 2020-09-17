<!--
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-05 21:05:37
 * @LastEditTime: 2020-09-17 15:35:46
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { checkoutLanguage } from '@/lang/'
export default {
  data: function () {
    return {
      checkoutLanguage: checkoutLanguage
    }
  },
  created () {

  },

  methods: {

  }
}
</script>
<style type="text/less" lang="less">
@import "~@/styles/index.less";
#app {
  width: 100%;
  height: 100%;
}
#lang {
  text-align: right;
}
</style>
