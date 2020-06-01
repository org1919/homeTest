<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  // data() {
  //   return {};
  // },

  // methods: {
  //   increment() {
  //     // 可以直接commit的就不用dispatch
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   },
  //   incrementIfOdd() {
  //     this.$store.dispatch("incrementIfOdd");
  //   },
  //   incrementAsync() {
  //     this.$store.dispatch("incrementAsync");
  //   }
  // },

  methods: {
    // increment() {
    //   // 可以直接commit的就不用dispatch
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    // },

    ...mapMutations(["increment", "decrement"]),
    //会返回一个对象{increment:function increment(){},
    // decrement:function decrement(){}}

    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // }
    ...mapActions(["incrementIfOdd", "incrementAsync"])
  },

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["currentCount"])
    // count() {
    //   return this.$store.getters.currentCount;
    // }
  }
};
</script>

<style scoped>
</style>
