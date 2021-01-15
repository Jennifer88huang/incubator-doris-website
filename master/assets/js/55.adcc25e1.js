(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{631:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"statement-execution-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statement-execution-action"}},[e._v("#")]),e._v(" Statement Execution Action")]),e._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POST /api/query/<ns_name>/<db_name>\n")])])]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Statement Execution Action is used to execute a statement and return the result.")]),e._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<db_name>")])]),e._v(" "),a("p",[e._v("Specify the database name. This database will be regarded as the default database of the current session. If the table name in SQL does not qualify the database name, this database will be used.")])])]),e._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "stmt" : "select * from tbl1"\n}\n')])])]),a("ul",[a("li",[e._v("sql 字段为具体的 SQL")])]),e._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("返回结果集")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "result_set",\n        "data": [\n            [1],\n            [2]\n        ],\n        "meta": [{\n            "name": "k1",\n            "type": "INT"\n        }],\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')])])]),a("ul",[a("li",[e._v("The type field is "),a("code",[e._v("result_set")]),e._v(", which means the result set is returned. The results need to be obtained and displayed based on the meta and data fields. The meta field describes the column information returned. The data field returns the result row. The column type in each row needs to be judged by the content of the meta field. The status field returns some information of MySQL, such as the number of alarm rows, status code, etc. The time field return the execution time, unit is millisecond.")])])]),e._v(" "),a("li",[a("p",[e._v("Return execution result")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "exec_status",\n        "status": {}\n    },\n    "count": 0,\n    "time": 10\n}\n')])])]),a("ul",[a("li",[e._v("The type field is "),a("code",[e._v("exec_status")]),e._v(", which means the execution result is returned. At present, if the return result is received, it means that the statement was executed successfully.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);