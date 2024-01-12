import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    app_url: process.env.VUE_APP_URL,
    authToken: localStorage.getItem("auth_token") || null,
    categories : []
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
    },
    setCategories(state, value) {
      state.categories = value;
    }
  },
  actions: {
    getCategoriesByUser({state, commit }) {
      axios
          .get(state.app_url + 'categories')
          .then((response) => {
            console.log(response.data.data)
            commit('setCategories', response.data.data);
          }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
