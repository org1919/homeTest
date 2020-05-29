<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{finishedT}}</span>
      / 全部{{allT}}
    </span>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todos: Array,
    updataAllT: Function
    // deleteAllT: Function
  },
  computed: {
    finishedT() {
      return this.todos.filter(item => item.isOver).length;
    },
    allT() {
      return this.todos.length;
    },
    isChecked: {
      get() {
        return this.finishedT === this.allT && this.allT !== 0;
      },
      set(val) {
        this.updataAllT(val);
      }
    }
  },
  methods: {
    deleteAll() {
      // this.deleteAllT();
      this.$bus.$emit("deleteAllT");
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
