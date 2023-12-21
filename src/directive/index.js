import permission from './permission'

export default {
  install(app) {
    // 注册指令
    app.directive('permission', permission)
  },
}
