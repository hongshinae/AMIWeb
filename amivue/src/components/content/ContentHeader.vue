<template>
	<div class="main-location-wrap">
		<h1>단지 관리</h1>
		<div class="main-location">
			<b-breadcrumb>
				<b-breadcrumb-item href="" v-for="(path, i) in paths" :key="i">
					{{ $t(path) }}
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
		let pathName = "menu";

		paths.forEach((path, index) => {
			pathName += "." + path;
			console.log(pathName);
			path = pathName + index != paths.length ? "title" : "";
			paths[index] = path;
		});

		this.paths = paths;
		console.log(this.paths);
	},
	data() {
		return {
			paths: null
		};
	}
};
</script>

<style></style>
