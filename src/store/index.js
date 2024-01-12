import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    app_url: process.env.VUE_APP_URL,
    authToken: localStorage.getItem("auth_token") || null,
  },
  getters: {
  },
  mutations: {
    setAuthToken(state, value) {
      state.authToken = value;
      localStorage.setItem("auth_token", value);
      axios.defaults.headers.common["Authorization"] = `Bearer ${state.authToken}`;
    },
    removeAuthToken(state) {
      state.authToken = null;
      localStorage.removeItem("auth_token" );
      axios.defaults.headers.common["Authorization"] = ``;
    }
  },
  actions: {

  },
  modules: {
  }
})
