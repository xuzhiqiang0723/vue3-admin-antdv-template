<script setup>
import AppSideBar from './components/AppSideBar.vue'
</script>

<template>
  <a-layout has-sider class="layout">
    <!-- 侧边栏 -->
    <AppSideBar />
    <a-layout class="main">
      <!-- 页头 -->
      <div>页头</div>
      <!-- 主体 -->
      <a-layout-content class="content">
        <a-button v-permission="['admin']">admin删除</a-button>
        <a-button v-permission="['user']">user删除</a-button>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
      </a-layout-content>
      <!-- 页脚 -->
      <div>页脚</div>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  background-color: #ccc;
}

.main {
  margin-left: 200px;
  background-color: #ddd;
}

.content {
  background-color: #f4f4f4;
  padding: 20px;
  overflow-y: auto;
  margin-top: 60px;
}
</style>
