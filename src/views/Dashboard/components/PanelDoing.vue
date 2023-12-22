<script setup>
import { ref } from 'vue'
import BallChart from './BallChart.vue'

const props = defineProps({
  source: {
    type: Object,
    default: () => ({
      taskInTransitNumber: 0, // 运输中任务数量
      taskInTransitRate: 0, // 运输中任务占比
      taskInDeliveryNumber: 0, // 派送中任务数量
      taskInDeliveryRate: 0, // 派送中任务占比
    }),
  },
})

// 代办任务列表
const list = ref([
  {
    name: '运输中',
    number: props.source.taskInTransitNumber,
    rate: props.source.taskInTransitRate,
    color: '#e35d3e',
    backgroundColor: '#ffe5e0',
    labelColor: '#e35d3e',
  },
  {
    name: '派送中',
    number: props.source.taskInDeliveryNumber,
    rate: props.source.taskInDeliveryRate,
    color: '#ffc45e',
    backgroundColor: '#fff1d9',
    labelColor: '#ffc45e',
  },
])
</script>

<template>
  <BallChart :list="list" />
</template>
