<script setup>
import { computed } from 'vue'
import { onUnmounted, onMounted } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  source: {
    type: Array,
    default: () => [],
  },
})

// 定时器id
let timerId = -1
// 每行的高度
const trHeight = 50
// 每屏显示的行数
const trCount = 7
// 表格的top值
const tableTop = ref(0)

// 显示的列表，为了处理无缝效果，将原数组复制一份拼接到后面
const showList = computed(() => {
  // 如果数据超过7条(滚动的一屏)，且不超过14条(滚动的二屏)，复制一份拼接到后面
  if (props.source.length >= trCount && props.source.length < trCount * 2) {
    return props.source.concat(props.source)
  } else {
    // 其他情况直接返回原数组
    return props.source
  }
})

// 开始表格滚动
const tableScrollStart = () => {
  // 如果数据不超过7条(滚动的一屏)，则不滚动
  if (showList.value.length <= trCount) return
  // 启动定时器，每秒向上滚动一行
  timerId = setInterval(() => {
    // 每次向上滚动一行，top值减去一行的高度
    tableTop.value -= trHeight
    // 临界点，当滚动到最后一行时，top值重置为0
    if (tableTop.value <= -trHeight * trCount - trHeight) {
      tableTop.value = 0
    }
  }, 2000)
}

// 停止表格滚动
const tableScrollStop = () => {
  clearInterval(timerId)
}

// 清理定时器，防止内存泄漏
onMounted(tableScrollStart)
onUnmounted(tableScrollStop)

// 任务状态
const status = [
  { id: 0, name: '已取消' },
  { id: 1, name: '待执行' },
  { id: 2, name: '进行中' },
  { id: 3, name: '待确认' },
  { id: 4, name: '已完成' },
]
</script>

<template>
  <div class="table_body">
    <div class="table_th">
      <div class="tr1 th_style">任务编号</div>
      <div class="tr2 th_style">起始地</div>
      <div class="tr3 th_style">目的地</div>
      <div class="tr4 th_style">车辆</div>
      <div class="tr4 th_style">任务状态</div>
    </div>
    <div class="table_main_body" @mouseenter="tableScrollStop()" @mouseleave="tableScrollStart()">
      <div
        class="table_inner_body"
        :class="!tableTop ? '' : 'startTransition'"
        :style="{ top: tableTop + 'px' }"
      >
        <div class="table_tr" v-for="item in showList" :key="item.id">
          <div class="tr1 tr">{{ item.id }}</div>
          <div class="tr2 tr">{{ item.startAgency }}</div>
          <div class="tr3 tr">{{ item.endAgency }}</div>
          <div class="tr4 tr">{{ item.licensePlate }}</div>
          <div class="tr4 tr">{{ status[item.status].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table_body {
  width: 100%;
}
.table_th {
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  border: 1px solid #ebeef5;
  border-bottom: none;
  background-color: #f9fafe;
}
.tr {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0 5px;
  text-align: center;
  font-size: 14px;
  color: black;
}
.tr1 {
  width: 20%;
}
.tr2 {
  width: 20%;
}
.tr3 {
  width: 20%;
  font-size: 13px;
}

.tr4 {
  flex: 1;
}

.th_style {
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0 5px;
  text-align: center;
  color: #818693;
  font-size: 14px;
}
.table_main_body {
  width: 100%;
  height: 351px;
  overflow: hidden;
  position: relative;
}
.table_inner_body {
  width: 100%;
  position: absolute;
  left: 0;
}

.startTransition {
  transition: all 0.5s;
}

.table_tr:nth-child(odd) {
  background-color: #ffffff;
}
.table_tr:nth-child(even) {
  background-color: #fafafa;
}
.table_tr:hover {
  background-color: rgb(245, 247, 250);
}
.table_tr {
  display: flex;
  height: 50px;
  line-height: 50px;
  color: #eee;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid #ebeef5;
  border-bottom: none;
  .tr1 {
    padding-left: 20px;
  }
}
.table_tr:last-child {
  border-bottom: 1px solid #ebeef5;
}
</style>
