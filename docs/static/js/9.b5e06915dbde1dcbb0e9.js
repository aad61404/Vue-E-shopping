webpackJsonp([9],{"5gVC":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("woOf"),n=o.n(a),s=o("7t+N"),i=o.n(s),l={data:function(){return{coupons:[],pagination:{},tempCoupon:{},isNew:!1,isLoading:!1}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/admin/coupons?page="+t,o=this;o.isLoading=!0,this.$http.get(e).then(function(t){console.log("getCoupons()",t.data),o.isLoading=!1,o.coupons=t.data.coupons,o.pagination=t.data.pagination})},Openmodal:function(t,e){t?(this.tempCoupon={},this.isNew=!0):(this.tempCoupon=n()({},e),this.isNew=!1),i()("#couponModal").modal("show")},updateCoupon:function(){var t=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/admin/coupon",e="post",o=this;o.isNew||(t=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/admin/coupon/"+o.tempCoupon.id,e="put"),this.$http[e](t,{data:o.tempCoupon}).then(function(t){console.log(t.data),t.data.success?(i()("#couponModal").modal("hide"),o.getCoupons(o.pagination.current_page)):(i()("#couponModal").modal("hide"),o.getCoupons(),console.log("新增失敗"))})},Opendeletemodal:function(t){this.tempCoupon=n()({},t),i()("#delCouponModal").modal("show")},deleteCoupon:function(){var t=this,e=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/admin/coupon/"+t.tempCoupon.id;this.$http.delete(e).then(function(e){e.data.success?(t.getCoupons(),console.log("刪除成功")):(t.getCoupons(),console.log("刪除失敗")),i()("#delCouponModal").modal("hide")})}},created:function(){this.getCoupons()}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),o("div",{staticClass:"text-right"},[o("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){return t.Openmodal(!0)}}},[t._v("建立新優惠券")])]),t._v(" "),o("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),o("tbody",t._l(t.coupons,function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.title))]),t._v(" "),o("td",[t._v(t._s(e.code))]),t._v(" "),o("td",[t._v(t._s(e.percent))]),t._v(" "),o("td",[t._v(t._s(e.due_date))]),t._v(" "),o("td",[e.is_enabled?o("span",{staticClass:"text-success"},[t._v("啟用")]):o("span",[t._v("未啟用")])]),t._v(" "),o("td",[o("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(o){return t.Openmodal(!1,e)}}},[t._v("編輯")]),t._v(" "),o("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(o){return t.Opendeletemodal(e)}}},[t._v("刪除")])])])}),0)]),t._v(" "),t.pagination.total_pages>1?o("Pagination",{attrs:{"page-data":t.pagination},on:{pagemove:t.getCoupons}}):t._e(),t._v(" "),o("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"code"}},[t._v("優惠碼")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dueDate"}},[t._v("到期日")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"dueDate"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dueDate"}},[t._v("折扣百分比")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.tempCoupon,"percent",e.target.multiple?o:o[0])}}},t._l(100,function(e){return o("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+"%")])}),0)]),t._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var o=t.tempCoupon.is_enabled,a=e.target,n=a.checked?1:0;if(Array.isArray(o)){var s=t._i(o,null);a.checked?s<0&&t.$set(t.tempCoupon,"is_enabled",o.concat([null])):s>-1&&t.$set(t.tempCoupon,"is_enabled",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確認")])])])])]),t._v(" "),o("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),o("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),o("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券(刪除後將無法恢復)。\n        ")]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteCoupon}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("名稱")]),t._v(" "),o("th",[t._v("優惠碼")]),t._v(" "),o("th",[t._v("折扣百分比")]),t._v(" "),o("th",[t._v("到期日")]),t._v(" "),o("th",{attrs:{width:"120"}},[t._v("是否啟用")]),t._v(" "),o("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增優惠券")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除優惠券")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},r=o("VU/8")(l,d,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=9.b5e06915dbde1dcbb0e9.js.map