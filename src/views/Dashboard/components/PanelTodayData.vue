<script setup>
import CountUp from 'vue-countup-v3'
// import CountUp from './CountUp.vue'

defineProps({
  source: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="right-info">
    <div class="row-bg">
      <div class="item">
        <div class="label">订单金额(元)</div>
        <div class="value">
          <CountUp :end-val="source.orderAmount" />
        </div>
        <div class="bottom" :class="source.orderAmountChanges <= 0 ? 'active' : ''">
          较昨日
          {{ source.orderAmountChanges <= 0 ? '-' : '+' }}
          {{ source.orderAmountChanges }}
        </div>
      </div>
      <div class="item">
        <div class="label">订单数量(笔)</div>
        <div class="value">
          <CountUp :end-val="source.orderNumber" />
        </div>
        <div class="bottom" :class="source.orderNumberChanges <= 0 ? 'active' : ''">
          较昨日
          {{ source.orderNumberChanges <= 0 ? '-' : '+' }}
          {{ source.orderNumberChanges }}
        </div>
      </div>
      <div class="item">
        <div class="label">运输任务(次)</div>
        <div class="value">
          <CountUp :end-val="source.transportTaskNumber" />
        </div>
        <div class="bottom" :class="source.transportTaskNumberChanges <= 0 ? 'active' : ''">
          较昨日
          {{ source.transportTaskNumberChanges <= 0 ? '-' : '+' }}
          {{ source.transportTaskNumberChanges }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//今日数据
.right-info {
  height: 180px;
  padding-top: 10px;
  .row-bg {
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
    .item {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .label {
      font-size: 14px;
      color: #20232a;
      margin-bottom: 21px;
    }
    .value {
      font-size: 36px;
      color: #20232a;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .bottom {
      font-size: 14px;
      color: #818693;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 9px;
    }
    .bottom::after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url('@/assets/rise.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
    .bottom.active::after {
      background-image: url('@/assets/down.png');
    }
  }
}
</style>
