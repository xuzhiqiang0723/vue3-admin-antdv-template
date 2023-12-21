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
    <a-button type="primary"><HomeOutlined />主色按钮</a-button>
    <a-pagination :total="500" />
    <a href="#">hello World</a>
  </a-config-provider>
</template>

<style scoped></style>
