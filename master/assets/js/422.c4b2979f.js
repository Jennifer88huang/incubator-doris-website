(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{808:function(e,_,r){"use strict";r.r(_);var a=r(43),s=Object(a.a)({},(function(){var e=this,_=e.$createElement,r=e._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"导出查询结果集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导出查询结果集"}},[e._v("#")]),e._v(" 导出查询结果集")]),e._v(" "),r("p",[e._v("本文档介绍如何使用 "),r("code",[e._v("SELECT INTO OUTFILE")]),e._v(" 命令进行查询结果的导出操作。")]),e._v(" "),r("h2",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),r("p",[r("code",[e._v("SELECT INTO OUTFILE")]),e._v(" 语句可以将查询结果导出到文件中。目前仅支持通过 Broker 进程导出到远端存储，如 HDFS，S3，BOS 上。语法如下")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')])])]),r("ul",[r("li",[r("p",[r("code",[e._v("file_path")])]),e._v(" "),r("p",[r("code",[e._v("file_path")]),e._v(" 指向文件存储的路径以及文件前缀。如 "),r("code",[e._v("hdfs://path/to/my_file_")]),e._v("。")]),e._v(" "),r("p",[e._v("最终的文件名将由 "),r("code",[e._v("my_file_")]),e._v("，文件序号以及文件格式后缀组成。其中文件序号由0开始，数量为文件被分割的数量。如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("my_file_0.csv\nmy_file_1.csv\nmy_file_2.csv\n")])])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("[format_as]")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("FORMAT AS CSV\n")])])]),r("p",[e._v("指定导出格式。默认为 CSV。")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("[properties]")])]),e._v(" "),r("p",[e._v("指定相关属性。目前仅支持通过 Broker 进程进行导出。Broker 相关属性需加前缀 "),r("code",[e._v("broker.")]),e._v("。具体参阅"),r("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/broker.html"}},[e._v("Broker 文档")]),e._v("。")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('("broker.prop_key" = "broker.prop_val", ...)\n')])])]),r("p",[e._v("其他属性：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('("key1" = "val1", "key2" = "val2", ...)\n')])])]),r("p",[e._v("目前支持以下属性：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("column_separator")]),e._v("：列分隔符，仅对 CSV 格式适用。默认为 "),r("code",[e._v("\\t")]),e._v("。")]),e._v(" "),r("li",[r("code",[e._v("line_delimiter")]),e._v("：行分隔符，仅对 CSV 格式适用。默认为 "),r("code",[e._v("\\n")]),e._v("。")]),e._v(" "),r("li",[r("code",[e._v("max_file_size")]),e._v("：单个文件的最大大小。默认为 1GB。取值范围在 5MB 到 2GB 之间。超过这个大小的文件将会被切分。")])])])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("示例1")]),e._v(" "),r("p",[e._v("将简单查询结果导出到文件 "),r("code",[e._v("hdfs:/path/to/result.txt")]),e._v("。指定导出格式为 CSV。使用 "),r("code",[e._v("my_broker")]),e._v(" 并设置 kerberos 认证信息。指定列分隔符为 "),r("code",[e._v(",")]),e._v("，行分隔符为 "),r("code",[e._v("\\n")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab"\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')])])]),r("p",[e._v("最终生成文件如如果不大于 100MB，则为："),r("code",[e._v("result_0.csv")]),e._v("。")]),e._v(" "),r("p",[e._v("如果大于 100MB，则可能为 "),r("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("示例2")]),e._v(" "),r("p",[e._v("将 CTE 语句的查询结果导出到文件 "),r("code",[e._v("hdfs:/path/to/result.txt")]),e._v("。默认导出格式为 CSV。使用 "),r("code",[e._v("my_broker")]),e._v(" 并设置 hdfs 高可用信息。使用默认的行列分隔符。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs:/path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')])])]),r("p",[e._v("最终生成文件如如果不大于 1GB，则为："),r("code",[e._v("result_0.csv")]),e._v("。")]),e._v(" "),r("p",[e._v("如果大于 1GB，则可能为 "),r("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("示例3")]),e._v(" "),r("p",[e._v("将 UNION 语句的查询结果导出到文件 "),r("code",[e._v("bos://bucket/result.txt")]),e._v("。指定导出格式为 PARQUET。使用 "),r("code",[e._v("my_broker")]),e._v(" 并设置 hdfs 高可用信息。PARQUET 格式无需指定列分割符。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n')])])]),r("p",[e._v("最终生成文件如如果不大于 1GB，则为："),r("code",[e._v("result_0.parquet")]),e._v("。")]),e._v(" "),r("p",[e._v("如果大于 1GB，则可能为 "),r("code",[e._v("result_0.parquet, result_1.parquet, ...")]),e._v("。")])])]),e._v(" "),r("h2",{attrs:{id:"返回结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[e._v("#")]),e._v(" 返回结果")]),e._v(" "),r("p",[e._v("导出命令为同步命令。命令返回，即表示操作结束。")]),e._v(" "),r("p",[e._v("如果正常导出并返回，则结果如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...                                                                                                                                                                                                                                                                Query OK, 100000 row affected (5.86 sec)\n")])])]),r("p",[e._v("其中 "),r("code",[e._v("100000 row affected")]),e._v(" 表示导出的结果集行数。")]),e._v(" "),r("p",[e._v("如果执行错误，则会返回错误信息，如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...                                                                                                                                                                                                                                                                  ERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])])]),r("h2",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),r("ul",[r("li",[e._v("查询结果是由单个 BE 节点，单线程导出的。因此导出时间和导出结果集大小正相关。")]),e._v(" "),r("li",[e._v("导出命令不会检查文件及文件路径是否存在。是否会自动创建路径、或是否会覆盖已存在文件，完全由远端存储系统的语义决定。")]),e._v(" "),r("li",[e._v("如果在导出过程中出现错误，可能会有导出文件残留在远端存储系统上。Doris 不会清理这些文件。需要用户手动清理。")]),e._v(" "),r("li",[e._v("导出命令的超时时间同查询的超时时间。可以通过 "),r("code",[e._v("SET query_timeout=xxx")]),e._v(" 进行设置。")]),e._v(" "),r("li",[e._v("对于结果集为空的查询，依然会产生一个大小为0的文件。")]),e._v(" "),r("li",[e._v("文件切分会保证一行数据完整的存储在单一文件中。因此文件的大小并不严格等于 "),r("code",[e._v("max_file_size")]),e._v("。")]),e._v(" "),r("li",[e._v("对于部分输出为非可见字符的函数，如 BITMAP、HLL 类型，输出为 "),r("code",[e._v("\\N")]),e._v("，即 NULL。")]),e._v(" "),r("li",[e._v("目前部分地理信息函数，如 "),r("code",[e._v("ST_Point")]),e._v(" 的输出类型为 VARCHAR，但实际输出值为经过编码的二进制字符。当前这些函数会输出乱码。对于地理函数，请使用 "),r("code",[e._v("ST_AsText")]),e._v(" 进行输出。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);