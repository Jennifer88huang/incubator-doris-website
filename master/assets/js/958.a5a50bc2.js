(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1346:function(e,a,n){"use strict";n.r(a);var t=n(43),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"admin-show-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-config"}},[e._v("#")]),e._v(" ADMIN SHOW CONFIG")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('该语句用于展示当前集群的配置（当前仅支持展示 FE 的配置项）\n\n语法：\n\n    ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"];\n\n说明：\n\n    结果中的各列含义如下：\n    1. Key：        配置项名称\n    2. Value：      配置项值\n    3. Type：       配置项类型\n    4. IsMutable：  是否可以通过 ADMIN SET CONFIG 命令设置\n    5. MasterOnly： 是否仅适用于 Master FE\n    6. Comment：    配置项说明\n')])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. 查看当前FE节点的配置\n\n    ADMIN SHOW FRONTEND CONFIG;\n    \n2. 使用like谓词搜索当前Fe节点的配置\n\nmysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+-----------+------------+---------+\n| Key                | Value | Type    | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+-----------+------------+---------+\n| check_java_version | true  | boolean | false     | false      |         |\n+--------------------+-------+---------+-----------+------------+---------+\n1 row in set (0.00 sec)    \n")])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("ADMIN,SHOW,CONFIG\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);