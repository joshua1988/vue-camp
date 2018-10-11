// 라이브러리
var _ = require('lodash');

// 애플리케이션 로직 - 비즈니스 로직 - 앱 로직
function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());