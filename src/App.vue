<template>
  <div id="app">
    <headers class="header"></headers>
    <router-view class="main"/>
    <footers class="footer"></footers>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Headers from "@/components/headers/Headers.vue";
import Footers from "@/components/footers/Footers.vue";
export default {
  name: 'app',
  components: {
    Headers,
    Footers
  }
}
</script>

<style>
/*全局样式*/
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
