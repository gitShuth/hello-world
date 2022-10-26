import { formItemValidateStates } from 'element-plus'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          icon: false, // 是否带图标
          iconName: '', // 图标名称
          menu: false, // 是否还有子路由
          subMenu: false, // 是否为el-sub-menu菜单
          title: '我的主页' // 菜单名
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'markdown',
        name: 'Markdown',
        meta: {
          menu: true,
          subMenu: true,
          title: 'MARKDOWN'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/markdown/index.vue'),
        redirect: '/markdown/markdownEditor',
        children: [
          {
            path: 'markdownEditor',
            name: 'MarkdownEditor',
            meta: {
              menu: false,
              subMenu: false,
              title: 'EDITOR'
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ '@/views/markdown/markdownEditor/index.vue'
              )
          },
          {
            path: 'markdownPreview',
            name: 'MarkdownPreview',
            meta: {
              menu: false,
              subMenu: false,
              title: 'PREVIEW'
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ '@/views/markdown/markdownPreview/index.vue'
              )
          }
        ]
      },
      {
        path: 'mihoyoGame',
        name: 'MihoyoGame',
        meta: {
          menu: true,
          subMenu: true,
          title: 'MIHOYO'
        },
        component: () => import('@/views/mihoyoGame/index.vue'),
        children: [
          {
            path: 'genshin',
            name: 'Genshin',
            meta: {
              menu: true,
              subMenu: true,
              title: 'GENSHIN'
            },
            component: () => import('@/views/mihoyoGame/genshin/index.vue'),
            children: [
              {
                path: 'genshinRole',
                name: 'GenshinRole',
                meta: {
                  menu: false,
                  subMenu: false,
                  title: 'ROLE'
                },
                component: () =>
                  import('@/views/mihoyoGame/genshin/role/index.vue')
              },
              {
                path: 'genshinWeapons',
                name: 'GenshinWeapons',
                meta: {
                  menu: false,
                  subMenu: false,
                  title: 'WEAPONS'
                },
                component: () =>
                  import('@/views/mihoyoGame/genshin/weapons/index.vue')
              }
            ]
          },
          {
            path: 'honkai3rd',
            name: 'Honkai3rd',
            meta: {
              menu: true,
              subMenu: true,
              title: 'HONKAI3RD'
            },
            component: () => import('@/views/mihoyoGame/honkai3rd/index.vue'),
            children: [
              {
                path: 'honkaiRole',
                name: 'HonkaiRole',
                meta: {
                  menu: false,
                  subMenu: false,
                  title: 'ROLE'
                },
                component: () =>
                  import('@/views/mihoyoGame/honkai3rd/role/index.vue')
              },
              {
                path: 'honkaiWeapons',
                name: 'HonkaiWeapons',
                meta: {
                  menu: false,
                  subMenu: false,
                  title: 'WEAPONS'
                },
                component: () =>
                  import('@/views/mihoyoGame/honkai3rd/weapons/index.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
