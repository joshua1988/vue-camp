// 전역 컴포넌트 등록
Vue.component('global-component', {
  template: '<p><strong>This is a global component</strong></p>'
});

// 지역 컴포넌트 내용
var cmp = {
  template: '<p><strong>This is a local component</strong></p>'
}

var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  },
  // 지역 컴포넌트 등록
  components: {
    'local-component' : cmp
  },

  // 실습 #2 - `another-local-component` 컴포넌트 지역 등록
  // <p>This is another local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
});

// 실습 #1 - `another-global-component` 컴포넌트 전역 등록
// <p>This is another global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
