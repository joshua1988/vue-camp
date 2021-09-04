# 마크다운(Markdown) 가이드

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
- [표 (Tables)](#표tables)
- [체크박스 (Checkboxes)](#체크박스checkboxes-task-lists)
- [각주 (Footnotes)](#각주footnotes)
- [이모티콘 (Emoji)](#이모티콘emoji)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 줄바꿈(Line Breaks)

|    종류     |      사용법       |          참고          |
| :---------: | :---------------: | :--------------------: |
|  후행 공백  | 텍스트 + 공백 2개 | 편집기에서 보기 어려움 |
| `<br>` 태그 |  텍스트 + `<br>`  |   HTML을 지원해야 함   |

### 📌 마크다운

#### 후행 공백

```
첫 번째 줄입니다. 이 문장 뒤에 공백 2개 있습니다.  
두 번째 줄입니다.
```

#### `<br>` 태그

```
첫 번째 줄입니다.<br>
두 번째 줄입니다.
```

### 📌 실행 결과

#### 후행 공백

첫 번째 줄입니다. 이 문장 뒤에 공백 2개 있습니다.  
두 번째 줄입니다.

#### `<br>` 태그

첫 번째 줄입니다.<br>
두 번째 줄입니다.

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 코드(Code)

|   종류    |                                                    사용법                                                     |
| :-------: | :-----------------------------------------------------------------------------------------------------------: |
|  인라인   |                                                \` + 코드 + \`                                                 |
|   블럭    | 모든 행 들여쓰기(최소 4개의 공백 또는 하나의 탭만큼)<br>또는<br>\`\`\` + 줄바꿈 + 코드 블럭 + 줄바꿈 + \`\`\` |
| 구문 강조 |                     \`\`\` + 구문 강조 가능한 언어 + 줄바꿈 + 코드 블럭 + 줄바꿈 + \`\`\`                     |

| 구문 강조 가능한 언어 |   사용법   |
| :-------------------: | :--------: |
|         Bash          |    bash    |
|          C#           |     cs     |
|          C++          |    cpp     |
|          CSS          |    css     |
|         Diff          |    diff    |
|       HTML, XML       |    html    |
|         HTTP          |    http    |
|          Ini          |    ini     |
|         JSON          |    json    |
|         Java          |    java    |
|      JavaScript       | javascript |
|          PHP          |    php     |
|         Perl          |    perl    |
|        Python         |   python   |
|         Ruby          |    ruby    |
|          SQL          |    sql     |

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
            <title>Cracking Vue.js</title>
        </head>
    </html>
```

````
```
<html>
    <head>
        <title>Cracking Vue.js</title>
    </head>
</html>
```
````

#### 구문 강조

````
```html
<html>
    <head>
        <title>Cracking Vue.js</title>
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
            <title>Cracking Vue.js</title>
        </head>
    </html>

```
<html>
    <head>
        <title>Cracking Vue.js</title>
    </head>
</html>
```

#### 구문 강조

```html
<html>
    <head>
        <title>Cracking Vue.js</title>
    </head>
</html>
```

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

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
https://joshua1988.github.io/vue-camp/

<vue@example.com>
vue@example.com
```

#### 문서 내 이동

```
<!-- [링크 텍스트](#제목) -->

[눌러서 목차로 이동](#마크다운markdown-가이드)
```

> 제목 매칭 방법
>
> 1. 목적지 제목(Heading) 복사 붙여넣기 "#마크다운(Markdown) 가이드"
> 2. 특수문자 제거 "#마크다운Markdown 가이드"
> 3. 스페이스 개수만큼 `-`로 변경 "#마크다운Markdown-가이드"
> 4. 대문자 -> 소문자 "#마크다운markdown-가이드"

### 📌 실행 결과

#### 링크 텍스트

<!-- [링크 텍스트](링크) 또는 링크 -->

[Craking Vue.js](https://joshua1988.github.io/vue-camp/)

#### URL 또는 이메일 주소

<https://joshua1988.github.io/vue-camp/>  
https://joshua1988.github.io/vue-camp/

<vue@example.com>  
vue@example.com

#### 문서 내 이동

<!-- [링크 텍스트](#제목) -->

[눌러서 목차로 이동](#마크다운markdown-가이드)

### URL 자동 연결 비활성화

```
`https://joshua1988.github.io/vue-camp/`
```

`https://joshua1988.github.io/vue-camp/`

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

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

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 표(Tables)

|   구분    |        사용법        |
| :-------: | :------------------: |
|  열 구분  | `\|` + 텍스트 + `\|` |
| 제목 생성 |    3개 이상의 `-`    |

### 📌 마크다운

#### 기본값 (왼쪽 정렬)

```
| 제목 1 | 제목 2 | 제목 3 |
| ------ | ------ | ------ |
| 내용 1 | 내용 2 | 내용 3 |
| 내용 4 | 내용 5 | 내용 6 |
```

#### 정렬

> 제목 생성 시 정렬 종류에 따라 `:` 삽입
>
> |    종류     |      사용법       |
> | :---------: | :---------------: |
> |  왼쪽 정렬  | `:---` 또는 `---` |
> | 가운데 정렬 |      `:---:`      |
> | 오른쪽 정렬 |      `---:`       |

```
| 기본값 | 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
| ------ | :-------- | :---------: | ----------: |
| 내용 1 | 내용 2 | 내용 3 | 내용 4 |
| 내용 5 | 내용 6 | 내용 7 | 내용 8 |
| 내용 9 | 내용 10 | 내용 11 | 내용 12 |
```

### 📌 실행 결과

#### 기본값 (왼쪽 정렬)

| 제목 1 | 제목 2 | 제목 3 |
| ------ | ------ | ------ |
| 내용 1 | 내용 2 | 내용 3 |
| 내용 4 | 내용 5 | 내용 6 |

#### 정렬

| 기본값 | 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
| ------ | :-------- | :---------: | ----------: |
| 내용 1 | 내용 2 | 내용 3 | 내용 4 |
| 내용 5 | 내용 6 | 내용 7 | 내용 8 |
| 내용 9 | 내용 10 | 내용 11 | 내용 12 |

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 체크박스(Checkboxes, Task Lists)

|  종류  |           사용법            |
| :----: | :-------------------------: |
| 체크 X | `- [ ]` + 띄어쓰기 + 텍스트 |
| 체크 O | `- [x]` + 띄어쓰기 + 텍스트 |

### 📌 마크다운

```
- [ ] 체크되지 않은 항목
- [x] 체크된 항목
```

### 📌 실행 결과

- [ ] 체크되지 않은 항목
- [x] 체크된 항목

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 각주(Footnotes)

|   구분    |                         사용법                         |
| :-------: | :----------------------------------------------------: |
| 각주 참조 | `[^` + 식별자 (숫자 또는 단어, 공백 포함 불가능) + `]` |
|   각주    |     `[^` + 식별자 + `]` + `:` + 띄어쓰기 + 텍스트      |

### 📌 마크다운

```
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

### 📌 실행 결과

![실행 결과](https://user-images.githubusercontent.com/52729559/132097808-b914920f-38ea-4d86-8ce5-e7d821ca1c95.png)

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

<br>

## 이모티콘(Emoji)

short code ([여기](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)에서 참조) 입력

또는

| 운영체제 | 사용법 |
| :---: | :---: |
| macOS | ctrl + cmd + space bar |
| Windows | window key + `.` |

### 📌 마크다운

```
마크다운 정복 :tada: 축하합니다 🎉
```

### 📌 실행 결과

마크다운 정복 :tada: 축하합니다 🎉

<br>

[눌러서 목차로 이동](#마크다운markdown-가이드)

> 기본 문법 ([참고 출처 1](https://www.markdownguide.org/basic-syntax/)), 
> 확장 문법 ([참고 출처 2](https://www.markdownguide.org/extended-syntax/))
