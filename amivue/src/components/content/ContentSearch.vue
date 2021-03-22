<template>
	<div class="search-wrap1">
		<div class="wbox">
			<div class="search-img">
				<b-icon icon="search" variant="primary"></b-icon>
			</div>
			<div class="search">
				<!--검색영역-->
				<slot />
				<!--//검색영역-->
			</div>
			<div class="btn-wrap ml-auto">
				<button type="button" class="btn btn-primary btn-block" @click="search()">{{ $t("component.search") }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		search() {}
	}
};
</script>

<style></style>
