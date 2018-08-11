<template>
  <div class="modal-backdrop" v-show="show">
     <div class="modal" ref="modal" @keydown.esc="closeModal" tabindex=0>
      <h1 class="text-center text-2xl font-bold mb-4">
        Exciting new features are here!
      </h1>
      <p class="text-center text-grey-darker mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
      </p>
      <div class="text-center">
        <button @click="closeModal" type="button" class="btn btn-blue">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  // watch: {
  //   show(isShown) {
  //     if (isShown) {
  //       // #3
  //       this.$nextTick(() => {
  //         this.$refs.modal.focus();
  //       });

  //       // #1
  //       // this.$refs.modal.focus();
  //     }
  //   }
  // },
  created() {
    // #6
    this.escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.closeModal();
      }
    };

    // #4
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.show) {
        this.closeModal();
      }
    });

    // #7
    // this.$once('hook:destroyed', () => {
    //   document.removeEventListener('keydown', this.escapeHandler);
    // })
  },
  destroyed() {
    // #5
    document.removeEventListener('keydown', this.escapeHandler);
  }
}
</script>

<style>
/* 2 */
/* .modal:focus {
  outline: 0
} */
</style>
