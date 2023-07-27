<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AppAside></AppAside>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="20px">
          Copyright © 2021-2022 程序员一站式导航 京ICP备15067287号-4
          声明：网站上的服务均为第三方提供，与CXY521无关。请用户注意甄别服务质量，避免上当受骗。
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppAside from "./components/AppAside.vue";
</script>

<style lang="less" scoped>
.common-layout,
.el-container {
  height: 100%;
}
.el-aside {
  overflow-x: hidden;
}
.el-footer {
  font-size: 12px;
  text-align: center;
  line-height: 20px;
}
</style>
