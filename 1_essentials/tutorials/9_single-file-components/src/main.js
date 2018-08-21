import Vue from 'vue'
import App from './App.vue'
// Global Components
import NavHeader from './components/NavHeader.vue';

Vue.component('nav-header', NavHeader);
// 할일 #2
// Global 컴포넌트를 하나 더 등록하고 nav-header 아래에 렌더링 해보세요.

new Vue({
  el: '#app',
  render: h => h(App)
})
