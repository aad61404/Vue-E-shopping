webpackJsonp([11],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("mtWM"),o=n.n(r),i=n("Rf8U"),s=n.n(i),u=(n("K3J8"),n("ZZvs")),c=n.n(u),l=(n("SYh3"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var p=n("VU/8")({name:"App"},l,!1,function(e){n("aL9C")},null,null).exports,d=n("/ocq");a.a.use(d.a);var h=new d.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"Home",component:function(){return n.e(3).then(n.bind(null,"lO7g"))},children:[{path:"product_list",name:"ProductList",component:function(){return n.e(2).then(n.bind(null,"qr9H"))}}]},{path:"/login",name:"Login",component:function(){return n.e(4).then(n.bind(null,"3jL2"))}},{path:"/admin",name:"Dashboard",component:function(){return n.e(1).then(n.bind(null,"TGvd"))},children:[{path:"products",name:"Products",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"cjwe"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"Orderlist",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"wQa6"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"5gVC"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Dashboard",component:function(){return n.e(1).then(n.bind(null,"TGvd"))},children:[{path:"customer_order",name:"CustomerOrder",component:function(){return n.e(7).then(n.bind(null,"e9zL"))}},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:function(){return n.e(8).then(n.bind(null,"48gH"))}}]}]});a.a.prototype.$bus=new a.a;var m=n("cMGX"),f=n("sUu7"),g=n("1SbN"),v=n.n(g),_=n("QH/e");a.a.use(_.c),a.a.use(f.a,{events:"input|blur"}),a.a.use(f.a),f.a.Validator.localize("zh_TW",v.a),a.a.config.productionTip=!1,a.a.use(s.a,o.a),a.a.filter("currency",function(e){return"$"+Number(e).toFixed(0).replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?(", "+e).replace(/\s/g,""):e})}),a.a.filter("date",function(e){return new Date(1e3*e).toLocaleDateString()}),a.a.component("Loading",c.a),a.a.component("Pagination",m.a),o.a.defaults.withCredentials=!0,new a.a({el:"#app",router:h,components:{App:p},template:"<App/>"}),h.beforeEach(function(e,t,n){if(console.log("to",e,"from",t,"next",n),e.meta.requiresAuth){o.a.post("https://vue-course-api.hexschool.io/api/user/check").then(function(e){console.log(e.data),e.data.success?n():n({path:"/login"})})}else n()})},SYh3:function(e,t){},aL9C:function(e,t){},cMGX:function(e,t,n){"use strict";var a={name:"Pagination",props:{pageData:{type:Object,default:function(){return{}}}},methods:{pageMove:function(e){this.$emit("pagemove",e)}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:!e.pageData.has_pre}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){return t.preventDefault(),e.pageMove(e.pageData.current_page-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("«")]),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Previous")])])]),e._v(" "),e._l(e.pageData.total_pages,function(t){return n("li",{key:t,staticClass:"page-item",class:{active:e.pageData.current_page===t}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.pageMove(t)}}},[e._v(e._s(t))])])}),e._v(" "),n("li",{staticClass:"page-item",class:{disabled:!e.pageData.has_next}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(t){return t.preventDefault(),e.pageMove(e.pageData.current_page+1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("»")]),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Next")])])])],2)])])},staticRenderFns:[]},o=n("VU/8")(a,r,!1,null,null,null);t.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.41972431047aa8e48f47.js.map