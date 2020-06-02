async function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = {
        name: 'capt',
        age: 100
      };
      resolve(user);
    }, 3000);
  });
}

var user = await fetchUser();
console.log(user);
