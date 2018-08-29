<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="max-w-xs mx-auto mb-8">
      <photo-card>
        <img slot="image" src="https://images.unsplash.com/photo-1495835788122-ca48931258be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc48b0187b28f7a221362b843f15755&auto=format&fit=crop&w=3450&q=80">
        <template slot="heading">
          Slot Card 1
        </template>
        <p>Slot card is more simple</p>
      </photo-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <photo-card>
        <img slot="image" src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60">
        <template slot="heading">
          Slot Card 2
        </template>
        <p>Slot maximizes the template reusability</p>
      </photo-card>
    </div>
  </div>
</template>

<script>
import PhotoCard from './components/PhotoCard.vue';

export default {
  components: {
    PhotoCard
  },
}
</script>

<style src="./assets/css/app.css"/>