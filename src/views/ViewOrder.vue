<template>
  <div>
    <div class="d-flex">
      <p class="breadcrumb-home">Home</p>
      <p class="breadcrumb-arrow"><i class="fa fas fa-angle-right"></i></p>
      <p class="breadcrumb-id">REF/PS01/2022/001</p>
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

    <div class="d-flex justify-content-between order-details-card">
        <div>
            <p>Order ID:</p>
            <p>REF/PS01/2022/001</p>
        </div>
        <div>
            <p>Client Name:</p>
            <p>REF/PS01/2022/001</p>
        </div>
        <div>
            <p>Order Date:</p>
            <p>REF/PS01/2022/001</p>
        </div>
        <div>
            <p>Service Type:</p>
            <p>REF/PS01/2022/001</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
.breadcrumb-home {
  font-size: 12px;
}
.breadcrumb-arrow {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 12px;
}
.breadcrumb-id {
  font-size: 12px;
  color: #32B308;
}
.order-details-card{
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    margin-top: 30px;
}
</style>