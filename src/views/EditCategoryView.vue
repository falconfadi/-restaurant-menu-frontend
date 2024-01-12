<template>
  <div class="home">
  <h2 class="text-center">Edit Category</h2>
    <form @submit.prevent="editcategory" >
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
        <input type="text" class="form-control" id="discount" v-model="discount" >
      </div>
      <div class="form-group">
        <input type="submit" class="form-control btn btn-success mt-2"  value="Edit" >
      </div>
    </form>


  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'EditCategoryView',
  props: ['id'],
  data() {
    return {
      title: '',
      content: '',
      main_id:null,
      discount: null
    }
  },
  mounted(){
    axios
        .get(this.$store.state.app_url+"categories/"+this.id)
        .then((response) => {
         let category=response.data.data;
          this.title=category.title;
          this.content=category.content;
          this.discount=category.discount;
          this.main_id=category.main_id;
        }).catch((err) => {
      console.log(err)
    })
  },
  methods:{
    editcategory(){
      axios
          .put(this.$store.state.app_url+"categories/"+this.id,{"title":this.title,"content":this.content,"discount":this.discount})
          .then((response) => {
            this.$router.push("/"+this.main_id);
          }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
