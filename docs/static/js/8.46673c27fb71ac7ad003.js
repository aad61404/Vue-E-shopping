webpackJsonp([8],{"48gH":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="https://vue-course-api.hexschool.io/api/vue-e-shopping/order/"+t.orderId;this.$http.get(e).then(function(e){t.order=e.data.order,console.log("response:",e),t.isLoading=!1})},payOrder:function(){var t=this,e=this,s="https://vue-course-api.hexschool.io/api/vue-e-shopping/pay/"+e.orderId;this.$http.post(s).then(function(s){console.log("response:",s),s.data.success&&t.getOrder(),e.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),console.log(this.orderId)}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.order.products,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),s("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),s("tr",[s("th",[t._v("姓名")]),t._v(" "),s("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),s("tr",[s("th",[t._v("收件人電話")]),t._v(" "),s("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),s("tr",[s("th",[t._v("收件人地址")]),t._v(" "),s("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),s("tr",[s("th",[t._v("付款狀態")]),t._v(" "),s("td",[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]},a=s("VU/8")(r,i,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=8.46673c27fb71ac7ad003.js.map