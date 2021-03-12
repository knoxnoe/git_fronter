<template>
  <div id="register">
    <div class="reg-input">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">用户名</template>
      </el-input>
    </div>
    <div class="reg-input">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">账号</template>
      </el-input>
    </div>
    <div class="reg-input">
      <el-input placeholder="请输入密码" v-model="input" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div class="reg-input">
      <el-input placeholder="请输入密码" v-model="input" show-password>
        <template slot="prepend">确认密码</template>
      </el-input>
    </div>
    <el-button type="primary">注册</el-button>
  </div>
</template>

<script>
export default {
name: "register"
}
</script>

<style scoped>
.reg-input {
  margin: 20px 0px;

}
.el-input {
  width: 400px;
}
/*.input-with-select .el-input-group__prepend {*/
/*  background-color: #fff;*/
/*}*/
</style>