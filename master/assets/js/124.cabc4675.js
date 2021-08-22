(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{511:function(e,t,n){"use strict";n.r(t);var o=n(43),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"setting-up-development-environment-for-fe-using-intellij-idea"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-development-environment-for-fe-using-intellij-idea"}},[e._v("#")]),e._v(" Setting Up Development Environment for FE using IntelliJ IDEA")]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("ul",[n("li",[e._v("Git")]),e._v(" "),n("li",[e._v("JDK1.8+")]),e._v(" "),n("li",[e._v("IntelliJ IDEA")]),e._v(" "),n("li",[e._v("Maven (Optional, IDEA shipped embedded Maven3)")])]),e._v(" "),n("h2",{attrs:{id:"clone-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clone-code"}},[e._v("#")]),e._v(" Clone Code")]),e._v(" "),n("p",[e._v("Git clone codebase from https://github.com/apache/incubator-doris.git")]),e._v(" "),n("h2",{attrs:{id:"code-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[e._v("#")]),e._v(" Code Generation")]),e._v(" "),n("p",[e._v("If your are only interested in FE module, and for some reason you can't or don't want to compile full thirdparty libraries,\nthe minimum tool required for FE module is "),n("code",[e._v("thrift")]),e._v(", so you can manually install "),n("code",[e._v("thrift")]),e._v(" and copy or create a link of\nthe executable "),n("code",[e._v("thrift")]),e._v(" command to "),n("code",[e._v("./thirdparty/installed/bin")]),e._v(".")]),e._v(" "),n("p",[e._v("Doris build against "),n("code",[e._v("thrift")]),e._v(" 0.9.3, and "),n("code",[e._v("thrift")]),e._v(" 0.9.3.1 should also work well, but the newer version will not.")]),e._v(" "),n("p",[e._v("If your are using macOS, try "),n("code",[e._v("brew install thrift@0.9")]),e._v(" and will get "),n("code",[e._v("thrift")]),e._v(" 0.9.3.1 installed at "),n("code",[e._v("/usr/local/opt/thrift@0.9/bin/thrift")]),e._v(",\nthen create a soft link to "),n("code",[e._v("./thirdparty/installed/bin/thrift")]),e._v(".")]),e._v(" "),n("p",[e._v("For Windows users, download "),n("code",[e._v("thrift")]),e._v(" 0.9.3 from "),n("code",[e._v("http://archive.apache.org/dist/thrift/0.9.3/thrift-0.9.3.exe")]),e._v(",\nand put it into "),n("code",[e._v("thirdparty/installed/bin/")]),e._v(" folder.")]),e._v(" "),n("p",[e._v("Go to "),n("code",[e._v("./fe")]),e._v(" folder and run the following maven command to generate sources.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mvn generate-sources\n")])])]),n("p",[e._v("If fails, run following command first to try to install modules into maven local repository, then re-run above command.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mvn install -DskipTests\n")])])]),n("p",[e._v("You can also use IDE embedded GUI tools to run maven command to generate sources")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/gen_code.png"),alt:""}}),e._v(" "),n("p",[e._v("If you are developing on the OS which lack of support to run "),n("code",[e._v("shell script")]),e._v(" and "),n("code",[e._v("make")]),e._v(" such as Windows, a workround here\nis generate codes in Linux and copy them back. Using Docker should also be an option.")]),e._v(" "),n("h2",{attrs:{id:"import-into-idea"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#import-into-idea"}},[e._v("#")]),e._v(" Import into IDEA")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Import "),n("code",[e._v("./fe")]),e._v(" into IDEA")])]),e._v(" "),n("li",[n("p",[e._v("Follow the picture to create the folders and copy files under "),n("code",[e._v("webroot")]),e._v(" into it.")])])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/DEBUG4.png"),alt:""}}),e._v(" "),n("h2",{attrs:{id:"custom-fe-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-fe-configuration"}},[e._v("#")]),e._v(" Custom FE configuration")]),e._v(" "),n("p",[e._v("Copy below content into "),n("code",[e._v("conf/fe.conf")]),e._v(" and tune it to fit your environment.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')])])]),n("h2",{attrs:{id:"setting-environment-variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-environment-variables"}},[e._v("#")]),e._v(" Setting Environment Variables")]),e._v(" "),n("p",[e._v("Follow the picture to set runtime Environment Variables in IDEA")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/DEBUG5.png"),alt:""}}),e._v(" "),n("h2",{attrs:{id:"start-fe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-fe"}},[e._v("#")]),e._v(" Start FE")]),e._v(" "),n("p",[e._v("Having fun with Doris FE!")])])}),[],!1,null,null,null);t.default=a.exports}}]);