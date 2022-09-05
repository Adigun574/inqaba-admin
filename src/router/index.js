// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainApp from '../views/MainApp.vue'
// import UniversalPrimers from '../views/UniversalPrimers.vue'
// import GeneralServices from '../views/GeneralServices.vue'
// import SampleRequirements from '../views/SampleRequirements.vue'
// import AdditionalServices from '../views/AdditionalServices.vue'
// import Checklist from '../views/Checklist.vue'
// import CustomPrimers from '../views/CustomPrimers.vue'
// import PersonalPrimers from '../views/PersonalPrimers.vue'
// import CustomerDetails from '../views/CustomerDetails.vue'
// import OrderDetail from '../views/OrderDetail.vue'
// import SampleInformation from '../views/SampleInformation.vue'
// import SampleInformationNoPCRs from '../views/SampleInformationNoPCRs.vue'
// import Services from '../views/Services.vue'
// import Order from '../views/Order.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Order from '../views/Orders.vue'
import ViewOrder from '../views/ViewOrder.vue'
import Profile from '../views/Profile.vue'
import ChangePassword from '../views/ChangePassword.vue'

// import Signup from '../views/Signup.vue'
// import { guardMyroute } from '../utils/routeGuard'




const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: MainApp,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'orders',
        component: Order
      },
      {
        path: 'orders/:id',
        component: ViewOrder
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'change-password',
        component: ChangePassword
      },
    ]
  }
//   {
//     path: '/signup',
//     component: Signup
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
//   {
//     path: '/main',
//     name: 'main',
//     component: MainApp,
//     // beforeEnter: guardMyroute,
//     children: [
//       {
//         path: 'universal-primers',
//         component: UniversalPrimers 
//       },
//       {
//         path: 'general-services',
//         component: GeneralServices
//       },
//       {
//         path: 'sample-requirements',
//         component: SampleRequirements,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'additional-services',
//         component: AdditionalServices
//       },
//       {
//         path: 'checklist',
//         component: Checklist,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'custom-primers',
//         component: CustomPrimers,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'personal-primers',
//         component: PersonalPrimers,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'customer-details',
//         component: CustomerDetails,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'order-detail',
//         component: OrderDetail,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'sample-information',
//         component: SampleInformation,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'sample-information-no-pcr',
//         component: SampleInformationNoPCRs,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'sample-information-no-pcr',
//         component: SampleInformationNoPCRs,
//         beforeEnter: guardMyroute,
//       },
//       {
//         path: 'services',
//         component: Services
//       },
//       {
//         path: 'order',
//         component: Order,
//         beforeEnter: guardMyroute,
//       }
//     ]
//   }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active-link'
})

export default router
