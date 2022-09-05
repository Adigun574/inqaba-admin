<template>
  <div>
    <div class="d-flex" style="margin-bottom: 30px">
      <p class="back-arrow-icon"><i class="fas fa-long-arrow-alt-left"></i></p>
      <p><b>Dashboard</b></p>
    </div>

    <div class="form-group new-password-div">
        <label class="form-label">New Password</label>
        <input class="form-control" type="password">
    </div>

    <hr>

    <div class="form-group confirm-password-div">
        <label class="form-label">Confirm Password</label>
        <input class="form-control" type="password">
    </div>

    <div class="btn-div">
        <button class="cancel-btn">Cancel</button>
        <button class="login-btn">Change Password</button>
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
input.form-control:focus{
    box-shadow: inset 0 -1px 0 white;
}
.back-arrow-icon {
  margin-right: 20px;
  color: #32b308 !important;
}
.new-password-div{
    margin-bottom: 30px;
}
.new-password-div label, .confirm-password-div label{
    font-size: 14px;
}
input{
    width: 350px;
}
hr{
    width: 350px;
}

.btn-div{
    display: flex;
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