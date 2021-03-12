<template>
	<div id="app" class="wrapper status-board" :class="theme">
		<Menu @toggle-collapse="onToggleCollapse" />
		<div class="main" :class="collapsedClass">
			<Header />
			<Dashboard-Content />
		</div>
	</div>
</template>

<script>
import Menu from "@/components/layout/Menu";
import Header from "@/components/layout/Header";
import DashboardContent from "@/components/layout/DashboardContent";

export default {
	name: "App",
	components: {
		Header,
		Menu,
		DashboardContent
	},
	data() {
		return {
			theme: this.$route.meta.theme,
			collapsed: false
		};
	},
	watch: {
		$route: "fetchTheme"
	},
	computed: {
		themeClass() {
			return typeof this.theme === "string" || this.theme instanceof String ? this.theme : "";
		},
		collapsedClass() {
			return [this.collapsed ? "collapsed" : ""];
		}
	},
	methods: {
		fetchTheme() {
			this.theme = this.$route.meta.theme;
		},
		onToggleCollapse(collapsed) {
			// console.log(collapsed);
			this.collapsed = collapsed;
		}
		// collapsedClass() {
		// 	return [this.collapsed ? "collapsed" : ""];
		// }
	}
};
</script>
<style>
.main {
	padding-left: 239px;
	transition: 0.3s ease !important;
}
.main.collapsed {
	padding-left: 50px;
}
.main.onmobile {
	padding-left: 50px;
}
</style>
