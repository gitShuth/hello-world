<template>
  <el-menu
    :default-active="selected"
    class="el-menu-vertical-demo"
    :router="true">
    <menuItem
      v-for="(item, index) in menuList"
      :data="item"
      :key="index"></menuItem>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'
import menuItem from './menuItem.vue'
import { MenuData } from './MenuData'

const router = useRouter()
const route = useRoute()
const menuList = ref<MenuData[]>([])
const selected = ref<string>('')

const routes = router
  .getRoutes()
  .find((item) => item.name === 'Index')?.children

const buildNav = (routes: RouteRecordRaw[] = []): MenuData[] => {
  const result: MenuData[] = []
  for (const route of routes) {
    const { path, name, meta = {}, children = [] } = route
    const { icon, iconName, menu, subMenu, title } = meta
    if (menu) {
      result.push({
        routePath: path,
        routeName: name as string,
        subMenu: subMenu as boolean,
        routeTitle: title as string,
        routeIcon: icon as boolean,
        IconName: iconName as string,
        children: buildNav(children)
      })
    }
  }
  return result
}
menuList.value = buildNav(routes)

function findRoute(menu: MenuData[], Fn: Function) {
  const routeArr = route.path.split('/').filter((val) => val !== '')
  for (let i: number = 0; i < routeArr.length; i++) {
    if (Fn(menu, routeArr[i])) return
  }
}
watch(
  () => route.fullPath,
  () => findRoute(menuList.value, findFn),
  {
    deep: true,
    immediate: true
  }
)

function findFn(menu: MenuData[], routePath: string) {
  menu.forEach((item) => {
    if (item.routePath === routePath && item.subMenu === false) {
      selected.value = item.routePath
      return true
    } else {
      findFn(item.children, routePath)
    }
  })
}
</script>

<style lang="less" scoped></style>
