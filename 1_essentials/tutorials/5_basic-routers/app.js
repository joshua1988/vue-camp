// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
var Foo = { 
  template: '<div>foo</div>',
  name: 'Foo'
};

var Bar = { 
  template: '<div>bar</div>',
  name: 'Bar'
};

// 2. Define some routes
var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
var router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
var app = new Vue({
  router
}).$mount('#app')

