<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/header/Header.vue";
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
