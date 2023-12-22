import {
  HomeOutlined,
  PartitionOutlined,
  SettingOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  LockOutlined,
  UserOutlined,
  BarChartOutlined,
  UsergroupDeleteOutlined,
  SendOutlined,
  ScheduleOutlined,
  CarOutlined,
  RightOutlined,
} from '@ant-design/icons-vue'

// 以上图标都需要全局注册
const icons = [
  HomeOutlined,
  PartitionOutlined,
  SettingOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  LockOutlined,
  UserOutlined,
  BarChartOutlined,
  UsergroupDeleteOutlined,
  SendOutlined,
  ScheduleOutlined,
  CarOutlined,
  RightOutlined,
]

export default {
  install(app) {
    // 全局注册引入的所有图标
    icons.forEach((item) => app.component(item.displayName, item))
  },
}
