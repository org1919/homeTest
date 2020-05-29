<template>
  <li :class="myClass" @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)">
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object,
    index: Number,
    updateOne: Function,
    deleteTodo: Function
  },
  data() {
    return {
      isShow: false,
      myClass: "leaveItem"
    };
  },
  computed: {
    isChecked: {
      get() {
        return this.todo.isOver;
      },
      set(val) {
        this.updateOne(this.index, val);
      }
    }
  },
  methods: {
    handlerItem(flag) {
      flag ? (this.myClass = "enterItem") : (this.myClass = "leaveItem");
      this.isShow = !this.isShow;
    },
    deleteT() {
      this.deleteTodo(this.index);
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.enterItem {
  background: #ddd;
}
.leaveItem {
  background: #ffffff;
}
</style>
