<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{$store.state.count}}</button>
    <button @click="incrementAsync">{{$store.state.count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment"); //emit 都代表分发
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    }
  }
};
</script>

<style scoped>
</style>
