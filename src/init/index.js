import Vue from 'vue'

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

//mui样式
import mui from "@/../static/mui/js/mui.min.js";
Vue.prototype.$mui = mui;
import '@/../static/mui/css/mui.min.css'

//自定义全局样式
import '@/styles/index.scss'

//vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);