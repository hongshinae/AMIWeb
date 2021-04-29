<template>
	<div class="content">
		<content-header :pageName="pageName" :paths="paths" />
		<b-row class="row-wrap">
			<b-col xl="7" lg="7">
				<failure-day-hours />
				<failure-region-board />
			</b-col>
			<b-col xl="5" lg="5">
				<failure-rate />
				<failure-region-map />
			</b-col>
		</b-row>
	</div>
</template>
<script>
import FailureDayHours from "@/components/chart/FailureDayHours";
import FailureRegionBoard from "@/components/chart/FailureRegionBoard";
import FailureRate from "@/components/chart/FailureRate";
import FailureRegionMap from "@/components/chart/FailureRegionMap";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	components: { FailureDayHours, FailureRegionBoard, FailureRate, FailureRegionMap },
	data() {
		return {
			pageName: this.$t("menu.failure.FBoard"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.failure.title") },
				{ name: this.$t("menu.failure.FBoard") }
			]
		};
	}
};
</script>
<style type="text/css">
.st0 {
	fill: #ffffff;
}
</style>
