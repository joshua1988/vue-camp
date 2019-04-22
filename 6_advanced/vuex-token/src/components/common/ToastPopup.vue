<template>
  <div class="toast" :class="{ move: loading }">
    hi
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    toastAnimationClass() {
      return this.loading ? 'move' : null;
    },
  }
}
</script>

<style scoped>
.toast {
  width: 400px;
  height: 56px;
  background-color: #22252e;
  border-radius: 2px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  color: white;
  position: absolute;
  bottom: -60px;
  margin-left: -200px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 500ms ease-out;
}
.toast.move {
  display: inline-block;
  transform: translateY(-60px);
  transition: transform 500ms ease-in-out;
}
</style>
