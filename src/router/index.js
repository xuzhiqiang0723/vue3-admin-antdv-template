import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
      },
      component: () => import('@/views/Layout/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页',
      },
      component: () => import('@/views/Login/index.vue'),
    },
  ],
})

router.beforeEach(() => {
  // 进度条开始
  NProgress.start()
})

// 全局的后置导航
router.afterEach((to) => {
  // 进度条结束
  NProgress.done()
  // 动态设置标题
  document.title = `${to.meta.title || import.meta.env.VITE_APP_TITLE}`
})

export default router
