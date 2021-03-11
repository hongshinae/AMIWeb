<template>
	<div id="app" class="wrapper status-board" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
		<!-- <Menu /> -->
		<div>
			<sidebar-menu
				:width="width"
				:widthCollapsed="widthCollapsed"
				:hideToggle="footHideToggle"
				:menu="menu"
				:collapsed="collapsed"
				:theme="selectedTheme"
				:show-one-child="true"
				@toggle-collapse="onToggleCollapse"
				@item-click="onItemClick"
			/>
		</div>
		<div class="main">
			<Header />
			<Dashboard-Content />
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import VueSideBar from "@/components/plugin/VueSideBar";
// import Menu from "@/components/layout/Menu";
import Header from "@/components/layout/Header";
import DashboardContent from "@/components/layout/DashboardContent";
import Logo from "@/components/Logo";

Vue.use(VueSideBar);

// const separator = {
// 	template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
// };
export default {
	name: "App",
	components: {
		Header,
		// Menu,
		DashboardContent
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize);
	},
	methods: {
		onToggleCollapse(collapsed) {
			console.log(collapsed);
			this.collapsed = collapsed;
		},
		onItemClick(/*event, item, node*/) {
			console.log("onItemClick");
			// console.log(event)
			// console.log(item)
			// console.log(node)
		},
		onResize() {
			if (window.innerWidth <= 767) {
				this.isOnMobile = true;
				this.collapsed = true;
			} else {
				this.isOnMobile = false;
				this.collapsed = false;
			}
		}
	},
	data() {
		return {
			width: "260px",
			widthCollapsed: "50px",
			footHideToggle: false,
			collapsed: true,
			themes: [
				{
					name: "Default theme",
					input: ""
				},
				{
					name: "White theme",
					input: "white-theme"
				}
			],
			selectedTheme: "black-theme",
			isOnMobile: false,
			menu: [
				{
					component: Logo
				},
				{
					href: "",
					title: "설비",
					icon: "fa fa-download",
					child: [
						{
							href: "/estate",
							title: "단지관리",
							icon: ""
						},
						{
							href: "/building",
							title: "동관리",
							icon: ""
						},
						{
							href: "/equipment",
							title: "장비관리",
							icon: ""
						},
						{
							href: "/mapping",
							title: "매핑관리",
							icon: ""
						},
						{
							href: "/network",
							title: "네트워크현황",
							icon: ""
						},
						{
							href: "/nms",
							title: "NMS",
							icon: ""
						},
						{
							href: "/server",
							title: "서버현황",
							icon: ""
						}
					]
				},
				{
					href: "",
					title: "검침",
					icon: "fa fa-code",
					child: [
						{
							href: "/MBoard",
							title: "검침현황",
							icon: ""
						},
						{
							href: "/lookup",
							title: "검침조회",
							icon: ""
						},
						{
							href: "/info",
							title: "검침정보",
							icon: ""
						},
						{
							href: "/regular",
							title: "월검침",
							icon: ""
						}
					]
				},
				{
					href: "",
					title: "장애",
					icon: "fa fa-cogs",
					child: [
						{
							href: "/FBoard",
							title: "장애현황",
							icon: ""
						},
						{
							href: "/code",
							title: "상태코드관리",
							icon: ""
						},
						{
							href: "/status",
							title: "네트워크상태",
							icon: ""
						},
						{
							href: "/reading",
							title: "미검침정보",
							icon: ""
						}
					]
				},
				{
					href: "",
					title: "고객지원",
					icon: "fa fa-palette",
					child: [
						{
							href: "/ask",
							title: "문의게시판",
							icon: ""
						},
						{
							href: "/qna",
							title: "QnA",
							icon: ""
						}
					]
				}
			]
		};
	}
};
</script>
<style>
#app {
	padding-left: 260px;
	transition: 0.3s ease;
}
#app.collapsed {
	padding-left: 50px;
}
#app.onmobile {
	padding-left: 50px;
}
</style>
