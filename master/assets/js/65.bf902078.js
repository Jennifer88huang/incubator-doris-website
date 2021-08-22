(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{452:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upload-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-action"}},[e._v("#")]),e._v(" Upload Action")]),e._v(" "),a("p",[e._v("Upload Action currently mainly serves the front-end page of FE, and is used for users to load small test files.")]),e._v(" "),a("h2",{attrs:{id:"upload-load-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-load-file"}},[e._v("#")]),e._v(" Upload load file")]),e._v(" "),a("p",[e._v("Used to upload a file to the FE node, which can be used to load the file later. Currently only supports uploading files up to 100MB.")]),e._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POST /api/<namespace>/<db>/<tbl>/upload\n")])])]),a("h3",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<namespace>")])]),e._v(" "),a("p",[e._v("Namespace, currently only supports "),a("code",[e._v("default_cluster")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<db>")])]),e._v(" "),a("p",[e._v("Specify database")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<tbl>")])]),e._v(" "),a("p",[e._v("Specify table")])])]),e._v(" "),a("h3",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("column_separator")])]),e._v(" "),a("p",[e._v("Optional, specify the column separator of the file. Default is "),a("code",[e._v("\\t")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("preview")])]),e._v(" "),a("p",[e._v("Optional, if set to "),a("code",[e._v("true")]),e._v(", up to 10 rows of data rows split according to "),a("code",[e._v("column_separator")]),e._v(" will be displayed in the returned result.")])])]),e._v(" "),a("h3",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),a("p",[e._v("The content of the file to be uploaded, the Content-type is "),a("code",[e._v("multipart/form-data")])]),e._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n\t},\n\t"count": 1\n}\n')])])]),a("h2",{attrs:{id:"load-the-uploaded-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-the-uploaded-file"}},[e._v("#")]),e._v(" Load the uploaded file")]),e._v(" "),a("h3",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PUT /api/<namespace>/<db>/<tbl>/upload\n")])])]),a("h3",{attrs:{id:"path-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<namespace>")])]),e._v(" "),a("p",[e._v("Namespace, currently only supports "),a("code",[e._v("default_cluster")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<db>")])]),e._v(" "),a("p",[e._v("Specify database")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<tbl>")])]),e._v(" "),a("p",[e._v("Specify table")])])]),e._v(" "),a("h3",{attrs:{id:"query-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("file_id")])]),e._v(" "),a("p",[e._v("Specify the load file id, which is returned by the API that uploads the file.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("file_uuid")])]),e._v(" "),a("p",[e._v("Specify the file uuid, which is returned by the API that uploads the file.")])])]),e._v(" "),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),a("p",[e._v("The options in the header are the same as those in the header in the Stream Load request.")]),e._v(" "),a("h3",{attrs:{id:"request-body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"TxnId": 7009,\n\t\t"Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n\t\t"Status": "Success",\n\t\t"Message": "OK",\n\t\t"NumberTotalRows": 3,\n\t\t"NumberLoadedRows": 3,\n\t\t"NumberFilteredRows": 0,\n\t\t"NumberUnselectedRows": 0,\n\t\t"LoadBytes": 12,\n\t\t"LoadTimeMs": 71,\n\t\t"BeginTxnTimeMs": 0,\n\t\t"StreamLoadPutTimeMs": 1,\n\t\t"ReadDataTimeMs": 0,\n\t\t"WriteDataTimeMs": 13,\n\t\t"CommitAndPublishTimeMs": 53\n\t},\n\t"count": 1\n}\n')])])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);