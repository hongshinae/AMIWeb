import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/pages/Home.vue";
import MainLayout from "@/pages/Layout/MainLayout";

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
				path: "complexManagement",
				name: "ComplexManagement",
				component: () => import("@/pages/Menu/Equip/ComplexManagement")
			},
			{
				path: "equipmentManagement",
				name: "EquipmentManagement",
				component: () => import("@/pages/Menu/Equip/EquipmentManagement")
			},
			{
				path: "mappingManagement",
				name: "MappingManagement",
				component: () => import("@/pages/Menu/Equip/MappingManagement")
			},
			{
				path: "networkStatus",
				name: "NetworkStatus",
				component: () => import("@/pages/Menu/Equip/NetworkStatus")
			},
			{
				path: "nms",
				name: "NMS",
				component: () => import("@/pages/Menu/Equip/NMS")
			},
			{
				path: "serverStatus",
				name: "ServerStatus",
				component: () => import("@/pages/Menu/Equip/ServerStatus")
			},
			// 검침
			{
				path: "meteringStatus",
				name: "MeteringStatus",
				component: () => import("@/pages/Menu/Metering/MeteringStatus")
			},
			{
				path: "meteringInquiry",
				name: "MeteringInquiry",
				component: () => import("@/pages/Menu/Metering/MeteringInquiry")
			},
			{
				path: "meteringInformation",
				name: "MeteringInformation",
				component: () => import("@/pages/Menu/Metering/MeteringInformation")
			},
			{
				path: "monthMetering",
				name: "MonthMetering",
				component: () => import("@/pages/Menu/Metering/MonthMetering")
			},
			// 요금
			{
				path: "bill",
				name: "Bill",
				component: () => import("@/pages/Menu/Bill/Bill")
			},
			{
				path: "meteringBill",
				name: "MeteringBill",
				component: () => import("@/pages/Menu/Bill/MeteringBill")
			},
			// 장애
			{
				path: "disabilityStatus",
				name: "DisabilityStatus",
				component: () => import("@/pages/Menu/Disability/DisabilityStatus")
			},
			{
				path: "disabilityStatusCode",
				name: "DisabilityStatusCode",
				component: () => import("@/pages/Menu/Disability/DisabilityStatusCode")
			},
			{
				path: "networkStatus",
				name: "NetworkStatus",
				component: () => import("@/pages/Menu/Disability/NetworkStatus")
			},
			{
				path: "unMeteringInformation",
				name: "UnMeteringInformation",
				component: () => import("@/pages/Menu/Disability/UnMeteringInformation")
			},
			// 분석
			{
				path: "usageStatistics",
				name: "UsageStatistics",
				component: () => import("@/pages/Menu/Analysis/UsageStatistics")
			},
			{
				path: "maximumDemand",
				name: "MaximumDemand",
				component: () => import("@/pages/Menu/Analysis/MaximumDemand")
			},
			{
				path: "disabilityFrequency",
				name: "DisabilityFrequency",
				component: () => import("@/pages/Menu/Analysis/DisabilityFrequency")
			},
			{
				path: "report",
				name: "Report",
				component: () => import("@/pages/Menu/Analysis/Report")
			},
			{
				path: "reliabilityAnalysis",
				name: "ReliabilityAnalysis",
				component: () => import("@/pages/Menu/Analysis/ReliabilityAnalysis")
			},
			{
				path: "timeRateAnalysis",
				name: "TimeRateAnalysis",
				component: () => import("@/pages/Menu/Analysis/TimeRateAnalysis")
			},
			// 고객 지원
			{
				path: "board",
				name: "Board",
				component: () => import("@/pages/Menu/Support/Board")
			},
			{
				path: "qa",
				name: "QA",
				component: () => import("@/pages/Menu/Support/QA")
			},
			// 설정
			{
				path: "userManagement",
				name: "UserManagement",
				component: () => import("@/pages/Menu/Settings/UserManagement")
			},
			{
				path: "settingsManagement",
				name: "SettingsManagement",
				component: () => import("@/pages/Menu/Settings/SettingsManagement")
			}
		]
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("@/pages/Dashboard")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "on", // 클릭시 삽입할 class
	tag: "li"
});

export default router;
