<template>
    <div>
        <div class="p-4 pt-0 overflow-hidden">
            <div class="d-flex" style="margin-bottom: 30px">
            <p class="back-arrow-icon"><i class="fas fa-long-arrow-alt-left"></i></p>
            <p><b>Dashboard</b></p>
            </div>

            <div class="form-group new-password-div">
                <label class="form-label">New Password</label>
                <input class="form-control" type="password" v-model="newPassword">
            </div>

            <hr>

            <div class="form-group confirm-password-div">
                <label class="form-label">Confirm Password</label>
                <input class="form-control" type="password" v-model="newPassword2">
            </div>

            <div class="btn-div">
                <button class="cancel-btn">Cancel</button>
                <button v-if="!changing" class="login-btn" @click="changePassword()">Change Password</button>
                <div v-if="changing" style="display:flex; justify-content:center">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';
import Loader from '@/components/Loader.vue';

export default {
  components: { Loader },
    data(){
        return{
            newPassword: '',
            newPassword2: '',
            changing: false
        }
    },
    methods:{
        makeToast(message, type){
                    this.$toast.open({
                        message: message || '',
                        type,
                        position: 'top-right',
                        duration: 6000
                    });
        },

        changePassword(){
            if(this.newPassword.length < 6){
                this.makeToast('Password must be at least 6 characters long', 'error')
                return
            }
            if(this.newPassword != this.newPassword2){
                this.makeToast('Passwords do not match', 'error')
                return
            }

            this.changing = true

            let changePasswordPayload = {
                newPassword: this.newPassword,
                newPassword2: this.newPassword2
            }

            console.log(this.changePasswordPayload)

            axios.post(`${baseUrl}admin/change-password`,this.changePasswordPayload)
                .then(res=>{
                    this.makeToast(res?.data?.message, 'success')
                    this.changing = false
                })
                .catch(err =>{
                    this.makeToast('Something went wrong', 'error')
                    this.changing = false
                })
        }
    }
};
</script>

<style scoped>
*:focus {
  outline: none;
}
input{
    border: none;
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