(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{2352:function(t,n,i){"use strict";var a=i("7f41"),e=i.n(a);e.a},"6be4":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,".uni-padding-wrap[data-v-7ca4695c]{margin-top:%?50?% 0}.uni-button[data-v-7ca4695c]{margin:%?30?% 0}.uni-tips[data-v-7ca4695c]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-7ca4695c]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),t.exports=n},"7f41":function(t,n,i){var a=i("6be4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("99d91a16",a,!0,{sourceMap:!1,shadowMode:!1})},"9ff3":function(t,n,i){"use strict";var a,e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},u=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return a}))},b54a:function(t,n,i){"use strict";i.r(n);var a=i("9ff3"),e=i("dd98");for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);i("2352");var o,c=i("f0c5"),s=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"7ca4695c",null,!1,a["a"],o);n["default"]=s.exports},d6d7:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){console.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){console.log("success")}})}}};n.default=a},dd98:function(t,n,i){"use strict";i.r(n);var a=i("d6d7"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(n,t,(function(){return a[t]}))}(u);n["default"]=e.a}}]);