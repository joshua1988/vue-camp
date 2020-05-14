// math.js
export function sum(a, b) {
  return a + b;
}
export let pi = 3.14;

// app.js
import { 가져올 변수, 함수 } from '파일 경로';
import { sum, pi } from './math.js';
// import { pi } from './math.js';