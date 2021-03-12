<template>
  <div id="app">
    <Headers class="header"></Headers>
    <router-view/>
    <Footers class="footer"></Footers>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  margin-bottom: 100px;
}
.footer {
  margin-top: 100px;
}
</style>
