(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{459:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-single-tablet-to-a-particular-disk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-single-tablet-to-a-particular-disk"}},[t._v("#")]),t._v(" MIGRATE SINGLE TABLET TO A PARTICULAR DISK")]),t._v(" "),a("p",[t._v("Migrate single tablet to a particular disk.")]),t._v(" "),a("p",[t._v("Submit the migration task:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=run&tablet_id=xxx&schema_hash=xxx&disk=xxx\n")])])]),a("p",[t._v("The return is the submission result of the migration task:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')])])]),a("p",[t._v("Show the status of migration task:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=status&tablet_id=xxx&schema_hash=xxx\n")])])]),a("p",[t._v("The return is the execution result of the migration task:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n        status: "Success",\n        msg: "migration task is running.",\n        dest_disk: "xxxxxx"\n    }\n')])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n        status: "Success",\n        msg: "migration task has finished successfully.",\n        dest_disk: "xxxxxx"\n    }\n')])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);