<template>
  <div>
    <div class="d-flex">
      <div class="search-icon-div">
        <p><i class="fa fa-search search-icon"></i></p>
      </div>
      <input
        class="search-input"
        type="search"
        placeholder="Order ID, Status, Client Name, Date"
      />
    </div>

    <div class="dashboard-card">
      <div>
        <h3 class="calendar-icon"><i class="fa fa-calendar-alt"></i></h3>
        <div>
          <p class="recent-orders">Recent Orders</p>
          <div class="from-previous"><small>From Previous Week</small></div>
        </div>
      </div>
      <div>
        <h1 class="orders-count">105</h1>
        <h3 class="orders-chart"><i class="fa fa-line-chart" style="color: #32B308"></i></h3>
      </div>
    </div>

    <div class="overflow-auto order-table">
        <table class="table mt-4">
        <tr class="table-header-row">
            <th>Order ID</th>
            <th>Client Name/Inst.</th>
            <th>Order Date</th>
            <th></th>
        </tr>
        <tr>
            <td>REF/PS01/2022/001</td>
            <td>Bayo Ojo</td>
            <td>11/11/2018</td>
            <td><p style="margin-top:15px" @click="viewOrder(1)"><span class="view-btn">View</span></p></td>
        </tr>
        <tr>
            <td>REF/PS01/2022/001</td>
            <td>Bayo Ojo</td>
            <td>11/11/2018</td>
            <td><p style="margin-top:15px" @click="viewOrder(1)"><span class="view-btn">View</span></p></td>
        </tr>
        <tr>
            <td>REF/PS01/2022/001</td>
            <td>Bayo Ojo</td>
            <td>11/11/2018</td>
            <td><p style="margin-top:15px" @click="viewOrder(1)"><span class="view-btn">View</span></p></td>
        </tr>
        </table>
    </div>

    <div class="view-all-btn-div">
        <button class="login-btn" @click="goToOrders()">View All</button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        goToOrders(){
            this.$router.push('/admin/orders')
        },
        viewOrder(orderId){
            this.$router.push(`/admin/orders/${orderId}`)
        }
    }
};
</script>

<style scoped>
*:focus {
  outline: none;
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
.dashboard-card {
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}
.calendar-icon {
  color: #32b308;
}
.recent-orders {
  font-size: 20px;
  margin-bottom: 0;
}
.from-previous {
  color: #999;
  font-size: 12px;
}
.orders-count {
  margin-bottom: 0;
}
.orders-chart {
  text-align: center;
  color: #32b308;
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
.login-btn{
    background-color: #32b308;
    border: none;
    border-radius: 5px;
    color:white;
    padding:10px 30px;
    box-shadow: 0px 21.5833px 21.5833px rgba(153, 191, 24, 0.23);
}
.view-all-btn-div{
    display: flex;
    justify-content: end;
    margin-top: 30px;
}
@media (max-width: 500px) {
  .order-table{
      font-size: 14px;
  }
}
</style>