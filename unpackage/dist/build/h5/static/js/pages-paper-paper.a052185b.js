(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-paper-paper"],{"0365":function(t,i,e){"use strict";e.r(i);var n=e("5e1e"),l=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=l.a},"49eb":function(t,i,e){var n=e("7586");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var l=e("4f06").default;l("979274a4",n,!0,{sourceMap:!1,shadowMode:!1})},"5e1e":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(i){t.log(i)},lower:function(i){t.log(i)},scroll:function(i){t.log(i),this.old.scrollTop=i.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=e}).call(this,e("5a52")["default"])},7586:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".scroll-Y[data-v-641d160f]{height:%?300?%}.scroll-view_H[data-v-641d160f]{white-space:nowrap;width:100%}.scroll-view-item[data-v-641d160f]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-641d160f]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),t.exports=i},8822:function(t,i,e){"use strict";e.r(i);var n=e("ab49"),l=e("0365");for(var o in l)"default"!==o&&function(t){e.d(i,t,(function(){return l[t]}))}(o);e("c86d");var s,c=e("f0c5"),a=Object(c["a"])(l["default"],n["b"],n["c"],!1,null,"641d160f",null,!1,n["a"],s);i["default"]=a.exports},ab49:function(t,i,e){"use strict";var n,l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),e("v-uni-text",[t._v("\\n纵向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),e("v-uni-text",[t._v("\\n横向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},o=[];e.d(i,"b",(function(){return l})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},c86d:function(t,i,e){"use strict";var n=e("49eb"),l=e.n(n);l.a}}]);