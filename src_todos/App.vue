<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <Main :todos="todos" :updateOne="updateOne" :deleteTodo="deleteTodo" />
      <!-- <Footer :todos="todos" :updataAllT="updataAllT" :deleteAllT="deleteAllT" /> -->
      <Footer :todos="todos" :updataAllT="updataAllT" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_keys")) || []
    };
  },
  mounted() {
    this.$bus.$on("deleteAllT", this.deleteAllT);
  },
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    updateOne(index, val) {
      this.todos[index].isOver = val;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    updataAllT(val) {
      this.todos.forEach(item => (item.isOver = val));
    },
    deleteAllT() {
      this.todos = this.todos.filter(item => item.isOver === false);
    }
  },
  watch: {
    // todos(newVal, oldVal) {
    //   localStorage.setItem("todos_keys", JSON.stringify(newVal));
    // }
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("todos_keys", JSON.stringify(newVal));
      }
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
