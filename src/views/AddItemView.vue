<template>
  <div class="home">
  <h1 class="text-center">Add Item</h1>
    <form @submit.prevent="addItem">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" >
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
  name: 'AddItemView',
  props: ['id'],
  data() {
    return {
      title: '',
      content: '',
      discount: null
    }
  },
  methods:{
    addItem(){
      axios
          .post(this.$store.state.app_url+"items",{"category_id":this.id,"title":this.title,"discount":this.discount})
          .then((response) => {
            this.$router.push("/"+this.id);
          }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
