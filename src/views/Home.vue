<template>
  <div id="home" class="home">
    <div class="profile">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="repos">
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Repositories" name="first">
            <div class="card-repos">
              <el-row v-for="o in 2" :key="o">
                <el-col :span="10" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>仓库{{o}}</span>
                      <el-button style="float: right; padding: 3px 0" type="text" @click="handlego()">>>></el-button>
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
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    handlego: function() {
      console.log("fsaf")
      this.$router.push('/repodetail')
    }
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.profile{
  flex-grow: 1;
  padding: 50px;
}
.repos {
  flex-grow: 260;
}

.repos .el-row {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}


.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  /*width: 480px;*/
}





.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>