import Vue from 'vue';
import App from './App.vue'
import router from './router'

import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

    
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import axios from 'axios'

Vue.use(VueToast);


Vue.use(VueRouter);

Vue.use(BootstrapVue)



Vue.config.productionTip = false


axios.interceptors.request.use((request) => {

    let token = localStorage.getItem('inqaba-token')
    if(token){
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status === 401){
    logoutUser()
  }
});

const logoutUser = () => {
  window.location.href = ''
  localStorage.removeItem('inqaba-token')
  localStorage.removeItem('inqaba-user')
  localStorage.removeItem('userEmail')
}

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
