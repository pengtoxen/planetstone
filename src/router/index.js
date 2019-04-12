import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout.vue'

export const constantRouterMap = [
  // { path: '/test', component: _import('test/test'), hidden: true },
  // { path: '/404', component: _import('errorPage/404'), hidden: true },
  // { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'index',
      icon: 'index',
      footTab: "footTabOne",
      headTab: ""
    },
    children: [
      {
        path: '/home',
        component: _import('home/index'),
        name: 'home',
        meta: {
          title: 'home',
          icon: 'home',
          noCache: true,
          footTab: "footTabOne",
          headTab: ""
        }
      },
      {
        path: '/icons',
        component: _import('icons/index'),
        name: 'icons',
        meta: {
          title: 'icons',
          icon: 'icons',
          noCache: true,
          footTab: "footTabOne",
        }
      },
      {
        path: '/cart',//购物车
        component: _import('cart/cartList'),
        name: 'cart',
        meta: {
          title: 'cart',
          icon: 'cart',
          noCache: true,
          footTab: "footTabOne",
        }
      },
      {
        path: '/center',
        component: _import('center/mine'),
        meta: {
          title: 'center',
          icon: 'center',
          noCache: true,
          footTab: "footTabOne",
        }
      },
      {
        path: '/center/qbcode',
        component: _import('center/qbcode'),
        name: 'qbcode',
        meta: {
          title: 'qbcode',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/center/userinfo',
        component: _import('center/userInfo'),
        name: 'userinfo',
        meta: {
          title: 'userinfo',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/center/sign',
        component: _import('center/sign'),
        name: 'sign',
        meta: {
          title: 'sign',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/cate',
        component: _import('cate/index'),
        name: 'cate',
        meta: {
          title: 'cate',
          icon: 'cate',
          noCache: true,
          footTab: "footTabOne"
        }
      },
      {
        path: '/store',
        component: _import('store/index'),
        name: 'store',
        meta: {
          title: 'store',
          icon: 'store',
          noCache: true,
          footTabCss: 'app-main-no-padding'
        },
      },
      {
        path: '/map',
        component: _import('store/map'),
        name: 'map',
        meta: {
          title: 'map',
          icon: '',
          noCache: true,
          footTabCss: 'app-main-no-padding'
        }
      },
      {
        path: '/search',
        component: _import('search/index'),
        name: 'search',
        meta: {
          title: 'search',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/coupon',
        component: _import('coupon/index'),
        name: 'coupon',
        meta: {
          title: 'coupon',
          icon: '',
          noCache: true,
        }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }), // 跳转到新的页面时,定位到最顶端
  routes: constantRouterMap,
})

