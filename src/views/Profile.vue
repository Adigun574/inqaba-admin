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
            <p class="edit-icon" @click="openEditModal('name')"><i class="fa fa-edit"></i></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Phone Number:</p>
              <p class="profile-card-value">+2349012345678</p>
            </div>
            <p class="edit-icon" @click="openEditModal('phone')"><i class="fa fa-edit"></i></p>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 30px">
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Email:</p>
              <p class="profile-card-value">johndoe@inqaba.com</p>
            </div>
            <p class="edit-icon" @click="openEditModal('email')"><i class="fa fa-edit"></i></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="profile-card">
            <div>
              <p class="profile-card-title">Department</p>
              <p class="profile-card-value">Technology</p>
            </div>
            <p class="edit-icon" @click="openEditModal('department')"><i class="fa fa-edit"></i></p>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div
      class="modal fade"
      id="edit-content-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="p-4">
              <div class="form-group" v-if="propertyToEdit === 'name'">
                  <label class="form-label">Full Name</label>
                  <input class="form-control">
              </div>
              <div class="form-group" v-if="propertyToEdit === 'phone'">
                  <label class="form-label">Phone Number</label>
                  <input class="form-control">
              </div>
              <div class="form-group" v-if="propertyToEdit === 'email'">
                  <label class="form-label">Email</label>
                  <input class="form-control">
              </div>
              <div class="form-group" v-if="propertyToEdit === 'department'">
                  <label class="form-label">Department</label>
                  <input class="form-control">
              </div>
              <button class="login-btn" style="margin-top:30px">Update</button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            propertyToEdit:''
        }
    },
    methods:{
        openEditModal(title){
            console.log(title)
            this.propertyToEdit = title
            this.openModal('edit-content-modal','')
        },
        openModal(modalToOpen,modalToClose){
            if(modalToClose){
                $(`#${modalToClose}`).modal('hide')
            }
            if(modalToOpen){
                $(`#${modalToOpen}`).modal('show')
            }
        },
    }
};
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
.edit-icon{
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
</style>