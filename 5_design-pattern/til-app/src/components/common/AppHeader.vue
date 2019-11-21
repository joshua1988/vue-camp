<template>
	<header>
		<div>
			<router-link to="/signup">회원 가입</router-link> |
			<router-link to="/login">로그인</router-link>
		</div>
		<!-- <div>{{ this.$store.state.username }}</div> -->
	</header>
</template>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
