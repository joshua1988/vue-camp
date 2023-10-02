(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{383:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"이벤트-발생-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-발생-setup"}},[t._v("#")]),t._v(" 이벤트 발생 - setup() "),s("Badge",{attrs:{text:"Vue 3"}})],1),t._v(" "),s("p",[t._v("이벤트 발생(event emit)은 하위 컴포넌트에서 상위 컴포넌트로 신호를 보내는 컴포넌트 통신 방식입니다. 컴포지션에서는 어떻게 컴포넌트 이벤트를 발생시킬 수 있는지 알아보겠습니다.")]),t._v(" "),s("h2",{attrs:{id:"컴포넌트-이벤트-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-이벤트-발생"}},[t._v("#")]),t._v(" 컴포넌트 이벤트 발생")]),t._v(" "),s("p",[t._v("기존에 컴포넌트에서 이벤트를 발생시키는 방법은 "),s("a",{attrs:{href:"/vue/event-emit"}},[t._v("$emit() API")]),t._v("였습니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("위 코드는 하위 컴포넌트에서 상위 컴포넌트로 "),s("code",[t._v("change")]),t._v(" 이벤트를 보내는 코드입니다. 이처럼 "),s("code",[t._v("$emit()")]),t._v(" API를 이용하여 이벤트를 발생시킬 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"setup-에서-이벤트-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-에서-이벤트-발생"}},[t._v("#")]),t._v(" setup()에서 이벤트 발생")]),t._v(" "),s("p",[t._v("이번엔 "),s("code",[t._v("setup()")]),t._v(" 함수에서 이벤트를 발생시키는 방법을 알아보겠습니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("위 코드는 "),s("code",[t._v("setup()")]),t._v(" 함수의 두 번째 파라미터 "),s("code",[t._v("context")]),t._v("를 이용하여 이벤트를 발생시킨 코드입니다. "),s("code",[t._v("setup()")]),t._v(" 함수의 첫 번째 파라미터는 프롭스 속성을 의미하고 두 번째 파라미터는 이벤트를 발생시킬 수 있는 "),s("code",[t._v("emit")]),t._v("을 비롯하여 attrs, slots, expose 등을 가진 "),s("a",{attrs:{href:"https://vuejs.org/api/composition-api-setup.html#setup-context",target:"_blank",rel:"noopener noreferrer"}},[t._v("컨텍스트 객체(Context Object)"),s("OutboundLink")],1),t._v("를 의미합니다.")]),t._v(" "),s("p",[t._v("이 "),s("code",[t._v("context.emit()")]),t._v("은 기존 "),s("code",[t._v("$emit()")]),t._v("와 사용법이 동일합니다. 단순히 이벤트를 보낼 수도 있고 아래와 같이 이벤트의 인자를 넘길 수도 있습니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change 이벤트만 발생")]),t._v("\ncontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change 이벤트를 발생시키고 인자 100을 같이 넘김")]),t._v("\n")])])]),s("h2",{attrs:{id:"이벤트-발생의-디스트럭처링-문법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-발생의-디스트럭처링-문법"}},[t._v("#")]),t._v(" 이벤트 발생의 디스트럭처링 문법")]),t._v(" "),s("p",[s("code",[t._v("context.emit()")]),t._v("은 다음과 같이 디스트럭처링 문법을 사용해도 됩니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" emit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("첫 번째 파라미터 "),s("code",[t._v("props")]),t._v("는 디스트럭처링을 썼을 때 "),s("RouterLink",{attrs:{to:"/composition/props.html#디스트럭처링을-쓰고-싶다면"}},[t._v("반응성이 사라지기 때문에 주의해야 했지만")]),t._v(", "),s("code",[t._v("emit")]),t._v("은 반응성이 주입된 값이 아니라 단순히 호출만 하는 API이기 때문에 반응성이 제거되는 부분을 걱정하지 않아도 됩니다.")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);