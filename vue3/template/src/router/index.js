import { createRouter, createWebHashHistory } from 'vue-router'
import Navigation from '@/components/navigation'

const routes = [{
        path: '/',
        redirect: '/index',
        hidden: true,
    },
    {
        path: '/index',
        name: 'index',
        component: Navigation,
        hidden: true,
        children: [{
            path: '',
            name: '首页',
            component: () =>
                import ('@/views/index/index')
        }, ]
    },
    {
        path: '/profile',
        name: 'profile',
        component: Navigation,
        hidden: true,
        children: [{
            path: '',
            name: '修改密码',
            component: () =>
                import ('@/views/profile/index')
        }, ]
    },

    {
        path: '/gatehouse',
        name: 'gatehouse',
        component: Navigation,
        hidden: true,
        children: [{
            path: 'index',
            name: '门楼牌管理',
            component: () =>
                import ('@/views/gatehouse/index')
        }, {
            path: 'examine',
            name: '门楼牌审核管理',
            component: () =>
                import ('@/views/gatehouse/examine')
        }, ]
    },


    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () =>
            import ('@/views/login/index')

    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router