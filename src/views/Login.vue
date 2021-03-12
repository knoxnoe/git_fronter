<template>
  <div id="login">
    <div class="login-input">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">用户名</template>
      </el-input>
    </div>
    <div class="login-input">
      <el-input placeholder="请输入密码" v-model="input" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <el-button type="primary">登陆</el-button>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.login-input {
  margin: 20px 0px;

}
.el-input {
  width: 400px;
}
</style>