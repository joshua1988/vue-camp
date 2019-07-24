import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    userId: '',
    username: '',
  },
  mutations: {
    setUserId(state, id) {
      // console.log(object);
      // debugger;
      state.userId = id;
    },
    setUsername(state, name) {
      state.username = name;
    },
  },
  actions: {
    LOGIN(context, id) {
      let url = 'https://jsonplaceholder.typicode.com/users';
      let data = {
        username: id,
      };
      axios
        .post(url, data)
        .then(response => {
          let name = response.data.username;
          // this.$store.commit('setUsername', name);
          context.commit('setUsername', name);
          // this.state.username = response.data.username;
          // let name = response.data.username;
          // this.$store.commit('setUsername', name);
        })
        .catch(error => console.log(error));
    },
  },
});
