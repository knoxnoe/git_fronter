<template>
  <div class="noe-header">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">发现</el-menu-item>
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-menu-item index="3"><a href="">登陆</a>/<a href="https://www.ele.me" target="_blank">注册</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-demo{
  padding: 0 20px;
}
.el-menu-demo li:last-child{
  float: right;
}
.input-with-select {
  width: 30%;
  margin-top: 10px;
  margin-left: -35%;
}
</style>