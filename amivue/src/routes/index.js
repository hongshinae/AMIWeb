import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/pages/Home.vue";
import DashboardLayout from "@/pages/Layout/MainLayout";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		redirect: "/dashboard",
		component: DashboardLayout,
		children: [
			{
				path: "dashboard",
				name: "Dashboard",
				component: () => import(/* webpackChunkName: "about" */ "@/pages/Dashboard")
			},
			{
				path: "about",
				name: "About",
				component: () => import(/* webpackChunkName: "about" */ "@/pages/About")
			}
		]
	}
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	component: () => import(/* webpackChunkName: "about" */ "@/pages/About.vue")
	// }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkExactActiveClass: "nav-item active" // 클릭시 삽입할 class
});

export default router;
