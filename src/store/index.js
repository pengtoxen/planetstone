import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/store/modules/cache'
import errorLog from '@/store/modules/errorLog'
import user from '@/store/modules/user'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cache,
    errorLog,
    user
  },
  getters
})

export default store
