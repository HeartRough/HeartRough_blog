(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-tabbar-tabbar"],{"3108b":function(t,e,i){"use strict";i.r(e);var a=i("b4d7"),n=i("4e36");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ec7c");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"40329a9e",null,!1,a["a"],r);e["default"]=c.exports},"4e36":function(t,e,i){"use strict";i.r(e);var a=i("fc2e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"509f":function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("4160"),i("c975"),i("a434"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3108b")),o=100,r=3,s={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},c={components:{mediaItem:n.default},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout((function(){t.tabBars.forEach((function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})})),t.getList(0)}),350)},methods:{getList:function(t){for(var e=this.newsList[t],i=[],a=1;a<=10;a++){var n=Object.assign({},s["data"+Math.floor(5*Math.random())]);n.id=this.newGuid(),i.push(n)}e.data=e.data.concat(i)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout((function(){e.navigateFlag=!1}),200))},close:function(t,e){var i=this;uni.showModal({content:"是否删除本条信息？",success:function(a){a.confirm&&i.newsList[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout((function(){e.getList(e.tabIndex)}),500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>o){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>r){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout((function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshFlag=!1,i.refreshText="已刷新",setTimeout((function(){e.pulling=!1}),500)}),2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=c},"6bab":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\nuni-page-body[data-v-66190319]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.tabs[data-v-66190319]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff;\n}.scroll-h[data-v-66190319]{width:%?750?%;height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwhite-space:nowrap\n\n        /* flex-wrap: nowrap; */\n        /* border-color: #cccccc;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-66190319]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-66190319]{\ndisplay:inline-block;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-66190319]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-66190319]{color:#007aff}.swiper-box[data-v-66190319]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item[data-v-66190319]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.scroll-v[data-v-66190319]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nwidth:%?750?%}.update-tips[data-v-66190319]{position:absolute;left:0;top:41px;right:0;padding-top:5px;padding-bottom:5px;background-color:#fddd9b;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.update-tips-text[data-v-66190319]{font-size:14px;color:#fff}.refresh[data-v-66190319]{width:%?750?%;height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-66190319]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-66190319]{width:30px;height:30px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-66190319]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-66190319]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-66190319]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-66190319]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-66190319]{font-size:%?28?%;color:#999}",""]),t.exports=e},"72a3":function(t,e,i){var a=i("6bab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7fa35391",a,!0,{sourceMap:!1,shadowMode:!1})},"8d8e":function(t,e,i){"use strict";i.r(e);var a=i("509f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8f9e":function(t,e,i){"use strict";var a=i("72a3"),n=i.n(a);n.a},b4d7:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options.title?i("v-uni-view",{staticClass:"media-item view",attrs:{"hover-class":"media-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view",style:{flexDirection:1===t.options.article_type||2===t.options.article_type?2===t.options.article_type?"row":"row-reverse":"column"}},[i("v-uni-text",{staticClass:"media-title",class:{"media-title2":1===t.options.article_type||2===t.options.article_type}},[t._v(t._s(t.options.title))]),t.options.image_list||t.options.image_url?i("v-uni-view",{staticClass:"image-section flex-row",class:{"image-section-right":2===t.options.article_type,"image-section-left":1===t.options.article_type},style:{flexDirection:"row"}},[t.options.image_url?i("v-uni-image",{staticClass:"image-list1",class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,(function(e,a){return t.options.image_list?i("v-uni-image",{key:a,staticClass:"image-list3",attrs:{src:e.url}}):t._e()}))],2):t._e()],1),i("v-uni-view",{staticClass:"media-foot flex-row",staticStyle:{"flex-direction":"row"}},[i("v-uni-view",{staticClass:"media-info flex-row",staticStyle:{"flex-direction":"row"}},[i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.source))]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.comment_count)+"条评论")]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.datetime))])],1),i("v-uni-view",{staticClass:"max-close-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"close-l close-h"}),i("v-uni-view",{staticClass:"close-l close-v"})],1)],1),i("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1):t._e()},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},c6a6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".view[data-v-40329a9e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-row[data-v-40329a9e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-col[data-v-40329a9e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-cell[data-v-40329a9e]{width:%?750?%;padding:0 %?30?%}.uni-list-cell-hover[data-v-40329a9e]{background-color:#eee}.media-item[data-v-40329a9e]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\t/* border-bottom-width: 1rpx;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: #ebebeb; */padding:%?20?% %?30?% %?21?% %?30?%}.media-item-hover[data-v-40329a9e]{background-color:#eee}.media-item-line[data-v-40329a9e]{position:absolute;left:%?30?%;right:%?30?%;bottom:0;height:%?1?%;background-color:#ebebeb}.media-image-right[data-v-40329a9e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.media-image-left[data-v-40329a9e]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.media-title[data-v-40329a9e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.media-title[data-v-40329a9e]{lines:3;text-overflow:ellipsis;font-size:%?30?%;color:#555}.media-title2[data-v-40329a9e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-top:%?6?%;line-height:%?40?%}.image-section[data-v-40329a9e]{margin-top:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.image-section-right[data-v-40329a9e]{margin-top:%?0?%;margin-left:%?10?%;width:%?225?%;height:%?146?%}.image-section-left[data-v-40329a9e]{margin-top:%?0?%;margin-right:%?10?%;width:%?225?%;height:%?146?%}.image-list1[data-v-40329a9e]{width:%?690?%;height:%?481?%}.image-list2[data-v-40329a9e]{width:%?225?%;height:%?146?%}.image-list3[data-v-40329a9e]{width:%?225?%;height:%?146?%}.media-info[data-v-40329a9e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info-text[data-v-40329a9e]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-40329a9e]{margin-top:%?25?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.max-close-view[data-v-40329a9e]{position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?40?%;height:%?30?%;line-height:%?30?%;border-width:%?1?%;border-style:solid;border-color:#aaa;border-radius:4px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.close-l[data-v-40329a9e]{position:absolute;width:%?18?%;height:%?1?%;background-color:#aaa}.close-h[data-v-40329a9e]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-40329a9e]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.exports=e},e57b:function(t,e,i){var a=i("c6a6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6d87ddb3",a,!0,{sourceMap:!1,shadowMode:!1})},ec7c:function(t,e,i){"use strict";var a=i("e57b"),n=i.n(a);n.a},f756:function(t,e,i){"use strict";i.r(e);var a=i("f9b3"),n=i("8d8e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8f9e");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"66190319",null,!1,a["a"],r);e["default"]=c.exports},f9b3:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs"},[i("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},t._l(t.tabBars,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"uni-tab-item",attrs:{id:e.id,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"line-h"}),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(a)}}},[t._l(e.data,(function(e,n){return i("v-uni-view",{key:e.id},[i("media-item",{attrs:{options:e},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close(a,n)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}})],1)})),e.isLoading||e.data.length>4?i("v-uni-view",{staticClass:"loading-more"},[i("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(e.loadingText))])],1):t._e()],2)],1)})),1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},fc2e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{options:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}};e.default=a}}]);