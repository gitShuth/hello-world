import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// markdown 编辑器组件
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'

VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

// markdown 预览组件
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

// element-plus UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 使用element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: '3000' })
app.use(VueMarkdownEditor)
app.use(VMdPreview)

app.mount('#app')

// createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
