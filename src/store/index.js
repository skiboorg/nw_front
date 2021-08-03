import Vue from 'vue'
import Vuex from 'vuex'

import componentState from './component-state-store'
import auth from './auth'
import weapons from './weapons'
import data from './data'

Vue.use(Vuex)
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      componentState,
      auth,
      weapons,
      data
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
