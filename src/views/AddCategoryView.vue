<template>
  <div class="home">
  <h2 class="text-center">Add Category</h2>
    <form @submit.prevent="addcategory">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" >
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" class="form-control" id="content" v-model="content" >
      </div>
      <div class="form-group">
        <label for="discount">Discount</label>
        <input type="text" class="form-control " id="discount" v-model="discount" >
      </div>
      <div class="form-group">
        <input type="submit" class="form-control btn btn-info mt-2"  value="Add" >
      </div>
    </form>


  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'AddCategoryView',
  props: ['id'],
  data() {
    return {
      title: '',
      content: '',
      discount: null
    }
  },
  methods:{
    addcategory(){
      axios
          .post(this.$store.state.app_url+"categories",{"main_id":this.id,"title":this.title,"content":this.content,"discount":this.discount})
          .then((response) => {
            this.$router.push("/"+this.id);
          }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
