<template>
  <div id="repo-detail">
    <div class="head">

    </div>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Repositories" name="first">
          <div class="card-repos">
            <el-row v-for="o in 2" :key="o">
              <el-col :span="10" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>仓库{{o}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Overview" name="second"></el-tab-pane>
        <el-tab-pane label="Projects" name="third"></el-tab-pane>
        <el-tab-pane label="Packages" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'RepoDetail',
  }
</script>

<style scoped>

</style>