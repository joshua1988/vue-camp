import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let storage = {
  fetch() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        let item = localStorage.key(i);
        arr.push(item);
      }
    }
    return arr;
  }
}

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    // fetchTodoItems(state) {
    //   state.todoItems = storage.fetch();
    // }
    removeTodoItem(state, todoItem) {
      // state.todoItems 
      state.todoItems.splice(todoItem.index, 1);
      localStorage.removeItem(todoItem.item);
    }
  }
});