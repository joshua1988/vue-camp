<template>
  <header style="display: flex; justify-content: space-between;">
    <div>
      <strong>Why Vuex</strong>
    </div>
    <div>
      <small>{{ this.$store.state.userId }}</small>
    </div>
  </header>
</template>

<script>
export default {
	// props: ['loginId'],
	props: {
		// 1. props의 타입 정의
		propsdata: String,
		// 2. props의 상세 정보 정의
		// loginId: {
		//   type: String,
		//   required: true,
		//   default: () => false
		// }
	},
};
</script>

<style>
</style>
