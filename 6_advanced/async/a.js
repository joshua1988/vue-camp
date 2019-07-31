async function logText() {
  var text = await fetchText();
  return text;
}

async function logUser() {
  var user = await fetchUser();
  return user;
}

async function login() {
  var text = await logText();
  var user = await logUser();
}

// await new Promise();
