<template>
    <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

*{
  color: #565656;
}


/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #f1f1f1; */
  background-color: white;
  padding: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #32B308;
  border-radius: 5px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555;
} */

.order-tab-nav{
  background-color: white !important;
  color: #8C8C8C !important;
  border-bottom: 2px solid #BDBDBD !important;
}
.active-nav-header{
  border: none !important;
  border-bottom: 2px solid #32B308 !important;
  font-weight: bolder !important;
}
.nav-justified .nav-item .nav-link{
  color: #BDBDBD;
}
</style>
