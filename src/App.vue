<template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>路由组件的练习</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-stacked col-md-6" role="tablist">
          <li role="presentation" class="active">
            <!-- 路由连接 -->
            <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link>
            <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
          </li>
          <li role="presentation">
            <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab">About</router-link>
            <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content col-md-6">
          <!-- Home这个名字对应的是组件的标识名 -->
          <keep-alive include="Home">
            <router-view></router-view>
          </keep-alive>
          <!-- <router-view>About</router-view> -->
          <!-- <Home />
          <About />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Home from "./views/Home";
import About from "./views/About";
export default {
  components: {
    Home,
    About
  }
};
</script>

<style scoped>
</style>
