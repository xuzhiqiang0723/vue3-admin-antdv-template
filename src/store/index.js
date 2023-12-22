// Vue3 推荐状态管理是 pinia (Vuex5)
import { createPinia } from 'pinia'
// 导入持久化存储插件
import persist from 'pinia-plugin-persistedstate'

// 创建 store 实例
const store = createPinia()
// 使用持久化插件
store.use(persist)

// 导出 store 实例
export default store

// 导出所有模块
export * from './modules/account'
