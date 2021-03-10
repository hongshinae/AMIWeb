import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "@/pages/Layout/MainLayout";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		redirect: "/dashboard",
		component: MainLayout,
		children: [
			{
				path: "dashboard",
				name: "Dashboard",
				component: () => import("@/pages/Dashboard")
			},
			// 설비
			{
				path: "estate",
				name: "Estate",
				component: () => import("@/pages/Menu/Device/Estate")
			},
			{
				path: "building",
				name: "Building",
				component: () => import("@/pages/Menu/Device/Building")
			},
			{
				path: "equipment",
				name: "Equipment",
				component: () => import("@/pages/Menu/Device/Equipment")
			},
			{
				path: "mapping",
				name: "Mapping",
				component: () => import("@/pages/Menu/Device/Mapping")
			},
			{
				path: "network",
				name: "Network",
				component: () => import("@/pages/Menu/Device/Network")
			},
			{
				path: "nms",
				name: "NMS",
				component: () => import("@/pages/Menu/Device/NMS")
			},
			{
				path: "server",
				name: "Server",
				component: () => import("@/pages/Menu/Device/Server")
			},
			// 검침
			{
				path: "mBoard",
				name: "MBoard",
				component: () => import("@/pages/Menu/Metering/MBoard")
			},
			{
				path: "lookup",
				name: "Lookup",
				component: () => import("@/pages/Menu/Metering/Lookup")
			},
			{
				path: "info",
				name: "Info",
				component: () => import("@/pages/Menu/Metering/Info")
			},
			{
				path: "regular",
				name: "Regular",
				component: () => import("@/pages/Menu/Metering/Regular")
			},
			// 장애
			{
				path: "fBoard",
				name: "FBoard",
				component: () => import("@/pages/Menu/Failure/FBoard")
			},
			{
				path: "code",
				name: "Code",
				component: () => import("@/pages/Menu/Failure/Code")
			},
			{
				path: "status",
				name: "Status",
				component: () => import("@/pages/Menu/Failure/Status")
			},
			{
				path: "reading",
				name: "Reading",
				component: () => import("@/pages/Menu/Failure/Reading")
			},
			// 고객 지원
			{
				path: "ask",
				name: "Ask",
				component: () => import("@/pages/Menu/Support/Ask")
			},
			{
				path: "qna",
				name: "QnA",
				component: () => import("@/pages/Menu/Support/QnA")
			}
		]
	},
	{
		path: "/mainDashboard",
		name: "MainDashboard",
		component: () => import("@/pages/Dashboard")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/pages/Login"),
		meta: { unauthorized: true }
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	saveScrollPosition: true,
	routes,
	// linkActiveClass: "active",
	linkExactActiveClass: "on" // 클릭시 삽입할 class
});

router.beforeEach(async (to, from, next) => {
	if (store.state.loginStore.accessToken && !store.state.loginStore.accessToken) {
		// await refreshToken();	// 나중에 수정해야함
	}

	if (to.matched.some(record => record.meta.unauthorized) || store.state.loginStore.accessToken) {
		return next();
	}

	alert("로그인 해주세요");
	return next("/login");
});

export default router;
