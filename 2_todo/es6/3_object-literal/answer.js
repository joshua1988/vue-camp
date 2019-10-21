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
    name,
    router,
    data: {
      id: 1,
    },
  };
}

export { example };
