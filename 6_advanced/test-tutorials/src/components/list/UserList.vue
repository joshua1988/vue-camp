<template>
  <div>
		<ul>
			<li v-for="item in items" :key="item.id">
				{{ item.name }}
			</li>
		</ul>
  </div>
</template>

<script>
export default {
	props: {
		items: Array,
	},
};
</script>

<style>
</style>
