<template>
  <el-calendar v-model="value"></el-calendar>
</template>

<script type="text/ecmascript-6">
import Search from "./components/Search";
import Main from "./components/Main";
export default {
  data() {
    return {
      value: new Date()
    };
  },
  methods: {
    handleClick() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
.app {
  margin: 20px;
}
</style>
