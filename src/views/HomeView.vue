<template>
  <div class="home">
  <h1 class="text-center mt-2">{{ category?.title }}</h1>

      <div v-if="!!category && category.level < 4 && (!items || !items.length)" class="mt-4 mb-3 ">
        <router-link :to="'add-category/'+category?.id" class="btn btn-info float-right mb-2 ml-4">Add Category</router-link>
      </div>
      <div  v-if="!!subCategories && subCategories.length" class="mt-3">
      <h2 >CATEGORIES</h2>
      <table  class="table table-bordered mb-3">
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Inherited Discount</th>
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

    <div v-if="!!subCategories && !subCategories.length" class="mt-4 mb-3">
    <router-link :to="'add-item/'+category?.id" class="btn btn-info float-right mb-2">Add Item</router-link>
    </div>
    <div v-if="!!items && items.length">
      <h2 >ITEMS</h2>
      <table class="table table-bordered">
        <tr>
          <th>Title</th>
          <th>Inherited Discount</th>
          <th>Actions</th>
        </tr>
        <tr v-for="item in items">
          <td>{{item.title}}</td>
          <td>{{item.discount}}</td>
          <td>
            <router-link :to="'edit-item/' + item.id" class="btn-success btn m-1">Edit</router-link>
            <button @click="deleteItem(item.id)" class="btn-danger btn m-1">delete</button>
          </td>
        </tr>
      </table>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import $ from 'jquery';

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
    items() {
      //return this.$store.state.items ? this.$store.state.items : []
      return this.category ? (this.category.items || []) : [];
    },
  },
  mounted(){
    this.$store.dispatch('getCategoriesByUser');
   // this.$store.dispatch('getItemsByUser');

  },
  methods:{
    deleteCategory(id) {
      if (confirm("Do you really want to delete CATEGORY?")) {
        axios
            .delete(this.$store.state.app_url + "categories/" + id)
            .then((response) => {
              this.$store.dispatch('getCategoriesByUser');
            }).catch((err) => {
          console.log(err)
        })
      }
    },
    deleteItem(id) {
      if (confirm("Do you really want to delete ITEM?")) {
        axios
            .delete(this.$store.state.app_url + "items/" + id)
            .then((response) => {
              this.$store.dispatch('getCategoriesByUser');
            }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}

</script>

