## 코드 리팩토링 포인트 - 프런트엔드 개발 관점

1. 화면 렌더링을 방해하는 `<script>` 태그는 모두 `</body>` 태그의 앞으로 이동
2. `<script>` 태그는 모두 HTML5 기준으로 변환

```html
<!-- HTML4 -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

3. 배열 선언은 아래와 같이 배열 기호를 활용합니다.

```js
var arr = new Array(); // X
var arr = []; // O
```

## 코드 리팩토링 포인트 - Vue.js 관점

1. ASP의 서버 사이드 스크립트 방식을 변환

![ASP에서 REST API 구조로 변환](/Users/gihyojoshuajang/Documents/Programming/vue-camp/7_real-world/legacy/pps-project/images/asp-to-rest.png)

[참고 자료](https://www.codeproject.com/Articles/1252477/Building-a-Restful-API-With-ASP-NET-Web-API)

2. DOM 접근 방식

```js
// 166
var test = document.getElementsByName("ipchalDetail"); // X
var test = this.$refs.ipchalDetail; // O
```

3. 뷰 디렉티브 활용

v-for 디렉티브 사례 1

```html
<!-- X -->
<ul class="tab">
  <a href="/aipchal/useritem/akonggosearchitem.asp"><li data-tab="tab3" >물품</li></a>
  <a href="/aipchal/usersvc/akonggosearchsvc.asp"><li data-tab="tab2" >용역</li></a>
  <a href="akonggosearch.asp"><li class="current" data-tab="tab1" >공사</li></a>
</ul>
```

```html
<!-- O -->
<ul class="tab">
  <a v-for="tabItem in tabItems" :href="tabItem.link">
    <li :data-tab="tabItem.tab">{{ tabItem.text }}</li>
  </a>
</ul>

<script>
new Vue({
  data: {
    tabItems: [
      { link: '/aipchal/useritem/akonggosearchitem.asp', tab: 'tab3', text: '물품' },
      { link: '/aipchal/usersvc/akonggosearchsvc.asp', tab: 'tab2', text: '용역' },
      { link: 'akonggosearch.asp', tab: 'tab1', text: '공삭' }
    ]
  }
})
</script>
```

v-for 디렉티브 사례 2

```html
<!-- X -->
<tr>
  <td width="48%" align="left">
    <input type="text" name="predate" id="predate" value="<%=predate%>" onfocus="blur()" data-role="none" style="width: 90%; border: 1px solid #aaaaa9; font-size: 9pt; padding:1px 0; margin: 0; text-align: center;">
  <td width="2%" style="position: relative; left: -4px;">~</td>
  <td width="48%" align="left">
    <input type="text" name="postdate" id="postdate" value="<%=postdate%>" onfocus="blur()" data-role="none" style="width: 90%; border: 1px solid #aaaaa9; font-size: 9pt; padding:1px 0; margin:0; text-align: center;">
  </td>
</tr>
```

```html
<!-- O -->
<tr>
  <td v-for="td in tds"></td>
</tr>

<script>
new Vue({
  data: {
    tds: [
      {},
      {}
    ]
  }
})
</script>
```