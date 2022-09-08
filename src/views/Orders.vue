<template>
  <div>
      <div class="d-flex" style="margin-bottom:30px">
          <p class="back-arrow-icon"><i class="fas fa-long-arrow-alt-left"></i></p>
          <p><b>Orders</b></p>
      </div>

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

  </div>
</template>

<script>
export default {
    methods:{
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
.back-arrow-icon{
    margin-right:20px; 
    color:#32B308
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