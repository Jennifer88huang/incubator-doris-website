(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1062:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"statement-execution-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statement-execution-action"}},[t._v("#")]),t._v(" Statement Execution Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /api/query/<ns_name>/<db_name>\n")])])]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Statement Execution Action is used to execute a statement and return the result.")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<db_name>")])]),t._v(" "),a("p",[t._v("Specify the database name. This database will be regarded as the default database of the current session. If the table name in SQL does not qualify the database name, this database will be used.")])])]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "stmt" : "select * from tbl1"\n}\n')])])]),a("ul",[a("li",[t._v("sql 字段为具体的 SQL")])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("返回结果集")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"type": "result_set",\n\t\t"data": [\n\t\t\t[1],\n\t\t\t[2]\n\t\t],\n\t\t"meta": [{\n\t\t\t"name": "k1",\n\t\t\t"type": "INT"\n\t\t}],\n\t\t"status": {}\n\t},\n\t"count": 0\n}\n')])])]),a("ul",[a("li",[t._v("The type field is "),a("code",[t._v("result_set")]),t._v(", which means the result set is returned. The results need to be obtained and displayed based on the meta and data fields. The meta field describes the column information returned. The data field returns the result row. The column type in each row needs to be judged by the content of the meta field. The status field returns some information of MySQL, such as the number of alarm rows, status code, etc.")])])]),t._v(" "),a("li",[a("p",[t._v("Return execution result")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"type": "exec_status",\n\t\t"status": {}\n\t},\n\t"count": 0\n}\n')])])]),a("ul",[a("li",[t._v("The type field is "),a("code",[t._v("exec_status")]),t._v(", which means the execution result is returned. At present, if the return result is received, it means that the statement was executed successfully.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);