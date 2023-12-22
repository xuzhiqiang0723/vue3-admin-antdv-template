<!-- <script setup>
import { ref } from 'vue'
import { getWorkspaceAPI } from '@/services/common'
import PanelBase from './components/PanelBase.vue'
import PanelOrganOverview from './components/PanelOrganOverview.vue'
import PanelTodayData from './components/PanelTodayData.vue'
import PanelTodo from './components/PanelTodo.vue'
import PanelDoing from './components/PanelDoing.vue'
import PanelFeature from './components/PanelFeature.vue'
import PanelRoute from './components/PanelRoute.vue'
import PanelTransport from './components/PanelTransport.vue'
import PanelOrder from './components/PanelOrder.vue'
import PanelOrderChart from './components/PanelOrderChart.vue'

const workspace = ref({})
const getWorkspaceData = async () => {
  const res = await getWorkspaceAPI()
  workspace.value = res.data
}

getWorkspaceData()
</script>

<template>
  <div class="container">
    <a-row :gutter="16" align="stretch">
      <a-col :span="14">
        <PanelBase title="机构描述">
          <PanelOrganOverview v-if="workspace.organOverview" :source="workspace.organOverview" />
          <a-skeleton v-else active :paragraph="{ rows: 4 }" />
        </PanelBase>
      </a-col>
      <a-col :span="10">
        <PanelBase title="今日数据">
          <PanelTodayData v-if="workspace.todayData" :source="workspace.todayData" />
          <a-skeleton v-else active :paragraph="{ rows: 4 }" />
        </PanelBase>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="14">
        <PanelBase title="待办任务" tool-tip="提示文字">
          <template #tips>
            <p class="nowrap">待取件率=待取件/(下单数量-取消数量)，且取件类型=上门取件</p>
            <p class="nowrap">待派送率=待派送/(待派送+派送中+已签收+拒收)</p>
            <p class="nowrap">未分配率=未分配/全部数据</p>
            <p class="nowrap">超时率=超时任务/(已完成+进行中+已取消）</p>
          </template>
          <PanelTodo v-if="workspace.backlog" :source="workspace.backlog" />
          <a-skeleton v-else active :paragraph="{ rows: 6 }" />
        </PanelBase>
      </a-col>
      <a-col :span="10">
        <PanelBase title="执行中任务">
          <template #tips>
            <p class="nowrap">运输率=运输中/(全部订单-待取件-已取件-网点入库-待装车-已取消）</p>
            <p class="nowrap">派送率=派送中/(待派送+派送中+已签收+拒收）</p>
          </template>
          <PanelDoing v-if="workspace.todayData" :source="workspace.todayData" />
          <a-skeleton v-else active :paragraph="{ rows: 6 }" />
        </PanelBase>
      </a-col>
      <a-col :span="24">
        <PanelBase title="常用功能">
          <PanelFeature />
        </PanelBase>
      </a-col>
      <a-col :span="12">
        <PanelBase title="线路管理">
          <PanelRoute v-if="workspace.todayData" />
          <a-skeleton v-else active :title="false" :paragraph="{ rows: 6 }" />
        </PanelBase>
      </a-col>
      <a-col :span="12">
        <PanelBase title="运输任务">
          <template #extra>
            <RouterLink to="/">
              查看更多
              <RightOutlined />
            </RouterLink>
          </template>
          <PanelTransport
            v-if="workspace.transportTaskList"
            :source="workspace.transportTaskList"
          />
          <a-skeleton v-else active :title="false" :paragraph="{ rows: 6 }" />
        </PanelBase>
      </a-col>
      <a-col :span="12">
        <PanelBase title="订单总量">
          <PanelOrder :source="workspace.orderLineChart" />
        </PanelBase>
      </a-col>
      <a-col :span="12">
        <PanelBase title="订单分布">
          <PanelOrderChart />
        </PanelBase>
      </a-col>
    </a-row>
    <p class="tips">注：工作台展示数据为虚拟数据</p>
  </div>
</template>

<style scoped lang="scss">
.tips {
  text-align: right;
  color: var(--color-text-2);
}
</style> -->
<script setup></script>
<template>
  <div>Dashboard</div>
</template>
