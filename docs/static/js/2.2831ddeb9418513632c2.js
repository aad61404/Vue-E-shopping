webpackJsonp([2],{"196r":function(t,e,i){t.exports=i.p+"static/img/breakfast2.304fe72.jpg"},AoeR:function(t,e,i){t.exports=i.p+"static/img/breakfast3.0aa0c89.jpg"},"T/nz":function(t,e){},aKq8:function(t,e){},keat:function(t,e,i){t.exports=i.p+"static/img/breakfast1.524cb32.jpg"},qr9H:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7t+N"),n=i.n(o);var s="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){Object.keys(t).forEach(function(i){return e(t[i],i)})}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=("function"==typeof i?i():i)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){r(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,c);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,i){return t+((e=e.getChild(i)).namespaced?i+"/":"")},"")},u.prototype.update=function(t){!function t(e,i,o){0;i.update(o);if(o.modules)for(var n in o.modules){if(!i.getChild(n))return void 0;t(e.concat(n),i.getChild(n),o.modules[n])}}([],this.root,t)},u.prototype.register=function(t,e,i){var o=this;void 0===i&&(i=!0);var n=new a(e,i);0===t.length?this.root=n:this.get(t.slice(0,-1)).addChild(t[t.length-1],n);e.modules&&r(e.modules,function(e,n){o.register(t.concat(n),e,i)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1];e.getChild(i).runtime&&e.removeChild(i)};var l;var d=function(t){var e=this;void 0===t&&(t={}),!l&&"undefined"!=typeof window&&window.Vue&&b(window.Vue);var i=t.plugins;void 0===i&&(i=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new l;var n=this,r=this.dispatch,a=this.commit;this.dispatch=function(t,e){return r.call(n,t,e)},this.commit=function(t,e,i){return a.call(n,t,e,i)},this.strict=o;var c=this._modules.root.state;_(this,c,[],this._modules.root),v(this,c),i.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:l.config.devtools)&&function(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){s.emit("vuex:mutation",t,e)}))}(this)},p={state:{configurable:!0}};function h(t,e){return e.indexOf(t)<0&&e.push(t),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var i=t.state;_(t,i,[],t._modules.root,!0),v(t,i,e)}function v(t,e,i){var o=t._vm;t.getters={};var n={};r(t._wrappedGetters,function(e,i){n[i]=function(){return e(t)},Object.defineProperty(t.getters,i,{get:function(){return t._vm[i]},enumerable:!0})});var s=l.config.silent;l.config.silent=!0,t._vm=new l({data:{$$state:e},computed:n}),l.config.silent=s,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(i&&t._withCommit(function(){o._data.$$state=null}),l.nextTick(function(){return o.$destroy()}))}function _(t,e,i,o,n){var s=!i.length,r=t._modules.getNamespace(i);if(o.namespaced&&(t._modulesNamespaceMap[r]=o),!s&&!n){var a=m(e,i.slice(0,-1)),c=i[i.length-1];t._withCommit(function(){l.set(a,c,o.state)})}var u=o.context=function(t,e,i){var o=""===e,n={dispatch:o?t.dispatch:function(i,o,n){var s=g(i,o,n),r=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,r)},commit:o?t.commit:function(i,o,n){var s=g(i,o,n),r=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,r,a)}};return Object.defineProperties(n,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var i={},o=e.length;return Object.keys(t.getters).forEach(function(n){if(n.slice(0,o)===e){var s=n.slice(o);Object.defineProperty(i,s,{get:function(){return t.getters[n]},enumerable:!0})}}),i}(t,e)}},state:{get:function(){return m(t.state,i)}}}),n}(t,r,i);o.forEachMutation(function(e,i){!function(t,e,i,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){i.call(t,o.state,e)})}(t,r+i,e,u)}),o.forEachAction(function(e,i){var o=e.root?i:r+i,n=e.handler||e;!function(t,e,i,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,n){var s,r=i.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,n);return(s=r)&&"function"==typeof s.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):r})}(t,o,n,u)}),o.forEachGetter(function(e,i){!function(t,e,i,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return i(o.state,o.getters,t.state,t.getters)}}(t,r+i,e,u)}),o.forEachChild(function(o,s){_(t,e,i.concat(s),o,n)})}function m(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t,e,i){var o;return null!==(o=t)&&"object"==typeof o&&t.type&&(i=e,e=t,t=t.type),{type:t,payload:e,options:i}}function b(t){l&&t===l||
/**
 * vuex v3.1.0
 * (c) 2019 Evan You
 * @license MIT
 */
function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:i});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,e.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(l=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},d.prototype.commit=function(t,e,i){var o=this,n=g(t,e,i),s=n.type,r=n.payload,a=(n.options,{type:s,payload:r}),c=this._mutations[s];c&&(this._withCommit(function(){c.forEach(function(t){t(r)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},d.prototype.dispatch=function(t,e){var i=this,o=g(t,e),n=o.type,s=o.payload,r={type:n,payload:s},a=this._actions[n];if(a){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(r,i.state)})}catch(t){0}return(a.length>1?Promise.all(a.map(function(t){return t(s)})):a[0](s)).then(function(t){try{i._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(r,i.state)})}catch(t){0}return t})}},d.prototype.subscribe=function(t){return h(t,this._subscribers)},d.prototype.subscribeAction=function(t){return h("function"==typeof t?{before:t}:t,this._actionSubscribers)},d.prototype.watch=function(t,e,i){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,i)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,i){void 0===i&&(i={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),i.preserveState),v(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=m(e.state,t.slice(0,-1));l.delete(i,t[t.length-1])}),f(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,p);C(function(t,e){var i={};return y(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){var e=this.$store.state,i=this.$store.getters;if(t){var o=w(this.$store,"mapState",t);if(!o)return;e=o.context.state,i=o.context.getters}return"function"==typeof n?n.call(this,e,i):e[n]},i[o].vuex=!0}),i}),C(function(t,e){var i={};return y(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];var o=this.$store.commit;if(t){var s=w(this.$store,"mapMutations",t);if(!s)return;o=s.context.commit}return"function"==typeof n?n.apply(this,[o].concat(e)):o.apply(this.$store,[n].concat(e))}}),i}),C(function(t,e){var i={};return y(e).forEach(function(e){var o=e.key,n=e.val;n=t+n,i[o]=function(){if(!t||w(this.$store,"mapGetters",t))return this.$store.getters[n]},i[o].vuex=!0}),i}),C(function(t,e){var i={};return y(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];var o=this.$store.dispatch;if(t){var s=w(this.$store,"mapActions",t);if(!s)return;o=s.context.dispatch}return"function"==typeof n?n.apply(this,[o].concat(e)):o.apply(this.$store,[n].concat(e))}}),i});function y(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function C(t){return function(e,i){return"string"!=typeof e?(i=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,i)}}function w(t,e,i){return t._modulesNamespaceMap[i]}var x=i("keat"),k=i.n(x),$=i("196r"),M=i.n($),S=i("AoeR"),E=i.n(S),O=i("QH/e"),j={components:{Slider:O.a,SliderItem:O.b},data:function(){return{list:[],sliderValue:0}},methods:{changeIndex:function(t){this.sliderValue=t}},mounted:function(){var t=this;setTimeout(function(){return t.list=[{backgroundImage:"url("+k.a+")",width:"100%",height:"100%",backgroundSize:"100% 100%"},{backgroundImage:"url("+M.a+")",width:"100%",height:"100%",backgroundSize:"100% 100%"},{backgroundImage:"url("+E.a+")",width:"100%",height:"100%",backgroundSize:"100% 100%"}]},1e3)}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("Slider",{attrs:{animation:"fade",duration:5e3,speed:1e3},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}},t._l(t.list,function(e,o){return i("SliderItem",{key:o,style:e,on:{click:function(e){return t.changeIndex(1)}}},[i("p",{staticStyle:{"line-height":"280px","font-size":"5rem","text-align":"center"}})])}),1)],1)])},staticRenderFns:[]},A=i("VU/8")(j,I,!1,null,null,null).exports;n()("#collapseCartDialog").click(function(){!1===this.listopen&&(this.listopen=!0)});var P={name:"productlist",data:function(){return{currentFilterStyle:"全部商品",filterStyleArr:["全部商品","飲品","漢堡","三明治"],products:[],isLoading:!1,product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},components:{Carousel:A},computed:{filterProductArr:function(){var t=this;return"全部商品"===this.currentFilterStyle?this.products:this.products.filter(function(e){return console.log(e),e.category===t.currentFilterStyle})},cartTotal:function(){return this.cart.carts?this.cart.carts.length:null}},methods:{getProducts:function(){var t=this,e="https://vue-course-api.hexschool.io/api/vue-e-shopping/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);t.isLoading=!0,this.$http.get(e).then(function(e){t.products=e.data.products,t.isLoading=!1})},getProduct:function(t){var e=this,i="https://vue-course-api.hexschool.io/api/vue-e-shopping/product/"+t;e.status.loadingItem=t,this.$http.get(i).then(function(t){e.product=t.data.product,n()("#productModal").modal("show"),console.log("response:",t),e.status.loadingItem=""})},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,o="https://vue-course-api.hexschool.io/api/vue-e-shopping/cart/";console.log("api:",o),i.status.loadingItem=t;var s={product_id:t,qty:e};this.$http.post(o,{data:s}).then(function(t){console.log("response:",t),i.status.loadingItem="",i.getCart(),n()("#productModal").modal("hide")})},getCart:function(){var t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.hexschool.io/api/vue-e-shopping/cart").then(function(e){t.cart=e.data.data,t.isLoading=!1})},removeCartItem:function(t){var e=this,i="https://vue-course-api.hexschool.io/api/vue-e-shopping/cart/"+t;e.isLoading=!0,this.$http.delete(i).then(function(t){e.getCart(),e.isLoading=!1})},addCouponCode:function(){var t=this,e={code:t.coupon_code};t.isLoading=!0,this.$http.post("https://vue-course-api.hexschool.io/api/vue-e-shopping/coupon",{data:e}).then(function(){t.getCart(),t.isLoading=!1})},createOrder:function(){var t=this,e=this,i=e.form;this.$validator.validate().then(function(o){o?t.$http.post("https://vue-course-api.hexschool.io/api/vue-e-shopping/order",{data:i}).then(function(t){console.log("response:",t),t.data.success&&e.$router.push("/customer_checkout/"+t.data.orderId)}):console.log("欄位不完整:")})},changeFilterStyle:function(t){this.currentFilterStyle=this.filterStyleArr[t]},changeIndex:function(t){this.sliderValue=t}},created:function(){this.getProducts(),this.getCart()},mounted:function(){var t=this;setTimeout(function(){return t.list=[{backgroundColor:"#3f51b5",width:"100%",height:"100%"},{backgroundColor:"#eee",width:"100%",height:"100%"},{backgroundColor:"#f44336",width:"100%",height:"100%"},{backgroundColor:"#eee",width:"100%",height:"100%"}]},1e3)}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",[i("Carousel")],1),t._v(" "),i("div",[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-2 my-3 mb-3"},[i("div",{staticClass:"list-group"},t._l(t.filterStyleArr,function(e,o){return i("button",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{type:"button",value:e},on:{click:function(e){return t.changeFilterStyle(o)}}},[t._v("\n              "+t._s(e)+"\n            ")])}),0)]),t._v(" "),i("div",{staticClass:"col-md-10"},[i("div",{staticClass:"row"},t._l(t.filterProductArr,function(e){return i("div",{key:e.id,staticClass:"col-lg-4 my-3"},[i("div",{staticClass:"card border-0 shadow-sm"},[i("div",{staticStyle:{height:"150px","background-size":"100% 100%","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),i("div",{staticClass:"card-body"},[i("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),t._v(" "),i("h5",{staticClass:"card-title"},[i("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),i("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),t._v(" "),i("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[i("del",{staticClass:"h6"},[t._v("原價 "+t._s(e.origin_price)+" 元")]),t._v(" "),i("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(e.price)+" 元")])])]),t._v(" "),i("div",{staticClass:"card-footer d-flex"},[i("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(i){return t.getProduct(e.id)}}},[t.status.loadingItem===e.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                    查看更多\n                  ")]),t._v(" "),i("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(i){return t.addToCart(e.id)}}},[t.status.loadingItem===e.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                    加到購物車\n                  ")])])])])}),0)])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"modal-body"},[i("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),t._v(" "),i("blockquote",{staticClass:"blockquote mt-3"},[i("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),t._v(" "),i("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),t._v(" "),i("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():i("div",{staticClass:"h5"},[t._v(t._s(t.product.origin_price)+" 元")]),t._v(" "),t.product.price?i("del",{staticClass:"h6"},[t._v("原價"+t._s(t.product.origin_price)+"元")]):t._e(),t._v(" "),t.product.price?i("div",{staticClass:"h5"},[t._v("現在只要"+t._s(t.product.price)+"元")]):t._e()]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"num",e.target.multiple?i:i[0])}}},t._l(10,function(e){return i("option",{key:e,domProps:{value:e}},[t._v("選購"+t._s(e)+" "+t._s(t.product.unit))])}),0)]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n              小計\n              "),i("strong",[t._v(t._s(t.product.num*t.product.price))])]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.product.id,t.product.num)}}},[i("i",{staticClass:"fas"}),t._v("\n              加到購物車\n            ")])])])])]),t._v(" "),i("button",{staticClass:"btn btn-primary cart",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseCartDialog","aria-expanded":"false","aria-controls":"collapseCartDialog"}},[i("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),i("div",{staticClass:"cart__num"},[t._v(t._s(t.cartTotal))])]),t._v(" "),i("div",{staticClass:"collapse",attrs:{id:"collapseCartDialog"}},[i("div",{staticClass:"cart__list"},[i("table",{staticClass:"table"},[t._m(2),t._v(" "),i("tbody",t._l(t.cart.carts,function(e){return t.cart?i("tr",[i("td",{staticClass:"align-middle"},[i("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(i){return t.removeCartItem(e.id)}}},[i("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v("\n                "+t._s(e.product.title)+"\n                "),e.coupon?i("div",{staticClass:"text-success"},[t._v("\n                  已套用優惠券\n                ")]):t._e()]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),i("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])]):t._e()}),0),t._v(" "),i("tfoot",[i("tr",[i("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),t._v(" "),i("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t._v(" "),t.cart.total!==t.cart.final_total?i("tr",[i("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),t._v(" "),i("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),t._v(" "),i("div",{staticClass:"input-group mb-3 input-group-sm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("\n              套用優惠碼\n            ")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("header",[e("h1",[this._v("給你活力滿滿的能量")])]),this._v(" "),e("p",[this._v("補充一天的元氣")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th"),this._v(" "),e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]};var V=i("VU/8")(P,L,!1,function(t){i("T/nz"),i("aKq8")},"data-v-0c9ad9d4",null);e.default=V.exports}});
//# sourceMappingURL=2.2831ddeb9418513632c2.js.map