<template>
	<div class="main-bg">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">검침주기별 데이터</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">1시간 데이터</b-button>
				<b-button pill :variant="activeTab(2)" @click="tabIndex = 2">기간조회</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<template #title> </template>
				<metering-period-data></metering-period-data>
			</b-tab>

			<b-tab active>
				<template #title style="display:none"> </template>
				<hours-data></hours-data>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<period-lookup></period-lookup>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import ContentHeader from "@/components/content/ContentHeader";
import MeteringPeriodData from "./Lookup/MeteringPeriodData";
import HoursData from "./Lookup/HoursData.vue";
import PeriodLookup from "./Lookup/PeriodLookup";
export default {
	components: { ContentHeader, MeteringPeriodData, HoursData, PeriodLookup },
	data() {
		return {
			tabIndex: 0,
			pageName: this.$t("menu.metering.lookup"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.metering.title") },
				{ name: this.$t("menu.metering.lookup") }
			]
		};
	},
	methods: {
		activeTab(tabIndex) {
			return this.tabIndex == tabIndex ? "primary" : "outline-primary";
		}
	}
};
</script>

<style>
ul[role="tablist"] {
	display: none;
}
</style>
