import { HomeOutlined, PartitionOutlined, SettingOutlined } from '@ant-design/icons-vue'

// 以上图标都需要全局注册
const icons = [HomeOutlined, PartitionOutlined, SettingOutlined]

export default {
  install(app) {
    // 全局注册引入的所有图标，需在 main.js 中使用 app.use(icons) 注册
    icons.forEach((item) => {
      app.component(item.displayName, item)
    })
  },
}
