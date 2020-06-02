<template>
  <div class="row">
    <h2 v-if="isFirt">请初始化发送请求</h2>
    <h2 v-else-if="isLoading">正在初始化发送请求中........</h2>
    <h2 v-else-if="errMsg">请求错误:{{errMsg}},请重新发送</h2>
    <div v-else class="card" v-for="(user, index) in users" :key="user.name" :index="index">
      <a :href="user.user_url" target="_blank">
        <img :src="user.user_img" style="width: 100px" />
      </a>
      <p class="card-text">{{user.user_name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isFirt", "isLoading", "errMsg", "users"])
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
