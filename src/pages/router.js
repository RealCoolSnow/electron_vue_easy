/*
 * @Description:
 * @Author: CoolSnow
 * @Date: 2020-05-19 12:01:37
 * @LastEditTime: 2020-09-17 15:17:17
 */
export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "test" */ '@/pages/home/'),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about/'),
    meta: {
    }
  }
]
