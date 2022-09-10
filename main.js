import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入 css 全局样式
// import './assets/css/main.css'

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

//使用路由
app.use(router)

//使用 ElementPlus 全局字体图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//使用 ElementPlus 国际化
app.use({
    locale: zhCn,
})

//挂载
app.mount('#app')
