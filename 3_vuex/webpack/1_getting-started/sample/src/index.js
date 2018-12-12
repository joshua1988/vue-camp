import _ from 'lodash';
// 1
// import { sum } from './math.js';
// import sum from './math.js';
// 2
// import $ from 'jquery';

// index.js
function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = sum(10, 20);

  return element;
}

document.body.appendChild(component());