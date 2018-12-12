<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="loggedIn">
        <p>{{ name }}님 환영합니다. {{ email }}으로 로그인 하셨습니다.</p>
        <button @click="logout" class="btn">logout</button>
      </div>
      <button v-else @click="login" class="btn">login</button>
    </transition>
  </div>
</template>

<script>
// import firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyAFUPTFCBaE_WgoqSFBL-Pe3yr_LhCZR10",
//   authDomain: "vue-camp.firebaseapp.com",
//   databaseURL: "https://vue-camp.firebaseio.com",
//   projectId: "vue-camp",
//   storageBucket: "",
//   messagingSenderId: "168069510247"
// };
// firebase.initializeApp(config);

// const storage = localStorage;

export default {
  data() {
    return {
      name: '',
      email: '',
      loggedIn: false,
    }
  },
  // methods: {
  //   login() {
  //     var provider = new firebase.auth.GoogleAuthProvider();

  //     firebase.auth().signInWithPopup(provider)
  //       .then(({ user }) => {
  //         // storage.setItem('VUE-CAMP', JSON.stringify(user));
  //         this.loginSuccessHandler(user);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         alert('login error');
  //       });
  //   },
  //   logout() {
  //     firebase.auth().signOut()
  //       .then(() => {
  //         // storage.removeItem('VUE-CAMP');
  //         this.loggedIn = false;
  //       })
  //       .catch(error => console.log(error));
  //   },
  //   loginSuccessHandler(user) {
  //     const { displayName, email } = user;
  //     this.name = displayName;
  //     this.email = email;
  //     this.$router.options.auth = true;
  //     this.loggedIn = true;
  //   }
  // },
  // created() {
  //   // if (storage.getItem('VUE-CAMP')) {
  //   //   const user = JSON.parse(storage.getItem('VUE-CAMP'));
  //   //   this.loginSuccessHandler(user);
  //   // }
  // }
}
</script>

<style scoped>
.btn {
  font-weight: 500;
  color: #3eaf7c;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.5rem 1.4rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
