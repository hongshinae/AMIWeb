<template>
	<div class="search-wrap">
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
				<b-button block variant="primary" @click="search()">{{ $t("component.search") }}</b-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: { isLazySearch: { type: Boolean, default: false } },
	mounted() {},
	methods: {
		search() {
			this.$emit("update:searchItem");
		}
	}
};
</script>

<style></style>
