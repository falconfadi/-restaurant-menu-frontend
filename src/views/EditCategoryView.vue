<template>
  <div class="home">
  <h2>{{ category?.title }}</h2>
  <table style="border: 1px solid">
    <tr v-for="cat in subCategories">
      <td>{{cat.id}}</td>
      <td>
        <router-link :to="'/' + cat.id">{{cat.title}}</router-link>
      </td>
      <td>
        <router-link :to="'edit-category/' + cat.id">Edit</router-link>
      </td>
    </tr>
  </table>


  </div>
</template>

<script>
// @ is an alias to /src

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
  }
}
</script>
