import Vue from 'vue';
import Router from 'vue-router';
import Home from  '../components/Home.vue';
import About from  '../components/About.vue';
import Start from  '../components/Start.vue';
import Login from  '../components/pages/Login.vue';
import Products from '../components/pages/Products.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    
    {
      path: '/admin',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'Orderlist',
          component: () => import('../components/pages/Orderlist.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('../components/pages/Coupons.vue'),
          meta: { requiresAuth: true },
        }
      ]
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: '/start',
      name: 'start',
      component: Start,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/customer_order',
      name: 'customerOrder',
      component: () => import('../components/pages/customerOrder.vue'),
    }
  ]
})
