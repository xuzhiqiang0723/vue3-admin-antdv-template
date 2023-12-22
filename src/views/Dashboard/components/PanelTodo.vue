<script setup>
import { ref } from 'vue'
import BallChart from './BallChart.vue'

const props = defineProps({
  source: {
    type: Object,
    default: () => ({
      waitingPickupNumber: 0, // 待取件任务数
      waitingPickupRate: 0, // 待取件任务占比
      waitingDispatchNumber: 0, // 待派件任务数
      waitingDispatchRate: 0, // 待派件任务占比
      unassignedTransportTaskNumber: 0, // 未分配运输任务数
      unassignedTransportTaskRate: 0, // 未分配运输任务占比
      timeoutTransportTaskNumber: 0, // 超时运输任务数
      timeoutTransportTaskRate: 0, // 超时运输任务占比
    }),
  },
})

// 代办任务列表
const list = ref([
  {
    name: '待取件',
    number: props.source.waitingPickupNumber,
    rate: props.source.waitingPickupRate,
    color: '#e35d3e',
    backgroundColor: '#ffe5e0',
    labelColor: '#e35d3e',
  },
  {
    name: '待派件',
    number: props.source.waitingDispatchNumber,
    rate: props.source.waitingDispatchRate,
    color: '#ffc45e',
    backgroundColor: '#fff1d9',
    labelColor: '#ffc45e',
  },
  {
    name: '未分配运输',
    number: props.source.unassignedTransportTaskNumber,
    rate: props.source.unassignedTransportTaskRate,
    color: '#ff9b41',
    backgroundColor: '#ffead7',
    labelColor: '#ff9b41',
  },
  {
    name: '超时运输',
    number: props.source.timeoutTransportTaskNumber,
    rate: props.source.timeoutTransportTaskRate,
    color: '#edde83',
    backgroundColor: '#fafade',
    labelColor: '#edde83',
  },
])
</script>

<template>
  <BallChart :list="list" />
</template>
