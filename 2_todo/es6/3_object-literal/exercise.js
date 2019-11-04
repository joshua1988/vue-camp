var name = 'App';
var router = {
  routes: [
    {
      path: 'sth',
      component: 'sthComponent',
    },
  ],
};

// const router = new VueRouter({})

// new Vue({
//   el: '',
//   data: {},
//   router,
//   methods: {},
// })

function example() {
  return {
    // TODO: 아래의 속성을 축약해보세요.
    name,
    // TODO: 아래의 속성을 축약해보세요.
    router,
    data: {
      id: 1,
    },
  };
}

export { example };
