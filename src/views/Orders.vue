<template>
  <div>
    <Loader v-if="loading"/>
      <div class="d-flex" style="margin-bottom:30px">
          <p class="back-arrow-icon">
            <router-link to="/admin/dashboard">
              <i class="fas fa-long-arrow-alt-left" style="color: #32B308; cursor: pointer;"></i>
            </router-link>
          </p>
          <p><b>Orders</b></p>
      </div>

    <div class="d-flex">
      <div class="search-icon-div">
        <p><i class="fa fa-search search-icon"></i></p>
      </div>
      <input
        class="search-input"
        type="search"
        placeholder="Order ID, Client Name"
        v-model="searchKeyword"
        @input="searchOrders"
      />
    </div>

    <div class="overflow-auto order-table">
        <table class="table mt-4">
        <tr class="table-header-row">
            <th>Order ID</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Institute</th>
            <th>Order Date</th>
            <th></th>
        </tr>
        <tr v-for="order in displayedOrders" :key="order.id">
            <td>{{order.orderTag}}</td>
            <td>{{order.user.name}}</td>
            <td>{{order?.user?.email}}</td>
            <td>{{order.user.institute}}</td>
            <td>{{order.created_at?.split('T')[0]}}</td>
            <td><p style="margin-top:15px" @click="viewOrder(order.id)"><span class="view-btn">View</span></p></td>
        </tr>
        </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';
import Loader from '../components/Loader.vue';


export default {
    components:{
        Loader
    },
    data() {
        return {
            orders: [],
            loading: false,
            searchKeyword: '',
            displayedOrders: ''
        }
    },
    created() {
        this.getOrders()
    },
    methods:{
        viewOrder(orderId){
            this.$router.push(`/admin/orders/${orderId}`)
        },
        getOrders(){
            this.loading = true
            // axios.get(`${baseUrl}admin/order?pageSize=15&page=1`)
            axios.get(`${baseUrl}admin/order`)
            .then(res=>{
                console.log(res)
                this.orders = res.data.data.orders
                this.displayedOrders = [...this.orders]
                this.loading = false
                // console.log(this.orders)
            })
            .catch(err =>{
                console.log(err)
                this.loading = false
            })
        },
        searchOrders() {
          if(!this.searchKeyword){
            this.displayedOrders = [...this.orders]
            return
          }
          this.displayedOrders = this.orders.filter(order => order.orderTag.toLowerCase().includes(this.searchKeyword.toLowerCase()) || order.user.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
        }
    }
};
</script>

<style scoped>
*:focus {
  outline: none;
}
.back-arrow-icon{
  margin-right:20px; 
  color:#32B308 !important;
}
.search-icon-div {
  background-color: white;
  border-radius: 10px 0 0 10px;
  padding-top: 10px;
  padding-left: 15px;
  color: #32b308;
}
.search-icon {
  position: relative;
  top: 3px;
}
.search-input {
  background-color: white;
  border-radius: 0 10px 10px 0;
  padding: 5px;
  padding-left: 10px;
  border: none;
  width: 350px;
}
tr:nth-child(odd){
    background-color: white;
    border-radius: 10px !important;
    padding-left: 20px;
    padding-right: 20px;
}
th:first-child, td:first-child {
  padding-left:20px;
  padding-right:0;
  border-radius: 10px 0 0 10px;
}
th:last-child, td:last-child {
  border-radius: 0 10px 10px 0;
}
th{
    padding-top:20px;
    padding-bottom: 20px;
}
.view-btn{
    color:#32b308;
    background-color: #D5EACE;
    border-radius: 20px;
    padding:5px 20px;
    font-size: 14px;
    cursor: pointer;
}
@media (max-width: 500px) {
  .order-table{
      font-size: 14px;
  }
}
</style>