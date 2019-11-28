import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
import store from './store/index';
import * as filters from './utils/filters';
import { mapActions } from 'vuex';

Object.keys(filters).forEach(function(key) {
	Vue.filter(key, filters[key]);
});

// ...
// Object.assign();

// var arr = [];
// arr.map();
// arr.filter();
// arr.reduce();

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
