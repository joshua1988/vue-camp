// 할일 #2
// 아래에 todo-list 컴포넌트를 구현


Vue.component('todo-item', {
  props: ['todo'],
  template: '<p>{{ todo.text }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    Todos: [
      { id: 0, text: 'Learn Vue.js' },
      { id: 1, text: 'Learn Components' },
      { id: 2, text: 'Learn Props' },
      { id: 3, text: 'Learn For Loop' }
    ],
    // 할일 #1
    // 배열 안에 python, c++, java, objective-c 를 값으로 갖는
    // Languages 프로퍼티를 추가하여 위에 제작한 todo-list 컴포넌트에 전달하고,
    // 배열 값을 모두 for loop 로 출력하세요.

  }
});
