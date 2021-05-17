<template>
	<div class="main-bg content">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">{{ "샘플페이지1" }}</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">{{ "샘플페이지2" }}</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<sample1 />
			</b-tab>

			<b-tab>
				<sample1 />
			</b-tab>
		</b-tabs>
	</div>
</template>
<script>
import ContentHeader from "@/components/content/ContentHeader";
import Sample1 from "./pages/Sample1";

export default {
	props: {
		initTabIndex: {
			type: Number,
			default: 0
		}
	},
	components: { ContentHeader, Sample1 },
	computed: {
		activeTab() {
			return currentTab => (this.tabIndex == currentTab ? "primary" : "outline-primary");
		}
	},
	data() {
		return {
			tabIndex: this.initTabIndex,
			pageName: "레이아웃모음",
			paths: [{ name: this.$t("menu.title"), bicon: "house", link: "/" }, { name: "템플릿" }, { name: "레이아웃모음" }]
		};
	},
	methods: {}
};
</script>
<style>
ul[role="tablist"] {
	display: none;
}
</style>
