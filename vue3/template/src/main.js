import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/request/header'
import '@/request/request'
import '@/api/appApi'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { getToken } from '@/utils/auth'
import { refreshToken } from '@/request/refreshToken'

const app = createApp(App)

// 导入SvgIcon组件
import SvgIcon from '@/components/SvgIcon/index.vue'
const req = require.context('@/icons/svg', false, /\.svg$/)
req.keys().map(req)
app.component('svg-icon', SvgIcon)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

// 前置路由守卫
router.beforeEach((to, from, next) => {
    if (new Date().getTime() - getToken('tokenTime') > 10 * 60 * 1000) {
        // 超过10分钟 重新请求一次token
        refreshToken()
    }
    next()
})


/* 
后置路由守卫
路由跳转除了 '/login', '/404'
采用 store.commit('index/tabsListValueSyn', '路由地址')
激活标签页，触发标签页事件跳转页面，避免多次跳转
 */
router.afterEach((to, from) => {
    let noList = ['/login', '/404']
    if (noList.indexOf(to.path) === -1) {
        // 添加标签栏
        store.dispatch("index/tabsListAdd", {
                title: to.name,
                name: to.path,
            })
            // 改变标签栏选中 激活项
        store.commit('index/tabsListValueSyn', to.path)
            // 改变导航栏选中 激活项
        store.dispatch('index/activeIndexModify', to.path.substring(1))
    }
})