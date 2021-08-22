(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{478:function(e,t,s){"use strict";s.r(t);var r=s(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"be-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#be-metrics"}},[e._v("#")]),e._v(" BE Metrics")]),e._v(" "),s("p",[e._v("This document mainly introduces the monitor metrics of BE.")]),e._v(" "),s("h2",{attrs:{id:"view-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-metrics"}},[e._v("#")]),e._v(" View Metrics")]),e._v(" "),s("p",[e._v("BE metrics can be viewed by visiting:")]),e._v(" "),s("p",[s("code",[e._v("http://be_host:be_webserver_port/metrics")])]),e._v(" "),s("p",[e._v("The default format is of "),s("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("You can get Json format by visiting:")]),e._v(" "),s("p",[s("code",[e._v("http://be_host:be_webserver_port/metrics?type=json")])]),e._v(" "),s("h2",{attrs:{id:"metrics-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-list"}},[e._v("#")]),e._v(" Metrics List")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-in-errs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-in-errs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_in_errs"}')])]),e._v(" "),s("p",[e._v("Value of the "),s("code",[e._v("Tcp: InErrs")]),e._v(" field in "),s("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of error TCP packets currently received.")]),e._v(" "),s("p",[e._v("The incidence rate can be calculated in combination with the sampling period.")]),e._v(" "),s("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-retrans-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-retrans-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_retrans_segs"}')])]),e._v(" "),s("p",[e._v("Value of the "),s("code",[e._v("Tcp: RetransSegs")]),e._v(" field in "),s("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of error TCP packets currently received.")]),e._v(" "),s("p",[e._v("The incidence rate can be calculated in combination with the sampling period.")]),e._v(" "),s("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-in-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-in-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_in_segs"}')])]),e._v(" "),s("p",[e._v("Value of the "),s("code",[e._v("Tcp: InSegs")]),e._v(" field in "),s("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of received TCP packets.")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")]),e._v(" can calculate the error rate of received TCP packets.")]),e._v(" "),s("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-out-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-out-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_out_segs"}')])]),e._v(" "),s("p",[e._v("Value of the "),s("code",[e._v("Tcp: OutSegs")]),e._v(" field in "),s("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of send TCP packets with RST mark.")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("(NEW_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")]),e._v(" can calculate the retrans rate of TCP packets.")]),e._v(" "),s("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),s("h3",{attrs:{id:"doris-be-compaction-mem-current-consumption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-compaction-mem-current-consumption"}},[e._v("#")]),e._v(" "),s("code",[e._v("doris_be_compaction_mem_current_consumption")])]),e._v(" "),s("p",[e._v("The total MemPool consumption of all running "),s("code",[e._v("Compaction")]),e._v(" threads. Use this value, we can easily identify whether\nCompactions use too much memory, it may cause memory overhead or OOM.")]),e._v(" "),s("p",[e._v("Usually used to troubleshoot memory problems.")])])}),[],!1,null,null,null);t.default=o.exports}}]);