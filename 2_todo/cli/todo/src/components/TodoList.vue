<template>
  <div>
    <ul>
      <li v-for="(item, index) in this.$store.state.todoItems">
        {{ item }}
        <button v-on:click="removeItem(item, index)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
  // props: ['propsdata'],
  // data: function() {
  //   return {
  //     items: [],
  //   }
  // },
  methods: {
    removeItem: function(item, index) {
      let todoItem = {
        item,
        index,
      };
      this.$store.commit('removeTodoItem', todoItem);
      // this.$emit('remove', item, index);
      // console.log(item, index);
      // this.items.splice(index, 1);
      // localStorage.removeItem(item);
    },
    // fetchData: function() {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //       var item = localStorage.key(i);
    //       this.items.push(item);
    //     }
    //   }
    // }
  },
  // created: function() {
  //   this.fetchData();
  // },
  beforeMount: function() {
    // console.log(this);
    var vm = this;
    bus.$on('clear', function() {
      console.log(this);
      vm.items = [];
    });
  },
  beforeDestroy: function() {
    bus.$off('clear');
  }
}

// var button = document.querySelector('button');
// button.addEventListener('click', successCallback);
// button.removeEventListener('click', successCallback);
</script>

<style>

</style>
