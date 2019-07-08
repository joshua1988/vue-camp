// 내보낼 때
export var a = 10;
export var sum = (a, b) => {
  return a + b;
};
export function subtract(a, b) {
  return a - b;
}

// 가져올 때
import { a, sum } from '파일 경로';
