<script setup>
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})

const chartRef = ref()
let myChart = null
const initChart = () => {
  // 初始化 echarts
  myChart = echarts.init(chartRef.value)

  // 水球图配置
  myChart.setOption({
    series: props.list.map((item, index) => ({
      type: 'liquidFill', // 水球图
      radius: '130', // 水球图半径
      center: [`${(100 / props.list.length) * (index + 1 / 2)}%`, '45%'], // 水球图位置
      // 水球图数据
      data: [
        {
          value: 1, // 水球图数据
          itemStyle: {
            // 水球图样式
            opacity: 1, // 水球图数据透明度
            color: 'transparent', // 水球图颜色
          },
        },
        item.rate / 100, // 比例
      ],
      backgroundStyle: {
        color: item.backgroundColor, // 水球图背景颜色
      },
      color: [item.color], // 水球图颜色
      itemStyle: {
        shadowColor: 'transparent', // 取消水球图阴影颜色
      },
      // 水球图边框
      outline: {
        borderDistance: 5, // 水球图边框距离
        // 水球图边框样式
        itemStyle: {
          borderWidth: 1, // 水球图边框宽度
          borderColor: item.color, // 水球图边框颜色
        },
      },
      // 水球图文本
      label: {
        fontSize: 16, // 水球图文本字体大小
        fontWeight: 'normal', // 水球图文本字体粗细
        color: item.labelColor, // 水球图文本颜色
        insideColor: '#333', // 水球图文本颜色
        formatter: () => `${item.rate}%`, // 水球图文本格式化
      },
    })),
  })
}

onMounted(() => {
  initChart()
})

// 监听窗口变化，重置 echarts
const echartsResize = () => {
  myChart.resize()
}

// 监听窗口变化，重置 echarts
onMounted(() => {
  window.addEventListener('resize', echartsResize)
})

// 销毁全局监听事件
onUnmounted(() => {
  window.removeEventListener('resize', echartsResize)
})
</script>

<template>
  <!-- 水球图列表 echarts -->
  <div class="chart" ref="chartRef"></div>
  <!-- 代办任务列表 -->
  <div class="list">
    <p class="item" v-for="item in list" :key="item.name">
      <span class="name">{{ item.name }}</span>
      <span class="number" :style="{ color: item.color }">{{ item.number }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  height: 200px;
}

.list {
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    .number {
      margin: 0 3px;
      font-size: 120%;
    }
  }
}
</style>
