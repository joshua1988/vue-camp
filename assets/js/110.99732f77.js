(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{448:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"스콥드-슬롯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스콥드-슬롯"}},[t._v("#")]),t._v(" 스콥드 슬롯")]),t._v(" "),s("p",[t._v("슬롯(slot)이 컴포넌트 템플릿의 재사용성을 늘려주기 위한 기능이라면 스콥드 슬롯(Scoped slot)은 컴포넌트 데이터의 재사용성을 높여주는 기능입니다. 일반적으로 뷰에서는 프롭스 속성이나 이벤트 발생과 같은 컴포넌트 통신 방식을 제외하고는 다른 컴포넌트의 값을 참조할 수 없습니다. "),s("strong",[t._v("하지만 스콥드 슬롯은 하위 컴포넌트의 값을 상위 컴포넌트에서 접근하여 사용할 수 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"스콥드-슬롯-코드-형식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스콥드-슬롯-코드-형식"}},[t._v("#")]),t._v(" 스콥드 슬롯 코드 형식")]),t._v(" "),s("p",[t._v("스콥드 슬롯을 사용하기 위해서는 기본적으로 상위, 하위 2개의 컴포넌트가 필요하고 각각의 컴포넌트에 아래와 같이 구현해야합니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 하위 컴포넌트의 슬롯 태그 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":상위")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("컴포넌트로")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("전달할")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("속성")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("이름")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("하위 컴포넌트의 데이터"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("먼저 하위 컴포넌트에서 "),s("code",[t._v("<slot>")]),t._v(" 태그를 정의하고 "),s("code",[t._v("v-bind")]),t._v(" 디렉티브의 약식 문법인 "),s("code",[t._v(":")]),t._v("를 이용하여 하위 컴포넌트의 데이터를 연결합니다. 컴포넌트 통신 방법에서 배운 프롭스 속성 전달 방법과 비슷한 형식입니다.")]),t._v(" "),s("p",[t._v("이제 상위 컴포넌트의 코드를 보겠습니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 상위 컴포넌트에 등록된 하위 컴포넌트 태그 부분 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("임의의 변수"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ 임의의 변수.상위 컴포넌트로 전달할 속성 이름 }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("하위 컴포넌트인 "),s("code",[t._v("<child-component>")]),t._v(" 태그에 집중합니다. 위에서 "),s("code",[t._v("<slot>")]),t._v(" 태그를 미리 정의해놨기 때문에 "),s("code",[t._v("<child-component>")]),t._v(" 태그 사이에 들어가는 코드는 모두 슬롯으로 처리가 됩니다. 여기서 "),s("code",[t._v("slot-scope")]),t._v("라는 속성으로 하위 컴포넌트에서 올려보내준 데이터를 전달받을 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("slot-scope")]),t._v(" 속성이 정의된 "),s("code",[t._v("<template>")]),t._v(" 태그는 실제 DOM이 아니라 속성을 전달받기 위한 껍데기일 뿐입니다. 실제로 화면 렌더링이 되고 나면 "),s("code",[t._v("<template>")]),t._v(" 태그는 가시적인 태그로 변환되지 않습니다.")])]),t._v(" "),s("p",[t._v("아직 안 와닿으실 수 있으니 실제 예제를 같이 살펴보겠습니다.")]),t._v(" "),s("h2",{attrs:{id:"스콥드-슬롯-코드-예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스콥드-슬롯-코드-예제"}},[t._v("#")]),t._v(" 스콥드 슬롯 코드 예제")]),t._v(" "),s("p",[t._v("앞에서 살펴본 코드 형식을 참고하여 간단한 예제를 제작하였습니다. 상위 컴포넌트는 App.vue이고 하위 컴포넌트는 ChildComponent.vue 입니다.")]),t._v(" "),s("p",[t._v("하위 컴포넌트의 코드부터 보겠습니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ChildComponent.vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Child Component"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":message")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("하위 컴포넌트에 "),s("code",[t._v("<slot>")]),t._v(" 태그를 정의하고 v-bind 디렉티브("),s("code",[t._v(":")]),t._v(")를 이용하여 "),s("code",[t._v("message")]),t._v(" 속성을 전달하였습니다.")]),t._v(" "),s("p",[t._v("이번엔 상위 컴포넌트의 코드를 살펴보겠습니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- App.vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scopeProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ scopeProps.message }}\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ChildComponent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./ChildComponent.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ChildComponent\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("하위 컴포넌트인 "),s("code",[t._v("<child-component>")]),t._v(" 태그의 슬롯 영역에 "),s("code",[t._v("slot-scope")]),t._v(" 속성을 정의하였습니다. 여기서 사용한 변수 "),s("code",[t._v("scopeProps")]),t._v("는 하위 컴포넌트에서 올려준 값을 받기 위한 임의의 변수입니다. 임의의 변수이기 때문에 원하는 변수 명을 지정하여 사용할 수 있습니다. "),s("code",[t._v("scopeProps")]),t._v("에는 하위 컴포넌트에서 올려준 값 "),s("code",[t._v("message")]),t._v("이 들어있습니다.")]),t._v(" "),s("p",[t._v("위의 코드를 실행하면 결론적으로 "),s("code",[t._v("<h1>")]),t._v(" 제목 태그와 함께 하위 컴포넌트의 "),s("code",[t._v("message")]),t._v(" 값인 Hello가 화면에 출력됩니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("뷰 버전 2.6에서 슬롯의 문법이 "),s("code",[t._v("v-slot")]),t._v(" 디렉티브로 바뀐 이유는 스콥스 슬롯의 변수 접근 범위 때문입니다.\n일반 HTML 태그에서 스콥드 슬롯을 적용하면 이해하는데 크게 문제가 없으나 컴포넌트 태그에 스콥드 슬롯을 적용하는 경우 변수의 접근 범위에 대해 혼란이 있을 수 있습니다.\n따라서, 기존 레거시 코드와 겹치지 않게 "),s("code",[t._v("v-slot")]),t._v(" 및 "),s("code",[t._v("#")]),t._v("으로 개편하였습니다.")]),t._v(" "),s("p",[t._v("자세한 내용은 "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),s("OutboundLink")],1),t._v("를 참고하세요.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);