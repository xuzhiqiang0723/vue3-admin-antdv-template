<script setup>
defineProps({
  title: {
    type: String,
    default: '默认标题',
  },
  toolTip: {
    type: String,
  },
})
</script>

<template>
  <a-card class="card" :bordered="false">
    <template #title>
      <header class="card-header">
        <!-- 标题 -->
        <h3 class="title">{{ title }}</h3>
        <!-- 提示 -->
        <a-tooltip v-if="$slots.tips" class="tooltip" color="#fff" placement="bottomLeft">
          <!-- 提示图标 -->
          <img class="tooltip-icon" src="@/assets/explain.png" />
          <!-- 提示文字 -->
          <template #title>
            <div class="tooltip-text">
              <slot name="tips"></slot>
            </div>
          </template>
        </a-tooltip>
        <!-- 右侧 -->
        <div class="extra" v-if="$slots.extra">
          <slot name="extra"></slot>
        </div>
      </header>
    </template>
    <slot></slot>
  </a-card>
</template>

<style scoped lang="scss">
.card {
  margin-bottom: 16px;

  .card-header {
    display: flex;
    align-items: center;

    .title {
      font-size: 16px;
    }

    .extra {
      margin-left: auto;
      font-weight: normal;
      font-size: 14px;
      color: var(--color-text-2);
    }
  }

  // 如何覆盖 antd 样式
  :deep(.ant-card-head) {
    border-bottom: none !important;
  }

  :deep(.ant-card-body) {
    padding-top: 0;
  }
}

.tooltip {
  background-color: #fff;
  margin-left: 5px;

  &-text {
    color: #666;
  }

  &-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
