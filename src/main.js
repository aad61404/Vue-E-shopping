// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

import App from './App'

import Pagination from './components/Pagination'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';


import 'bootstrap';
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

Vue.use(VueAxios, axios);
Vue.component('Loading',Loading);
Vue.component('Pagination', Pagination)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
