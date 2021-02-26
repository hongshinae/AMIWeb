<template>
	<div id="app" class="wrapper status-board">
		<Menu />
		<div class="main">
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
	}
};
</script>
