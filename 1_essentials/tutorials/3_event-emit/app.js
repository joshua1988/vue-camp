// Vue.component('child-component', {
//   template: '<button v-on:click="clickBtn">emit event</button>',
//   methods: {
//     clickBtn: function() {
//       // 할일 #1 - 상위 컴포넌트로 이벤트를 발생
//       this.$emit('change:str');
//     }
//   }
// });

Vue.component('child-component', {
  props: ['callback'],
  template: '<button v-on:click="callback">emit event</button>',
  // methods: {
  //   clickBtn: function() {
  //     // 할일 #1 - 상위 컴포넌트로 이벤트를 발생
  //     this.$emit('change:str');
  //   }
  // }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    changeMessage: function() {
      this.message = 'Hi';
    }
  }
});