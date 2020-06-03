/* 
자바스크립트 비동기 처리
1. 콜백
2. 프로미스
3. 프로미스 + 제너레이터(function*)
4. async & await 
*/

// 자바스크립트의 동작 방식
initApplication(); // 실행
// var user = $.ajax('domain.com/users/1'); // 실행 (결과를 기다리지 않는다)
fetchUser()
  .then(renderUserProfile);
renderUserProfile(); // 실행

// 콜백
var user;
$.ajax('domain.com/users/1', function(result) {
  user = result;
  $.ajax('domain.com/images/1', function() {

  })
});

// 프로미스
fetchUser()
  .then(fetchUserProfile)
  .then(fetchUserImage)
  .then(renderUserInfo)
  .catch(error => {

  });

// function fetchUserProfile() {
//   return new Promise()
// }

// async & await
function fetchUser() {
  return $.ajax('domain.com/users/1');
}

async function init() {
  var user = await fetchUser();
  if (user) {
    console.log('hi');
  }
}