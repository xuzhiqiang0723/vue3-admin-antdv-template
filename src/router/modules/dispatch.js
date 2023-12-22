export default {
  name: 'dispatch',
  component: () => import('@/views/Layout/index.vue'),
  path: '/dispatch',
  redirect: '/dispatch/courier',
  meta: { title: '调度管理', icon: 'SendOutlined', order: 5 },
  children: [
    {
      name: 'dispatch-task',
      path: '/dispatch/task',
      meta: { title: '运输任务管理', parent: 'dispatch' },
      component: () => import('@/views/Dispatch/Task/index.vue'),
    },
    {
      name: 'dispatch-line',
      path: '/dispatch/line',
      meta: { title: '线路管理', parent: 'dispatch' },
      component: () => import('@/views/Dispatch/Line/index.vue'),
    },
    {
      name: 'dispatch-pickWork',
      path: '/dispatch/pickWork',
      meta: { title: '取件作业管理', parent: 'dispatch' },
      component: () => import('@/views/Dispatch/Pick/index.vue'),
    },
    {
      name: 'dispatch-dispatch',
      path: '/dispatch/dispatch',
      meta: { title: '派件作业管理', parent: 'dispatch' },
      component: () => import('@/views/Dispatch/Dispatch/index.vue'),
    },
  ],
}
