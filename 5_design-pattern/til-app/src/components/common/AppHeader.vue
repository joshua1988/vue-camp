<template>
	<header>
		<div>
			<template v-if="!isLogin">
				<router-link to="/signup">회원 가입</router-link> |
				<router-link to="/login">로그인</router-link>
			</template>
		</div>
		<div>
			<span>{{ this.$store.state.username }}</span>
			<button v-if="isLogin" type="button" @click="logout">로그 아웃</button>
		</div>
	</header>
</template>

<script>
// #2
import { mapGetters } from 'vuex';

export default {
	methods: {
		async logout() {
			await this.$store.dispatch('LOGOUT');
			this.$router.push({
				path: '/',
			});
		},
	},
	computed: {
		// #2
		...mapGetters(['isLogin']),
		// a: 10,
		// b: 20
		// ...{
		// 	a: 10,
		// 	b: 20
		// }
		// #1
		// isLogin() {
		// 	return this.$store.getters.isLogin;
		// },
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
