import Vue from "vue";
import Vuex from "vuex";
import com from "./modules/com";
Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    resetAllState(state, payload) {
      Object.assign(state, payload);
    }
  },
  modules: {
    com
  }
});
