(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{742:function(a,t,e){"use strict";e.r(t);var s=e(43),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"cancel-load-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cancel-load-action"}},[a._v("#")]),a._v(" Cancel Load Action")]),a._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[a._v("#")]),a._v(" Request")]),a._v(" "),e("p",[e("code",[a._v("POST /api/<db>/_cancel")])]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("用于取消掉指定label的导入任务。")]),a._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[a._v("#")]),a._v(" Path parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("<db>")])]),a._v(" "),e("p",[a._v("指定数据库名称")])])]),a._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[a._v("#")]),a._v(" Query parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("<label>")])]),a._v(" "),e("p",[a._v("指定导入label")])])]),a._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[a._v("#")]),a._v(" Request body")]),a._v(" "),e("p",[a._v("无")]),a._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[a._v("#")]),a._v(" Response")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("取消成功")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])]),a._v(" "),e("li",[e("p",[a._v("取消失败")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n\t"msg": "Error msg...",\n\t"code": 1,\n\t"data": null,\n\t"count": 0\n}\n')])])])])]),a._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("取消指定label的导入事务")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);