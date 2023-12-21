<script lang="jsx">
import { defineComponent, h, resolveComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SideBarItem',
  setup() {
    const router = useRouter()

    const routes = computed(() => {
      return router.options.routes
    })
    console.log(routes.value)

    // 渲染侧栏菜单的函数
    const renderSubMenu = () => {
      // 递归渲染侧栏菜单
      function travel(_route, nodes = []) {
        // _route 是一个数组，里面是路由对象
        if (_route) {
          // 遍历路由对象
          _route.forEach((element) => {
            const { icon, title } = element.meta

            const node =
              element.children && element.children.length > 0 ? (
                // 一级菜单：渲染 标题 和 图标
                <a-sub-menu title={title} key={element.name} icon={h(resolveComponent(icon))}>
                  {/* 如果有子路由，递归渲染 */}
                  {travel(element.children)}
                </a-sub-menu>
              ) : (
                // 二级菜单：渲染 路由链接 和 标题
                <a-menu-item key={element.path}>
                  <router-link to={element.path}>{title}</router-link>
                </a-menu-item>
              )
            nodes.push(node)
          })
        }
        return nodes
      }
      return travel(routes.value)
    }

    // 返回一个函数，函数返回一个jsx(不用写template)
    return () => (
      <a-menu theme="light" mode="inline">
        {...renderSubMenu()}
      </a-menu>
    )
  },
})
</script>

<style scoped lang="scss"></style>
