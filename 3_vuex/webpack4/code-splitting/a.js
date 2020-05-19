function main() {
  var a = undefined;
  B().then((result) => {
    a = result
  })
}

async function main() {
  var a = undefined;
  const result = await B();
  a + result;
}

function B() {
  return new Promise((resolve, reject) => {
    var result = 'done';
    resolve(result);
  })
}