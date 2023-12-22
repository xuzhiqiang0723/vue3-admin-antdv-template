<script setup lang="ts">
import { getAsssetsPath } from '@/utils'

// 常用功能列表
const list = [
  {
    label: '快递作业', // 名称
    link: '/', // 点击跳转去往地址
    url: 'useFeature1.png', // 图片地址
  },
  {
    label: '运输任务',
    link: '/',
    url: 'useFeature2.png',
  },
  {
    label: '线路管理',
    link: '/',
    url: 'useFeature3.png',
  },
  {
    label: '车辆管理',
    link: '/',
    url: 'useFeature4.png',
  },
  {
    label: '司机管理',
    link: '/',
    url: 'useFeature5.png',
  },
  {
    label: '运费查询',
    link: '/',
    url: 'useFeature6.png',
  },
]
</script>

<template>
  <div class="list">
    <div class="item" v-for="item in list" :key="item.label">
      <RouterLink class="link" :to="item.link">
        <img :src="getAsssetsPath(item.url)" alt="" />
        <p>{{ item.label }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;

  .item {
    flex: 1;
    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        color: var(--color-primary);
      }
    }
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
