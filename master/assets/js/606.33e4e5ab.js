(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{994:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"not-like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#not-like"}},[t._v("#")]),t._v(" not like")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" syntax")]),t._v(" "),e("p",[t._v("'BOOLEAN not like(VARCHAR str, VARCHAR pattern)'")]),t._v(" "),e("p",[t._v("对字符串 str 进行模糊匹配，匹配上的则返回 false，没匹配上则返回 true。")]),t._v(" "),e("p",[t._v("like 匹配/模糊匹配，会与 % 和 _ 结合使用。")]),t._v(" "),e("p",[t._v("'a'      // 精准匹配，和 "),e("code",[t._v("=")]),t._v(" 效果一致。\n'%a'     // 以a结尾的数据\n'a%'     // 以a开头的数据\n'%a%'    // 含有a的数据\n'"),e("em",[t._v("a")]),t._v("'    // 三位且中间字母是 a 的\n'"),e("em",[t._v("a'     // 两位且结尾字母是 a 的\n'a")]),t._v("'     // 两位且开头字母是 a 的")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 返回 k1 字符串中不包含 a 的数据\nmysql > select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// 返回 k1 字符串中不等于 a 的数据\nmysql > select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| bab   |\n| b     |\n+-------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("LIKE, NOT, NOT LIKE")])])}),[],!1,null,null,null);a.default=n.exports}}]);