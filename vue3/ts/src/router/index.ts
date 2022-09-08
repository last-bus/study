import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "@/views/login/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'home',
		component: HomeView
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
