(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1088:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"to-bitmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-bitmap"}},[t._v("#")]),t._v(" to_bitmap")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BITMAP TO_BITMAP(expr)")])]),t._v(" "),s("p",[t._v("输入为取值在 0 ~ 18446744073709551615 区间的 unsigned bigint ，输出为包含该元素的bitmap。\n该函数主要用于stream load任务将整型字段导入Doris表的bitmap字段。例如")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("TO_BITMAP,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);