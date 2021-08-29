# 마크다운(Markdown) 기본 문법

- [제목 (Headings)](#제목headings)
- [문단 (Paragraphs)](#문단paragraphs)
- [줄바꿈 (Line Breaks)](#줄바꿈line-breaks)
- [강조 (Emphasis)](#강조emphasis)
- [인용문 (Blockquotes)](#인용문blockquotes)
- [목록 (Lists)](#목록lists)
- [코드 (Code)](#코드code)
- [수평선 (Horizontal Rules)](#수평선horizontal-rules)
- [링크 (Links)](#링크links)
- [사진 (Images)](#사진images)
- [이스케이프 문자 (Escaping Characters)](#이스케이프-문자escaping-characters)

---

## 제목(Headings)

n(1 ≤ n ≤ 6)개의 `#` + 공백 + 텍스트

### 📌 마크다운

```
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

### 📌 실행 결과

# h1

## h2

### h3

#### h4

##### h5

###### h6

### 다른 사용법 - h1, h2 표현 시

h1, h2는 텍스트 아래에 각각 `=`, `-`를 원하는 개수만큼 사용하여 표현할 수도 있습니다.

```
h1
=
h2
-
```

h1
=
h2
-

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 문단(Paragraphs)

문단 + 빈 줄 + 문단

### 📌 마크다운

```
I really like using Markdown. I think I'll use it to format all of my documents from now on.

Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs. Don't put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this.
```

### 📌 실행 결과

I really like using Markdown. I think I'll use it to format all of my documents from now on.

Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs. Don't put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this.

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 줄바꿈(Line Breaks)

텍스트 + 공백 2개

### 📌 마크다운

```
첫 번째 줄입니다. 이 문장 뒤에 공백 2개 있습니다.  
두 번째 줄입니다.
```

### 📌 실행 결과

첫 번째 줄입니다. 이 문장 뒤에 공백 2개 있습니다.  
두 번째 줄입니다.

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 강조(Emphasis)

|  종류  |             사용법             |
| :----: | :----------------------------: |
|  굵게  | `**`/`__` + 텍스트 + `**`/`__` |
| 기울임 |   `*`/`_` + 텍스트 + `*`/`_`   |
| 취소선 |      `~~` + 텍스트 + `~~`      |

### 📌 마크다운

```
**굵게(Bold)** 표현하는 방법 1

__굵게(Bold)__ 표현하는 방법 2

*기울임(Italic)* 표현하는 방법 1

_기울임(Italic)_ 표현하는 방법 2

~~취소선~~ 표현하는 방법
```

### 📌 실행 결과

**굵게(Bold)** 표현하는 방법 1

__굵게(Bold)__ 표현하는 방법 2

*기울임(Italic)* 표현하는 방법 1

_기울임(Italic)_ 표현하는 방법 2

~~취소선~~ 표현하는 방법

### ※ 주의 사항 - 단어 중간에 사용 시

#### 굵게(Bold)

|   구분   |      🟢 Do       |     🔴 Don't     |
| :------: | :--------------: | :--------------: |
| 마크다운 | `Love**is**bold` | `Love__is__bold` |
| 실행결과 |  Love**is**bold  |  Love__is__bold  |

#### 기울임(Italic)

|   구분   |    🟢 Do     |   🔴 Don't   |
| :------: | :----------: | :----------: |
| 마크다운 | `A*cat*meow` | `A_cat_meow` |
| 실행결과 |  A*cat*meow  |  A_cat_meow  |

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 인용문(Blockquotes)

`>` + 문단

### 📌 마크다운

#### 인용문

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```

#### 여러 문단이 있는 인용문

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

#### 중첩된 인용문

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

### 📌 실행 결과

#### 인용문

> Dorothy followed her through many of the beautiful rooms in her castle.

#### 여러 문단이 있는 인용문

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

#### 중첩된 인용문

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 목록(Lists)

|      종류      |           사용법            |
| :------------: | :-------------------------: |
| 순서 있는 목록 | 숫자 + `.` + 공백 + 텍스트  |
| 순서 없는 목록 | `-`/`*`/`+` + 공백 + 텍스트 |

### 📌 마크다운

#### 순서 있는 목록

```
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
```

#### 순서 없는 목록

```
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

### 📌 실행 결과

#### 순서 있는 목록

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

#### 순서 없는 목록

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

### 다른 요소 추가

목록의 연속성을 유지하면서 목록에 다른 요소를 추가하려면 공백 4개 또는 탭 1개로 들여쓰기합니다.

```
1. This is the first list item.

    I need to add another paragraph below the second list item.

    - Indented item
    - Indented item

2. Here's the second list item.

    > A blockquote would look great below the second list item.

3. And here's the third list item.
```

1. This is the first list item.

    I need to add another paragraph below the second list item.

    - Indented item
    - Indented item

2. Here's the second list item.

    > A blockquote would look great below the second list item.

3. And here's the third list item.

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 코드(Code)

|  종류  |                                                    사용법                                                     |
| :----: | :-----------------------------------------------------------------------------------------------------------: |
| 인라인 |                                                \` + 코드 + \`                                                 |
|  블럭  | 모든 행 들여쓰기(최소 4개의 공백 또는 하나의 탭만큼)<br>또는<br>\`\`\` + 줄바꿈 + 코드 블럭 + 줄바꿈 + \`\`\` |

### 📌 마크다운

#### 인라인

```
At the command prompt, type `nano`.

``Use `code` in your Markdown file.``
```

#### 블럭

```
    <html>
      <head>
      </head>
    </html>
```

````
```
<html>
    <head>
    </head>
</html>
```
````

### 📌 실행 결과

#### 인라인

At the command prompt, type `nano`.

`` Use `code` in your Markdown file. ``

#### 블럭

    <html>
      <head>
      </head>
    </html>

```
<html>
    <head>
    </head>
</html>
```

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 수평선(Horizontal Rules)

n(n >= 3)개의 `*`/`-`/`_` + 줄바꿈

### 📌 마크다운

```
***

----

_____
```

### 📌 실행 결과

***

----

_____

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 링크(Links)

### 📌 마크다운

#### 링크 텍스트

```
<!-- [링크 텍스트](링크) -->

[Craking Vue.js](https://joshua1988.github.io/vue-camp/)
```

#### URL 또는 이메일 주소

```
<https://joshua1988.github.io/vue-camp/>
<vue@example.com>
```

#### 문서 내 이동

```
<!-- [링크 텍스트](#제목) -->

[눌러서 목차로 이동](#마크다운markdown-기본-문법)
```

> 제목 매칭 방법
> 1. 목적지 제목(Heading) 복사 붙여넣기 "#마크다운(Markdown) 기본 문법"
> 2. 특수문자 제거 "#마크다운Markdown 기본 문법"
> 3. 스페이스 개수만큼 `-`로 변경 "#마크다운Markdown-기본-문법"
> 4. 대문자 -> 소문자 "#마크다운markdown-기본-문법"

### 📌 실행 결과

#### 링크 텍스트

<!-- [링크 텍스트](링크) -->

[Craking Vue.js](https://joshua1988.github.io/vue-camp/)

#### URL

<https://joshua1988.github.io/vue-camp/>  
<vue@example.com>

#### 문서 내 이동

<!-- [링크 텍스트](#제목) -->

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 사진(Images)

![대체 텍스트](사진 링크)

### 📌 마크다운

#### 삽입

```
<!-- ![대체 텍스트](사진 링크) -->

![캡틴판교](https://avatars.githubusercontent.com/u/3272748?v=4)
```

#### 삽입 후 링크

```
<!-- [![대체 텍스트](사진 링크)](링크) -->

[![캡틴판교](https://avatars.githubusercontent.com/u/3272748?v=4)](https://github.com/joshua1988/vue-camp)
```

#### 크기 조절

```
<!-- <img src="사진 링크" width="넓이" height="높이"> -->

<img src="https://avatars.githubusercontent.com/u/3272748?v=4" width="100" height="100">
```

### 📌 실행 결과

#### 삽입

<!-- ![대체 텍스트](사진 링크) -->

![캡틴판교](https://avatars.githubusercontent.com/u/3272748?v=4)

#### 삽입 후 링크

<!-- [![대체 텍스트](사진 링크)](링크) -->

[![캡틴판교](https://avatars.githubusercontent.com/u/3272748?v=4)](https://github.com/joshua1988/vue-camp)

#### 크기 조절

<!-- <img src="사진 링크" width="넓이" height="높이"> -->

<img src="https://avatars.githubusercontent.com/u/3272748?v=4" width="100" height="100">

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)

<br>

## 이스케이프 문자(Escaping Characters)

`\` + 이스케이프 가능한 문자

| 이스케이프 가능한 문자 |   이름    |
| :--------------------: | :-------: |
|           \            | 역슬래시  |
|           \`           |   백틱    |
|           \*           |   별표    |
|           \_           |  언더바   |
|          { }           |  중괄호   |
|          [ ]           |  대괄호   |
|          < >           | 화살괄호  |
|           (            |  소괄호   |
|           #            | 해시 기호 |
|           +            | 더하기표  |
|           -            |  빼기표   |
|           .            |  마침표   |
|           !            |  느낌표   |
|           \|           |  수직선   |

### 📌 마크다운

```
\* Without the backslash, this would be a bullet in an unordered list.

* This would be a bullet in an unordered list.
```

### 📌 실행 결과

\* Without the backslash, this would be a bullet in an unordered list.

- This would be a bullet in an unordered list.

<br>

[눌러서 목차로 이동](#마크다운markdown-기본-문법)
