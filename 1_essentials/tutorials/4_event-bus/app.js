// 할일 #1 - 이벤트 버스로 사용할 새로운 뷰 인스턴스 생성


Vue.component('child-component', {
  template: '<button v-on:click="clickBtn">emit event</button>',
  methods: {
    clickBtn: function() {
      // 할일 #2 - 버튼을 클릭 했을 때 이벤트를 발생시키는 코드 구현
      
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  created: function() {
    // 할일 #3 - 이벤트 버스로 이벤트를 받았을 때 message 값을 변경
    
  }
});