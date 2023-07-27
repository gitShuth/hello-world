<template>
  <el-sub-menu v-if="data.subMenu" :index="data.routePath">
    <template #title>
      <span>{{ data.routeTitle }}</span>
    </template>
    <menuItem
      v-for="(item, index) in data.children"
      :data="item"
      :key="index"
    ></menuItem>
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="data.routePath"
    :route="{ name: data.routeName }"
  >
    <span>{{ data.routeTitle }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { MenuData } from './MenuData'

interface Props {
  data: MenuData
}
const props = defineProps<Props>()
</script>

<style scoped></style>
