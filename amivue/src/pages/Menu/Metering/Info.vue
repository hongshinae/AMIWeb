<template>
	<div class="main-bg content">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">수집 정보</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">실시간 검침</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<template #title> </template>
				<collection-info></collection-info>
			</b-tab>

			<b-tab>
				<template #title style="display:none"> </template>
				<real-time-metering></real-time-metering>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import ContentHeader from "@/components/content/ContentHeader";
import CollectionInfo from "./Info/CollectionInfo";
import RealTimeMetering from "./Info/RealTimeMetering";

export default {
	props: {
		_tabIndex: {
			type: Number,
			default: 0
		}
	},
	components: { ContentHeader, CollectionInfo, RealTimeMetering },
	mounted() {
		this.tabIndex = this._tabIndex;
	},
	data() {
		return {
			tabIndex: 0,
			pageName: this.$t("menu.metering.info"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.metering.title") },
				{ name: this.$t("menu.metering.info") }
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

<style></style>
