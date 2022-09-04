<template>
  <div>
    <Navbar @toggleSidebar="test"/>
    <div id="main-sidebar" class="sidebar-container">
      <h2>Sidebar Content</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate?
        Facere ducimus, autem consequatur repellat quam nam atque explicabo!
      </p>
    </div>

    <div class="button-container">
      <button id="toggle-button">Toggle</button>
    </div>

    <div id="content-body" style="color: black">
        
        ksdnclknsdcljksdncjndjsckljdcnilcjkdncjdskclnjdncj
    </div>
  </div>

  <!-- <div class="full-app">

    <Navbar/>

    <router-view class="app-body-content"/>

    <div class="bottom-spacer"></div>

    <PageFooter class="app-footer"/>

  </div> -->
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
    setTimeout(() => {
      this.setSidebar();
    }, 1000);
  },
  methods: {
    test(){
        console.log('test')
        // this.setSidebar()
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
      const content = document.querySelector('#content-body')
      content.style.transform = 'translateX(350px)'
      content.style.transition = 'transform 1s'
    },
    hideSideBar() {
      const sidebar = document.getElementById("main-sidebar");
      this.sidebarVisible = false;
      sidebar.classList.remove("show-sidebar");
      sidebar.classList.add("hide-sidebar");
      //
      const content = document.querySelector('#content-body')
      content.style.transform = 'translateX(0px)'
      content.style.transition = 'transform 1s'
    },
  },
};
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.sidebar-container {
  transform: translateX(-350px);
  position: absolute;
  background-color: #32b308;
  top: 4rem;
  left: 0;
  border: solid 1px black;
  width: 300px;
  height: 100%;
  padding: 1rem;
  box-shadow: 5px 0 8px black;
  transition: transform 1s;
  
}

/*  */
#content-body {
  /* transform: translateX(350px); */
}
/*  */

.show-sidebar {
  transform: translateX(0px);
}

.hide-sidebar {
  transform: translateX(-350px);
}



/* *{
  box-sizing: border-box;
  color:#565656;
  font-family: 'montserrat';
}
.full-app{
  background-color: #f4f4f4;
  position: relative;
}
.top-nav{
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  color:white;
  align-items: center;
}
.brand-name{
  color:#31b308;
  font-weight: bold;
}
.cursor-pointer{
  cursor: pointer;
}
.active-nav-link{
  color:#31b308 !important;
  border-bottom: 2px solid #31b308;
  padding-bottom: 5px;
}
.nav-links{
  color:black;
  text-decoration: none;
}
.app-footer{
  position: absolute;
  bottom: 0;
}
.app-body-content{
  min-height:97vh;
}
.bottom-spacer{
  height: 70px;
}

@media (max-width: 500px) {
  .top-nav{
   overflow: scroll;
  }
  .bottom-spacer{
    height: 100px;
  }
} */
</style>