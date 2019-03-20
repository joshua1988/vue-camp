// math.js
export var pi = 3.14;
export var sum = function(a, b) {
  return a + b;
}

// app.js
import { 들고올 변수, 함수 } from '파일 경로';
import { pi, sum } from './math.js';
sum(10, 20);