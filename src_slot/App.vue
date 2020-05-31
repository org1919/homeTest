<template>
  <div>
    <Child>
      <template>我是app插入child的</template>
      <template slot="slotA">
        <p>我是app2插入child的</p>
      </template>
      <template slot="slotB" slot-scope="slotProps">
        <span v-show="isShow">√{{slotProps.list.name}}</span>
      </template>
    </Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "./components/Child";
export default {
  data() {
    return {
      isShow: true
    };
  },
  components: {
    Child
  }
};
</script>

<style scoped>
</style>
