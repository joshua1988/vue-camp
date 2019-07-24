<template>
  <div>
    <!-- AppHeader 컴포넌트 영역 -->
    <app-header v-bind:propsdata="loginId"></app-header>
    <!-- UserForm 컴포넌트 영역-->
    <app-content v-on:pass2:id="logId">
    </app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
	components: {
		AppHeader,
		AppContent,
	},
	data() {
		return {
			loginId: '',
		};
	},
	methods: {
		logId(id) {
			this.loginId = id;
		},
	},
};
</script>

<style>
</style>
