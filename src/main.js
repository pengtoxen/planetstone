import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'

//全局过滤器
import * as filters from '@/filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//icon
import '@/icons/index'

//全局函数
import common from '@/common'
Vue.use(common)

//全局样式
import '@/styles/index.scss'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})