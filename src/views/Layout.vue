<template>
  <div class="full-body">
    <Navbar />
    <div id="main-sidebar" class="sidebar-container">
      <div class="sidebar-inner-div">
        <div>
          <p>
            <router-link to="/admin/dashboard" active-link="active-link"
              ><i class="fa fa-th"></i> Dashboard</router-link
            >
          </p>
          <p>
            <router-link to="/admin/orders" active-link="active-link"
              ><i class="fa fa-th"></i> Orders</router-link
            >
          </p>
          <p>
            <router-link to="/admin/profile" active-link="active-link"
              ><i class="fa fa-th"></i> Admin Profile</router-link
            >
          </p>
          <p>
            <router-link to="/admin/change-password" active-link="active-link"
              ><i class="fa fa-th"></i> Password</router-link
            >
          </p>
        </div>
      </div>
      <div class="logout-btn-div">
        <p @click="logout()"><i class="fa fa-th"></i> Logout</p>
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
  data() {
    return {
      sidebarVisible: false,
    };
  },
  created() {
    // console.log(screen.width)
  },
  mounted() {
    this.setSidebar();
    if (screen.width < 600) {
      this.hideSideBar();
    } else {
      this.showSideBar();
    }
    // document.getElementById("toggle-button").click()
  },
  methods: {
    setSidebar() {
      const sidebar = document.getElementById("main-sidebar");

      document.getElementById("toggle-button").addEventListener("click", () => {
        if (this.sidebarVisible) {
          // hide if visible
          this.hideSideBar();
        } else {
          // show the sidebar
          this.showSideBar();
        }
      });
    },
    showSideBar() {
      const sidebar = document.getElementById("main-sidebar");
      this.sidebarVisible = true;
      sidebar.classList.remove("hide-sidebar");
      sidebar.classList.add("show-sidebar");

      document.querySelector("#content-body").style.marginLeft = "300px";
    },
    hideSideBar() {
      const sidebar = document.getElementById("main-sidebar");
      this.sidebarVisible = false;
      sidebar.classList.remove("show-sidebar");
      sidebar.classList.add("hide-sidebar");

      document.querySelector("#content-body").style.marginLeft = "0px";
    },
    logout(){
        this.$router.push('/')
        localStorage.removeItem('inqaba-token')
        localStorage.removeItem('inqaba-user')
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.full-body {
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
  color: white;
  font-weight: lighter;
}
.sidebar-inner-div {
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
.sidebar-inner-div p {
  cursor: pointer;
}
.sidebar-inner-div a {
  color: white;
  text-decoration: none;
}
.sidebar-inner-div i {
  margin-right: 10px;
  color: white;
}
.logout-btn-div {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 150px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  margin: auto;
}
.logout-btn-div p{
  color: white;
}
.logout-btn-div i{
  color: white;
}
.active-link {
  background-color: white;
  color: #32b308 !important;
  padding: 5px 10px;
  width: 300px !important;
  border-radius: 5px;
  font-weight: normal;
  position: relative;
  /* right: 50px; */
}

#content-body {
  background-color: #f4f4f4;
  padding: 50px;
  max-height: calc(100vh - 85px);
  overflow-y: scroll;
  transition: margin-left 1s;
  height: 100vh;
}

.show-sidebar {
  transform: translateX(0px);
}

.hide-sidebar {
  transform: translateX(-300px);
}

@media (max-width: 500px) {
  #content-body {
    padding: 20px;
  }
}
</style>