webpackJsonp([8],{"48gH":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/order/"+t.orderId;this.$http.get(e).then(function(e){t.order=e.data.order,console.log("response:",e),t.isLoading=!1})},payOrder:function(){var t=this,e=this,r=Object({NODE_ENV:"production"}).APIPATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOMERPATH+"/pay/"+e.orderId;this.$http.post(r).then(function(r){console.log("response:",r),r.data.success&&t.getOrder(),e.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),console.log(this.orderId)}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("table",{staticClass:"table"},[t._m(0),t._v(" "),r("tbody",t._l(t.order.products,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t._v(" "),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),r("tr",[r("th",[t._v("姓名")]),t._v(" "),r("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),r("tr",[r("th",[t._v("收件人電話")]),t._v(" "),r("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),r("tr",[r("th",[t._v("收件人地址")]),t._v(" "),r("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),r("tr",[r("th",[t._v("付款狀態")]),t._v(" "),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]},d=r("VU/8")(s,i,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=8.fd99256a575c6d5f3c6c.js.map