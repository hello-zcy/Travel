import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  city: '北京'

}
const getters = {
}
const store = new Vuex.Store({
  state,
  getters
})

export default store
