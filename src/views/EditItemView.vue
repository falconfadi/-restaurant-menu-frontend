<template>
  <div class="home">
  <h1 class="text-center">Edit Item</h1>
    <form @submit.prevent="editItem" >
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" >
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control " id="price" v-model="price" >
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
  name: 'EditItemView',
  props: ['id'],
  data() {
    return {
      title: '',
      price:0,
      category_id:null,
      discount: null
    }
  },
  mounted(){
    axios
        .get(this.$store.state.app_url+"items/"+this.id)
        .then((response) => {
         let item=response.data.data;
          this.title=item.title;
          this.discount=item.discount;
          this.price=item.price;
          this.category_id=item.category_id;
        }).catch((err) => {
      console.log(err)
    })
  },
  methods:{
    editItem(){
      axios
          .put(this.$store.state.app_url+"items/"+this.id,{"title":this.title,"content":this.content,"discount":this.discount,"price":this.price})
          .then((response) => {
            this.$router.push("/"+this.category_id);
          }).catch((err) => {
        console.log(err)
      })
    }

  }
}
</script>
