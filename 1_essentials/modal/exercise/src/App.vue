<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <button @click="modalOpen = true" type="button" class="btn btn-blue">Open Modal</button>
    </div>

    <div class="modal-backdrop" v-show="modalOpen">
      <div class="modal">
        <h1 class="text-center text-2xl font-bold mb-4">
          Exciting new features are here!
        </h1>
        <p class="text-center text-grey-darker mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
        </p>
        <div class="text-center">
          <button @click="dismiss" type="button" class="btn btn-blue">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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