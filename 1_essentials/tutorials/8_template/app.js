var app = new Vue({
  el: '#app',
  data: {
    message : 'Hello Vue.js',
    // 할일 #4
    // 새로운 데이터 속성을 1개 추가하고, data bindings 를 이용하여 화면에 표시해보세요.

    uid: '10',
    // 할일 #3
    // uid 를 변경하고 해당 uid 의 변경 여부를 화면 요소 검사로 확인해보세요.

    flag: true
    // 할일 #2
    // 위 flag 값을 false 로 변경하였을 때 화면에 어떤 영향을 주는지 확인해보세요.
  },
  methods: {
    clickBtn() {
      console.log("hi");
    }
    // 할일 #1
    // eventMethod 를 하나 추가하고 template 에서 해당 이벤트를 실행할 수 있는 button 을 하나 추가하세요.
  }
});
