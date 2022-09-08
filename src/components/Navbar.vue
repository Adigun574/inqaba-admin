<template>
  <div>
    <!-- <nav class="navbar"> -->
    <div class="p-4 pt-3">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex">
          <p
            @click="toggleSidebar()"
            id="toggle-button"
            class="cursor-pointer toggle-btn-icon"
            style="font-size: 20px"
          >
            <i class="fa fa-bars"></i>
          </p>
          <div class="d-flex brand-name-img">
            <img src="../assets/inqaba_logo_round.png" height="50px" />
            <h6
              class="brand-name-lg"
              style="margin-left: 20px; font-weight: bolder"
            >
              SANGER SEQUENCING<br />
              INFORMATION FORM
            </h6>
            <h6
              class="brand-name-sm"
              style="margin-left: 20px; font-weight: bolder"
            >
              SANGER SEQUENCING INFORMATION FORM
            </h6>
          </div>
          <h5 class="page-name">Dashboard</h5>
        </div>

        <div class="profile-menu-lg">
          <div class="d-flex cursor-pointer mr-4">
            <img
              class="profile-img"
              src="../assets/scientist.jpg"
              height="35px"
              width="35px"
              style="border-radius: 50%"
            />
            <p class="profile-name">John Doe</p>
            <p class="profile-caret"><i class="fa fa-caret-down"></i></p>
          </div>
        </div>

        <div class="profile-menu-sm">
          <div class="d-flex cursor-pointer mr-4 align-items-center">
            <img
              class="profile-img"
              src="../assets/scientist.jpg"
              height="20px"
              width="20px"
              style="border-radius: 50%"
            />
            <p class="profile-name">John Doe</p>
            <p class="profile-caret"><i class="fa fa-caret-down"></i></p>
          </div>
        </div>
      </div>
    </div>
    <!-- </nav> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: localStorage.getItem("inqaba-user"),
    };
  },
  created() {},
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar", null);
    },
    closeHamburgerNav() {},
    logout() {
      this.$router.push("/");
      localStorage.removeItem("inqaba-user");
      localStorage.removeItem("inqaba-token");
      if (this.$route.fullPath == "/") {
        console.log("yes");
        // this.$forceUpdate()
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.brand-name {
  /* color: #31b308;
  font-weight: bold;
  position: relative;
  top: 5px; */
}
.brand-name-lg{
    display: block;
    color: #31b308;
  font-weight: bold;
  position: relative;
  top: 5px;
}
.brand-name-sm{
    display: none;
}
.brand-name-img {
  margin-right: 50px;
}
.toggle-btn-icon {
  margin-right: 20px;
  position: relative;
  top: 10px;
}
.page-name {
  position: relative;
  top: 10px;
}
.profile-menu {
  margin-right: 50px;
}
.profile-name {
  margin-right: 10px;
  margin-left: 10px;
  position: relative;
  top: 5px;
}
.profile-caret {
  position: relative;
  top: 5px;
}
.profile-menu-lg {
  display: block;
}
.profile-menu-sm {
  display: none;
}

@media (max-width: 600px) {
  .page-name {
    display: none;
  }
  .brand-name {
    /* font-size: 5px; */
  }
  .brand-name-lg{
        display: none;
    }
    .brand-name-sm{
        display: block;
        color: #31b308;
  font-weight: bold;
  position: relative;
  top: 15px;
    font-size: 10px;
    }
  .brand-name-img {
    margin-right: 10px;
  }
  .profile-menu-sm {
    display: block;
  }
  .profile-menu-lg {
    display: none;
  }
    .profile-name {
        font-size: 10px;
        line-height: 10px;
        text-align: center;
    }
}
</style>