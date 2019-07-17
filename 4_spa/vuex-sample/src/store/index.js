import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    str: 'abc'
  },
  mutations: {
    changeString(state) {
      // 여기서는 this로 state를 접근할 수 없음
      // this.str = 'hello abc';
      state.str = 'hello abc';
    }
  }
});
