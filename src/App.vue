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
  color: #2c3e50;
  margin-top: 60px;
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
</style>
