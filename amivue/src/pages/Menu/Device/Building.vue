<template>
	<div class="main-bg content">
		<add-building></add-building>
		<content-header :pageName="pageName" :paths="paths" />
		<content-search>
			<!--  <content-search @update:searchItem=""> -->
		</content-search>
		<!-- <content-table></content-table> -->
	</div>
</template>
<script>
// import Building from "@/service/building";
import AddBuilding from "@/components/modal/addBuilding";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	components: { AddBuilding },
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.building") }]
		};
	}
};
</script>
