<script setup lang="ts">
defineOptions({
  name: 'NotFoundPage',
})
</script>

<template>
  <a-result title="404" sub-title="很抱歉，您的页面迷路了~">
    <template #icon>
      <img class="picture" src="@/assets/404.png" alt="404" />
    </template>
    <template #extra>
      <a-button @click="$router.push('/')" type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>

<style scoped lang="scss">
.picture {
  width: 390px;
  height: 386px;
}
</style>
