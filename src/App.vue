<script setup>
const theme = {
  token: {
    colorPrimary: '#e15536',
  },
}
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
</script>

<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped></style>
