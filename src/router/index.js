import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout.vue'

export const constantRouterMap = [
  // zym
  { path: '/detail', component: _import('detail/detail') },
  { path: '/order', component: _import('orders/order')},
  //{ path: '/test', component: _import('test/test')},
  { path: '/binding', component: _import('login/binding'), hidden: true },
  { path: '/binding/list', component: _import('login/bindingList'), hidden: true },
  { path: '/register', component: _import('login/register'), hidden: true },
  { path: '/register/list', component: _import('login/registerList'), hidden: true },
  { path: '/coupon', component: _import('coupon/index'), hidden: true },
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
        path: '/center/integral',//我的积分
        component: _import('center/integral'),
        name: "integral",
        meta: {
          title: 'integral',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/optometry',//我的验光单
        component: _import('optometry/optometry'),
        name:"optometry",
        meta: {
          title: 'optometry',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/optometry/detail',//我的验光单-详情/detail
        component: _import('optometry/detail'),
        name:"optometryDetail",
        meta: {
          title: 'optometryDetail',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/center/interests',//我的权益
        component: _import('center/interests'),
        name:"interests",
        meta: {
          title: 'interests',
          icon: '',
          noCache: true,
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
        path: '/center/emailedit',
        component: _import('center/emailEdit'),
        name: 'emailedit',
        meta: {
          title: 'emailedit',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/center/nameedit',
        component: _import('center/nameEdit'),
        name: 'nameEdit',
        meta: {
          title: 'nameEdit',
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
        children: [
          {
            path: 'map',
            component: _import('store/map'),
            name: 'map',
            meta: {
              title: 'map',
              icon: '',
              noCache: true,
              footTabCss: 'app-main-no-padding'
            }
          },
        ]
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
      },
      {
        path: '/myOrder',//我的订单
        component: _import('myOrder/index'),
        name: 'myOrder',
        meta: {
          title: 'myOrder',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/refund',//我的订单-退款售后
        component: _import('myOrder/refund'),
        name: 'refund',
        meta: {
          title: 'refund',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/detail',//我的订单-订单详情
        component: _import('myOrder/detail'),
        name: 'detail',
        meta: {
          title: 'detail',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/submitRefund',//我的订单-提交退款
        component: _import('myOrder/submitRefund'),
        name: 'submitRefund',
        meta: {
          title: 'submitRefund',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/refundDetail',//我的订单-退款详情
        component: _import('myOrder/refundDetail'),
        name: 'refundDetail',
        meta: {
          title: 'refundDetail',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/evaluate',//我的订单-评价
        component: _import('evaluate/index'),
        name: 'evaluate',
        meta: {
          title: 'evaluate',
          icon: '',
          noCache: true,
        }
      },
      {
        path: '/myOrder/success',//我的订单-评价
        component: _import('evaluate/success'),
        name: 'success',
        meta: {
          title: 'success',
          icon: '',
          noCache: true,
        }
      },
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }), // 跳转到新的页面时,定位到最顶端
  routes: constantRouterMap,
})

