var name = 'App';
var router = {
  routes: [
    {
      path: 'sth',
      component: 'sthComponent',
    },
  ],
};

function example() {
  return {
    // TODO: 아래의 속성을 축약해보세요.
    name: name,
    // TODO: 아래의 속성을 축약해보세요.
    router: {
      routes: [
        {
          path: 'sth',
          component: 'sthComponent',
        },
      ],
    },
    data: {
      id: 1,
    },
  };
}

export { example };
