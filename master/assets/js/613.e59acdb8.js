(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1001:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"install-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-plugin"}},[t._v("#")]),t._v(" INSTALL PLUGIN")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('该语句用于安装一个插件。\n\n语法\n\n    INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n    \n    source 支持三种类型：\n    \n    1. 指向一个 zip 文件的绝对路径。\n    2. 指向一个插件目录的绝对路径。\n    3. 指向一个 http 或 https 协议的 zip 文件下载路径\n    \n    PROPERTIES 支持设置插件的一些配置,如设置zip文件的md5sum的值等。\n')])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('1. 安装一个本地 zip 文件插件：\n\n    INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n\n2. 安装一个本地目录中的插件：\n\n    INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n\n3. 下载并安装一个插件：\n\n    INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n    \n4. 下载并安装一个插件,同时设置了zip文件的md5sum的值：   \n    \n    INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("INSTALL,PLUGIN\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);