import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '*',
    //   redirect: 'home',
    // },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('@/components/Home.vue'),
    // },
    {
      path: '/',
      redirect: '/Introduce',
    },

    {
      path: '*',
      redirect: '/Introduce',
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: 'introduce',
          name: 'Introduce',
          component: () => import('@/components/pages/Introduce.vue'),
        }
        ,
        {
          path: 'product_list',
          name: 'ProductList',
          component: () => import('@/components/pages/productList.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/pages/Login.vue'),
    },    
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/components/pages/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'Orderlist',
          component: () => import('@/components/pages/Orderlist.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('@/components/pages/Coupons.vue'),
          meta: { requiresAuth: true },
        }

      ],
    },

    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard.vue'),
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('@/components/pages/CustomerOrder'),
          
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('@/components/pages/CustomerCheckout'),
        },
      ],
    },
  ],
});