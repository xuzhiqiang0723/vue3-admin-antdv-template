<template>
  <a-layout-sider theme="light" width="200" class="sidebar">
    <h1 class="logo">
      <RouterLink to="/"> Logo </RouterLink>
    </h1>
    <AppSideBarMenu />
  </a-layout-sider>
</template>

<script setup>
import AppSideBarMenu from './AppSideBarMenu.vue'
</script>

<style lang="scss" scoped>
.sidebar {
  // 侧栏菜单固定定位
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  height: 100vh;
  overflow-y: auto;
}
.logo {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-img {
    width: 152px;
    height: 113px;
  }
}
</style>
