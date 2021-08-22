(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{1388:function(n,e,a){"use strict";a.r(e);var t=a(43),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[n._v("#")]),n._v(" CREATE TABLE")]),n._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),a("p",[n._v("该语句用于创建 table。\n语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name\n    (column_definition1[, column_definition2, ...]\n    [, index_definition1[, ndex_definition12,]])\n    [ENGINE = [olap|mysql|broker|hive]]\n    [key_desc]\n    [COMMENT "table comment"];\n    [partition_desc]\n    [distribution_desc]\n    [rollup_index]\n    [PROPERTIES ("key"="value", ...)]\n    [BROKER PROPERTIES ("key"="value", ...)]\n')])])]),a("ol",[a("li",[a("p",[n._v("column_definition\n语法：\n"),a("code",[n._v('col_name col_type [agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]')])]),n._v(" "),a("p",[n._v("说明：\ncol_name：列名称\ncol_type：列类型")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    TINYINT（1字节）\n        范围：-2^7 + 1 ~ 2^7 - 1\n    SMALLINT（2字节）\n        范围：-2^15 + 1 ~ 2^15 - 1\n    INT（4字节）\n        范围：-2^31 + 1 ~ 2^31 - 1\n    BIGINT（8字节）\n        范围：-2^63 + 1 ~ 2^63 - 1\n    LARGEINT（16字节）\n        范围：-2^127 + 1 ~ 2^127 - 1\n    FLOAT（4字节）\n        支持科学计数法\n    DOUBLE（8字节）\n        支持科学计数法\n    DECIMAL[(precision, scale)] (16字节)\n        保证精度的小数类型。默认是 DECIMAL(10, 0)\n        precision: 1 ~ 27\n        scale: 0 ~ 9\n        其中整数部分为 1 ~ 18\n        不支持科学计数法\n    DATE（3字节）\n        范围：0000-01-01 ~ 9999-12-31\n    DATETIME（8字节）\n        范围：0000-01-01 00:00:00 ~ 9999-12-31 23:59:59\n    CHAR[(length)]\n        定长字符串。长度范围：1 ~ 255。默认为1\n    VARCHAR[(length)]\n        变长字符串。长度范围：1 ~ 65533\n    HLL (1~16385个字节)\n        hll列类型，不需要指定长度和默认值、长度根据数据的聚合\n        程度系统内控制，并且HLL列只能通过配套的hll_union_agg、Hll_cardinality、hll_hash进行查询或使用\n    BITMAP\n        bitmap列类型，不需要指定长度和默认值。表示整型的集合，元素最大支持到2^64 - 1\n")])])]),a("p",[n._v("agg_type：聚合类型，如果不指定，则该列为 key 列。否则，该列为 value 列")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("* SUM、MAX、MIN、REPLACE\n* HLL_UNION(仅用于HLL列，为HLL独有的聚合方式)、\n* BITMAP_UNION(仅用于 BITMAP 列，为 BITMAP 独有的聚合方式)、\n* REPLACE_IF_NOT_NULL：这个聚合类型的含义是当且仅当新导入数据是非NULL值时会发生替换行为，如果新导入的数据是NULL，那么Doris仍然会保留原值。注意：如果用在建表时REPLACE_IF_NOT_NULL列指定了NOT NULL，那么Doris仍然会将其转化NULL，不会向用户报错。用户可以借助这个类型完成部分列导入的功能。\n* 该类型只对聚合模型(key_desc的type为AGGREGATE KEY)有用，其它模型不需要指这个。\n")])])]),a("p",[n._v("是否允许为NULL: 默认允许为 NULL。NULL 值在导入数据中用 \\N 来表示")]),n._v(" "),a("p",[n._v("注意：\nBITMAP_UNION聚合类型列在导入时的原始数据类型必须是TINYINT,SMALLINT,INT,BIGINT。")])]),n._v(" "),a("li",[a("p",[n._v("index_definition\n语法：\n"),a("code",[n._v("INDEX index_name (col_name[, col_name, ...]) [USING BITMAP] COMMENT 'xxxxxx'")]),n._v("\n说明：\nindex_name：索引名称\ncol_name：列名\n注意：\n当前仅支持BITMAP索引， BITMAP索引仅支持应用于单列")])]),n._v(" "),a("li",[a("p",[n._v("ENGINE 类型\n默认为 olap。可选 mysql, broker, hive")]),n._v(" "),a("ol",[a("li",[n._v("如果是 mysql，则需要在 properties 提供以下信息：")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    PROPERTIES (\n        "host" = "mysql_server_host",\n        "port" = "mysql_server_port",\n        "user" = "your_user_name",\n        "password" = "your_password",\n        "database" = "database_name",\n        "table" = "table_name"\n        )\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('注意：\n    "table" 条目中的 "table_name" 是 mysql 中的真实表名。\n    而 CREATE TABLE 语句中的 table_name 是该 mysql 表在 Doris 中的名字，可以不同。\n\n在 Doris 创建 mysql 表的目的是可以通过 Doris 访问 mysql 数据库。\n    而 Doris 本身并不维护、存储任何 mysql 数据。\n2) 如果是 broker，表示表的访问需要通过指定的broker, 需要在 properties 提供以下信息：\n    ```\n    PROPERTIES (\n    "broker_name" = "broker_name",\n    "path" = "file_path1[,file_path2]",\n    "column_separator" = "value_separator"\n    "line_delimiter" = "value_delimiter"\n    )\n    ```\n    另外还需要提供Broker需要的Property信息，通过BROKER PROPERTIES来传递，例如HDFS需要传入\n    ```\n    BROKER PROPERTIES(\n        "username" = "name",\n        "password" = "password"\n    )\n    ```\n    这个根据不同的Broker类型，需要传入的内容也不相同\n注意：\n    "path" 中如果有多个文件，用逗号[,]分割。如果文件名中包含逗号，那么使用 %2c 来替代。如果文件名中包含 %，使用 %25 代替\n    现在文件内容格式支持CSV，支持GZ，BZ2，LZ4，LZO(LZOP) 压缩格式。\n\n3) 如果是 hive，则需要在 properties 提供以下信息：\n```\nPROPERTIES (\n    "database" = "hive_db_name",\n    "table" = "hive_table_name",\n    "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n)\n\n```\n其中 database 是 hive 表对应的库名字，table 是 hive 表的名字，hive.metastore.uris 是 hive metastore 服务地址。\n注意：目前hive外部表仅用于Spark Load使用，不支持查询。\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[n._v("key_desc\n语法：\n"),a("code",[n._v("key_type(k1[,k2 ...])")]),n._v("\n说明：\n数据按照指定的key列进行排序，且根据不同的key_type具有不同特性。\nkey_type支持以下类型：\nAGGREGATE KEY:key列相同的记录，value列按照指定的聚合类型进行聚合，\n适合报表、多维分析等业务场景。\nUNIQUE KEY:key列相同的记录，value列按导入顺序进行覆盖，\n适合按key列进行增删改查的点查询业务。\nDUPLICATE KEY:key列相同的记录，同时存在于Doris中，\n适合存储明细数据或者数据无聚合特性的业务场景。\n默认为DUPLICATE KEY，key列为列定义中前36个字节, 如果前36个字节的列数小于3，将使用前三列。\n注意：\n除AGGREGATE KEY外，其他key_type在建表时，value列不需要指定聚合类型。")])]),n._v(" "),a("li",[a("p",[n._v("partition_desc\n目前支持 RANGE 和 LIST 两种分区方式。\n5.1 RANGE 分区\nRANGE partition描述有两种使用方式\n1) LESS THAN\n语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('     ```\n         PARTITION BY RANGE (k1, k2, ...)\n         (\n         PARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\n         PARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n         ...\n         )\n     ```\n     \n     说明：\n         使用指定的 key 列和指定的数值范围进行分区。\n         1) 分区名称仅支持字母开头，字母、数字和下划线组成\n         2) 目前仅支持以下类型的列作为 Range 分区列\n             TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME\n         3) 分区为左闭右开区间，首个分区的左边界为做最小值\n         4) NULL 值只会存放在包含最小值的分区中。当包含最小值的分区被删除后，NULL 值将无法导入。\n         5) 可以指定一列或多列作为分区列。如果分区值缺省，则会默认填充最小值。\n     \n     注意：\n         1) 分区一般用于时间维度的数据管理\n         2) 有数据回溯需求的，可以考虑首个分区为空分区，以便后续增加分区\n\n 2）Fixed Range\n     语法：\n     ```\n         PARTITION BY RANGE (k1, k2, k3, ...)\n         (\n         PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),\n         PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))\n         "k3-upper1-2", ...\n         )\n     ```\n     说明：\n         1）Fixed Range比LESS THAN相对灵活些，左右区间完全由用户自己确定\n         2）其他与LESS THAN保持同步\n')])])]),a("p",[n._v("5.2 LIST 分区\nLIST partition分为单列分区和多列分区\n1) 单列分区\n语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('     ```\n         PARTITION BY LIST(k1)\n         (\n         PARTITION partition_name1 VALUES IN ("value1", "value2", ...),\n         PARTITION partition_name2 VALUES IN ("value1", "value2", ...)\n         ...\n         )\n     ```\n\n     说明：\n         使用指定的 key 列和制定的枚举值进行分区。\n         1) 分区名称仅支持字母开头，字母、数字和下划线组成\n         2) 目前仅支持以下类型的列作为 List 分区列\n             BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME, CHAR, VARCHAR\n         3) 分区为枚举值集合，各个分区之间分区值不能重复\n         4) 不可导入 NULL 值\n         5) 分区值不能缺省，必须指定至少一个\n\n 2) 多列分区\n     语法：\n\n     ```\n         PARTITION BY LIST(k1, k2)\n         (\n         PARTITION partition_name1 VALUES IN (("value1", "value2"), ("value1", "value2"), ...),\n         PARTITION partition_name2 VALUES IN (("value1", "value2"), ("value1", "value2"), ...)\n         ...\n         )\n     ```\n\n     说明：\n         1) 多列分区的分区是元组枚举值的集合\n         2) 每个元组值的个数必须与分区列个数相等\n         3) 其他与单列分区保持同步\n')])])])]),n._v(" "),a("li",[a("p",[n._v("distribution_desc\n1) Hash 分桶\n语法：\n"),a("code",[n._v("DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]")]),n._v("\n说明：\n使用指定的 key 列进行哈希分桶。默认分区数为10")]),n._v(" "),a("p",[n._v("建议:建议使用Hash分桶方式")])]),n._v(" "),a("li",[a("p",[n._v("PROPERTIES")]),n._v(" "),a("ol",[a("li",[n._v("如果 ENGINE 类型为 olap\n可以在 properties 设置该表数据的初始存储介质、存储到期时间和副本数。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('   PROPERTIES (\n       "storage_medium" = "[SSD|HDD]",\n       ["storage_cooldown_time" = "yyyy-MM-dd HH:mm:ss"],\n       ["replication_num" = "3"]\n       )\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('storage_medium：        用于指定该分区的初始存储介质，可选择 SSD 或 HDD。默认初始存储介质可通过fe的配置文件 `fe.conf` 中指定 `default_storage_medium=xxx`，如果没有指定，则默认为 HDD。\n                        注意：当FE配置项 `enable_strict_storage_medium_check` 为 `True` 时，若集群中没有设置对应的存储介质时，建表语句会报错 `Failed to find enough host in all backends with storage medium is SSD|HDD`. \nstorage_cooldown_time： 当设置存储介质为 SSD 时，指定该分区在 SSD 上的存储到期时间。\n                        默认存放 30 天。\n                        格式为："yyyy-MM-dd HH:mm:ss"\nreplication_num:        指定分区的副本数。默认为 3\n\n当表为单分区表时，这些属性为表的属性。\n    当表为两级分区时，这些属性为附属于每一个分区。\n    如果希望不同分区有不同属性。可以通过 ADD PARTITION 或 MODIFY PARTITION 进行操作\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("如果 Engine 类型为 olap, 可以指定某列使用 bloom filter 索引\nbloom filter 索引仅适用于查询条件为 in 和 equal 的情况，该列的值越分散效果越好\n目前只支持以下情况的列:除了 TINYINT FLOAT DOUBLE 类型以外的 key 列及聚合方法为 REPLACE 的 value 列")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('       PROPERTIES (\n           "bloom_filter_columns"="k1,k2,k3"\n           )\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("3) 如果希望使用 Colocate Join 特性，需要在 properties 中指定\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('       PROPERTIES (\n           "colocate_with"="table1"\n           )\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("4) 如果希望使用动态分区特性，需要在properties 中指定。注意：动态分区只支持 RANGE 分区\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('      PROPERTIES (\n          "dynamic_partition.enable" = "true|false",\n          "dynamic_partition.time_unit" = "HOUR|DAY|WEEK|MONTH",\n          "dynamic_partition.start" = "${integer_value}",\n          "dynamic_partition.end" = "${integer_value}",\n          "dynamic_partition.prefix" = "${string_value}",\n          "dynamic_partition.buckets" = "${integer_value}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('dynamic_partition.enable: 用于指定表级别的动态分区功能是否开启。默认为 true。\ndynamic_partition.time_unit: 用于指定动态添加分区的时间单位，可选择为HOUR（小时），DAY（天），WEEK(周)，MONTH（月）。\n                             注意：以小时为单位的分区列，数据类型不能为 DATE。\ndynamic_partition.start: 用于指定向前删除多少个分区。值必须小于0。默认为 Integer.MIN_VALUE。\ndynamic_partition.end: 用于指定提前创建的分区数量。值必须大于0。\ndynamic_partition.prefix: 用于指定创建的分区名前缀，例如分区名前缀为p，则自动创建分区名为p20200108\ndynamic_partition.buckets: 用于指定自动创建的分区分桶数量\ndynamic_partition.create_history_partition: 用于创建历史分区功能是否开启。默认为 false。\ndynamic_partition.history_partition_num: 当开启创建历史分区功能时，用于指定创建历史分区数量。\n\n5) 建表时可以批量创建多个 Rollup\n语法：\n```\n    ROLLUP (rollup_name (column_name1, column_name2, ...)\n           [FROM from_index_name]\n            [PROPERTIES ("key"="value", ...)],...)\n```\n\n6) 如果希望使用 内存表 特性，需要在 properties 中指定\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('        PROPERTIES (\n           "in_memory"="true"\n        )   \n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("当 in_memory 属性为 true 时，Doris会尽可能将该表的数据和索引Cache到BE 内存中\n\n7) 创建UNIQUE_KEYS表时，可以指定一个sequence列，当KEY列相同时，将按照sequence列进行REPLACE(较大值替换较小值，否则无法替换)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        PROPERTIES (\n            \"function_column.sequence_type\" = 'Date',\n        );\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("sequence_type用来指定sequence列的类型，可以为整型和时间类型\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("创建一个 olap 表，使用 HASH 分桶，使用列存，相同key的记录进行聚合")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('CREATE TABLE example_db.table_hash\n(\nk1 TINYINT,\nk2 DECIMAL(10, 2) DEFAULT "10.5",\nv1 CHAR(10) REPLACE,\nv2 INT SUM\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first doris table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])])]),n._v(" "),a("li",[a("p",[n._v("创建一个 olap 表，使用 Hash 分桶，使用列存，相同key的记录进行覆盖，\n设置初始存储介质和冷却时间")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(' CREATE TABLE example_db.table_hash\n (\n k1 BIGINT,\n k2 LARGEINT,\n v1 VARCHAR(2048) REPLACE,\n v2 SMALLINT SUM DEFAULT "10"\n )\n ENGINE=olap\n AGGREGATE KEY(k1, k2)\n DISTRIBUTED BY HASH (k1, k2) BUCKETS 32\n PROPERTIES(\n "storage_medium" = "SSD",\n "storage_cooldown_time" = "2015-06-04 00:00:00"\n );\n')])])])]),n._v(" "),a("li",[a("p",[n._v("创建一个 olap 表，使用 Range 分区，使用Hash分桶，默认使用列存，\n相同key的记录同时存在，设置初始存储介质和冷却时间")]),n._v(" "),a("p",[n._v("1）LESS THAN")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('CREATE TABLE example_db.table_range\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1)\n(\nPARTITION p1 VALUES LESS THAN ("2014-01-01"),\nPARTITION p2 VALUES LESS THAN ("2014-06-01"),\nPARTITION p3 VALUES LESS THAN ("2014-12-01")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD", "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n')])])]),a("p",[n._v("说明：\n这个语句会将数据划分成如下3个分区：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('( {    MIN     },   {"2014-01-01"} )\n[ {"2014-01-01"},   {"2014-06-01"} )\n[ {"2014-06-01"},   {"2014-12-01"} )\n')])])]),a("p",[n._v("不在这些分区范围内的数据将视为非法数据被过滤")]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[n._v("Fixed Range")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('CREATE TABLE table_range\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1, k2, k3)\n(\nPARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\nPARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD"\n);\n')])])])]),n._v(" "),a("li",[a("p",[n._v("创建一个 olap 表，使用 List 分区，使用Hash分桶，默认使用列存，\n相同key的记录同时存在，设置初始存储介质和冷却时间")]),n._v(" "),a("p",[n._v("1）单列分区")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('CREATE TABLE example_db.table_list\n(\nk1 INT,\nk2 VARCHAR(128),\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY LIST (k1)\n(\nPARTITION p1 VALUES IN ("1", "2", "3"),\nPARTITION p2 VALUES IN ("4", "5", "6"),\nPARTITION p3 VALUES IN ("7", "8", "9")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD", "storage_cooldown_time" = "2022-06-04 00:00:00"\n);\n')])])]),a("p",[n._v("说明：\n这个语句会将数据划分成如下3个分区：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('("1", "2", "3")\n("4", "5", "6")\n("7", "8", "9")\n')])])]),a("p",[n._v("不在这些分区枚举值内的数据将视为非法数据被过滤")]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[n._v("多列分区")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('CREATE TABLE example_db.table_list\n(\nk1 INT,\nk2 VARCHAR(128),\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY LIST (k1, k2)\n(\nPARTITION p1 VALUES IN (("1","beijing"), ("1", "shanghai")),\nPARTITION p2 VALUES IN (("2","beijing"), ("2", "shanghai")),\nPARTITION p3 VALUES IN (("3","beijing"), ("3", "shanghai"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD", "storage_cooldown_time" = "2022-06-04 00:00:00"\n);\n')])])]),a("p",[n._v("说明：\n这个语句会将数据划分成如下3个分区：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('(("1","beijing"), ("1", "shanghai"))\n(("2","beijing"), ("2", "shanghai"))\n(("3","beijing"), ("3", "shanghai"))\n')])])]),a("p",[n._v("不在这些分区枚举值内的数据将视为非法数据被过滤")])]),n._v(" "),a("li",[a("p",[n._v("创建一个 mysql 表")]),n._v(" "),a("p",[n._v("5.1 直接通过外表信息创建mysql表")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE EXTERNAL TABLE example_db.table_mysql\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n    )\n    ENGINE=mysql\n    PROPERTIES\n    (\n    "host" = "127.0.0.1",\n    "port" = "8239",\n    "user" = "mysql_user",\n    "password" = "mysql_passwd",\n    "database" = "mysql_db_test",\n    "table" = "mysql_table_test"\n    )\n')])])]),a("p",[n._v("5.2 通过External Catalog Resource创建mysql表")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('   CREATE EXTERNAL RESOURCE "mysql_resource" \n   PROPERTIES\n   (\n     "type" = "odbc_catalog",\n     "user" = "mysql_user",\n     "password" = "mysql_passwd",\n     "host" = "127.0.0.1",\n      "port" = "8239"\t\t\t\n   );\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE EXTERNAL TABLE example_db.table_mysql\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n    )\n    ENGINE=mysql\n    PROPERTIES\n    (\n    "odbc_catalog_resource" = "mysql_resource",\n    "database" = "mysql_db_test",\n    "table" = "mysql_table_test"\n    )\n')])])]),a("ol",{attrs:{start:"6"}},[a("li",[n._v('创建一个数据文件存储在HDFS上的 broker 外部表, 数据使用 "|" 分割，"\\n" 换行')])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE EXTERNAL TABLE example_db.table_broker (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n    )\n    ENGINE=broker\n    PROPERTIES (\n    "broker_name" = "hdfs",\n    "path" = "hdfs://hdfs_host:hdfs_port/data1,hdfs://hdfs_host:hdfs_port/data2,hdfs://hdfs_host:hdfs_port/data3%2c4",\n    "column_separator" = "|",\n    "line_delimiter" = "\\n"\n    )\n    BROKER PROPERTIES (\n    "username" = "hdfs_user",\n    "password" = "hdfs_password"\n    )\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[n._v("创建一张含有HLL列的表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.example_table\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 HLL HLL_UNION,\n    v2 HLL HLL_UNION\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    DISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])]),a("ol",{attrs:{start:"8"}},[a("li",[n._v("创建一张含有BITMAP_UNION聚合类型的表（v1和v2列的原始数据类型必须是TINYINT,SMALLINT,INT）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.example_table\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 BITMAP BITMAP_UNION,\n    v2 BITMAP BITMAP_UNION\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    DISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])]),a("ol",{attrs:{start:"9"}},[a("li",[n._v("创建两张支持Colocate Join的表t1 和t2")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE `t1` (\n    `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n    ) ENGINE=OLAP\n    DUPLICATE KEY(`id`)\n    DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    PROPERTIES (\n    "colocate_with" = "t1"\n    );\n\n    CREATE TABLE `t2` (\n    `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n    ) ENGINE=OLAP\n    DUPLICATE KEY(`id`)\n    DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    PROPERTIES (\n    "colocate_with" = "t1"\n    );\n')])])]),a("ol",{attrs:{start:"10"}},[a("li",[n._v("创建一个数据文件存储在BOS上的 broker 外部表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE EXTERNAL TABLE example_db.table_broker (\n    k1 DATE\n    )\n    ENGINE=broker\n    PROPERTIES (\n    "broker_name" = "bos",\n    "path" = "bos://my_bucket/input/file",\n    )\n    BROKER PROPERTIES (\n      "bos_endpoint" = "http://bj.bcebos.com",\n      "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n      "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyy"\n    )\n')])])]),a("ol",{attrs:{start:"11"}},[a("li",[n._v("创建一个带有bitmap 索引的表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.table_hash\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT \'xxxxxx\'\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    COMMENT "my first doris table"\n    DISTRIBUTED BY HASH(k1) BUCKETS 32;\n')])])]),a("ol",{attrs:{start:"12"}},[a("li",[n._v("创建一个动态分区表(需要在FE配置中开启动态分区功能)，该表每天提前创建3天的分区，并删除3天前的分区。例如今天为"),a("code",[n._v("2020-01-08")]),n._v("，则会创建分区名为"),a("code",[n._v("p20200108")]),n._v(", "),a("code",[n._v("p20200109")]),n._v(", "),a("code",[n._v("p20200110")]),n._v(", "),a("code",[n._v("p20200111")]),n._v("的分区. 分区范围分别为:")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("[types: [DATE]; keys: [2020-01-08]; ‥types: [DATE]; keys: [2020-01-09]; )\n[types: [DATE]; keys: [2020-01-09]; ‥types: [DATE]; keys: [2020-01-10]; )\n[types: [DATE]; keys: [2020-01-10]; ‥types: [DATE]; keys: [2020-01-11]; )\n[types: [DATE]; keys: [2020-01-11]; ‥types: [DATE]; keys: [2020-01-12]; )\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.dynamic_partition\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n    )\n    ENGINE=olap\n    DUPLICATE KEY(k1, k2, k3)\n    PARTITION BY RANGE (k1)\n    (\n    PARTITION p1 VALUES LESS THAN ("2014-01-01"),\n    PARTITION p2 VALUES LESS THAN ("2014-06-01"),\n    PARTITION p3 VALUES LESS THAN ("2014-12-01")\n    )\n    DISTRIBUTED BY HASH(k2) BUCKETS 32\n    PROPERTIES(\n    "storage_medium" = "SSD",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n     );\n')])])]),a("ol",{attrs:{start:"13"}},[a("li",[n._v("创建一个带有rollup索引的表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    CREATE TABLE example_db.rollup_index_table\n    (\n        event_day DATE,\n        siteid INT DEFAULT '10',\n        citycode SMALLINT,\n        username VARCHAR(32) DEFAULT '',\n        pv BIGINT SUM DEFAULT '0'\n    )\n    AGGREGATE KEY(event_day, siteid, citycode, username)\n    DISTRIBUTED BY HASH(siteid) BUCKETS 10\n    rollup (\n    r1(event_day,siteid),\n    r2(event_day,citycode),\n    r3(event_day)\n    )\n    PROPERTIES(\"replication_num\" = \"3\");\n")])])]),a("ol",{attrs:{start:"14"}},[a("li",[n._v("创建一个内存表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.table_hash\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT \'xxxxxx\'\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    COMMENT "my first doris table"\n    DISTRIBUTED BY HASH(k1) BUCKETS 32\n    PROPERTIES ("in_memory"="true");\n')])])]),a("ol",{attrs:{start:"15"}},[a("li",[n._v("创建一个hive外部表")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    CREATE TABLE example_db.table_hive\n    (\n      k1 TINYINT,\n      k2 VARCHAR(50),\n      v INT\n    )\n    ENGINE=hive\n    PROPERTIES\n    (\n      "database" = "hive_db_name",\n      "table" = "hive_table_name",\n      "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n    );\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    CREATE,TABLE\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);