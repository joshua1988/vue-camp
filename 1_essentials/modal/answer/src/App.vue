<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <button @click="modalOpen = true" type="button" class="btn btn-blue">Open Modal</button>
    </div>

    <modal :show="modalOpen" @close="dismiss"></modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  components: {
    Modal,
  },
  data () {
    return {
      modalOpen: false,
    }
  },
  methods: {
    dismiss() {
      this.modalOpen = false;
    }
  }
}
</script>

<style src="./assets/css/app.css"/>