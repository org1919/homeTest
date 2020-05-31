<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add :addComments="addComments" /> -->
      <Add ref="add" />
      <!-- <Add @addComments="addComments" /> -->
      <List :comments="comments" :deleteComments="deleteComments" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "@/components/Add";
import List from "@/components/List";
export default {
  components: {
    Add,
    List
  },
  mounted() {
    this.$refs.add.$on("addComments", this.addComments);
  },
  data() {
    return {
      comments: [
        { id: 1, username: "张三", text: "vue挺好的" },
        { id: 2, username: "李四", text: "vue不错的呦" },
        { id: 3, username: "王五", text: "vue太棒了" }
      ]
    };
  },
  methods: {
    addComments(obj) {
      this.comments.unshift(obj);
    },
    deleteComments(index) {
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
