<template>
  <div>
    <div>
      id: <input type="text" v-model="id">
    </div>
    <div>
      pw: <input type="text">
    </div>
    <button @click="loginUser">login</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			id: '',
		};
	},
	methods: {
		loginUser() {
			this.$emit('pass:id', this.id);
		},
	},
};
</script>

<style>
</style>
