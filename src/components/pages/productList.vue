<template>
    <div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
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
    </div> <!-- row  end-->
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
              <strong>{{product.num*product.price}}</strong>
            </div>
            <button type="button" class="btn btn-primary" @click="addToCart(product.id, product.num)">
              <i class="fas"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 單筆modal end  -->
    </div>
</template>

<style scoped>
.pict_01 {
  width: 100%;
  height: 100vh;
}
</style>
<script>
import $ from "jquery";

export default {
  data() {
    return {

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
      coupon_code: ""
    };
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
        console.log("response:", response);
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
          this.$http.post(api, { data: order }).then((response) => {
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
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>