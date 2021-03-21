<template>
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
		:class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]"
	/>
</template>

<script>
// Menu css
import "@/assets/scss/menu.scss";
import Vue from "vue";
import VueSideBar from "@/components/plugin/VueSideBar";
import Logo from "@/components/Logo";

Vue.use(VueSideBar);
export default {
	name: "App",
	props: {
		collapsed: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize);
	},
	methods: {
		onToggleCollapse(collapsed) {
			this.isCollapsed = collapsed;
			this.$emit("toggle-collapse", this.isCollapsed);
		},
		onItemClick(/*event, item, node*/) {
			console.log("onItemClick");
		},
		onResize() {
			if (window.innerWidth <= 767) {
				this.isOnMobile = true;
				this.isCollapsed = true;
			} else {
				this.isOnMobile = false;
				this.isCollapsed = false;
			}
		}
	},
	data() {
		return {
			width: "260px",
			widthCollapsed: "50px",
			footHideToggle: true,
			isCollapsed: true,
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
					title: this.$t("menu.device.title"),
					bicon: "building",
					child: [
						{
							href: "/device/estate",
							title: this.$t("menu.device.estate"),
							bicon: "",
							badge: {
								text: "N",
								class: "vsm--badge_new"
								// attributes: {}
								// element: 'span'
							}
						},
						{
							href: "/building",
							title: this.$t("menu.device.building"),
							icon: ""
						},
						{
							href: "/equipment",
							title: this.$t("menu.device.equipment"),
							icon: "",
							badge: {
								text: "12",
								class: "vsm--badge_default"
							}
						},
						{
							href: "/mapping",
							title: this.$t("menu.device.mapping"),
							icon: ""
						},
						{
							href: "/network",
							title: this.$t("menu.device.network"),
							icon: ""
						},
						{
							href: "/nms",
							title: this.$t("menu.device.nms"),
							icon: ""
						},
						{
							href: "/server",
							title: this.$t("menu.device.server"),
							icon: ""
						}
					]
				},
				{
					href: "",
					title: this.$t("menu.metering.title"),
					bicon: "calendar2-event",
					child: [
						{
							href: "/MBoard",
							title: this.$t("menu.metering.MBoard"),
							icon: ""
						},
						{
							href: "/lookup",
							title: this.$t("menu.metering.lookup"),
							icon: ""
						},
						{
							href: "/info",
							title: this.$t("menu.metering.info"),
							icon: ""
						},
						{
							href: "/regular",
							title: this.$t("menu.metering.regular"),
							icon: ""
						}
					]
				},
				{
					href: "",
					title: this.$t("menu.failure.title"),
					bicon: "exclamation-triangle",
					child: [
						{
							href: "/FBoard",
							title: this.$t("menu.failure.FBoard"),
							icon: ""
						},
						{
							href: "/code",
							title: this.$t("menu.failure.code"),
							icon: ""
						},
						{
							href: "/status",
							title: this.$t("menu.failure.status"),
							icon: ""
						},
						{
							href: "/reading",
							title: this.$t("menu.failure.reading"),
							icon: ""
						}
					]
				},
				{
					href: "",
					title: this.$t("menu.support.title"),
					bicon: "person-fill",
					child: [
						{
							href: "/ask",
							title: this.$t("menu.support.ask"),
							icon: ""
						},
						{
							href: "/qna",
							title: this.$t("menu.support.qna"),
							icon: ""
						}
					]
				}
			]
		};
	}
};
</script>

<style></style>
