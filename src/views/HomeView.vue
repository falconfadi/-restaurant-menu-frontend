<template>
  <div class="home">
  <h2>{{ category?.title }}</h2>
    <div  v-if="!!subCategories && subCategories.length">
      <router-link :to="'add-category/'+category?.id" class="btn btn-info float-left mb-2">Add Category</router-link>
      <table  class="table table-bordered mb-3">
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Discount</th>
          <th>Actions</th>
        </tr>
        <tr v-for="cat in subCategories">
          <td>
            <router-link :to="'/' + cat.id">{{cat.title}}</router-link>
          </td>
          <td>
            {{cat.content}}
          </td>
          <td>
            {{cat.discount}}
          </td>
          <td>
            <router-link :to="'edit-category/' + cat.id" class="btn-success btn m-1">Edit</router-link>

            <button @click="deleteCategory(cat.id)" class="btn-danger btn m-1">delete</button>
          </td>
        </tr>
      </table>
    </div>

    <div>
      <router-link :to="'add-category/'+category?.id" class="btn btn-info float-left mb-2">Add Item</router-link>
      <table class="table table-bordered">
        <tr v-for="cat in subCategories">
          <td>{{cat.id}}</td>
          <td>
            <router-link :to="'/' + cat.id">{{cat.title}}</router-link>
          </td>
          <td>
            <router-link :to="'edit-category/' + cat.id">Edit</router-link>
          </td>
          <td>
            <button @click="deleteCategory(cat.id)" >delete</button>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'HomeView',
  props: ['id'],
  computed: {
    category() {
      return this.id ? this.$store.state.categories.find((a) => (a.id == this.id)) : null;
    },
    subCategories() {
      return this.$store.state.categories.filter((a) => a.main_id == (this.id || null));
    },
  },
  mounted(){
    this.$store.dispatch('getCategoriesByUser');
  },
  methods:{
    deleteCategory(id){
      axios
          .delete(this.$store.state.app_url+"categories/"+id)
          .then((response) => {
            this.$store.dispatch('getCategoriesByUser');
          }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

