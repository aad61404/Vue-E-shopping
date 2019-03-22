<template>
  <div>
    <section>

      <Carousel>

      </Carousel>
    </section>
    <div>
      <div class="container">
        <article>
          <header>
            <h1>給你活力滿滿的能量</h1>
          </header>
          <p>補充一天的元氣</p>
        </article>

        <div class="row">
          <!-- left list start -->
          <div class="col-lg-2 my-3 mb-3">
            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action" v-for="(item, idx) in filterStyleArr"
                @click="changeFilterStyle(idx)" :key="item" :value="item">
                {{item}}
              </button>
            </div>
          </div>

          <!-- left list end-->
          <div class="col-md-10">
            <div class="row">
              <div class="col-lg-4 my-3" v-for="item in filterProductArr" :key="item.id">
                <div class="card border-0 shadow-sm">
                  <div style="height: 150px; background-size: 100% 100%; background-position: center" :style="{ backgroundImage: `url(${item.imageUrl})`}">
                  </div>
                  <div class="card-body">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title">
                      <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- <div class="h5">2,800 元</div> -->
                      <del class="h6">原價 {{ item.origin_price }} 元</del>
                      <div class="h5">現在只要 {{ item.price }} 元</div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(item.id)">
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- mt-4  end-->

        </div> <!-- row end -->

      </div>

      <!-- 單筆 modal -->
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="product.imageUrl" class="img-fluid" alt>
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{product.content}}</p>
                <footer class="blockquote-footer text-right">{{product.description}}</footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                <del class="h6" v-if="product.price">原價{{product.origin_price}}元</del>
                <div class="h5" v-if="product.price">現在只要{{product.price}}元</div>
              </div>
              <select name class="form-control mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">選購{{ num }} {{ product.unit }}</option>
              </select>
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計
                <strong v-if="product.num">{{product.num*product.price}}</strong>
              </div>
              <button type="button" class="btn btn-primary" @click="addToCart(product.id, product.num)">
                <i class="fas"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 單筆Modal end -->

      <!-- 底下購物車 -->
      <button class="btn btn-primary cart" type="button" data-toggle="collapse" data-target="#collapseCartDialog"
        aria-expanded="false" aria-controls="collapseCartDialog">
        <i class="fas fa-shopping-cart"></i>

        <div class="cart__num">{{ cartTotal }}</div>
      </button>

      <div class="collapse" id="collapseCartDialog">

        <div class="cart__list">

          <table class="table">
            <thead>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" v-if="cart">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
              </tr>
              <tr v-if=" cart.total !== cart.final_total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>

          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>

        </div>

      </div> <!-- 底下購物車 end -->

   <!-- 訂單資訊 -->
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail" v-model="form.user.email" :class="{'is-invalid': errors.has('email')}"
            v-validate="'required|email'" placeholder="請輸入 Email"> <!-- required  -->
          <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name" placeholder="輸入姓名" v-validate="'required'">
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" id="usertel" name="tel" v-model="form.user.tel" placeholder="請輸入電話"
            v-validate="'required'">
          <span class="text-danger" v-if="errors.has('tel')">電話未填</span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="address" class="form-control" name="address" id="useraddress" v-model="form.user.address"
            v-validate="'required'" placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name="message" id="" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
    <!-- 訂單資訊 end -->




    </div> <!-- 倒數第二層 -->

  </div> <!-- 倒數第一層 -->

</template>

<style scoped>
.pict_01 {
  width: 100%;
  height: 100vh;
}
</style>
<script>
$("#collapseCartDialog").click(function() {
  if (this.listopen === false) {
    this.listopen = true;
  }
});

import $ from "jquery";
import { mapActions, mapState } from "vuex";
import Carousel from "@/components/pages/Carousel";
export default {
  name: "productlist",
  data() {
    return {
      currentFilterStyle: "全部商品",
      filterStyleArr: ["全部商品", "飲品", "漢堡", "三明治"],
      products: [],
      isLoading: false,
      product: {},
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      cart: {},
      coupon_code: "",

    };
  },
  components: {
    Carousel,
  },
  computed: {
    filterProductArr: function() {
      if (this.currentFilterStyle === "全部商品") {
        return this.products;
      } else {
        return this.products.filter(item => {
          console.log(item);
          return item.category === this.currentFilterStyle;
        });
      }
    },
    cartTotal() {
      return this.cart.carts ? this.cart.carts.length : null; // 等cart確定傳進來之後
    }
  },
  methods: {
    getProducts(page = 1) {
      // 整體資料有prodcuts 有s
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        // console.log("response:", response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      // 單筆資料有prodcut 沒有s
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(api).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        
        console.log("response:", response);
        vm.status.loadingItem = "";
      });
    },
    addToCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/cart/`;
      console.log("api:", api);
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMERPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        // console.log(response);
        vm.cart = response.data.data; // 不是 response.data.data.carts ,需包含total 資訊
        // console.log(vm.cart);
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        // console.log('response:', response);
        vm.getCart();
        vm.isLoading = false;
        // vm.cart = response.data
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/order`;
      const order = vm.form;
      // vm.isLoading = true;
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(api, { data: order }).then(response => {
            console.log("response:", response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            // vm.isLoading = false;
          });
          // do stuff if not valid.
        } else {
          console.log("欄位不完整:");
        }
      });
    },
    changeFilterStyle(idx) {
      this.currentFilterStyle = this.filterStyleArr[idx];
    },

  },
  created() {
    this.getProducts();
    this.getCart();
  },

};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  &__list {
    position: fixed;
    bottom: 100px;
    right: 0;
    background: #fff;
    padding: 10px;
    width: 400px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  &__num {
    position: absolute;
    background-color: #ff5d42;
    border-radius: 25px;
    width: 28px;
    height: 27px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    top: -10%;
    right: -12%;
    z-index: 3;
  }
}
.fa-shopping-cart:before {
  font-size: 26px;
}
</style>