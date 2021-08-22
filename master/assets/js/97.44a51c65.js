(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{484:function(e,t,r){"use strict";r.r(t);var s=r(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"export-query-result"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export-query-result"}},[e._v("#")]),e._v(" Export Query Result")]),e._v(" "),r("p",[e._v("This document describes how to use the "),r("code",[e._v("SELECT INTO OUTFILE")]),e._v(" command to export query results.")]),e._v(" "),r("h2",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("SELECT INTO OUTFILE")]),e._v(" statement can export the query results to a file. Currently, it only supports exporting to remote storage such as HDFS, S3, BOS and COS(Tencent Cloud) through the Broker process. The syntax is as follows:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('query_stmt\nINTO OUTFILE "file_path"\n[format_as]\nWITH BROKER `broker_name`\n[broker_properties]\n[other_properties]\n')])])]),r("ul",[r("li",[r("p",[r("code",[e._v("file_path")])]),e._v(" "),r("p",[r("code",[e._v("file_path")]),e._v(" specify the file path and file name prefix. Like: "),r("code",[e._v("hdfs://path/to/my_file_")]),e._v(".")]),e._v(" "),r("p",[e._v("The final file name will be assembled as "),r("code",[e._v("my_file_")]),e._v(", file seq no and the format suffix. File seq no starts from 0, determined by the number of split.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("my_file_0.csv\nmy_file_1.csv\nmy_file_2.csv\n")])])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("[format_as]")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("FORMAT AS CSV\n")])])]),r("p",[e._v("Specify the export format. The default is CSV.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("[properties]")])]),e._v(" "),r("p",[e._v("Specify the relevant attributes. Currently only export through Broker process is supported. Broker related attributes need to be prefixed with "),r("code",[e._v("broker.")]),e._v(". For details, please refer to "),r("RouterLink",{attrs:{to:"/en/administrator-guide/broker.html"}},[e._v("Broker")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('PROPERTIES\n("broker.prop_key" = "broker.prop_val", ...)\n')])])]),r("p",[e._v("Other properties")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('PROPERTIES\n("key1" = "val1", "key2" = "val2", ...)\n')])])]),r("p",[e._v("currently supports the following properties:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("column_separator")]),e._v(": Column separator, only applicable to CSV format. The default is "),r("code",[e._v("\\t")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("line_delimiter")]),e._v(": Line delimiter, only applicable to CSV format. The default is "),r("code",[e._v("\\n")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("max_file_size")]),e._v(": The max size of a single file. Default is 1GB. Range from 5MB to 2GB. Files exceeding this size will be splitted.")])])])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Example 1")]),e._v(" "),r("p",[e._v("Export simple query results to the file "),r("code",[e._v("hdfs:/path/to/result.txt")]),e._v(". Specify the export format as CSV. Use "),r("code",[e._v("my_broker")]),e._v(" and set kerberos authentication information. Specify the column separator as "),r("code",[e._v(",")]),e._v(" and the line delimiter as "),r("code",[e._v("\\n")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')])])]),r("p",[e._v("If the result is less than 100MB, file will be: "),r("code",[e._v("result_0.csv")]),e._v(".")]),e._v(" "),r("p",[e._v("If larger than 100MB, may be: "),r("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Example 2")]),e._v(" "),r("p",[e._v("Export the query result of the CTE statement to the file "),r("code",[e._v("hdfs:/path/to/result.txt")]),e._v(". The default export format is CSV. Use "),r("code",[e._v("my_broker")]),e._v(" and set hdfs high availability information. Use the default column separators and line delimiter.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs:/path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')])])]),r("p",[e._v("If the result is less than 1GB, file will be: "),r("code",[e._v("result_0.csv")]),e._v(".")]),e._v(" "),r("p",[e._v("If larger than 1GB, may be: "),r("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Example 3")]),e._v(" "),r("p",[e._v("Export the query results of the UNION statement to the file "),r("code",[e._v("bos://bucket/result.parquet")]),e._v(". Specify the export format as PARQUET. Use "),r("code",[e._v("my_broker")]),e._v(" and set hdfs high availability information. PARQUET format does not need to specify the column separator and line delimiter.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n')])])]),r("p",[e._v("If the result is less than 1GB, file will be: "),r("code",[e._v("result_0.parquet")]),e._v(".")]),e._v(" "),r("p",[e._v("If larger than 1GB, may be: "),r("code",[e._v("result_0.parquet, result_1.parquet, ...")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Example 4")]),e._v(" "),r("p",[e._v("Export simple query results to the file "),r("code",[e._v("cos://${bucket_name}/path/result.txt")]),e._v(". Specify the export format as CSV.\nAnd create a mark file after export finished.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n   "broker.name" = "hdfs_broker",\n   "broker.fs.s3a.access.key" = "xxx",\n   "broker.fs.s3a.secret.key" = "xxxx",\n   "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n   "column_separator" = ",",\n   "line_delimiter" = "\\n",\n   "max_file_size" = "1024MB",\n   "success_file_name" = "SUCCESS"\n)\n')])])]),r("p",[e._v("If the result is less than 1GB, file will be: "),r("code",[e._v("my_file_0.csv")]),e._v(".")]),e._v(" "),r("p",[e._v("If larger than 1GB, may be: "),r("code",[e._v("my_file_0.csv, result_1.csv, ...")]),e._v(".")]),e._v(" "),r("p",[e._v("Please Note:")]),e._v(" "),r("ol",[r("li",[e._v("Paths that do not exist are automatically created.")]),e._v(" "),r("li",[e._v("These parameters(access.key/secret.key/endpointneed) need to be confirmed with "),r("code",[e._v("Tecent Cloud COS")]),e._v(". In particular, the value of endpoint does not need to be filled in bucket_name.")])])])]),e._v(" "),r("h2",{attrs:{id:"return-result"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#return-result"}},[e._v("#")]),e._v(" Return result")]),e._v(" "),r("p",[e._v("The command is a synchronization command. The command returns, which means the operation is over.\nAt the same time, a row of results will be returned to show the exported execution result.")]),e._v(" "),r("p",[e._v("If it exports and returns normally, the result is as follows:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------+\n| FileNumber | TotalRows | FileSize | URL          |\n+------------+-----------+----------+--------------+\n|          1 |         2 |        8 | 192.168.1.10 |\n+------------+-----------+----------+--------------+\n1 row in set (0.05 sec)\n')])])]),r("ul",[r("li",[e._v("FileNumber: The number of files finally generated.")]),e._v(" "),r("li",[e._v("TotalRows: The number of rows in the result set.")]),e._v(" "),r("li",[e._v("FileSize: The total size of the exported file. Unit byte.")]),e._v(" "),r("li",[e._v("URL: If it is exported to a local disk, the Compute Node to which it is exported is displayed here.")])]),e._v(" "),r("p",[e._v("If the execution is incorrect, an error message will be returned, such as:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])])]),r("h2",{attrs:{id:"notice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),r("ul",[r("li",[e._v("The CSV format does not support exporting binary types, such as BITMAP and HLL types. These types will be output as "),r("code",[e._v("\\N")]),e._v(", which is null.")]),e._v(" "),r("li",[e._v("The query results are exported from a single BE node and a single thread. Therefore, the export time and the export result set size are positively correlated.")]),e._v(" "),r("li",[e._v("The export command does not check whether the file and file path exist. Whether the path will be automatically created or whether the existing file will be overwritten is entirely determined by the semantics of the remote storage system.")]),e._v(" "),r("li",[e._v("If an error occurs during the export process, the exported file may remain on the remote storage system. Doris will not clean these files. The user needs to manually clean up.")]),e._v(" "),r("li",[e._v("The timeout of the export command is the same as the timeout of the query. It can be set by "),r("code",[e._v("SET query_timeout = xxx")]),e._v(".")]),e._v(" "),r("li",[e._v("For empty result query, there will be an empty file.")]),e._v(" "),r("li",[e._v("File spliting will ensure that a row of data is stored in a single file. Therefore, the size of the file is not strictly equal to "),r("code",[e._v("max_file_size")]),e._v(".")]),e._v(" "),r("li",[e._v("For functions whose output is invisible characters, such as BITMAP and HLL types, the output is "),r("code",[e._v("\\N")]),e._v(", which is NULL.")]),e._v(" "),r("li",[e._v("At present, the output type of some geo functions, such as "),r("code",[e._v("ST_Point")]),e._v(" is VARCHAR, but the actual output value is an encoded binary character. Currently these functions will output garbled characters. For geo functions, use "),r("code",[e._v("ST_AsText")]),e._v(" for output.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);