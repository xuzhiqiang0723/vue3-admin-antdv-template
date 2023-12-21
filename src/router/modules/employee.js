export default {
  name: 'employee',
  component: () => import('@/views/Layout/index.vue'),
  path: '/employee',
  redirect: '/employee/courier',
  meta: { title: '员工管理', icon: 'UsergroupDeleteOutlined', order: 3 },
  children: [
    {
      name: 'employee-courier',
      path: '/employee/courier',
      meta: { title: '快递员管理', parent: 'employee' },
      // component: () => import('@/views/Employee/Courier/index.vue'),
    },
    {
      name: 'employee-driver',
      path: '/employee/driver',
      meta: { title: '司机列表', parent: 'employee' },
      // component: () => import('@/views/Employee/Driver/index.vue'),
    },
    {
      name: 'employee-workArrange',
      path: '/employee/workArrange',
      meta: { title: '排班管理', parent: 'employee' },
      // component: () => import('@/views/Employee/WorkArrange/index.vue'),
    },
  ],
}
