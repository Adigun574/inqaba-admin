<template>
  <div class="full-body">
    <Navbar @toggleSidebar="test"/>
    <div id="main-sidebar" class="sidebar-container">
        <div class="sidebar-inner-div">
            <div>
                <p><router-link to="/admin/dashboard" active-link="active-link"><i class="fa fa-th"></i> Dashboard</router-link></p>
                <p><router-link to="/admin/orders" active-link="active-link"><i class="fa fa-th"></i> Orders</router-link></p>
                <p><router-link to="/admin/profile" active-link="active-link"><i class="fa fa-th"></i> Admin Profile</router-link></p>
                <p><router-link to="/admin/change-password" active-link="active-link"><i class="fa fa-th"></i> Password</router-link></p>
            </div>
        </div>
        <div class="logout-btn-div">
            <p><i class="fa fa-th"></i> Logout</p>
        </div>
    </div>

    <div id="content-body">
        <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  components: {
    Navbar,
    PageFooter,
  },
  data(){
      return{
        sidebarVisible: false
      }
  },
  created() {
    
  },
  mounted(){
    this.setSidebar();
    // document.getElementById("toggle-button").click()
  },
  methods: {
    test(){
        
    },
    setSidebar() {
      const sidebar = document.getElementById("main-sidebar");

      document.getElementById("toggle-button").addEventListener("click", () => {
        if (this.sidebarVisible) {
          // hide if visible
          this.hideSideBar()
        } else {
          // show the sidebar
          this.showSideBar()
        }
      });
    },
    showSideBar() {
      const sidebar = document.getElementById("main-sidebar");
      this.sidebarVisible = true;
      sidebar.classList.remove("hide-sidebar");
      sidebar.classList.add("show-sidebar");
      //
    //   const content = document.querySelector('#content-body')
    //   content.style.transform = 'translateX(300px)'
    //   content.style.transition = 'transform 1s'
    },
    hideSideBar() {
      const sidebar = document.getElementById("main-sidebar");
      this.sidebarVisible = false;
      sidebar.classList.remove("show-sidebar");
      sidebar.classList.add("hide-sidebar");
      //
    //   const content = document.querySelector('#content-body')
    //   content.style.transform = 'translateX(0px)'
    //   content.style.transition = 'transform 1s'
    },
  },
};
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.full-body{
    overflow-y: hidden;
    max-height: 100vh;
}


.sidebar-container {
  transform: translateX(-300px);
  position: absolute;
  background-color: #32b308;
  top: 5rem;
  left: 0;
  width: 300px;
  /* height: 100%; */
  height: calc(100vh - 80px);
  padding: 1rem;
  transition: transform 1s;
  color:white;
  font-weight: lighter;
}
.sidebar-inner-div{
    padding-top: 50px;
    display: flex;
    justify-content: center;
}
.sidebar-inner-div p{
    cursor: pointer;
}
.sidebar-inner-div i{
    margin-right: 10px;
}
.logout-btn-div{
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 150px;
    text-align: center;
    cursor: pointer;
    width: 100%;
    margin: auto;
}
.active-link{
    background-color: white;
    color: #32b308;
    padding: 5px 10px;
    width:150%;
    border-radius: 5px;
    font-weight: normal;
}

#content-body {
  background-color: #F4F4F4;
  padding:50px;
  max-height: calc(100vh - 85px);
  overflow-y: scroll;
}

.show-sidebar {
  transform: translateX(0px);
}

.hide-sidebar {
  transform: translateX(-300px);
}





/*
@media (max-width: 500px) {
  .top-nav{
   overflow: scroll;
  }
  .bottom-spacer{
    height: 100px;
  }
} */
</style>