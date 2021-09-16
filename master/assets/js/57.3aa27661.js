(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{897:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"show-meta-info-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-meta-info-action"}},[t._v("#")]),t._v(" Show Meta Info Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/show_meta_info")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Used to display some metadata information")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("action")]),t._v(" "),a("p",[t._v("Specify the type of metadata information to be obtained. Currently supports the following:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("SHOW_DB_SIZE")])]),t._v(" "),a("p",[t._v("Get the data size of the specified database, in bytes.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("SHOW_HA")])]),t._v(" "),a("p",[t._v("Obtain the playback status of FE metadata logs and the status of electable groups.")])])])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("SHOW_DB_SIZE")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:information_schema": 0,\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("SHOW_HA")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"can_read": "true",\n\t\t"role": "MASTER",\n\t\t"is_ready": "true",\n\t\t"last_checkpoint_version": "1492",\n\t\t"last_checkpoint_time": "1596465109000",\n\t\t"current_journal_id": "1595",\n\t\t"electable_nodes": "",\n\t\t"observer_nodes": "",\n\t\t"master": "10.81.85.89"\n\t},\n\t"count": 0\n}\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("View the data size of each database in the cluster")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:information_schema": 0,\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),a("li",[a("p",[t._v("View the FE election group situation")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"can_read": "true",\n\t\t"role": "MASTER",\n\t\t"is_ready": "true",\n\t\t"last_checkpoint_version": "1492",\n\t\t"last_checkpoint_time": "1596465109000",\n\t\t"current_journal_id": "1595",\n\t\t"electable_nodes": "",\n\t\t"observer_nodes": "",\n\t\t"master": "10.81.85.89"\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);