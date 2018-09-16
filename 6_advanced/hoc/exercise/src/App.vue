<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">
      <contact-list></contact-list>
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'app',
  components: {
    ContactList,
    UserList,
  }
}
</script>

<style src="./assets/css/app.css"/>