import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    meta: {
      icon: false,
      iconName: '',
      title: '首页'
    },
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
          menu: true,
          subMenu: false, // 是否为el-sub-menu菜单
          title: '我的主页' // 菜单名
        },
        component: () => import('@/views/home/index.vue'),
        redirect: '/home/page2',
        children: [
          {
            path: 'page1',
            name: 'Page1',
            meta: {
              menu: false,
              subMenu: false
            },
            component: () => import('@/views/home/page1/index.vue')
          },
          {
            path: 'page2',
            name: 'Page2',
            meta: {
              menu: false,
              subMenu: false
            },
            component: () => import('@/views/home/page2/index.vue')
          }
        ]
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
        children: [
          {
            path: 'markdownEditor',
            name: 'MarkdownEditor',
            meta: {
              menu: true,
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
              menu: true,
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
                  menu: true,
                  subMenu: false,
                  title: 'ROLE'
                },
                component: () =>
                  import('@/views/mihoyoGame/genshin/role/index.vue'),
                redirect: '/mihoyoGame/genshin/genshinRole/qiqi',
                children: [
                  {
                    path: 'qiqi',
                    name: 'QiQi',
                    meta: {
                      menu: false
                    },
                    component: () =>
                      import('@/views/mihoyoGame/genshin/role/qiqi/index.vue')
                  },
                  {
                    path: 'keqin',
                    name: 'KeQin',
                    meta: {
                      menu: false
                    },
                    component: () =>
                      import('@/views/mihoyoGame/genshin/role/keqin/index.vue')
                  }
                ]
              },
              {
                path: 'genshinWeapons',
                name: 'GenshinWeapons',
                meta: {
                  menu: true,
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
                  menu: true,
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
                  menu: true,
                  subMenu: false,
                  title: 'WEAPONS'
                },
                component: () =>
                  import('@/views/mihoyoGame/honkai3rd/weapons/index.vue')
              }
            ]
          },
          {
            path: 'overview',
            name: 'Overview',
            meta: {
              menu: true,
              subMenu: false,
              title: 'OVERVIEW'
            },
            component: () => import('@/views/mihoyoGame/overview/index.vue')
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
