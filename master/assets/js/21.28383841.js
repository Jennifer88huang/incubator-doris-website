(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{410:function(t,e,a){"use strict";a.r(e);var i=a(43),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dynamic-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-partition"}},[t._v("#")]),t._v(" Dynamic Partition")]),t._v(" "),a("p",[t._v("Dynamic partition is a new feature introduced in Doris version 0.12. It's designed to manage partition's Time-to-Life (TTL), reducing the burden on users.")]),t._v(" "),a("p",[t._v("At present, the functions of dynamically adding partitions and dynamically deleting partitions are realized.")]),t._v(" "),a("p",[t._v("Dynamic partitioning is only supported for Range partitions.")]),t._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[t._v("#")]),t._v(" Noun Interpretation")]),t._v(" "),a("ul",[a("li",[t._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),t._v(" "),a("li",[t._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")])]),t._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[t._v("#")]),t._v(" Principle")]),t._v(" "),a("p",[t._v("In some usage scenarios, the user will partition the table according to the day and perform routine tasks regularly every day. At this time, the user needs to manually manage the partition. Otherwise, the data load may fail because the user does not create a partition. This brings additional maintenance costs to the user.")]),t._v(" "),a("p",[t._v("Through the dynamic partitioning feature, users can set the rules of dynamic partitioning when building tables. FE will start a background thread to create or delete partitions according to the rules specified by the user. Users can also change existing rules at runtime.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"establishment-of-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#establishment-of-tables"}},[t._v("#")]),t._v(" Establishment of tables")]),t._v(" "),a("p",[t._v("The rules for dynamic partitioning can be specified when the table is created or modified at runtime. Currently,dynamic partition rules can only be set for partition tables with single partition columns.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Specified when creating table")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE tbl1\n(...)\nPROPERTIES\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Modify at runtime")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])])]),t._v(" "),a("h3",{attrs:{id:"dynamic-partition-rule-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-partition-rule-parameters"}},[t._v("#")]),t._v(" Dynamic partition rule parameters")]),t._v(" "),a("p",[t._v("The rules of dynamic partition are prefixed with "),a("code",[t._v("dynamic_partition.")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("dynamic_partition.enable")])]),t._v(" "),a("p",[t._v("Whether to enable the dynamic partition feature. Can be specified as "),a("code",[t._v("TRUE")]),t._v(" or"),a("code",[t._v("FALSE")]),t._v(". If not filled, the default is "),a("code",[t._v("TRUE")]),t._v(". If it is "),a("code",[t._v("FALSE")]),t._v(", Doris will ignore the dynamic partitioning rules of the table.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.time_unit")])]),t._v(" "),a("p",[t._v("The unit for dynamic partition scheduling. Can be specified as "),a("code",[t._v("HOUR")]),t._v(","),a("code",[t._v("DAY")]),t._v(","),a("code",[t._v("WEEK")]),t._v(", and "),a("code",[t._v("MONTH")]),t._v(", means to create or delete partitions by hour, day, week, and month, respectively.")]),t._v(" "),a("p",[t._v("When specified as "),a("code",[t._v("HOUR")]),t._v(", the suffix format of the dynamically created partition name is "),a("code",[t._v("yyyyMMddHH")]),t._v(", for example, "),a("code",[t._v("2020032501")]),t._v(". "),a("em",[t._v("When the time unit is HOUR, the data type of partition column cannot be DATE.")])]),t._v(" "),a("p",[t._v("When specified as "),a("code",[t._v("DAY")]),t._v(", the suffix format of the dynamically created partition name is "),a("code",[t._v("yyyyMMdd")]),t._v(", for example, "),a("code",[t._v("20200325")]),t._v(".")]),t._v(" "),a("p",[t._v("When specified as "),a("code",[t._v("WEEK")]),t._v(", the suffix format of the dynamically created partition name is "),a("code",[t._v("yyyy_ww")]),t._v(". That is, the week of the year of current date. For example, the suffix of the partition created for "),a("code",[t._v("2020-03-25")]),t._v(" is "),a("code",[t._v("2020_13")]),t._v(", indicating that it is currently the 13th week of 2020.")]),t._v(" "),a("p",[t._v("When specified as "),a("code",[t._v("MONTH")]),t._v(", the suffix format of the dynamically created partition name is "),a("code",[t._v("yyyyMM")]),t._v(", for example, "),a("code",[t._v("202003")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.time_zone")])]),t._v(" "),a("p",[t._v("The time zone of the dynamic partition, if not filled in, defaults to the time zone of the current machine's system, such as "),a("code",[t._v("Asia/Shanghai")]),t._v(", if you want to know the supported TimeZone, you can found in "),a("code",[t._v("https://en.wikipedia.org/wiki/List_of_tz_database_time_zones")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.start")])]),t._v(" "),a("p",[t._v("The starting offset of the dynamic partition, usually a negative number. Depending on the "),a("code",[t._v("time_unit")]),t._v(" attribute, based on the current day (week / month), the partitions with a partition range before this offset will be deleted. If not filled, the default is "),a("code",[t._v("-2147483648")]),t._v(", that is, the history partition will not be  deleted.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.end")])])])]),t._v(" "),a("p",[t._v("The end offset of the dynamic partition, usually a positive number. According to the difference of the "),a("code",[t._v("time_unit")]),t._v(" attribute, the partition of the corresponding range is created in advance based on the current day (week / month).")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dynamic_partition.prefix")])])]),t._v(" "),a("p",[t._v("The dynamically created partition name prefix.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dynamic_partition.buckets")])])]),t._v(" "),a("p",[t._v("The number of buckets corresponding to the dynamically created partitions.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("dynamic_partition.replication_num")])]),t._v(" "),a("p",[t._v("The replication number of dynamic partition.If not filled in, defaults to the number of table's replication number.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.start_day_of_week")])])])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("time_unit")]),t._v(" is"),a("code",[t._v("WEEK")]),t._v(", this parameter is used to specify the starting point of the week. The value ranges from 1 to 7. Where 1 is Monday and 7 is Sunday. The default is 1, which means that every week starts on Monday.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dynamic_partition.start_day_of_month")])])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("time_unit")]),t._v(" is"),a("code",[t._v("MONTH")]),t._v(", this parameter is used to specify the start date of each month. The value ranges from 1 to 28. 1 means the 1st of every month, and 28 means the 28th of every month. The default is 1, which means that every month starts at 1st. The 29, 30 and 31 are not supported at the moment to avoid ambiguity caused by lunar years or months.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("dynamic_partition.create_history_partition")])]),t._v(" "),a("p",[t._v("The default is false. When set to true, Doris will automatically create all partitions, as described in the creation rules below. At the same time, the parameter "),a("code",[t._v("max_dynamic_partition_num")]),t._v(" of FE will limit the total number of partitions to avoid creating too many partitions at once. When the number of partitions expected to be created is greater than "),a("code",[t._v("max_dynamic_partition_num")]),t._v(", the operation will fail.")]),t._v(" "),a("p",[t._v("When the "),a("code",[t._v("start")]),t._v(" attribute is not specified, this parameter has no effect.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.history_partition_num")])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("create_history_partition")]),t._v(" is "),a("code",[t._v("true")]),t._v(", this parameter is used to specify the number of history partitions. The default value is -1, which means it is not set.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.hot_partition_num")])]),t._v(" "),a("p",[t._v("Specify how many of the latest partitions are hot partitions. For hot partition, the system will automatically set its "),a("code",[t._v("storage_medium")]),t._v(" parameter to SSD, and set "),a("code",[t._v("storage_cooldown_time")]),t._v(".")]),t._v(" "),a("p",[t._v("Let us give an example. Suppose today is 2021-05-20, partition by day, and the properties of dynamic partition are set to: hot_partition_num=2, end=3, start=-3. Then the system will automatically create the following partitions, and set the "),a("code",[t._v("storage_medium")]),t._v(" and "),a("code",[t._v("storage_cooldown_time")]),t._v(" properties:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p20210517: ["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518: ["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519: ["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520: ["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521: ["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522: ["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523: ["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n')])])])])]),t._v(" "),a("h4",{attrs:{id:"create-history-partition-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-history-partition-rules"}},[t._v("#")]),t._v(" Create History Partition Rules")]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("create_history_partition")]),t._v(" is "),a("code",[t._v("true")]),t._v(", i.e. history partition creation is enabled, Doris determines the number of history partitions to be created based on "),a("code",[t._v("dynamic_partition.start")]),t._v(" and "),a("code",[t._v("dynamic_partition.history_partition_num")]),t._v(".")]),t._v(" "),a("p",[t._v("Assuming the number of history partitions to be created is "),a("code",[t._v("expect_create_partition_num")]),t._v(", the number is as follows according to different settings.")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("create_history_partition")]),t._v(" = "),a("code",[t._v("true")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("dynamic_partition.history_partition_num")]),t._v(" is not set, i.e. -1."),a("br"),t._v(" "),a("code",[t._v("expect_create_partition_num")]),t._v(" = "),a("code",[t._v("end")]),t._v(" - "),a("code",[t._v("start")]),t._v(";")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dynamic_partition.history_partition_num")]),t._v(" is set"),a("br"),t._v(" "),a("code",[t._v("expect_create_partition_num")]),t._v(" = "),a("code",[t._v("end")]),t._v(" - max("),a("code",[t._v("start")]),t._v(", "),a("code",[t._v("-histoty_partition_num")]),t._v(");")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("create_history_partition")]),t._v(" = "),a("code",[t._v("false")]),a("br"),t._v("\nNo history partition will be created, "),a("code",[t._v("expect_create_partition_num")]),t._v(" = "),a("code",[t._v("end")]),t._v(" - 0;")])])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("expect_create_partition_num")]),t._v(" is greater than "),a("code",[t._v("max_dynamic_partition_num")]),t._v(" (default 500), creating too many partitions is prohibited.")]),t._v(" "),a("p",[a("strong",[t._v("Examples:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Suppose today is 2021-05-20, partition by day, and the attributes of dynamic partition are set to "),a("code",[t._v("create_history_partition=true, end=3, start=-3, history_partition_num=1")]),t._v(", then the system will automatically create the following partitions.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p20210519\np20210520\np20210521\np20210522\np20210523\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("history_partition_num=5")]),t._v(" and keep the rest attributes as in 1, then the system will automatically create the following partitions.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("history_partition_num=-1")]),t._v(" i.e., if you do not set the number of history partitions and keep the rest of the attributes as in 1, the system will automatically create the following partitions.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[t._v("#")]),t._v(" Notice")]),t._v(" "),a("p",[t._v("If some partitions between "),a("code",[t._v("dynamic_partition.start")]),t._v(" and "),a("code",[t._v("dynamic_partition.end")]),t._v(" are lost due to some unexpected circumstances when using dynamic partition, the lost partitions between the current time and "),a("code",[t._v("dynamic_partition.end")]),t._v(" will be recreated, but the lost partitions between "),a("code",[t._v("dynamic_partition.start")]),t._v(" and the current time will not be recreated.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Table "),a("code",[t._v("tbl1")]),t._v(" partition column k1, type is DATE, create a dynamic partition rule. By day partition, only the partitions of the last 7 days are kept, and the partitions of the next 3 days are created in advance.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n')])])]),a("p",[t._v("Suppose the current date is 2020-05-29. According to the above rules, tbl1 will produce the following partitions:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p20200529: ["2020-05-29", "2020-05-30")\np20200530: ["2020-05-30", "2020-05-31")\np20200531: ["2020-05-31", "2020-06-01")\np20200601: ["2020-06-01", "2020-06-02")\n')])])]),a("p",[t._v("On the next day, 2020-05-30, a new partition will be created "),a("code",[t._v('p20200602: [" 2020-06-02 "," 2020-06-03 ")')])]),t._v(" "),a("p",[t._v("On 2020-06-06, because "),a("code",[t._v("dynamic_partition.start")]),t._v(" is set to 7, the partition 7 days ago will be deleted, that is, the partition "),a("code",[t._v("p20200529")]),t._v(" will be deleted.")])]),t._v(" "),a("li",[a("p",[t._v("Table tbl1 partition column k1, type is DATETIME, create a dynamic partition rule. Partition by week, only keep the partition of the last 2 weeks, and create the partition of the next 2 weeks in advance.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATETIME,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "WEEK",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n);\n')])])]),a("p",[t._v("Suppose the current date is 2020-05-29, which is the 22nd week of 2020. The default week starts on Monday. Based on the above rules, tbl1 will produce the following partitions:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p2020_22: ["2020-05-25 00:00:00", "2020-06-01 00:00:00")\np2020_23: ["2020-06-01 00:00:00", "2020-06-08 00:00:00")\np2020_24: ["2020-06-08 00:00:00", "2020-06-15 00:00:00")\n')])])]),a("p",[t._v("The start date of each partition is Monday of the week. At the same time, because the type of the partition column k1 is DATETIME, the partition value will fill the hour, minute and second fields, and all are 0.")]),t._v(" "),a("p",[t._v("On 2020-06-15, the 25th week, the partition 2 weeks ago will be deleted, ie "),a("code",[t._v("p2020_22")]),t._v(" will be deleted.")]),t._v(" "),a("p",[t._v("In the above example, suppose the user specified the start day of the week as "),a("code",[t._v('"dynamic_partition.start_day_of_week" = "3"')]),t._v(", that is, set Wednesday as the start of week. The partition is as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p2020_22: ["2020-05-27 00:00:00", "2020-06-03 00:00:00")\np2020_23: ["2020-06-03 00:00:00", "2020-06-10 00:00:00")\np2020_24: ["2020-06-10 00:00:00", "2020-06-17 00:00:00")\n')])])]),a("p",[t._v("That is, the partition ranges from Wednesday of the current week to Tuesday of the next week.")]),t._v(" "),a("ul",[a("li",[t._v("Note: 2019-12-31 and 2020-01-01 are in same week, if the starting date of the partition is 2019-12-31, the partition name is "),a("code",[t._v("p2019_53")]),t._v(", if the starting date of the partition is 2020-01 -01, the partition name is "),a("code",[t._v("p2020_01")]),t._v(".")])])]),t._v(" "),a("li",[a("p",[t._v("Table tbl1 partition column k1, type is DATE, create a dynamic partition rule. Partition by month without deleting historical partitions, and create partitions for the next 2 months in advance. At the same time, set the starting date on the 3rd of each month.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n')])])]),a("p",[t._v("Suppose the current date is 2020-05-29. Based on the above rules, tbl1 will produce the following partitions:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p202005: ["2020-05-03", "2020-06-03")\np202006: ["2020-06-03", "2020-07-03")\np202007: ["2020-07-03", "2020-08-03")\n')])])]),a("p",[t._v("Because "),a("code",[t._v("dynamic_partition.start")]),t._v(" is not set, the historical partition will not be deleted.")]),t._v(" "),a("p",[t._v("Assuming that today is 2020-05-20, and set 28th as the start of each month, the partition range is:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p202004: ["2020-04-28", "2020-05-28")\np202005: ["2020-05-28", "2020-06-28")\np202006: ["2020-06-28", "2020-07-28")\n')])])])])]),t._v(" "),a("h3",{attrs:{id:"modify-dynamic-partition-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-dynamic-partition-properties"}},[t._v("#")]),t._v(" Modify Dynamic Partition Properties")]),t._v(" "),a("p",[t._v("You can modify the properties of the dynamic partition with the following command")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    ...\n);\n')])])]),a("p",[t._v("The modification of certain attributes may cause conflicts. Assume that the partition granularity was DAY and the following partitions have been created:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('p20200519: ["2020-05-19", "2020-05-20")\np20200520: ["2020-05-20", "2020-05-21")\np20200521: ["2020-05-21", "2020-05-22")\n')])])]),a("p",[t._v("If the partition granularity is changed to MONTH at this time, the system will try to create a partition with the range "),a("code",[t._v('["2020-05-01", "2020-06-01")')]),t._v(", and this range conflicts with the existing partition. So it cannot be created. And the partition with the range "),a("code",[t._v('["2020-06-01", "2020-07-01")')]),t._v(" can be created normally. Therefore, the partition between 2020-05-22 and 2020-05-30 needs to be filled manually.")]),t._v(" "),a("h3",{attrs:{id:"check-dynamic-partition-table-scheduling-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-dynamic-partition-table-scheduling-status"}},[t._v("#")]),t._v(" Check Dynamic Partition Table Scheduling Status")]),t._v(" "),a("p",[t._v("You can further view the scheduling of dynamic partitioned tables by using the following command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n7 rows in set (0.02 sec)\n")])])]),a("ul",[a("li",[t._v("LastUpdateTime: The last time of modifying dynamic partition properties")]),t._v(" "),a("li",[t._v("LastSchedulerTime: The last time of performing dynamic partition scheduling")]),t._v(" "),a("li",[t._v("State: The state of the last execution of dynamic partition scheduling")]),t._v(" "),a("li",[t._v("LastCreatePartitionMsg: Error message of the last time to dynamically add partition scheduling")]),t._v(" "),a("li",[t._v("LastDropPartitionMsg: Error message of the last execution of dynamic deletion partition scheduling")])]),t._v(" "),a("h2",{attrs:{id:"advanced-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-operation"}},[t._v("#")]),t._v(" Advanced Operation")]),t._v(" "),a("h3",{attrs:{id:"fe-configuration-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration-item"}},[t._v("#")]),t._v(" FE Configuration Item")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("dynamic_partition_enable")]),t._v(" "),a("p",[t._v("Whether to enable Doris's dynamic partition feature. The default value is false, which is off. This parameter only affects the partitioning operation of dynamic partition tables, not normal tables. You can modify the parameters in "),a("code",[t._v("fe.conf")]),t._v(" and restart FE to take effect. You can also execute the following commands at runtime to take effect:")]),t._v(" "),a("p",[t._v("MySQL protocol:")]),t._v(" "),a("p",[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")')])]),t._v(" "),a("p",[t._v("HTTP protocol:")]),t._v(" "),a("p",[a("code",[t._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true")])]),t._v(" "),a("p",[t._v("To turn off dynamic partitioning globally, set this parameter to false.")])]),t._v(" "),a("li",[a("p",[t._v("dynamic_partition_check_interval_seconds")]),t._v(" "),a("p",[t._v("The execution frequency of dynamic partition threads defaults to 3600 (1 hour), that is, scheduling is performed every 1 hour. You can modify the parameters in "),a("code",[t._v("fe.conf")]),t._v(" and restart FE to take effect. You can also modify the following commands at runtime:")]),t._v(" "),a("p",[t._v("MySQL protocol:")]),t._v(" "),a("p",[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_check_interval_seconds" = "7200")')])]),t._v(" "),a("p",[t._v("HTTP protocol:")]),t._v(" "),a("p",[a("code",[t._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000")])])])]),t._v(" "),a("h3",{attrs:{id:"converting-dynamic-and-manual-partition-tables-to-each-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-dynamic-and-manual-partition-tables-to-each-other"}},[t._v("#")]),t._v(" Converting dynamic and manual partition tables to each other")]),t._v(" "),a("p",[t._v("For a table, dynamic and manual partitioning can be freely converted, but they cannot exist at the same time, there is and only one state.")]),t._v(" "),a("h4",{attrs:{id:"converting-manual-partitioning-to-dynamic-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-manual-partitioning-to-dynamic-partitioning"}},[t._v("#")]),t._v(" Converting Manual Partitioning to Dynamic Partitioning")]),t._v(" "),a("p",[t._v("If a table is not dynamically partitioned when it is created, it can be converted to dynamic partitioning at runtime by modifying the dynamic partitioning properties with "),a("code",[t._v("ALTER TABLE")]),t._v(", an example of which can be seen with "),a("code",[t._v("HELP ALTER TABLE")]),t._v(".")]),t._v(" "),a("p",[t._v("When dynamic partitioning feature is enabled, Doris will no longer allow users to manage partitions manually, but will automatically manage partitions based on dynamic partition properties.")]),t._v(" "),a("p",[a("strong",[t._v("NOTICE")]),t._v(": If "),a("code",[t._v("dynamic_partition.start")]),t._v(" is set, historical partitions with a partition range before the start offset of the dynamic partition will be deleted.")]),t._v(" "),a("h4",{attrs:{id:"converting-dynamic-partitioning-to-manual-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-dynamic-partitioning-to-manual-partitioning"}},[t._v("#")]),t._v(" Converting Dynamic Partitioning to Manual Partitioning")]),t._v(" "),a("p",[t._v("The dynamic partitioning feature can be disabled by executing "),a("code",[t._v('ALTER TABLE tbl_name SET ("dynamic_partition.enable" = "false")')]),t._v(" and converting it to a manual partition table.")]),t._v(" "),a("p",[t._v("When dynamic partitioning feature is disabled, Doris will no longer manage partitions automatically, and users will have to create or delete partitions manually by using "),a("code",[t._v("ALTER TABLE")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"common-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-problem"}},[t._v("#")]),t._v(" Common problem")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("After creating the dynamic partition table, it prompts "),a("code",[t._v("Could not create table with dynamic partition when fe config dynamic_partition_enable is false")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('  Because the main switch of dynamic partition, that is, the configuration of FE ```dynamic_partition_enable``` is false, the dynamic partition table cannot be created.\n\n  At this time, please modify the FE configuration file, add a line ```dynamic_partition_enable=true```, and restart FE. Or execute the command ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true") to turn on the dynamic partition switch.\n')])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);