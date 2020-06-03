function fetchUser() {
  return new Promise();
}

async function init() {
  await fetchUser();
}

async function fetchUser() {
  const response = await axios.get();
  return response;
}

const result = await fetchUser();