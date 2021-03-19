<template>
	<div class="main-location-wrap">
		<h1>단지 관리</h1>
		<div class="main-location">
			<b-breadcrumb>
				<b-breadcrumb-item to="/dashboard">
					<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
					홈
				</b-breadcrumb-item>
				<b-breadcrumb-item>설비</b-breadcrumb-item>
				<b-breadcrumb-item active>동 관리</b-breadcrumb-item>
			</b-breadcrumb>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		let n = this.$route.matched.length;
		let paths = this.$route.matched[n - 1].path.split("/");

		paths.forEach((path, index) => {
			path = "menu." + (path != "" ? path + "." : "") + "title";
			paths[index] = path;
		});
	}
};
</script>

<style></style>
