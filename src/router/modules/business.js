export default {
  name: 'business',
  component: () => import('@/views/Layout/index.vue'),
  path: '/business',
  redirect: '/business/orderlist',
  meta: { title: '业务管理', icon: 'ScheduleOutlined', order: 4 },
  children: [
    {
      name: 'business-orderlist',
      path: '/business/orderlist',
      meta: { title: '运单管理', parent: 'business' },
      component: () => import('@/views/Business/WayBill/index.vue'),
    },
    {
      name: 'business-businesslist',
      path: '/business/businesslist',
      meta: { title: '订单管理', parent: 'business' },
      component: () => import('@/views/Business/Order/index.vue'),
    },
  ],
}
