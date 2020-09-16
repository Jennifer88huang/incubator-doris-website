(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{765:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"set-config-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-config-action"}},[t._v("#")]),t._v(" Set Config Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/_set_config")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("用于动态设置 FE 的参数。该命令等通过 "),a("code",[t._v("ADMIN SET FRONTEND CONFIG")]),t._v(" 命令。但该命令仅会设置对应 FE 节点的配置。并且不会自动转发 "),a("code",[t._v("MasterOnly")]),t._v(" 配置项给 Master FE 节点。")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("confkey1=confvalue1")])]),t._v(" "),a("p",[t._v("指定要设置的配置名称，其值为要修改的配置值。")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"set": {\n\t\t\t"storage_min_left_capacity_bytes": "1024",\n\t\t\t"qe_max_connection": "2048"\n\t\t},\n\t\t"err": {\n\t\t   "replica_ack_policy": "SIMPLE_MAJORITY"\n\t\t}\n\t},\n\t"count": 0\n}\n')])])]),a("p",[a("code",[t._v("set")]),t._v(" 字段表示设置成功的配置。"),a("code",[t._v("err")]),t._v(" 字段表示设置失败的配置。")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置 "),a("code",[t._v("max_bytes_per_broker_scanner")]),t._v(" 和 "),a("code",[t._v("max_broker_concurrency")]),t._v(" 两个配置的值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&max_broker_concurrency=20\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"set": {\n\t\t\t"max_bytes_per_broker_scanner": "21474836480",\n\t\t\t"max_broker_concurrency": "20"\n\t\t},\n\t\t"err": {}\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);