<template>
	<div class="main-bg">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">{{ $t("lookup.tab.lpCycle") }}</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">{{ $t("lookup.tab.lpHours") }}</b-button>
				<b-button pill :variant="activeTab(2)" @click="tabIndex = 2">{{ $t("lookup.tab.lpDuration") }}</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<template #title> </template>
				<cycle-data></cycle-data>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<hours-data></hours-data>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<duration-data></duration-data>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import ContentHeader from "@/components/content/ContentHeader";
import CycleData from "./Lookup/CycleData";
import HoursData from "./Lookup/HoursData";
import DurationData from "./Lookup/DurationData";

export default {
	components: { ContentHeader, CycleData, HoursData, DurationData },
	data() {
		return {
			tabIndex: 2,
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
