<template>
  <div class="noe-header">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff">
      <el-menu-item index="1">
        <a href="/main">首页</a>
      </el-menu-item>
      <el-menu-item index="2">发现</el-menu-item>
      <el-menu-item index="3">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>
      <el-menu-item v-if=isLogin index="3"><a href="/login">登陆</a>/<a href="/register">注册</a></el-menu-item>
      <el-menu-item v-if=!isLogin index="4">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus" command="a">slot</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus" command="a">个人主页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline" command="a">修改密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check" command="a">设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check" command="t">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Headers",
  data() {
    return {
      activeIndex: '1',
      input: '',
      isLogin: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      //this.$message('click on item ' + command);
      if(command == 't') {
        this.isLogin = true
      }
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
</style>