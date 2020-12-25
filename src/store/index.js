import Vue from 'vue'
import Vuex from 'vuex'

// modules
import taskList from './modules/taskList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    taskList
  }
})
