(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1012:function(e,t,_){"use strict";_.r(t);var a=_(43),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"fe-监控项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fe-监控项"}},[e._v("#")]),e._v(" FE 监控项")]),e._v(" "),_("p",[e._v("该文档主要介绍 FE 的相关监控项。")]),e._v(" "),_("h2",{attrs:{id:"查看监控项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看监控项"}},[e._v("#")]),e._v(" 查看监控项")]),e._v(" "),_("p",[e._v("FE 的监控项可以通过以下方式访问：")]),e._v(" "),_("p",[_("code",[e._v("http://fe_host:fe_http_port/metrics")])]),e._v(" "),_("p",[e._v("默认显示为 "),_("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),_("OutboundLink")],1),e._v(" 格式。")]),e._v(" "),_("p",[e._v("通过以下接口可以获取 Json 格式的监控项：")]),e._v(" "),_("p",[_("code",[e._v("http://fe_host:fe_http_port/metrics?type=json")])]),e._v(" "),_("h2",{attrs:{id:"监控项列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#监控项列表"}},[e._v("#")]),e._v(" 监控项列表")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-errs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-errs"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_snmp{name="tcp_in_errs"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),_("code",[e._v("Tcp: InErrs")]),e._v(" 字段值。表示当前接收到的错误的 TCP 包的数量。")]),e._v(" "),_("p",[e._v("结合采样周期可以计算发生率。")]),e._v(" "),_("p",[e._v("通常用于排查网络问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-snmp-name-tcp-retrans-segs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-retrans-segs"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_snmp{name="tcp_retrans_segs"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),_("code",[e._v("Tcp: RetransSegs")]),e._v(" 字段值。表示当前重传的 TCP 包的数量。")]),e._v(" "),_("p",[e._v("结合采样周期可以计算发生率。")]),e._v(" "),_("p",[e._v("通常用于排查网络问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-segs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-segs"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_snmp{name="tcp_in_segs"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),_("code",[e._v("Tcp: InSegs")]),e._v(" 字段值。表示当前接收到的所有 TCP 包的数量。")]),e._v(" "),_("p",[e._v("通过 "),_("code",[e._v("(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")]),e._v(" 可以计算接收到的 TCP 错误包率。")]),e._v(" "),_("p",[e._v("通常用于排查网络问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-snmp-name-tcp-out-segs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-out-segs"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_snmp{name="tcp_out_segs"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),_("code",[e._v("Tcp: OutSegs")]),e._v(" 字段值。表示当前发送的所有带 RST 标记的 TCP 包的数量。")]),e._v(" "),_("p",[e._v("通过 "),_("code",[e._v("(NEW_tcp_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")]),e._v(" 可以计算 TCP 重传率。")]),e._v(" "),_("p",[e._v("通常用于排查网络问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-meminfo-name-memory-total"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-total"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_meminfo{name="memory_total"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/meminfo")]),e._v(" 中的 "),_("code",[e._v("MemTotal")]),e._v(" 字段值。表示所有可用的内存大小，总的物理内存减去预留空间和内核大小。")]),e._v(" "),_("p",[e._v("通常用于排查内存问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-meminfo-name-memory-free"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-free"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_meminfo{name="memory_free"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/meminfo")]),e._v(" 中的 "),_("code",[e._v("MemFree")]),e._v(" 字段值。表示系统尚未使用的内存。。")]),e._v(" "),_("p",[e._v("通常用于排查内存问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-meminfo-name-memory-available"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-available"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_meminfo{name="memory_available"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/meminfo")]),e._v(" 中的 "),_("code",[e._v("MemAvailable")]),e._v(" 字段值。真正的系统可用内存，系统中有些内存虽然已被使用但是可以回收的，所以这部分可回收的内存加上MemFree才是系统可用的内存")]),e._v(" "),_("p",[e._v("通常用于排查内存问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-meminfo-name-buffers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-buffers"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_meminfo{name="buffers"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/meminfo")]),e._v(" 中的 "),_("code",[e._v("Buffers")]),e._v(" 字段值。表示用来给块设备做缓存的内存(文件系统的metadata、pages)。")]),e._v(" "),_("p",[e._v("通常用于排查内存问题。")]),e._v(" "),_("h3",{attrs:{id:"doris-fe-meminfo-name-cached"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-cached"}},[e._v("#")]),e._v(" "),_("code",[e._v('doris_fe_meminfo{name="cached"}')])]),e._v(" "),_("p",[e._v("该监控项为 "),_("code",[e._v("/proc/meminfo")]),e._v(" 中的 "),_("code",[e._v("Cached")]),e._v(" 字段值。表示分配给文件缓冲区的内存。")]),e._v(" "),_("p",[e._v("通常用于排查内存问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点当前JVM总的线程数量，包含daemon线程和非daemon线程。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-peak-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-peak-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="peak_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点从JVM启动以来的最大峰值线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-new-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-new-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="new_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于NEW状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-runnable-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-runnable-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="runnable_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于RUNNABLE状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-blocked-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-blocked-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="blocked_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于BLOCKED状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-waiting-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-waiting-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="waiting_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于WAITING状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-timed-waiting-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-timed-waiting-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="timed_waiting_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于TIMED_WAITING状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")]),e._v(" "),_("h3",{attrs:{id:"jvm-thread-type-terminated-count"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-terminated-count"}},[e._v("#")]),e._v(" "),_("code",[e._v('jvm_thread{type="terminated_count"}')])]),e._v(" "),_("p",[e._v("该监控项表示FE节点JVM中处于TERMINATED状态的线程数量。")]),e._v(" "),_("p",[e._v("通常用于排查FE节点的JVM线程运行问题。")])])}),[],!1,null,null,null);t.default=v.exports}}]);