// import { usePermissionStore } from '@/stores'

// 权限校验方法
function checkPermission(el, { value }) {
  // 获取用户角色
  // const { currentRole } = usePermissionStore()
  const currentRole = 'admin'

  // 传入的权限值要求是一个数组
  if (Array.isArray(value)) {
    if (value.length > 0) {
      // 判断用户角色是否有权限
      const hasPermission = value.includes(currentRole)
      // 没有权限则删除当前dom
      if (!hasPermission) el.remove()
    }
  } else {
    throw new Error(`格式错误，正确用法 v-permission="['admin','employee']"`)
  }
}

export default {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  },
}
