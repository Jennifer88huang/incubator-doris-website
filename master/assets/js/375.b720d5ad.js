(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{762:function(t,a,s){"use strict";s.r(a);var e=s(43),c=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"compaction-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[t._v("#")]),t._v(" Compaction Action")]),t._v(" "),s("p",[t._v("该 API 用于查看某个 BE 节点总体的 compaction 状态，或者指定 tablet 的 compaction 状态。也可以用于手动触发 Compaction。")]),t._v(" "),s("h2",{attrs:{id:"查看-compaction-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-compaction-状态"}},[t._v("#")]),t._v(" 查看 Compaction 状态")]),t._v(" "),s("h3",{attrs:{id:"节点整体-compaction-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点整体-compaction-状态"}},[t._v("#")]),t._v(" 节点整体 compaction 状态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")])])]),s("p",[t._v("返回 JSON 格式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')])])]),s("p",[t._v("该结构表示某个数据目录下，正在执行 compaction 任务的 tablet 的 id，以及 compaction 的类型。")]),t._v(" "),s("h3",{attrs:{id:"指定-tablet-的-compaction-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定-tablet-的-compaction-状态"}},[t._v("#")]),t._v(" 指定 tablet 的 compaction 状态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),s("p",[t._v("若 tablet 不存在，返回 JSON 格式的错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),s("p",[t._v("若 tablet 存在，则返回 JSON 格式的结果:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "cumulative policy type": "NUM_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')])])]),s("p",[t._v("结果说明：")]),t._v(" "),s("ul",[s("li",[t._v("cumulative policy type：当前tablet所使用的 cumulative compaction 策略。")]),t._v(" "),s("li",[t._v("cumulative point：base 和 cumulative compaction 的版本分界线。在 point（不含）之前的版本由 base compaction 处理。point（含）之后的版本由 cumulative compaction 处理。")]),t._v(" "),s("li",[t._v("last cumulative failure time：上一次尝试 cumulative compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 cumulative compaction。")]),t._v(" "),s("li",[t._v("last base failure time：上一次尝试 base compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 base compaction。")]),t._v(" "),s("li",[t._v("rowsets：该 tablet 当前的 rowset 集合。如 [0-48] 表示 0-48 版本。第二位数字表示该版本中 segment 的数量。"),s("code",[t._v("DELETE")]),t._v(" 表示 delete 版本。"),s("code",[t._v("DATA")]),t._v(" 表示数据版本。"),s("code",[t._v("OVERLAPPING")]),t._v(" 和 "),s("code",[t._v("NONOVERLAPPING")]),t._v(" 表示segment数据是否重叠。")]),t._v(" "),s("li",[t._v("stale version path：该 table 当前被合并rowset集合的合并版本路径，该结构是一个数组结构，每个元素表示一个合并路径。每个元素中包含了三个属性：path id 表示版本路径id，last create time 表示当前路径上最近的 rowset 创建时间，默认在这个时间半个小时之后这条路径上的所有 rowset 会被过期删除。")])]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\\&schema_hash=1294206575\n")])])]),s("h2",{attrs:{id:"手动触发-compaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动触发-compaction"}},[t._v("#")]),t._v(" 手动触发 Compaction")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx\\&schema_hash=yyyy\\&compact_type=cumulative\n")])])]),s("p",[t._v("当前仅能执行一个手动compaction任务，其中compact_type取值为base或cumulative")]),t._v(" "),s("p",[t._v("若 tablet 不存在，返回 JSON 格式的错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),s("p",[t._v("若 compaction 执行任务触发失败时，返回 JSON 格式的错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')])])]),s("p",[t._v("若 compaction 执行触发成功时，则返回 JSON 格式的结果:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')])])]),s("p",[t._v("结果说明：")]),t._v(" "),s("ul",[s("li",[t._v("status：触发任务状态，当成功触发时为Success；当因某些原因（比如，没有获取到合适的版本）时，返回Fail。")]),t._v(" "),s("li",[t._v("msg：给出具体的成功或失败的信息。")])]),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&schema_hash=1294206575\\&compact_type=cumulative\n")])])]),s("h2",{attrs:{id:"手动-compaction-执行状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动-compaction-执行状态"}},[t._v("#")]),t._v(" 手动 Compaction 执行状态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),s("p",[t._v("若 tablet 不存在，返回 JSON 格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),s("p",[t._v("若 tablet 存在并且 tablet 不在正在执行 compaction，返回 JSON 格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')])])]),s("p",[t._v("若 tablet 存在并且 tablet 正在执行 compaction，返回 JSON 格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')])])]),s("p",[t._v("结果说明：")]),t._v(" "),s("ul",[s("li",[t._v("run_status：获取当前手动 compaction 任务执行状态")])]),t._v(" "),s("h3",{attrs:{id:"示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\\&schema_hash=1294206575\n")])])])])}),[],!1,null,null,null);a.default=c.exports}}]);