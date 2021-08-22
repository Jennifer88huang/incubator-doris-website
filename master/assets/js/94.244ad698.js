(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{481:function(t,e,a){"use strict";a.r(e);var o=a(43),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tablet-metadata-management-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-metadata-management-tool"}},[t._v("#")]),t._v(" Tablet metadata management tool")]),t._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),a("p",[t._v("In the latest version of the code, we introduced RocksDB in BE to store meta-information of tablet, in order to solve various functional and performance problems caused by storing meta-information through header file. Currently, each data directory (root path) has a corresponding RocksDB instance, in which all tablets on the corresponding root path are stored in the key-value manner.")]),t._v(" "),a("p",[t._v("To facilitate the maintenance of these metadata, we provide an online HTTP interface and an offline meta tool to complete related management operations.")]),t._v(" "),a("p",[t._v("The HTTP interface is only used to view tablet metadata online, and can be used when the BE process is running.")]),t._v(" "),a("p",[t._v("However, meta tool is only used for off-line metadata management operations. BE must be stopped before it can be used.")]),t._v(" "),a("p",[t._v("The meta tool tool is stored in the Lib / directory of BE.")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("h3",{attrs:{id:"view-tablet-meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-tablet-meta"}},[t._v("#")]),t._v(" View Tablet Meta")]),t._v(" "),a("p",[t._v("Viewing Tablet Meta information can be divided into online and offline methods")]),t._v(" "),a("h4",{attrs:{id:"online"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online"}},[t._v("#")]),t._v(" Online")]),t._v(" "),a("p",[t._v("Access BE's HTTP interface to obtain the corresponding Tablet Meta information:")]),t._v(" "),a("p",[t._v("api:")]),t._v(" "),a("p",[a("code",[t._v("http://{host}:{port}/api/meta/header/{tablet_id}/{schema_hash}")])]),t._v(" "),a("blockquote",[a("p",[t._v("Host: be Hostname")]),t._v(" "),a("p",[t._v("port: BE's HTTP port")]),t._v(" "),a("p",[t._v("tablet id: tablet id")]),t._v(" "),a("p",[t._v("schema hash: tablet schema hash")])]),t._v(" "),a("p",[t._v("Give an example:")]),t._v(" "),a("p",[a("code",[t._v("http://be_host:8040/api/meta/header/14156/2458238340")])]),t._v(" "),a("p",[t._v("If the final query is successful, the Tablet Meta will be returned as json.")]),t._v(" "),a("h4",{attrs:{id:"offline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offline"}},[t._v("#")]),t._v(" Offline")]),t._v(" "),a("p",[t._v("Get Tablet Meta on a disk based on the meta\\ tool tool.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./lib/meta_tool --root_path=/path/to/root_path --operation=get_meta --tablet_id=xxx --schema_hash=xxx\n")])])]),a("blockquote",[a("p",[t._v("root_path: The corresponding root_path path path configured in be.conf.")])]),t._v(" "),a("p",[t._v("The result is also a presentation of Tablet Meta in JSON format.")]),t._v(" "),a("h3",{attrs:{id:"load-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-header"}},[t._v("#")]),t._v(" Load header")]),t._v(" "),a("p",[t._v("The function of loading header is provided to realize manual migration of tablet. This function is based on Tablet Meta in JSON format, so if changes in the shard field and version information are involved, they can be changed directly in the JSON content of Tablet Meta. Then use the following commands to load.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./lib/meta_tool --operation=load_meta --root_path=/path/to/root_path --json_header_path=path\n")])])]),a("h3",{attrs:{id:"delete-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-header"}},[t._v("#")]),t._v(" Delete header")]),t._v(" "),a("p",[t._v("In order to realize the function of deleting a tablet meta from a disk of a BE. Support single delete and batch delete.")]),t._v(" "),a("p",[t._v("Single delete:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./lib/meta_tool --operation=delete_meta --root_path=/path/to/root_path --tablet_id=xxx --schema_hash=xxx`\n")])])]),a("p",[t._v("Batch delete:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./lib/meta_tool --operation=batch_delete_meta --tablet_file=/path/to/tablet_file.txt\n")])])]),a("p",[t._v("Each line in "),a("code",[t._v("tablet_file.txt")]),t._v(" represents the information of a tablet. The format is:")]),t._v(" "),a("p",[a("code",[t._v("root_path,tablet_id,schema_hash")])]),t._v(" "),a("p",[t._v("Each column are separated by comma.")]),t._v(" "),a("p",[a("code",[t._v("tablet_file")]),t._v(" example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/output/be/data/,14217,352781111\n/output/be/data/,14219,352781111\n/output/be/data/,14223,352781111\n/output/be/data/,14227,352781111\n/output/be/data/,14233,352781111\n/output/be/data/,14239,352781111\n")])])]),a("p",[t._v("Batch delete will skip the line with incorrect tablet information format in "),a("code",[t._v("tablet_file")]),t._v(". And after the execution is completed, the number of successful deletions and the number of errors are displayed.")]),t._v(" "),a("h3",{attrs:{id:"tabletmeta-in-pb-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabletmeta-in-pb-format"}},[t._v("#")]),t._v(" TabletMeta in Pb format")]),t._v(" "),a("p",[t._v("This command is to view the old file-based management PB format Tablet Meta, and to display Tablet Meta in JSON format.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./lib/meta_tool --operation=show_meta --root_path=/path/to/root_path --pb_header_path=path\n")])])]),a("h3",{attrs:{id:"segment-meta-in-pb-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segment-meta-in-pb-format"}},[t._v("#")]),t._v(" Segment meta in Pb format")]),t._v(" "),a("p",[t._v("This command is to view the PB format segment meta, and to display segment meta in JSON format.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./meta_tool --operation=show_segment_footer --file=/path/to/segment/file\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);