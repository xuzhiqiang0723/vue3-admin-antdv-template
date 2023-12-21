// 官方文档：https://cn.vitejs.dev/guide/features.html#glob-import
// vite支持使用特殊的 import.meta.glob函数从文件系统导入多个模块
const modules = import.meta.glob('./modules/*.js', { eager: true })
console.log(modules)
// 格式化模块
function formatModules(_modules, result) {
  // 遍历模块
  Object.keys(_modules).forEach((key) => {
    // 获取模块
    const defaultModule = _modules[key].default
    // 模块存在
    if (defaultModule) {
      // 把模块放入结果数组
      result.push(defaultModule)
    }
  })
  console.log(result)
  // 返回结果数组
  return result.sort((a, b) => a.meta?.order - b.meta?.order)
}

// 根据文件生成路由树
export const asyncRoutes = formatModules(modules, [])
