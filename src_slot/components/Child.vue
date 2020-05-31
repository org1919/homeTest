<template>
  <div>
    <p>我是一个普通的p标签</p>
    <slot></slot>
    <slot name="slotA">aa</slot>
    <ul>
      <li v-for="(list, index) in lists" :key="list.id" :index="index">
        <slot name="slotB" :list="list">{{list.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      lists: [
        { id: 1, name: "zhaoliying", age: 33 },
        { id: 2, name: "qiwei", age: 31 },
        { id: 3, name: "yangmi", age: 23 }
      ]
    };
  }
};
</script>

<style scoped>
</style>
