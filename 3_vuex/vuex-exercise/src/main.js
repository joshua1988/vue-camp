import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // ...
  state: {
    msg: 'hi',
    result: '',
  },
  getters: {
    exclaimMessage(state) {
      return state.msg + '!!';
    }
  },
  mutations: {
    changeMessage(state) {
      state.msg = 'hello';
    },
    setResult(state, result) {
      state.result = result;
    },
  },
  actions: {
    FETCH_USER(context) {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => {
          // state.result = json
          context.commit('setResult', json);
        });
    }
  }
});

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
