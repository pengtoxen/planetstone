import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout.vue'

export const constantRouterMap = [
    { path: '/test', component: _import('test/test'), hidden: true },
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
                    cache: true,
                    footTab: "footTabOne",
                    headTab: ""
                }
            },
            {
                path: '/goods',
                component: _import('goods/lists'),
                name: 'goods',
                meta: {
                    title: 'goods',
                    icon: '',
                    cache: true,
                    footTab: "footTabOne",
                }
            },
            {
                path: '/goods/detail',
                component: _import('goods/detail'),
                name: 'detail',
                meta: {
                    title: 'detail',
                    icon: '',
                    cache: true,
                    footTab: "",
                }
            },
            {
                path: '/center',
                component: _import('center/mine'),
                meta: {
                    title: 'center',
                    icon: 'center',
                    cache: true,
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
                    cache: true,
                }
            },
            {
                path: '/center/sign',
                component: _import('center/sign'),
                name: 'sign',
                meta: {
                    title: 'sign',
                    icon: '',
                    cache: true,
                }
            },
            {
                path: '/cate',
                component: _import('cate/index'),
                name: 'cate',
                meta: {
                    title: 'cate',
                    icon: 'cate',
                    cache: true,
                    footTab: "footTabOne"
                }
            },
            {
                path: '/case',
                component: _import('case/index'),
                name: 'case',
                meta: {
                    title: 'case',
                    icon: '',
                    cache: true,
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
                    cache: true,
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
                    cache: true,
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
                    cache: true,
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

