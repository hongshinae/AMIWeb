<template>
	<div id="app" class="wrapper status-board">
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
			collapsed: false
		};
	},
	computed: {
		collapsedClass() {
			return [this.collapsed ? "collapsed" : ""];
		}
	},
	methods: {
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
