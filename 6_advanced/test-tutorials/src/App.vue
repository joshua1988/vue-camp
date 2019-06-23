<template>
  <div id="app">
    <!-- <login-form></login-form> -->
		<user-view></user-view>
  </div>
</template>

<script>
// import LoginForm from './components/form/LoginForm.vue';
import UserView from './components/list/UserView.vue';

export default {
	components: {
		// LoginForm,
		UserView,
	},
};
</script>


<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
