// 설정
var express = require('express');
var app = express();
var db = require('mysql');

// 요청을 받는 코드
app.get('products', function(request, response) {
  var products = db.query('select...');
  response.send(products);
})