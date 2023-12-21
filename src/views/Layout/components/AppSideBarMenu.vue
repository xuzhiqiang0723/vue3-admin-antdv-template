<script lang="jsx">
import { defineComponent, ref, h, resolveComponent } from 'vue'

export default defineComponent({
  name: 'SideBarItem',
  setup() {
    // 返回一个函数，函数返回一个jsx(不用写template)
    return () => (
      <a-menu theme="light" mode="inline">
        <a-sub-menu title={'基础数据管理'} key="1" icon={h(resolveComponent('HomeOutlined'))}>
          <a-menu-item key="11">机构管理</a-menu-item>
          <a-menu-item key="12">机构作业范围</a-menu-item>
          <a-menu-item key="13">运费管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu title={'车辆管理'} key="2" icon={h(resolveComponent('PartitionOutlined'))}>
          <a-menu-item key="21">车型管理</a-menu-item>
          <a-menu-item key="32">车辆列表</a-menu-item>
          <a-menu-item key="33">回车管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    )
  },
})
</script>

<style scoped lang="scss">
.sidebar {
  // 侧栏菜单固定定位
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  height: 100vh;
  overflow-y: auto;
}
.logo {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-img {
    width: 152px;
    height: 113px;
  }
}
</style>
