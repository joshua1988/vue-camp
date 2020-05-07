var express = require('express');
var app = express();

app.get('/users', function(request, response) {
  if (request.error) {
    return new Error();
  }
  var result = [
    { name: '알파고', age: 100 },
    { name: 'Hulk', age: 2000 }
  ]
  var result = db.query('get..')
  return result;
  // response.json(result);
})