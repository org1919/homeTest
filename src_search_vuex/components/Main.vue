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
// import axios from "axios";
// import Vue from "vue";
// import VueResource from "vue-resource";
// Vue.use(VueResource);

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  // computed: {
  //   ...mapGetters(["isLoading", "isFirt", "errMsg", "users"])
  // },
  computed: mapGetters(["isLoading", "isFirt", "errMsg", "users"]),
  methods: {
    // async searchFor(content) {
    //   this.isFirt = false;
    //   this.isLoading = true;
    //   try {
    //     let response = await this.$http({
    //       method: "GET",
    //       url: "https://api.github.com/search/users",
    //       params: {
    //         q: content
    //       }
    //     });
    //     this.isLoading = false;
    //     // console.log(response.data.items);
    //     console.log(response.data);
    //     response.data.items.forEach(item => {
    //       let user_name = item.login;
    //       let user_img = item.avatar_url;
    //       let user_url = item.url;
    //       let obj = {
    //         user_name,
    //         user_img,
    //         user_url
    //       };
    //       this.users.push(obj);
    //     });
    //   } catch (error) {
    //     this.errMsg = error.message;
    //     this.isLoading = false;
    //   }
    // }
    //1---------------------------------------------------------
    // searchFor(content) {
    //   this.isFirt = false;
    //   this.isLoading = true;
    //   this.$http({
    //     method: "GET",
    //     url: "https://api.github.com/search/users",
    //     params: {
    //       q: content
    //     }
    //   })
    //     .then(response => {
    //       this.isLoading = false;
    //       console.log(response.data.items);
    //       response.data.items.forEach(item => {
    //         let user_name = item.login;
    //         let user_img = item.avatar_url;
    //         let user_url = item.url;
    //         let obj = {
    //           user_name,
    //           user_img,
    //           user_url
    //         };
    //         this.users.push(obj);
    //       });
    //     })
    //     .catch(error => {
    //       this.errMsg = error.message;
    //       this.isLoading = false;
    //     });
    // }
    //2-------------------------------------------------------
    // searchFor(content) {
    //   this.isFirt = false;
    //   this.isLoading = true;
    //   axios({
    //     method: "GET",
    //     url: "https://api.github.com/search/users",
    //     params: {
    //       q: content
    //     }
    //   })
    //     .then(response => {
    //       this.isLoading = false;
    //       console.log(response.data.items);
    //       response.data.items.forEach(item => {
    //         let user_name = item.login;
    //         let user_img = item.avatar_url;
    //         let user_url = item.url;
    //         let obj = {
    //           user_name,
    //           user_img,
    //           user_url
    //         };
    //         this.users.push(obj);
    //       });
    //     })
    //     .catch(error => {
    //       this.errMsg = error.message;
    //       this.isLoading = false;
    //     });
    // }
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
