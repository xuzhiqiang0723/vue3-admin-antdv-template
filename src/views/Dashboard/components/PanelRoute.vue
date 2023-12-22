<script setup>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import { onMounted, onUnmounted, ref } from 'vue'
import { geoCoordMap, lineManageRegions } from '../data/static'
import axios from 'axios'

onMounted(() => {
  initMap()
})

// 转换数据
const convertData = (data) => {
  const res = []
  // 遍历数据进行处理
  data.forEach((item) => {
    // 根据名字获取经纬度
    const toNames = geoCoordMap[item.toName]
    const fromNames = geoCoordMap[item.fromName]

    // 如果有经纬度，就添加到 res 中
    if (toNames) {
      res.push({
        name: item.toName,
        value: toNames.concat(item.value),
      })
    }
    if (fromNames) {
      res.push({
        name: item.fromName,
        value: fromNames.concat(item.value),
      })
    }
  })
  // 返回处理后的数据
  return res
}

let myChart = null
const chartRef = ref()

// 初始化地图
const initMap = async () => {
  // 初始化地图数据
  myChart = echarts.init(chartRef.value)

  // 获取数据，后台无提供，使用本地 json 数据
  const { data } = await axios('/data/lineManage.json')

  const series = [
    {
      name: data[0].fromName + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        // arrow箭头的颜色
        color: '#E15536',
        symbolSize: 10,
        symbol: 'arrow',
      },
      lineStyle: {
        normal: {
          color: '#E15536',
          width: 3,
          curveness: 0.2,
          type: 'dashed',
        },
      },
      data: data.map((dataItem) => {
        return {
          fromName: dataItem.fromName,
          toName: dataItem.toName,
          coords: [geoCoordMap[dataItem.fromName], geoCoordMap[dataItem.toName]],
          name: dataItem.name,
        }
      }),
    },
    {
      cursor: 'auto',
      name: data[0].fromName + ' Top3',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#333333',
        },
      },
      // 图标上的点的大小
      symbolSize: (val) => {
        return val[2] / 10
      },
      itemStyle: {
        normal: {
          // color: 'rgba(227,74,64,0.6)'
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: '#E15536', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#E15536', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        emphasis: {
          itemStyle: {
            color: 'red',
          },
          // areaColor: '#5389f0'
        },
      },
      data: convertData(data),
    },
  ]

  const option = {
    tooltip: {
      position: ['0%', '35%'],
      borderColor: '#EBEEF5',
      borderWidth: 1,
      padding: [15, 18, 15, 18],
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0.96)',
      formatter: (params) => {
        const {
          name: { lineNumber, lineName, lineType, fromAgency, toAgency, distance, cost, time },
        } = params.data

        if (params.seriesType === 'effectScatter') {
          return
        } else if (params.seriesType === 'lines') {
          return `
            <span class="box" style="color:#20232A;font-weight:bold;margin-bottom:18px;display:inline-block">线路信息</span>
            <br />
            <span style="color:#818693;margin-right:100px;margin-bottom:4px;display:inline-block">线路编号：</span>
              <span style="color:#20232A;display:inline-block">
              ${lineNumber}
              </span>
            <br />
            <span style="color:#818693;margin-right:100px;margin-bottom:4px;display:inline-block">线路名称：</span>
              <span style="color:#20232A;font-size:12px">
              ${lineName}
              </span>
            <br />
            <span style="color:#818693;margin-right:100px;margin-bottom:4px;display:inline-block">线路类型：</span>
              <span style="color:#20232A;font-size:12px">
              ${lineType}
              </span>
            <br />
            <span style="color:#818693;margin-right:88px;margin-bottom:4px;display:inline-block">起始地机构：</span>
              <span style="color:#20232A;font-size:12px">
              ${fromAgency}
              </span>
            <br />
            <span style="color:#818693;margin-right:88px;margin-bottom:4px;display:inline-block">目的地机构：</span>
              <span style="color:#20232A;font-size:12px">
              ${toAgency}
              </span>
            <br />
            <span style="color:#818693;margin-right:123px;margin-bottom:4px;display:inline-block">距离：</span>
              <span style="color:#20232A;font-size:12px">
              ${distance}
              </span>
            <br />
            <span style="color:#818693;margin-right:100px;margin-bottom:4px;display:inline-block">平均成本：</span>
              <span style="color:#20232A;font-size:12px">
              ${cost}
              </span>
            <br />
            <span style="color:#818693;margin-right:100px;margin-bottom:4px;display:inline-block">预计时间：</span>
              <span style="color:#20232A;font-size:12px">
              ${time}
              </span>
            `
        } else {
          return params.name
        }
      },
    },
    geo: {
      silent: true,
      map: 'china',
      label: {
        emphasis: {
          show: true,
          color: '#fff',
        },
      },
      roam: false,
      //   放大我们的地图
      zoom: 1.25,
      itemStyle: {
        normal: {
          // 地域边框颜色
          borderColor: '#FDB892',
          borderWidth: 0,
        },
        emphasis: {
          areaColor: '#ba586f',
        },
      },
      regions: lineManageRegions,
    },
    series: series,
  }
  myChart.clear()
  myChart.setOption(option)
}

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
  <div class="chart" ref="chartRef"></div>
</template>

<style scoped>
.chart {
  height: 400px;
}
</style>
