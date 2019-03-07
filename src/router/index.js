import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout.vue'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'index',
      icon: 'index',
      footTab: "footTabOne"
    },
    children: [
      {
        path: 'home',
        component: _import('home/index'),
        name: 'home',
        meta: {
          title: 'home',
          icon: 'home',
          noCache: true,
          footTab: "footTabOne"
        }
      },
      {
        path: 'icons',
        component: _import('icons/index'),
        name: 'icons',
        meta: {
          title: 'icons',
          icon: 'icons',
          noCache: true,
          footTab: "footTabOne"
        }
      },
      {
        path: 'center',
        component: _import('center/mine'),
        name: 'center',
        meta: {
          title: 'center',
          icon: 'center',
          noCache: true,
          footTab: "footTabOne"
        }
      },
      {
        path: 'case',
        component: _import('case/cabinetList'),
        name: 'case',
        meta: {
          title: 'case',
          icon: 'case',
          noCache: true,
          footTab: "footTabOne"
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

export const asyncRouterMap = [
  // {
  //   path: '/specimen',
  //   component: Layout,
  //   name: 'specimen',
  //   meta: {
  //     title: 'specimen',
  //     icon: 'table'
  //   },
  //   children: [
  //     {
  //       path: 'fossil',
  //       component: _import('fossil/list'),
  //       name: 'fossil',
  //       meta: {
  //         title: 'fossil',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: 'fossil/create',
  //       component: _import('fossil/create'),
  //       name: 'create',
  //       hidden: true,
  //       meta: {
  //         title: 'create',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: 'fossil/edit',
  //       component: _import('fossil/edit'),
  //       name: 'edit',
  //       hidden: true,
  //       meta: {
  //         title: 'edit',
  //         icon: 'table'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   component: Layout,
  //   name: 'user',
  //   meta: {
  //     title: 'user',
  //     icon: 'table'
  //   },
  //   children: [
  //     {
  //       path: 'edit',
  //       component: _import('user/info'),
  //       name: 'edit',
  //       meta: {
  //         title: 'edit',
  //         icon: 'table'
  //       }
  //     }
  //   ]
  // },
  // { path: '*', redirect: '/404', hidden: true }
]

