<template>
  <div id="noe-code">
    <div class="options">
      <div class="branch">
        <div class="branchs">
          <el-dropdown>
            <el-button type="primary">
              main<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>main</el-dropdown-item>
              <el-dropdown-item>master</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="cur-branch"></div>
      </div>
      <div class="curd">
        <div class="add">
          <el-dropdown>
            <el-button type="primary">
              Add file<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Create new file</el-dropdown-item>
              <el-dropdown-item>Upload new file</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="download">
          <el-popover
                  placement="top"
                  width="160"
                  v-model="visible">
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-bottom">Code</el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="head-info">
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <p>knoxnoe Merge pull request #1 from abigaier/main</p>
            </div>
          </el-col>
          <el-col :span="8"><div class="grid-content"></div></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p>22 hours ago Git stats 5 commits</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="files-list">
        <ul>
          <li v-for="o in 6" v-bind:key="o">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple">
                <i class="el-icon-folder"></i>
                <a href="">filename {{o}}</a>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light">
                <p>commit info</p>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>22 hours</p>
              </div></el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

.options {
  display: flex;
  justify-content: space-between;
}

.curd {
  display: flex;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


{

}
</style>