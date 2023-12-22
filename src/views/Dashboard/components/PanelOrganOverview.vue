<script setup>
import { ref } from 'vue'
const open = ref(false)

defineProps({
  source: {
    type: Object,
    default: () => ({}),
  },
})

// 显示营业部
const showDepartment = () => {
  open.value = true
}
</script>

<template>
  <div class="organization">
    <div class="left-content">
      <div class="name">{{ source.organName }}</div>
      <div class="address">地址：{{ source.organAddress }}</div>
      <div class="duty-people">负责人：{{ source.principal }} {{ source.phone }}</div>
      <div
        class="search-sales-department el-button el-button--warning is-plain"
        @click="showDepartment()"
      >
        查看营业部分布
      </div>
    </div>
    <div class="right-content">
      <div class="item">
        <div>
          <div class="label">分拣中心(个)</div>
          <RouterLink class="num" to="/">
            {{ source.sortingCenterNumber }}
          </RouterLink>
        </div>
      </div>
      <div class="item">
        <div>
          <div class="label">营业部(个)</div>
          <RouterLink class="num" to="/">
            {{ source.agencyNumber }}
          </RouterLink>
        </div>
      </div>
      <div class="item">
        <div>
          <div class="label">司机人数(个)</div>
          <RouterLink class="num" to="/">
            {{ source.driverNumber }}
          </RouterLink>
        </div>
      </div>
      <div class="item">
        <div>
          <div class="label">快递员人数(个)</div>
          <RouterLink class="num" to="/">
            {{ source.courierNumber }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- 弹出层会在 #app 外渲染 -->
  <a-modal v-model:open="open" :width="800" :footer="null" class="department-modal">
    <div>
      <img class="department-pic" src="@/assets/department_map.png" />
    </div>
  </a-modal>
</template>

<style scoped lang="scss">
// 机构概述
.organization {
  position: relative;
  display: flex;
  height: 180px;
  padding-top: 10px;
  .left-content {
    padding-left: 10px;
    flex: 50%;
    border-right: 1px solid #ebeef5;
    .name {
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 13px;
    }
    .address {
      margin-bottom: 8px;
    }
    .duty-people {
      margin-bottom: 23px;
    }
    .address,
    .duty-people {
      font-size: 14px;
      color: #818693;
    }
    .search-sales-department {
      font-size: 14px;
      color: #e15536;
      width: 158px;
      height: 40px;
      background: #ffeeeb;
      border: 1px solid #f3917c;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn::before {
        content: '';
        width: 20px;
        height: 20px;
        display: block;
        background-image: url('@/assets/position.png');
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  .right-content {
    display: flex;
    flex: 50%;
    width: 300px;
    flex-wrap: wrap;
    .item {
      flex: 50%;
      flex-direction: column;
      align-items: center;
      display: flex;
      .label {
        font-size: 14px;
        // font-weight: bold;
        margin-bottom: 10px;
      }
      .num {
        font-size: 32px;
        font-weight: bold;
        color: #e15536;
        cursor: pointer;
      }
    }

    .item:nth-child(2) {
      padding-right: 25px;
    }
    .item:nth-child(1),
    .item:nth-child(2) {
      height: 85px;
    }
  }
  .line {
    position: absolute;
    height: 156px;
    width: 1px;
    background-color: #ebeef5;
    left: 330px;
  }
}
</style>

<style lang="scss">
// 弹出层会在 #app 外渲染，需要通过全局样式覆盖，不添加 scoped
.department-modal {
  border-radius: 10px;
  overflow: hidden;

  .ant-modal-content {
    padding: 0;
  }

  .department-pic {
    width: 800px;
    height: 600px;
  }
}
</style>
