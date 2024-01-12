<template>
  <div class="container">
    <div class="row">
      <nav>
        <!--    <router-link to="/">Home</router-link> |-->
        <!--    <router-link to="/login">Login</router-link>-->
      </nav>
      <router-view/>
    </div>

  </div>

</template>
<script>
import axios from "axios";
export default {
  name: 'App',

  beforeMount() {

    if (this.$store.state.authToken)
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.authToken}`;
    else
      axios.defaults.headers.common['Authorization'] = ``;
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.float-left{
  float:left !important;
}
</style>
