function member() {
  return {
    name: 'member',
    path: '/member',
    component: () => import('@/views/member'),
    children: [
      {
        path: 'edit',
        component: () => import('@/views/member/edit')
      }
    ]
  }
}