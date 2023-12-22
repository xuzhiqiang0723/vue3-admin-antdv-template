export default {
  name: 'car',
  component: () => import('@/views/Layout/index.vue'),
  path: '/car',
  redirect: '/car/carType',
  meta: { title: '车辆管理', icon: 'CarOutlined', order: 2 },
  children: [
    {
      name: 'car-carType',
      path: '/car/carType',
      meta: { title: '车型管理', parent: 'car' },
      component: () => import('@/views/Car/CarType/index.vue'),
    },
    {
      name: 'car-carList',
      path: '/car/carList',
      meta: { title: '车辆列表', parent: 'car' },
      component: () => import('@/views/Car/CarList/index.vue'),
    },
    {
      name: 'car-carCheck',
      path: '/car/carCheck',
      meta: { title: '车辆登记', parent: 'car' },
      component: () => import('@/views/Car/CarCheck/index.vue'),
    },
  ],
}
