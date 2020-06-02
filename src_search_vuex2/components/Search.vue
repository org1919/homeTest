<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="content" type="text" placeholder="enter the name you search" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchFor", this.content);
    }
  }
};
</script>

<style scoped>
</style>
