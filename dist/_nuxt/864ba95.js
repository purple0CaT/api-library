(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{327:function(e,t,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(81).default)("bb9c8f72",content,!0,{sourceMap:!1})},336:function(e,t,r){"use strict";r(327)},337:function(e,t,r){var n=r(80)(!1);n.push([e.i,".code-res-bg{color:#64e68b}.code-req-bg,.code-res-bg{background-color:rgba(0,0,0,.767)}.code-req-bg{color:#e69464}",""]),e.exports=n},347:function(e,t,r){"use strict";r.r(t);r(14),r(13),r(10),r(9),r(16),r(12),r(17);var n=r(3),o=r(21),c=r(62);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d=o.default.extend({computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["user"])),methods:{handleCopy:function(e){navigator.clipboard.writeText(e.target.elements.code.value),e.target.elements.code.focus()}}}),f=d,v=(r(336),r(64)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("form",{staticClass:"code-input-copy",on:{submit:function(t){return t.preventDefault(),e.handleCopy.apply(null,arguments)}}},[r("code",[r("input",{attrs:{readonly:"",type:"text",name:"code"},domProps:{value:e.user.api_key?"https://sometestapi.com/api/animal/id?api_key="+e.user.api_key:"https://sometestapi.com/api/animal/id?api_key=<api-key>"}})]),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("copy")])]),e._v(" "),r("h5",{staticClass:"font-weight-light"},[e._v("Response:")]),e._v(" "),e._m(1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center align-items-baseline"},[r("h4",{staticClass:"mr-2",staticStyle:{color:"tomato"}},[e._v("Delete")]),e._v(" "),r("span",[e._v("method")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"code-res-bg"},[e._v("        "),r("code",{staticStyle:{"white-space":"break-spaces"}},[e._v("\n          "),r("span",[e._v("{")]),e._v("\n            "),r("span",[e._v("msg: Item with id:'id' deleted!")]),e._v("\n          "),r("span",[e._v("}")]),e._v("\n        ")]),e._v("\n        ")])}],!1,null,null,null);t.default=component.exports}}]);