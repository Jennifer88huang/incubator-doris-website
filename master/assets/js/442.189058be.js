(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{830:function(e,t,n){"use strict";n.r(t);var a=n(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用-intellij-idea-搭建-fe-开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-intellij-idea-搭建-fe-开发环境"}},[e._v("#")]),e._v(" 使用 IntelliJ IDEA 搭建 FE 开发环境")]),e._v(" "),n("h2",{attrs:{id:"_1-环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[e._v("#")]),e._v(" 1.环境准备")]),e._v(" "),n("p",[e._v("JDK1.8+, IntelliJ IDEA")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("从 https://github.com/apache/incubator-doris.git 下载源码到本地")])]),e._v(" "),n("li",[n("p",[e._v("使用IntelliJ IDEA 打开代码根目录")])]),e._v(" "),n("li",[n("p",[e._v("如果仅进行fe开发而没有编译过thirdparty，则需要安装thrift，并将thrift 复制或者连接到 "),n("code",[e._v("thirdparty/installed/bin")]),e._v(" 目录下")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("安装 thrift 0.9.3 版本。")]),e._v(" "),n("p",[e._v("MacOS: "),n("code",[e._v("brew install https://gist.githubusercontent.com/chrislusf/8b4e7c19551ba220232f037b43c0eaf3/raw/01465b867b8ef9af7c7c3fa830c83666c825122d/thrift.rb")])]),e._v(" "),n("p",[e._v("Windows: "),n("code",[e._v("http://archive.apache.org/dist/thrift/0.9.3/thrift-0.9.3.exe")])])])])]),e._v(" "),n("li",[n("p",[e._v("如果是Mac 或者 Linux 环境 可以通过 如下命令生成自动生成代码：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd fe\nmvn  generate-sources\n")])])]),n("p",[e._v("如果出现错误，请先执行：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd fe && mvn install -DskipTests\n")])])])])]),e._v(" "),n("p",[e._v("或者通过图形界面运行运行maven 命令生成")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/gen_code.png"),alt:""}}),e._v(" "),n("p",[e._v("如果使用windows环境可能会有make命令和sh脚本无法执行的情况 可以通过拷贝linux上的 "),n("code",[e._v("fe/fe-core/target/generated-sources")]),e._v(" 目录拷贝到相应的目录的方式实现，也可以通过docker 镜像挂载本地目录之后，在docker 内部生成自动生成代码，可以参照编译一节")]),e._v(" "),n("h2",{attrs:{id:"_2-调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-调试"}},[e._v("#")]),e._v(" 2.调试")]),e._v(" "),n("p",[n("strong",[e._v("1. 用idea导入fe工程；")])]),e._v(" "),n("p",[e._v("2.在fe目录下创建下面红框标出的目录，并将webroot里的内容拷贝进去")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/DEBUG4.png"),alt:""}}),e._v(" "),n("h2",{attrs:{id:"_3-配置conf-fe-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置conf-fe-conf"}},[e._v("#")]),e._v(" 3.配置conf/fe.conf")]),e._v(" "),n("p",[e._v("下面是我自己的配置，你可以根据自己的需要进行修改")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')])])]),n("h2",{attrs:{id:"_4-设置环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置环境变量"}},[e._v("#")]),e._v(" 4.设置环境变量")]),e._v(" "),n("p",[e._v("在IDEA中设置运行环境变量")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/DEBUG5.png"),alt:""}}),e._v(" "),n("h2",{attrs:{id:"_5-启动fe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动fe"}},[e._v("#")]),e._v(" 5.启动fe")]),e._v(" "),n("p",[e._v("下面你就可以愉快的启动，调试你的FE了")])])}),[],!1,null,null,null);t.default=r.exports}}]);