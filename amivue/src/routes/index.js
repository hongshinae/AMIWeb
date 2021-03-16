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
				component: () => import("@/pages/Menu/Device/Estate"),
				meta: { theme: "theme_white" }
			},
			{
				path: "building",
				name: "Building",
				component: () => import("@/pages/Menu/Device/Building"),
				meta: { theme: "theme_white" }
			},
			{
				path: "equipment",
				name: "Equipment",
				component: () => import("@/pages/Menu/Device/Equipment"),
				meta: { theme: "theme_white" },
				children: [
					{
						path: "dcu",
						name: "EquipmentDcu",
						component: () => import("@/pages/Menu/Device/Equipment/Dcu")
					},
					{
						path: "meter",
						name: "EquipmentMeter",
						component: () => import("@/pages/Menu/Device/Equipment/Meter")
					},
					{
						path: "etc",
						name: "EquipmentEtc",
						component: () => import("@/pages/Menu/Device/Equipment/Etc")
					}
				]
			},
			{
				path: "mapping",
				name: "Mapping",
				component: () => import("@/pages/Menu/Device/Mapping"),
				meta: { theme: "theme_white" }
			},
			{
				path: "network",
				name: "Network",
				component: () => import("@/pages/Menu/Device/Network"),
				meta: { theme: "theme_white" }
			},
			{
				path: "nms",
				name: "NMS",
				component: () => import("@/pages/Menu/Device/NMS"),
				meta: { theme: "theme_white" }
			},
			{
				path: "server",
				name: "Server",
				component: () => import("@/pages/Menu/Device/Server"),
				meta: { theme: "theme_white" }
			},
			// 검침
			{
				path: "mBoard",
				name: "MBoard",
				component: () => import("@/pages/Menu/Metering/MBoard"),
				meta: { theme: "theme_white" }
			},
			{
				path: "lookup",
				name: "Lookup",
				component: () => import("@/pages/Menu/Metering/Lookup"),
				meta: { theme: "theme_white" }
			},
			{
				path: "info",
				name: "Info",
				component: () => import("@/pages/Menu/Metering/Info"),
				meta: { theme: "theme_white" }
			},
			{
				path: "regular",
				name: "Regular",
				component: () => import("@/pages/Menu/Metering/Regular"),
				meta: { theme: "theme_white" }
			},
			// 장애
			{
				path: "fBoard",
				name: "FBoard",
				component: () => import("@/pages/Menu/Failure/FBoard"),
				meta: { theme: "theme_white" }
			},
			{
				path: "code",
				name: "Code",
				component: () => import("@/pages/Menu/Failure/Code"),
				meta: { theme: "theme_white" }
			},
			{
				path: "status",
				name: "Status",
				component: () => import("@/pages/Menu/Failure/Status"),
				meta: { theme: "theme_white" }
			},
			{
				path: "reading",
				name: "Reading",
				component: () => import("@/pages/Menu/Failure/Reading"),
				meta: { theme: "theme_white" }
			},
			// 고객 지원
			{
				path: "ask",
				name: "Ask",
				component: () => import("@/pages/Menu/Support/Ask"),
				meta: { theme: "theme_white" }
			},
			{
				path: "qna",
				name: "QnA",
				component: () => import("@/pages/Menu/Support/QnA"),
				meta: { theme: "theme_white" }
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
