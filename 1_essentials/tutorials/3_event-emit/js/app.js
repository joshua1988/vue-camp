Vue.component('child-component', {
  template: '<button v-on:click="clickBtn">emit event</button>',
  methods: {
    clickBtn: function() {
      this.$emit('send');
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
});