(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{506:function(a,e,s){"use strict";s.r(e);var t=s(43),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"verify-apache-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-apache-release"}},[a._v("#")]),a._v(" Verify Apache Release")]),a._v(" "),s("p",[a._v("To verify the release, following checklist can used to reference:")]),a._v(" "),s("ol",[s("li",[a._v("[ ] Download links are valid.")]),a._v(" "),s("li",[a._v("[ ] Checksums and PGP signatures are valid.")]),a._v(" "),s("li",[a._v("[ ] DISCLAIMER-WIP is included.")]),a._v(" "),s("li",[a._v("[ ] Source code artifacts have correct names matching the current release.")]),a._v(" "),s("li",[a._v("[ ] LICENSE and NOTICE files are correct for the repository.")]),a._v(" "),s("li",[a._v("[ ] All files have license headers if necessary.")]),a._v(" "),s("li",[a._v("[ ] No compiled archives bundled in source archive.")]),a._v(" "),s("li",[a._v("[ ] Building is OK.")])]),a._v(" "),s("h2",{attrs:{id:"_1-download-source-package-signature-file-hash-file-and-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-source-package-signature-file-hash-file-and-keys"}},[a._v("#")]),a._v(" 1. Download source package, signature file, hash file and KEYS")]),a._v(" "),s("p",[a._v("Download all artifacts, take a.b.c-incubating as an example:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dyn/mirrors/mirrors.cgi?action"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("download"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.sha512\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.asc\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dist/incubator/doris/KEYS\n")])])]),s("h2",{attrs:{id:"_2-verify-signature-and-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-verify-signature-and-hash"}},[a._v("#")]),a._v(" 2. Verify signature and hash")]),a._v(" "),s("p",[a._v("GnuPG is recommended, which can install by yum install gnupg or apt-get install gnupg.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("gpg --import KEYS\ngpg --verify apache-doris-a.b.c-incubating-src.tar.gz.asc apache-doris-a.b.c-incubating-src.tar.gz\nsha512sum --check apache-doris-a.b.c-incubating-src.tar.gz.sha512\n")])])]),s("h2",{attrs:{id:"_3-verify-license-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-license-header"}},[a._v("#")]),a._v(" 3. Verify license header")]),a._v(" "),s("p",[a._v("Apache RAT is recommended to verify license header, which can download as following command.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://mirrors.tuna.tsinghua.edu.cn/apache/creadur/apache-rat-0.13/apache-rat-0.13-bin.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf apache-rat-0.13-bin.tar.gz\n")])])]),s("p",[a._v("Given your source dir is apache-doris-a.b.c-incubating-src, you can check with following command.\nIt will output a file list which don't include ASF license header, and these files used other licenses.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/usr/java/jdk/bin/java  -jar apache-rat-0.13/apache-rat-0.13.jar -a -d apache-doris-a.b.c-incubating-src -E apache-doris-a.b.c-incubating-src/.rat-excludes \n")])])]),s("h2",{attrs:{id:"_4-verify-building"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-verify-building"}},[a._v("#")]),a._v(" 4. Verify building")]),a._v(" "),s("p",[a._v("To compile the Doris, please read "),s("RouterLink",{attrs:{to:"/en/installing/compilation.html"}},[a._v("Compilation")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);