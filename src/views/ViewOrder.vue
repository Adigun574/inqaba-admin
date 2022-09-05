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
            <p class="card-title">Order ID:</p>
            <p class="card-value">REF/PS01/2022/001</p>
        </div>
        <div>
            <p class="card-title">Client Name:</p>
            <p class="card-value">REF/PS01/2022/001</p>
        </div>
        <div>
            <p class="card-title">Order Date:</p>
            <p class="card-value">REF/PS01/2022/001</p>
        </div>
        <div>
            <p class="card-title">Service Type:</p>
            <p class="card-value">REF/PS01/2022/001</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-9">
            <div class="order-details-card">
                <p class="institute-title">Institute</p>
                <p class="institute-value">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="order-details-card">
                <p class="institute-title">Collection of Sample</p>
                <p class="institute-value">Delivery</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-4">
            <div class="order-details-card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <h4 class="eye-dropper-h1"><i class="fa fa-eye-dropper" style="color:#32b308"></i></h4>
                        <p>Sample Tubes Submitted</p>
                    </div>
                    <h1><b>3</b></h1>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="order-details-card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <h4 class="eye-dropper-h1"><i class="fa fa-eye-dropper" style="color:#32b308"></i></h4>
                        <p>Primer Tubes Submitted</p>
                    </div>
                    <h1><b>3</b></h1>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="order-details-card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <h4 class="eye-dropper-h1"><i class="fa fa-eye-dropper" style="color:#32b308"></i></h4>
                        <p>Plates Submitted</p>
                    </div>
                    <h1><b>3</b></h1>
                </div>
            </div>
        </div>
    </div>

    <div>
        <table class="table mt-4">
            <tr class="table-header-row">
                <th>Sample</th>
                <th>Sample Type</th>
                <th>Purification Method</th>
                <th>Extraction Method</th>
                <th>Lab Stage</th>
                <th></th>
            </tr>
            <tr>
                <td>Name</td>
                <td>Type here</td>
                <td>Method Stated</td>
                <td>Method Stated</td>
                <td><p style="margin-top:15px">Stage B</p></td>
            </tr>
            <tr>
                <td>Name</td>
                <td>Type here</td>
                <td>Method Stated</td>
                <td>Method Stated</td>
                <td><p style="margin-top:15px">Stage B</p></td>
            </tr>
            <tr>
                <td>Name</td>
                <td>Type here</td>
                <td>Method Stated</td>
                <td>Method Stated</td>
                <td><p style="margin-top:15px">Stage B</p></td>
            </tr>
        </table>
    </div>

    <div>
        <table class="table mt-4">
            <tr class="table-header-row">
                <th>Forward</th>
                <th>Reverse</th>
                <th>Internal Sequencing Primer Name</th>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
        </table>
    </div>

    <div>
        <table class="table mt-4">
            <tr class="table-header-row">
                <th>Name</th>
                <th>Sequence</th>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
        </table>
    </div>

    <div>
        <table class="table mt-4">
            <tr class="table-header-row">
                <th>Name</th>
                <th>Sequence</th>
                <th>Concentration</th>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td>Type here</td>
                <td><p style="margin-top:15px">Primer Name Here</p></td>
            </tr>
        </table>
    </div>

    <div>
        <table class="table mt-4">
            <tr class="table-header-row">
                <th>Name</th>
                <th>Sequence</th>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
            <tr>
                <td>Type here</td>
                <td><p style="margin-top:15px">Type Here</p></td>
            </tr>
        </table>
    </div>


    <div class="order-details-card comments-card">
        <p>Comments</p>
        <p class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae?</p>
    </div>

    <div class="btn-div">
        <button class="cancel-btn">Cancel</button>
        <button class="login-btn">Update Order</button>
    </div>

  </div>
</template>

<script>
export default {};
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
.card-title{
    font-size: 12px;
    margin-bottom: 10px !important;
}
.card-value{

}
.institute-title{
    margin-bottom: 10px !important;
}
.institute-value{
    font-size: 14px;
}
.eye-dropper-h1{
  background-color: #d6fdca;
  padding:10px;
  border-radius: 4px;
  margin-right: 20px;
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
tr:hover{
    background-color: #DDECD8;
}
.comments-card{
    font-weight: lighter;
}
.comments-card .title{
    font-size: 14px;
    margin-top: 0 !important;
}
.btn-div{
    display: flex;
    justify-content: end;
    margin-top: 40px;
}
.login-btn{
    background-color: #32b308;
    border: none;
    border-radius: 5px;
    color:white;
    padding:10px 30px;
    box-shadow: 0px 21.5833px 21.5833px rgba(153, 191, 24, 0.23);
}
.cancel-btn{
    border: 1px solid #565656;
    border-radius: 5px;
    color:#565656;
    padding:10px 30px;
    margin-right: 20px;
}
</style>