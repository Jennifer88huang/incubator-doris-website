(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1187:function(t,a,e){"use strict";e.r(a);var n=e(43),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[t._v("#")]),t._v(" like")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" syntax")]),t._v(" "),e("p",[t._v("'BOOLEAN like(VARCHAR str, VARCHAR pattern)'")]),t._v(" "),e("p",[t._v("Perform fuzzy matching on the string str, return true if it matches, and false if it doesn't match.")]),t._v(" "),e("p",[t._v("like match/fuzzy match, will be used in combination with % and _.")]),t._v(" "),e("p",[t._v("'a'   // Precise matching, the same effect as "),e("code",[t._v("=")]),t._v(".\n'%a'  // data ending with a\n'a%'  // data starting with a\n'%a%' // data containing a\n'"),e("em",[t._v("a")]),t._v("' // Three digits and the middle letter is a\n'"),e("em",[t._v("a'  // Two digits and the ending letter is a\n'a")]),t._v("'  // Two digits and the initial letter is a")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Return the data containing a in the k1 string\nmysql> select k1 from test where k1 like '%a%';\n+-------+\n| k1    |\n+-------+\n| a     |\n| bab   |\n+-------+\n\n// Return the data equal to a in the k1 string\nmysql> select k1 from test where k1 like 'a';\n+-------+\n| k1    |\n+-------+\n| a     |\n+-------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("LIKE")])])}),[],!1,null,null,null);a.default=s.exports}}]);