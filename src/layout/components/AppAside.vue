<template>
  <el-menu
    :default-active="selected"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <template v-for="(item, index) in menuList" :key="index">
      <el-sub-menu v-if="item.meta?.subMenu" :index="item.path">
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
        <template v-for="(item1, index1) in item.children" :key="index1">
          <el-sub-menu v-if="item1.meta?.subMenu" :index="item1.path">
            <template #title>
              <span>{{ item1.meta?.title }}</span>
            </template>
            <template v-for="(item2, index1) in item1.children" :key="index1">
              <el-sub-menu v-if="item2.meta?.subMenu" :index="item2.path">
                <template #title>
                  <span>{{ item2.meta?.title }}</span>
                </template>
              </el-sub-menu>
              <el-menu-item
                v-else
                :index="item2.path"
                :route="{ name: item2.name }"
              >
                <span>{{ item2.meta?.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item
            v-else
            :index="item1.path"
            :route="{ name: item1.name }"
          >
            <span>{{ item1.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :route="{ name: item.name }">
        <span>{{ item.meta?.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selected = computed(() => {
  const routeArr = route.path.split('/').filter((val) => val !== '')
  return routeArr[routeArr.length - 1]
})

const menuList = ref<RouteRecordRaw[]>()
menuList.value = router
  .getRoutes()
  .find((item) => item.name === 'Index')?.children

console.log(333333, menuList.value)
// console.log(444444, route.path)

// const handleOpen = (key: string, keyPath: string[]) => {
//   // console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   // console.log(key, keyPath)
// }
// const handleSelect = (key: string, keyPath: string[]) => {
//   selected.value = key
// }
</script>

<style lang="less" scoped></style>
