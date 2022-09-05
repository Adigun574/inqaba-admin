<template>
  <div>
    <div class="d-flex" style="margin-bottom: 30px">
      <p class="back-arrow-icon"><i class="fas fa-long-arrow-alt-left"></i></p>
      <p><b>Dashboard</b></p>
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

    <div class="profile-card-div">
      <div class="row">
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Full Name:</p>
              <p class="profile-card-value">John Doe</p>
            </div>
            <p class="edit-icon"><i class="fa fa-edit"></i></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Phone Number:</p>
              <p class="profile-card-value">+2349012345678</p>
            </div>
            <p class="edit-icon"><i class="fa fa-edit"></i></p>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top:30px">
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Email:</p>
              <p class="profile-card-value">johndoe@inqaba.com</p>
            </div>
            <p class="edit-icon"><i class="fa fa-edit"></i></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Department</p>
              <p class="profile-card-value">Technology</p>
            </div>
            <p class="edit-icon"><i class="fa fa-edit"></i></p>
          </div>
        </div>
      </div>

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
.back-arrow-icon {
  margin-right: 20px;
  color: #32b308 !important;
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
.profile-card-div {
  margin-top: 30px;
}
.profile-card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.profile-card-title {
  font-size: 14px;
  font-weight: lighter;
  margin-bottom: 5px;
}
.profile-card-value {
}
.profile-card .edit-icon {
  align-self: flex-end;
}
</style>