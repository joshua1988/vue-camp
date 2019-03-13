<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">
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
  data: function() {
    return {
      items: [],
    }
  },
  methods: {
    removeItem: function(item, index) {
      // console.log(item, index);
      this.items.splice(index, 1);
      localStorage.removeItem(item);
    }
  },
  created: function() {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        var item = localStorage.key(i);
        this.items.push(item);
      }
    }
  },
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

var button = document.querySelector('button');
button.addEventListener('click', successCallback);
button.removeEventListener('click', successCallback);
</script>

<style>

</style>
