---
title: Form
---

# Form

앞에서 연습했던 제이쿼리의 사고 방식에서 벗어나기 위해 실습 한 개를 더 해보겠습니다. 제이쿼리로 구현된 사용자 입력폼이 아래와 같이 있을 때 어떻게 뷰로 바꿀 수 있을까요?

```html
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      id="username" type="text" placeholder="Username">
  </div>
  <div class="mb-6">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="password" type="password" placeholder="******************">
    <p class="text-red text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit">
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
      Forgot Password?
    </a>
  </div>
</form>

<script>
  $(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();

      var username = $(this).find('#username');
      var password = $(this).find('#password');

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/',
        method: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          name: username.val(),
          password: password.val()
        })
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      username.val('');
      password.val('');
    });
  });
</script>
```

[예시 코드 확인은 여기서](https://github.com/joshua1988/vue-camp/blob/master/1_essentials/form/exercise/index.html) <br>
[정답 코드는 확인은 여기서](https://github.com/joshua1988/vue-camp/blob/master/1_essentials/form/answer/src/App.vue)