var express = require('express');
var app = express();
var db = require('mysql');

// db config


// https://jsonplaceholder.typicode.com/
app.get('users/1', function() {
  // var user = { name: 'sarah' };
  var user = db.get('user');
  return user;
});