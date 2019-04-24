<template>
  <header :class="{ 'fixed': isFixed }" ref="appHeader">
    <div>
      <router-link to="/" class="logo">TIL</router-link>
    </div>
    <div class="navigations">
      <template v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </template>
      <template v-else>
        <router-link to="/new">Add</router-link> |
        <router-link to="/">Logout</router-link>
      </template>
      <!-- <router-link to="/main">Main</router-link> -->
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  data() {
    return {
      navHeight: 0,
      isFixed: false,
    }
  },
  methods: {
    checkHeight() {
      if (window.scrollY > 0) {
        this.isFixed = true;
        document.querySelector('.list-container').classList.add('sticky');
      } else {
        this.isFixed = false;
        document.querySelector('.list-container').classList.remove('sticky');
      }
    }
  },
  mounted() {
    this.navHeight = this.$refs.appHeader.offsetHeight;
    window.addEventListener('scroll', this.checkHeight);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkHeight);
  },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}
.logo {
  font-size: 30px;
}
.navigations > a {
  margin-left: 3px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
