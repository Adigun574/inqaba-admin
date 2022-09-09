<template>
<div style="background-color: #f4f4f4;">
    <Navbar/>
    <div class="login-page">
        <div class="d-flex">
            <div>
                <div class="img-div">
                    <div class="login-img-div">
                    </div> 
                </div>
            </div>
            <div class="login-page-section-2">
                <div>
                    <h1>Welcome Back!</h1>
                    <p>Kindly login to your account</p>
                    <div class="mb-2 email-input-group">
                        <div>
                            <small style="font-size:12px">Email Address</small>
                        </div>
                        <div class="input-container">
                            <input v-model="loginPayload.email" class="input-field form-control" placeholder="johndoe@gmail.com" type="text" autofocus>
                            <i class="fa fa-user icon"></i>
                        </div>
                    </div>
                    <div  class="password-input-group">
                        <div>
                            <small style="font-size:12px">Password</small>
                        </div>
                        <div class="input-container">
                            <input v-model="loginPayload.password" class="input-field form-control" placeholder="********" type="password">
                            <i class="fa fa-eye-slash icon"></i>
                        </div>
                    </div>

        
                    <div class="mt-4">
                        <button v-if="!loggingIn" class="login-btn" @click="login()">LOGIN <span><i class="fa fa-arrow-right"></i></span></button>
                        <div v-if="loggingIn" style="display:flex; justify-content:center">
                            <div class="spinner-border text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PageFooter class="login-footer"/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import PageFooter from '../components/PageFooter.vue';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';

export default {
    components:{
        Navbar,
        PageFooter
    },
    data() {
        return {
            loggingIn: false,
            loginPayload:{
                email: '',
                password: ''
            }
        }
     },
     methods: {
        makeToast(message, type){
                    this.$toast.open({
                        message: message || '',
                        type,
                        position: 'top-right',
                        duration: 6000
                    });
        },
        login(){
            if(this.validateData()){
                this.loggingIn = true
                axios.post(`${baseUrl}admin/auth/login`,this.loginPayload)
                .then(res=>{
                    if(res?.data?.data?.token){
                        localStorage.setItem('inqaba-token', res?.data?.data?.token)
                        localStorage.setItem('inqaba-user', JSON.stringify(res?.data?.data?.userData))
                    }
                    this.loggingIn = false
                    this.makeToast(res?.data?.message, 'success')
                    this.$router.push('/admin/dashboard')
                })
                .catch(err =>{
                    this.loggingIn = false
                    try {
                        this.makeToast(err?.response?.data.message, 'error')
                    } catch (error) {
                        this.makeToast('Something went wrong', 'error')
                    }
                })
            }
            else{
                this.makeToast('All fields are required', 'error')
            }
        },
        validateData(){
            if(this.loginPayload.email && this.loginPayload.password){
                return true
            }
            else{
                return false
            }
            
        }
     }

}
</script>

<style scoped>
.img-div img{
    height: 500px;
}

.login-img-div{
    width:375px; 
    height:500px; 
    background-image:url('../assets/img/scientist_3.jpg'); 
    background-size:cover; 
    background-repeat:no-repeat
}


/* Style the input container */
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

/* Style the form icons */
.icon {
  padding: 10px;
  padding-top: 13px;
  background: white;
  color: #b3b3b3;
  min-width: 50px;
  text-align: center;
  position: relative;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.login-page{
    padding: 70px 200px;
    color:#565656
}
.green-color{
    color:#32b308;
}
.img-div{
    border-radius: 1000px;
    overflow: hidden;
    border: 3px solid #32b308;
}
.login-page-section-2{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0 !important;
}
.login-page-section-2 h1{
    color:#32b308;
    font-weight: bolder;
    font-size: 60px;
}
.login-page-section-2 p{
    font-size: 24px;
}
input{
    border: none !important;
    background-color: white !important;
}
.email-input-group{
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 5px;
    margin-bottom: 0;
    /* width:120%; */
}
/* .password-input-group{
    width: 120%;
} */
.login-btn{
    background-color: #32b308;
    border: none;
    border-radius: 5px;
    color:white;
    padding:10px 30px;
    box-shadow: 0px 21.5833px 21.5833px rgba(153, 191, 24, 0.23);
}
.login-btn span{
    background-color: #90d57b;
    border-radius: 8px;
    font-size: 8px;
    padding:5px;
    position: relative;
    bottom: 3px;
    left:10px
}
.cursor-pointer{
    cursor: pointer;
}
.login-footer{
    position: absolute;
    bottom: 0;
}


@media (max-width: 500px) {
    .img-div{
        display: none;
    }

    .login-page{
        padding: 50px 30px 100px 30px;
        color:#565656
    }
}
</style>