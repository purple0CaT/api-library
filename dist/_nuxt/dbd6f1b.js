(window.webpackJsonp=window.webpackJsonp||[]).push([[6,11],{328:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(81).default)("548f2799",content,!0,{sourceMap:!1})},339:function(e,t,n){"use strict";n(328)},340:function(e,t,n){var r=n(80)(!1);r.push([e.i,".code-res-bg{color:#64e68b}.code-req-bg,.code-res-bg{background-color:rgba(0,0,0,.767)}.code-req-bg{color:#e69464}",""]),e.exports=r},341:function(e,t,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(81).default)("3ea6e27f",content,!0,{sourceMap:!1})},348:function(e,t,n){"use strict";n.r(t);n(14),n(13),n(10),n(9),n(16),n(12),n(17);var r=n(3),c=n(21),o=n(62);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d=c.default.extend({computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["user"])),methods:{handleCopy:function(e){navigator.clipboard.writeText(e.target.elements.code.value),e.target.elements.code.focus()}}}),f=d,v=(n(339),n(64)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-card code_card"},[e._m(0),e._v(" "),n("form",{staticClass:"code-input-copy",on:{submit:function(t){return t.preventDefault(),e.handleCopy.apply(null,arguments)}}},[e._m(1),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("copy")])]),e._v(" "),n("h4",{staticStyle:{"font-weight":"lighter"}},[e._v("Response:")]),e._v(" "),e._m(2)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex align-items-baseline justify-content-center"},[n("h3",{staticClass:"m-0",staticStyle:{color:"DodgerBlue"}},[e._v("GET")]),e._v(" "),n("span",{staticClass:"ml-2"},[e._v(" method")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("code",[t("input",{attrs:{readonly:"",name:"code",type:"text",value:"https://sometestapi.com/api/animal"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"code-res-bg"},[e._v("        "),n("code",{staticStyle:{"white-space":"break-spaces"}},[e._v("\n          "),n("span",[e._v("[{")]),e._v("\n            "),n("span",[e._v('"id": number,')]),e._v("\n            "),n("span",[e._v('"name": "string",')]),e._v("\n            "),n("span",[e._v('"type": "string",')]),e._v("\n            "),n("span",[e._v('"legs": number,')]),e._v("\n            "),n("span",[e._v('"tail": boolean')]),e._v("\n          "),n("span",[e._v("}, ...]")]),e._v("\n        ")]),e._v("\n        ")])}],!1,null,null,null);t.default=component.exports},358:function(e,t,n){"use strict";n(341)},359:function(e,t,n){var r=n(80)(!1);r.push([e.i,".code_card h1[data-v-f1641bf4]{text-align:center}.code_card .code-res-bg[data-v-f1641bf4]{background-color:rgba(0,0,0,.767);color:#64e68b}",""]),e.exports=r},373:function(e,t,n){"use strict";n.r(t);var r=n(21),c=n(348),o=r.default.extend({components:{GetCard:c.default},methods:{handleCopy:function(e){navigator.clipboard.writeText(e.target.elements.code.value),e.target.elements.code.focus()}}}),l=(n(358),n(64)),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-col",{staticClass:"d-flex align-items-center",attrs:{md:"6"}},[t("GetCard")],1)}),[],!1,null,"f1641bf4",null);t.default=component.exports}}]);