(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"11ce":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e.tempFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.tempFilePath,mode:"aspectFit"}})]:e._e(),!e.tempFilePath&&e.savedFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.savedFilePath,mode:"aspectFit"}})]:e._e(),e.tempFilePath||e.savedFilePath?e._e():[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 请选择文件")])],n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-savefile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveFile.apply(void 0,arguments)}}},[e._v("保存文件")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("删除文件")])],1),n("v-uni-view",{staticClass:"btn-area"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDocument.apply(void 0,arguments)}}},[e._v("打开pdf文件")])],1)],2)],1)},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}))},"13c8":function(e,t,n){var i=n("2715");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("c807c2ac",i,!0,{sourceMap:!1,shadowMode:!1})},2715:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".image[data-v-e687e148]{width:100%;height:%?360?%}.btn-savefile[data-v-e687e148]{background-color:#007aff;color:#fff}",""]),e.exports=t},8837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0]},fail:function(e){}})},saveFile:function(){var e=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(t){e.savedFilePath=t.savedFilePath,uni.setStorageSync("savedFilePath",t.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(e){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(e),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/helloworld.pdf",success:function(e){uni.openDocument({filePath:e.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};t.default=i},"95e2":function(e,t,n){"use strict";var i=n("13c8"),a=n.n(i);a.a},c790:function(e,t,n){"use strict";n.r(t);var i=n("11ce"),a=n("fe6e");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("95e2");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e687e148",null,!1,i["a"],o);t["default"]=l.exports},fe6e:function(e,t,n){"use strict";n.r(t);var i=n("8837"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a}}]);