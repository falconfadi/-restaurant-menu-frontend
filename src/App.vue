<template>
  <div class="container">
    <div class="row">

      <nav class="navbar navbar-expand-lg navbar-light bg-light pr-50 pl-50" v-if="this.$store.state.authToken">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto float-right">
            <li class="nav-item active">
              <router-link :to="'/'" class="nav-link ">Home</router-link>
            </li>
            <li class="nav-item">
              <button @click="logout" class="nav-link">Logout</button>
            </li>

          </ul>

        </div>
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
  methods:{
    logout(){
      //this.$store.state.
      this.$store.commit('removeAuthToken');
      this.$router.push("login/");
      console.log('Logging out');
    }
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
.float-right{
  float:right !important;
}
.pr-50{
  padding-right: 50px;
}
.pl-50{
  padding-left: 50px !important;
}
.ml-4{
  margin-left: 25px;
}
</style>
