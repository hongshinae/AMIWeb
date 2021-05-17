<template>
	<div class="main-bg content">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">{{ "샘플페이지1" }}</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">{{ "샘플페이지2" }}</b-button>
				<b-button pill :variant="activeTab(2)" @click="tabIndex = 2">{{ "샘플페이지3" }}</b-button>
				<b-button pill :variant="activeTab(3)" @click="tabIndex = 3">{{ "샘플페이지4" }}</b-button>
				<b-button pill :variant="activeTab(4)" @click="tabIndex = 4">{{ "샘플페이지5" }}</b-button>
				<b-button pill :variant="activeTab(5)" @click="tabIndex = 5">{{ "샘플페이지6" }}</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<sample1 />
			</b-tab>
			<b-tab>
				<sample2 />
			</b-tab>
			<b-tab>
				<sample3 />
			</b-tab>
			<b-tab>
				<sample4 />
			</b-tab>
			<b-tab>
				<sample5 />
			</b-tab>
		</b-tabs>
	</div>
</template>
<script>
import ContentHeader from "@/components/content/ContentHeader";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";
import Sample4 from "./pages/Sample4";
import Sample5 from "./pages/Sample5";

export default {
	props: {
		initTabIndex: {
			type: Number,
			default: 0
		}
	},
	components: { ContentHeader, Sample1, Sample2, Sample3, Sample4, Sample5 },
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
