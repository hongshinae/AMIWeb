<template>
	<div class="content" :class="{ dashboard }">
		<content-header :pageName="pageName" :paths="paths" />
		<b-row class="row-wrap">
			<b-col xl="7" lg="7">
				<failure-day-hours :allData="allData" />
				<failure-region-board :allData="allData" />
			</b-col>
			<b-col xl="5" lg="5">
				<failure-rate :allData="allData" />
				<failure-region-map :allData="allData" />
			</b-col>
		</b-row>
	</div>
</template>
<script>
import Fboard from "@/service/fboard";
import FailureDayHours from "@/components/chart/FailureDayHours";
import FailureRegionBoard from "@/components/chart/FailureRegionBoard";
import FailureRate from "@/components/chart/FailureRate";
import FailureRegionMap from "@/components/chart/FailureRegionMap";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: ["dashboard"],
	components: { FailureDayHours, FailureRegionBoard, FailureRate, FailureRegionMap },
	mounted() {
		this.getFirstData();
	},
	data() {
		return {
			pageName: this.$t("menu.failure.FBoard"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.failure.title") },
				{ name: this.$t("menu.failure.FBoard") }
			],
			allData: null
		};
	},
	methods: {
		async getFirstData() {
			const response = await Fboard.firstData();
			this.allData = response.data;
		}
	}
};
</script>
<style type="text/css">
.st0 {
	fill: #ffffff;
}
</style>
