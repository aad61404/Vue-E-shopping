webpackJsonp([5],{cjwe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("woOf"),s=a.n(o),i=a("7t+N"),r=a.n(i),d={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},methods:{getProducts:function(){var t="https://vue-course-api.hexschool.io/api/vue-e-shopping/admin/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),e=this;e.isLoading=!0,this.$http.get(t).then(function(t){console.log(t.data),t.data.success&&(e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination)})},Openmodal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=s()({},e),this.isNew=!1),r()("#productModal").modal("show")},updateProduct:function(){var t="https://vue-course-api.hexschool.io/api/vue-e-shopping/admin/product",e="post",a=this;a.isNew||(t="https://vue-course-api.hexschool.io/api/vue-e-shopping/admin/product/"+a.tempProduct.id,e="put"),this.$http[e](t,{data:a.tempProduct}).then(function(t){console.log(t.data),t.data.success?(r()("#productModal").modal("hide"),a.getProducts(a.pagination.current_page)):(r()("#productModal").modal("hide"),a.getProducts(),console.log("新增失敗"))})},Opendeletemodal:function(t){this.tempProduct=s()({},t),r()("#delProductModal").modal("show")},deleteProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/vue-e-shopping/admin/product/"+t.tempProduct.id;this.$http.delete(e).then(function(e){e.data.success?(t.getProducts(),console.log("刪除成功")):(t.getProducts(),console.log("刪除失敗")),r()("#delProductModal").modal("hide")})},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,o=new FormData;o.append("file-to-upload",e);a.status.fileUploading=!0,a.$http.post("https://vue-course-api.hexschool.io/api/vue-e-shopping/admin/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),a.status.fileUploading=!1,e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){return t.Openmodal(!0)}}},[t._v("建立新產品")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),t._v(" "),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.Openmodal(!1,e)}}},[t._v("編輯")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.Opendeletemodal(e)}}},[t._v("刪除")])])])}),0)]),t._v(" "),a("Pagination",{attrs:{"page-data":t.pagination},on:{pagemove:t.getProducts}}),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-cog fa-spin"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=t._i(a,null);o.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),t._v(" "),a("th",[t._v("產品名稱")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("原價")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("售價")]),t._v(" "),a("th",{attrs:{width:"90"}},[t._v("是否啟用")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},c=a("VU/8")(d,l,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=5.18f64878f8b8b3bed914.js.map