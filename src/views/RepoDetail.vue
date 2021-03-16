<template>
  <div id="repo-detail">
    <div class="head">
      <div class="repo-name">
        <el-container>
          <i class="el-icon-delete"></i>
          <el-container icon="el-icon-search">knoxnoe/仓库1</el-container>
        </el-container>
      </div>
      <div class="info">
        <el-container>
          <i class="el-icon-delete"></i>
          <el-container icon="el-icon-search">UnWatch</el-container>
          <i class="el-icon-share"></i>
          <el-container icon="el-icon-search">Star</el-container>
          <i class="el-icon-share"></i>
          <el-container icon="el-icon-search">fork</el-container>
        </el-container>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Code" name="first">
          <Code></Code>
        </el-tab-pane>
        <el-tab-pane label="Issues" name="second"></el-tab-pane>
        <el-tab-pane label="Pull requests" name="third"></el-tab-pane>
        <el-tab-pane label="Settings" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Code from '@/components/RepoDetail/Code.vue'
export default {
    name: 'RepoDetail',
    components: {
        Code
    }
}

</script>

<style scoped>
#repo-detail {
  padding: 0 50px;
}

.head {
  display: flex;
  justify-content: space-between;
}
</style>