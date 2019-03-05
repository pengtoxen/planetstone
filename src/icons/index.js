import Vue from 'vue'
import SvgIcon from '@/components/svgIcon.vue'// svg组件
Vue.component('svg-icon', SvgIcon)

import generateIconsView from './generateIconsView.js'// just for @/views/icons , you can delete it
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it
