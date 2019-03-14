<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>管理員</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            <i class="fas fa-box-open">列表</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orderlist">
            <i class="far fa-list-alt">訂單列表</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupons">
            <i class="fas fa-comment-dollar"></i>
            優惠券列表
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>模擬功能</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/customer_order">模擬訂單</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!--
<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>管理員</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/package">
            <i class="fas fa-box-open">精選套餐</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/burger">
            <i class="fas fa-box-open">美味漢堡</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/toast">
            <i class="far fa-list-alt">特製吐司</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/quiche">
            <i class="far fa-list-alt">精緻蛋餅</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/drink">
            <i class="far fa-list-alt">好喝飲料</i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupons">
            <i class="fas fa-comment-dollar"></i>
            優惠券列表
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>模擬功能</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/customer_order">模擬訂單</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
-->