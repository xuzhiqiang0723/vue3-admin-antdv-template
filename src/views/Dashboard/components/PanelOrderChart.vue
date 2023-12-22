<!-- 球形echarts -->
<template>
  <p class="unit">单位：笔</p>
  <div class="chart" ref="chartRef"></div>
</template>

<script setup>
import axios from 'axios'
import * as echarts from 'echarts'
import { onUnmounted } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

const chartRef = ref()
let myChart

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

// 初始化列表
const initChart = async () => {
  myChart = echarts.init(chartRef.value)
  const { data } = await axios.get('/data/orderDistribute.json')
  // 从大到小排序
  data.sort((a, b) => a.value - b.value)
  // 订单分布echarts图表数据
  const barOption = {
    tooltip: {
      borderColor: '#EBEEF5',
      borderWidth: 1,
      padding: [5, 16, 5, 14],
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.96)',
      formatter: (params) => {
        return `
          <span style="color:#818693;font-size:12px;margin-right:25px;margin-bottom:4px;display:inline-block">省份：</span>
          <span style="color:#20232A;font-size:12px;display:inline-block">
            ${params[0].name}
          </span>
          <br />
          <span style="color:#818693;font-size:12px;margin-bottom:4px;display:inline-block">订单总量：</span>
            <span style="color:#20232A;font-size:12px;display:inline-block;float:right">
            ${params[0].data}笔
          </span>
        `
      },
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 17,
      },
      splitLine: {
        lineStyle: {
          color: '#EBEEF5',
        },
      },
    },
    grid: {
      left: '0',
      right: '20px',
      bottom: '0',
      height: '100%',
      containLabel: true,
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        // rotate: 30,
        interval: 0,
        fontSize: 11,
        color: '#20232A',
      },
      axisLine: {
        lineStyle: {
          color: '#EBEEF5',
        },
      },
      axisTick: {
        show: false,
      },
      data: data.map((item) => item.name),
    },
    animationDurationUpdate: 1000,
    series: {
      type: 'bar',
      id: 'population',
      data: data.map((item) => item.value),
      universalTransition: true,
      barWidth: 5,
      itemStyle: {
        color: '#E15536',
      },
    },
  }
  myChart.setOption(barOption)
}

onMounted(() => {
  initChart()
})
</script>

<style scoped lang="scss">
.unit {
  color: var(--color-text-2);
}

.chart {
  height: 500px;
}
</style>
