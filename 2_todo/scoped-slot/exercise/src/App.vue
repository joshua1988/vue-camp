<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto mb-8">
      <contact-list></contact-list>
    </div>
    <div class="max-w-sm mx-auto mb-8">
      <contact-list></contact-list>
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';

export default {
  components: {
    ContactList
  }
}
</script>

<style src="./assets/css/app.css"/>