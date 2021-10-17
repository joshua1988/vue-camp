---
title: Class
---

# Class

클래스(Class)는 객체를 생성하기 위한 템플릿입니다. 상태와 메서드(method)를 구성해서 객체를 생성합니다.

## 인스턴스 생성

### new

`new` 키워드를 사용해서 클래스의 인스턴스(instance)를 생성할 수 있습니다.

```js
class MyClass{}
const myclass = new MyClass();
```

## 생성자

생성자(constructor)는 클래스의 인스턴스를 생성하고 초기화하는 메서드입니다.

```js
class MyClass {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
```

생성자는 클래스 내에서 한번만 사용할 수 있는 특수한 메서드입니다. 생성자 메서드 안에서 사용하는 `this` 키워드는 클래스가 생성할 인스턴스를 가리킵니다. 생성자는 생략할 수 있으며 생략하는 경우는 빈 객체를 생성하게 됩니다.

## method 정의

클래스의 메서드는 행동이라고 할 수 있습니다. `function` 키워드 없이 생성합니다.

```js
class MyClass{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    callMyName(){
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

const john = new MyClass("Smith","John");
john.callMyName(); // "Hello Smith John!"
```

### static method

클래스에는 정적(static) 메서드라는 엄격한 문법을 지켜야 하는 메서드가 있습니다. 정적 메서드는 `static` 키워드로 생성합니다. 정적 메서드는 일반 메서드와 다르게 클래스 이름으로 호출해야 합니다. 즉, 정적 메서드는 `this` 키워드를 사용할 수 없습니다.

## 상속을 통한 클래스 확장

클래스 상속(Class Inheritance)은 기존에 있던 클래스에서 사용하고 싶은 기능이 있다면 상속을 통해 이어받아서 그대로 사용하는 것입니다. `extends` 키워드를 사용합니다.

```js
class MyClass{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    callMyName(){
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}


class MySonClass extends MyClass{
  constructor(firstname,lastname,age){
    super(firstname,lastname);
    this.age = age;
  }
  
  callMySonAge(){
    return `${this.firstname} is ${this.age} old.`;
  }
}


const john = new MyClass("Smith","John");
console.log(john.callMyName()); // "Hello Smith John!"

const john_son = new MySonClass("Jackson","John",20);
console.log(john_son.callMyName()); // "Hello Jackson John!"
console.log(john_son.callMySonAge()); // "Jackson is 20 old."
```

기존의 코드를 사용하므로 필요한 것이 있으면 다른 점만 구현하면 됩니다. 코드의 재사용 관점에서 유용합니다.

### super

부모의 클래스를 참조하거나 부모 클래스의 생성자를 호출할 경우는 `super`를 사용합니다.

```js
class MyClass{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    callMyName(){
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}


class MySonClass extends MyClass{
    constructor(firstname,lastname,age){
        super(firstname,lastname); // 부모 클래스의 생성자를 호출
        this.age = age;
    }
  
    callMySonAge(){
        // 부모 클래스에 대한 참조
        return super.callMyName()+` He is ${this.age} old.`;
    }
}

const john_son = new MySonClass("Jackson","John",20);
console.log(john_son.callMyName()); // "Hello Jackson John!"
console.log(john_son.callMySonAge()); // "Hello Jackson John! He is 20 old."
```

- 부모 클래스의 생성자를 호출
`super` 메서드는 자식 클래스의 생성자 메서드 안에서 부모 클래스의 생성자를 호출할 수 있습니다. 부모 클래스의 인스턴스를 생성하게 됩니다. 만약, 자식 클래스의 생성자에서 `super` 메소드를 호출하지 않으면 참조 에러(ReferenceError)가 발생합니다.

```js
class MyClass{}

class MySonClass extends MyClass{
  constructor(){}
}

const john_son = new MySonClass();
//"ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

- 부모 클래스에 대한 참조
부모 클래스의 필드나 메서드를 참조할 때 사용합니다.

## 프로토타입 기반의 클래스
ES6(ECMAScript 2015)부터 클래스가 문법에 추가되었습니다. 자바스크립트는 프로토타입 기반의(prototype-based) 객체지향 언어입니다. 이전의 ES5(ECMAScript 5)에서는 프로토타입, 클로저(Closure)를 사용했습니다.

ES6의 클래스도 함수이고 프로토타입 기반의 객체를 무시하고 완전히 새로 생긴 문법이 아닙니다. ES6의 클래스는 내부적으로는 프로토타입의 패턴을 따릅니다.

### class방식과의 비교

#### 생성자
ES6 클래스의 생성자는 클래스 내부에 `constructor` 키워드를 생성해서 정의합니다. 반면, ES5의 생성자는 일반 함수가 `new` 키워드로 함수를 호출하면 생성자 함수로 작동하게 됩니다.

#### 프로토타입 메서드(prototype method)
ES6 클래스 내부의 일반 메서드와 같은 동작을 합니다. `constructor` 키워드를 가진 특정 메소드나 `static` 키워드를 가진 정적 메소드가 아니면 자동으로 프로토타입 객체 내부에 할당됩니다. ES5 함수는 생성자 함수의 프로토타입 내부에 할당되는 메서드입니다.
정적 메소드의 경우에는, ES6 클래스는 `static` 키워드를 사용해서 선언합니다. ES5는 생성자 함수에 메서드가 바로 정의됩니다.

#### 상속
ES6 클래스에서는 `extends` 키워드로 간단하게 상속할 수 있습니다. ES5 함수의 상속은 `Object.create()` 함수로 우선 부모 클래스의 함수를 모두 가져옵니다. 이때, 부모 생성자 함수도 같이 오기 때문에 자식 생성자 함수는 `John.prototype.constructor = John;` 를 사용해서 다시 설정해줍니다.