<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">
      <contact-list></contact-list>
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
import CreateList from './components/CreateList.js'
import ContactList from './components/ContactList.vue'
import UserList from './components/UserList.vue'

const ContactListHOC = CreateList(ContactList, './contacts.json');
const UserListHOC = CreateList(UserList, 'https://jsonplaceholder.typicode.com/users');

export default {
  name: 'app',
  components: {
    ContactList: ContactListHOC,
    UserList: UserListHOC
  }
}
</script>

<style src="./assets/css/app.css"/>