import Vue from 'vue';
import App from './App.vue'
import router from './router'

import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

    
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import axios from 'axios'

Vue.use(VueToast);


Vue.use(VueRouter);

Vue.config.productionTip = false


axios.interceptors.request.use((request) => {

    let token = localStorage.getItem('inqaba-token')
    if(token){
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')










///////////////////////////////////////

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
