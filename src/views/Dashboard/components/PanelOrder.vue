<script setup lang="ts">
defineProps({
  source: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <p class="unit">单位：笔</p>
  <div class="list">
    <div class="item">
      <p class="number">{{ source.orderMaxNumber }}</p>
      <p class="label">订单最高值</p>
    </div>
    <div class="item">
      <p class="number">{{ source.orderAverageNumber }}</p>
      <p class="label">订单平均值</p>
    </div>
    <div class="item">
      <p class="number">{{ source.orderMinNumber }}</p>
      <p class="label">订单最低值</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit {
  color: var(--color-text-2);
}

.list {
  display: flex;
  height: 500px;
  box-sizing: border-box;
  padding: 50px 0;
  .item {
    flex: 1;
    text-align: center;
  }
  .number {
    color: var(--color-primary);
    font-size: 24px;
    font-weight: bold;
  }

  .label {
    color: var(--color-text-2);
  }
}
</style>
