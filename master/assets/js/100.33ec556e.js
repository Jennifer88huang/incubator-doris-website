(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{488:function(e,s,t){"use strict";t.r(s);var r=t(43),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"resource-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-management"}},[e._v("#")]),e._v(" Resource Management")]),e._v(" "),t("p",[e._v("In order to save the compute and storage resources in the Doris cluster, Doris needs to reference to some other external resources to do the related work. such as spark/GPU for query, HDFS/S3 for external storage, spark/MapReduce for ETL, connect to external storage by ODBC driver. Therefore, Doris need a resource management mechanism to manage these external resources.")]),e._v(" "),t("h2",{attrs:{id:"fundamental-concept"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fundamental-concept"}},[e._v("#")]),e._v(" Fundamental Concept")]),e._v(" "),t("p",[e._v("A resource contains basic information such as name and type. The name is globally unique. Different types of resources contain different attributes. Please refer to the introduction of each resource for details.")]),e._v(" "),t("p",[e._v("The creation and deletion of resources can only be performed by users own "),t("code",[e._v("admin")]),e._v(" permission. One resource belongs to the entire Doris cluster. Users with "),t("code",[e._v("admin")]),e._v(" permission can assign permission of resource to other users. Please refer to "),t("code",[e._v("HELP GRANT")]),e._v(" or doris document.")]),e._v(" "),t("h2",{attrs:{id:"operation-of-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-of-resource"}},[e._v("#")]),e._v(" Operation Of Resource")]),e._v(" "),t("p",[e._v("There are three main commands for resource management: "),t("code",[e._v("create resource")]),e._v(", "),t("code",[e._v("drop resource")]),e._v(" and "),t("code",[e._v("show resources")]),e._v(". They are to create, delete and check resources. The specific syntax of these three commands can be viewed by executing "),t("code",[e._v("help CMD")]),e._v(" after MySQL client connects to Doris.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("CREATE RESOURCE")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("EXTERNAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"resource_name"')]),e._v("                                  \n  PROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" \n")])])]),t("p",[e._v("In the command to create a resource, the user must provide the following information:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("resource_name")]),e._v(" name of the resource")]),e._v(" "),t("li",[t("code",[e._v("PROPERTIES")]),e._v(" related parameters, as follows:\n"),t("ul",[t("li",[t("code",[e._v("type")]),e._v(": resource type, required. Currently, only spark and odbc_catalog are supported.")]),e._v(" "),t("li",[e._v("For other parameters, see the resource introduction")])])])])]),e._v(" "),t("li",[t("p",[e._v("DROP RESOURCE")]),e._v(" "),t("p",[e._v("This command can delete an existing resource. For details, please refer to: "),t("code",[e._v("HELP DROP RESOURCE")])])]),e._v(" "),t("li",[t("p",[e._v("SHOW RESOURCES")]),e._v(" "),t("p",[e._v("This command can view the resources that the user has permission to use. Please refer to: "),t("code",[e._v("HELP SHOW RESOURCES")])])])]),e._v(" "),t("h2",{attrs:{id:"resources-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-supported"}},[e._v("#")]),e._v(" Resources Supported")]),e._v(" "),t("p",[e._v("Currently, Doris can support")]),e._v(" "),t("ul",[t("li",[e._v("Spark resource: do ETL work")]),e._v(" "),t("li",[e._v("ODBC resource: query and import data from external tables")])]),e._v(" "),t("p",[e._v("The following shows how the two resources are used.")]),e._v(" "),t("h3",{attrs:{id:"spark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark"}},[e._v("#")]),e._v(" Spark")]),e._v(" "),t("h4",{attrs:{id:"parameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter"}},[e._v("#")]),e._v(" Parameter")]),e._v(" "),t("h5",{attrs:{id:"spark-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark-parameters"}},[e._v("#")]),e._v(" Spark Parameters:")]),e._v(" "),t("p",[t("code",[e._v("spark.master")]),e._v(": required, currently supported yarn, spark://host:port.")]),e._v(" "),t("p",[t("code",[e._v("spark.submit.deployMode")]),e._v(": The deployment mode of spark. required. It supports cluster and client.")]),e._v(" "),t("p",[t("code",[e._v("spark.hadoop.yarn.resourcemanager.address")]),e._v(": required when master is yarn.")]),e._v(" "),t("p",[t("code",[e._v("spark.hadoop.fs.defaultFS")]),e._v(": required when master is yarn.")]),e._v(" "),t("p",[e._v("Other parameters are optional, refer to: http://spark.apache.org/docs/latest/configuration.html.")]),e._v(" "),t("h5",{attrs:{id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters"}},[e._v("#")]),e._v(" If spark is used for ETL, also need to specify the following parameters:")]),e._v(" "),t("p",[t("code",[e._v("working_dir")]),e._v(": Directory used by ETL. Spark is required when used as an ETL resource. For example: hdfs://host:port/tmp/doris.")]),e._v(" "),t("p",[t("code",[e._v("broker")]),e._v(": The name of broker. Is required when spark be used as ETL resource. You need to use the "),t("code",[e._v("ALTER SYSTEM ADD BROKER")]),e._v(" command to complete the configuration in advance.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("broker.property_key")]),e._v(": When the broker reads the intermediate file generated by ETL, it needs the specified authentication information.")])]),e._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("Create a spark resource named "),t("code",[e._v("spark0")]),e._v("in the yarn cluster mode.")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" EXTERNAL RESOURCE "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark0"')]),e._v("\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"type"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.master"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yarn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.submit.deployMode"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cluster"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.jars"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxx.jar,yyy.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.files"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tmp/aaa,/tmp/bbb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.executor.memory"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1g"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.yarn.queue"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"queue0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.hadoop.yarn.resourcemanager.address"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1:9999"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"spark.hadoop.fs.defaultFS"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs://127.0.0.1:10000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"working_dir"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs://127.0.0.1:10000/tmp/doris"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker.username"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker.password"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password0"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h3",{attrs:{id:"odbc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#odbc"}},[e._v("#")]),e._v(" ODBC")]),e._v(" "),t("h4",{attrs:{id:"parameter-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-2"}},[e._v("#")]),e._v(" Parameter")]),e._v(" "),t("h5",{attrs:{id:"odbc-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#odbc-parameters"}},[e._v("#")]),e._v(" ODBC Parameters:")]),e._v(" "),t("p",[t("code",[e._v("type")]),e._v(": Required, must be "),t("code",[e._v("odbc_catalog")]),e._v(". As the type identifier of resource.")]),e._v(" "),t("p",[t("code",[e._v("user")]),e._v(": The user name of the external table, required.")]),e._v(" "),t("p",[t("code",[e._v("password")]),e._v(": The user password of the external table, required.")]),e._v(" "),t("p",[t("code",[e._v("host")]),e._v(": The ip address of the external table, required.")]),e._v(" "),t("p",[t("code",[e._v("port")]),e._v(": The port of the external table, required.")]),e._v(" "),t("p",[t("code",[e._v("odbc_type")]),e._v(": Indicates the type of external table. Currently, Doris supports "),t("code",[e._v("MySQL")]),e._v(" and "),t("code",[e._v("Oracle")]),e._v(". In the future, it may support more databases. The ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional.")]),e._v(" "),t("p",[t("code",[e._v("driver")]),e._v(": Indicates the driver dynamic library used by the ODBC external table.\nThe ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional.")]),e._v(" "),t("p",[e._v("For the usage of ODBC resource, please refer to "),t("RouterLink",{attrs:{to:"/en/extending-doris/odbc-of-doris.html"}},[e._v("ODBC of Doris")])],1),e._v(" "),t("h4",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("Create the ODBC resource of Oracle, named "),t("code",[e._v("oracle_odbc")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" EXTERNAL RESOURCE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("oracle_odbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v("\nPROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"type"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"odbc_catalog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"192.168.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"port"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"8086"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"database"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"odbc_type"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"oracle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"driver"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Oracle 19 ODBC driver"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);