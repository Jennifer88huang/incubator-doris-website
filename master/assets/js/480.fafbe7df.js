(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{867:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"begin-commit-rollback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#begin-commit-rollback"}},[t._v("#")]),t._v(" BEGIN, COMMIT, ROLLBACK")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN;\nINSERT INTO table_name ...\nCOMMIT;\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN [ WITH LABEL label];\nINSERT INTO table_name ...\nROLLBACK;\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("blockquote",[a("p",[t._v("label: the label for this transaction, if you need to set it to a string.")])]),t._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("A transaction can only be used on insert, nor update or delete. You can check the state of this transaction by "),a("code",[t._v("SHOW TRANSACTION WHERE LABEL = 'label'")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("Begin a transaction without a label, then commit it")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])])]),a("p",[t._v("All the data in the sql between "),a("code",[t._v("begin")]),t._v(" and "),a("code",[t._v("commit")]),t._v(" will be inserted into the table.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Begin a transaction without a label, then abort it")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nROLLBACK:\n")])])]),a("p",[t._v("All the data in the sql between "),a("code",[t._v("begin")]),t._v(" and "),a("code",[t._v("rollback")]),t._v(" will be aborted, nothing will be inserted into the table.")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Begin a transaction with a label, then commit it")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN WITH LABEL test_label1\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])])]),a("p",[t._v("All the data in the sql between "),a("code",[t._v("begin")]),t._v(" and "),a("code",[t._v("commit")]),t._v(" will be inserted into the table.\nThe label of "),a("code",[t._v("test_label1")]),t._v(" will be set to mark this transaction. You can check this transaction by "),a("code",[t._v("SHOW TRANSACTION WHERE LABEL = 'test_label1'")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("BEGIN, COMMIT, ROLLBACK")])])}),[],!1,null,null,null);e.default=n.exports}}]);