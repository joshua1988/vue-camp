---
title: Map 과 Set
---

# Map

Map 객체는 `키 와 값`을 한 쌍으로 이루어진 컬렉션입니다.


## Map 객체를 생성하는 방법

Map 객체는 Map 생성자 함수로 생성합니다.

```js
const map = new Map();

```

## Map 값 추가

Map 객체는 데이터를 추가할 때는 `Map.prototype.set`메서드를 사용합니다.

```js
// map 선언
const map = new Map();

// map 값 추가 #1
map.set('key1', 'value1');
map.set('key2', 'value2');

// map 값 추가 #2
map
  .set('key1', 'value1')
  .set('key2', 'value2');

console.log(map); // Map(2) { 'key' => 'value', 'key2' => 'value' }

```

또한, 중복된 키가 있을 때는 Map객체에 새로운 키로 저장되지 않고, 값을 덮어씁니다.

```js
// map 선언
const map = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map); // Map(1) { 'key1' => 'value2' }

```

## Map 값 삭제

Map 객체의 값을 삭제하려면 `Map.prototype.delete`메서드를 사용합니다. 또한 Map의 모든 값을 삭제할 경우에는 `Map.prototype.clear`메서드를 사용합니다.

```js
// map 선언
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

// map 값 삭제
map.delete('key1')
console.log(map); // Map(1) { 'key2' => 'value2' }

// map 모든 값 삭제
map.clear();
console.log(map); //Map(0) {}

```

## Map 반복문

Map 객체의 값들을 반복하려면 `Map.prototype.forEach`메서드를 사용합니다. 이때, forEach가 받는 콜백함수의 인수는 3가지(값, 키, map) 입니다.

```js
// map 선언
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

map.forEach((val, key) => {
  console.log(val + "," + key);
});

// 결과입니다
// value1,key1
// value2,key2


// key값 가져오기
for (let key of map.keys()){
    console.log("key : " + key);
}
// 결과입니다
// key : key1
// key : key2


// value 값 가져오기
for (const value of map.values()) {
    console.log("value : " + value);
}
// 결과입니다
// value : value1
// value : value2


// entries 반복문
for (let[key, value] of map.entries()) {
    console.log(key + " : " +value);
}
// 결과입니다
// key1 : value1
// key2 : value2

```

## Map의 주요메서드와 프로퍼티

위에서 설명한 메서드 외에 Map을 조작할 때 주로 사용하는 메서드와 프로퍼티입니다.

- `map.get(key)`: key에 해당하는 값을 반환합니다.
- `map.has(key)`: key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
- `map.size`: 요소의 개수를 나타냅니다.


# Set

Set 객체는 `중복되지 않는 값`들의 집합입니다. Set을 통해 교집합, 합집합, 차집합 등 수학적 집합 표현이 가능합니다.

## Set 객체의 생성

Set은 Set생성자 함수로 생성합니다.

```js
const set = new Set();

```

## Set 값 추가

Set객체에 값을 추가할 때는 `Set.prototype.add`메서드를 사용합니다.

```js
// set 선언
const set = new Set();

// set 값 추가 #1
set.add('javascript');
set.add('vue');
set.add('node');

// set 값 추가 #2
set.add('javascript').add('vue').add('node');

console.log(set); // Set(3) { 'javascript', 'vue', 'node' }

```

또한, Set은 중복된 값의 추가를 허용하지 않습니다.

```js
// set 선언
const set = new Set();
set.add('apple').add('banana').add('banana');

console.log(set); // Set(2) { 'apple', 'banana' }

```

## Set 값 삭제
 
Set 객체의 값을 삭제하려면 `Set.prototype.delete`메서드를 사용합니다. 또한 Set내 모든 값을 삭제할 경우에는 `Set.prototype.clear`메서드를 사용합니다.

```js
// set 선언
const set = new Set(['apple', 'banana', 'orange']);

// set 값 삭제
set.delete('banana')
console.log(set); // Set(2) { 'apple', 'orange' }

// set 전체 값 삭제
set.clear();
console.log(set); // Set(0) {}

```

## Set 반복문

Set 객체의 값들을 순회하려면 `Set.prototype.forEach`메서드를 사용합니다. 이때, forEach가 받는 콜백함수의 인수는 3가지( 요소 값, 요소 값, Set) 입니다.

 ```js
// set 선언
const set = new Set(['apple', 'banana', 'orange']);

// set 값 순회
set.forEach((val, val2, set) => {
  console.log(val, val2, set);
});
// 결과입니다.
// apple apple Set(3) { 'apple', 'banana', 'orange' }
// banana banana Set(3) { 'apple', 'banana', 'orange' }
// orange orange Set(3) { 'apple', 'banana', 'orange' }

for (const val of set) {
  console.log(val);
}
// 결과입니다.
// apple
// banana
// orange


// key 값 가져오기
for (const key of set.keys()) {
    console.log(key);
}
// 결과입니다
// apple
// banana
// orange


// value 값 가져오기 , set 에서 values() 는 keys()와 같습니다.
for (const value of set.values()) {
    console.log(value);
}
// 결과입니다
// apple
// banana
// orange


// 추가된 순서대로 반환됩니다.
for (const [key, value] of set.entries()) {
    console.log("key" + " = " + key);
    console.log("value" + " = " + value);
}
// 결과입니다
// key = apple
// value = apple
// key = banana
// value = banana
// key = orange
// value = orange

```

## Set의 주요메서드와 프로퍼티

위에서 설명한 메서드 외에 Set를 조작할 때 주로 사용하는 메서드와 프로퍼티입니다.

- `set.has(value)`: value가 존재하면 true, 존재하지 않으면 false를 반환합니다.
- `set.size`: Set 객체가 가진 원소의 수를 나타냅니다.
