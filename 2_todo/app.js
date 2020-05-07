// 콜백 방식
$.ajax('domain.com/users', function(response) {
  console.log(response);
})

var a = { name: 'john', age: 100 }
var a = $.ajax('domain.com/users');