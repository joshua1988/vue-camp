var eventBus = new Vue();

Vue.component('child-component', {
  template: '<button v-on:click="clickBtn">emit event</button>',
  methods: {
    clickBtn: function() {
      eventBus.$emit('send');
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  created: function() {
    var appInstance = this;
    eventBus.$on('send', function() {
      appInstance.message = 'Hello from Child Component';
    })
  }
});