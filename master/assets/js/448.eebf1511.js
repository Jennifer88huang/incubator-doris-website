(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{836:function(e,a,t){"use strict";t.r(a);var s=t(43),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"alter-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-database"}},[e._v("#")]),e._v(" ALTER DATABASE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("This statement is used to set the properties of the specified database. (Administrators only)\nGrammar:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Setting database data quota in B/K/KB/M/MB/G/GB/T/TB/P/PB\nOTHER DATABASE dbu name SET DATA QUOTA quota;")])]),e._v(" "),t("li",[t("p",[e._v("Rename the database\nALTER DATABASE db_name RENAME new_db_name;")])])]),e._v(" "),t("p",[e._v("Explain:\nAfter renaming the database, use REVOKE and GRANT commands to modify the corresponding user rights if necessary.\nThe database's default data quota is 1024GB, and the default replica quota is 1073741824.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[e._v("Setting the specified database data quota\nALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above units are bytes, equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;")])]),e._v(" "),t("p",[e._v("ALTER DATABASE example_db SET DATA QUOTA 100G;")]),e._v(" "),t("p",[e._v("ALTER DATABASE example_db SET DATA QUOTA 200M;")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Rename the database example_db to example_db2\nALTER DATABASE example_db RENAME example_db2;")])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("ALTER,DATABASE,RENAME")])])}),[],!1,null,null,null);a.default=r.exports}}]);