<template>
	<div class="main-bg content">
		<content-header :paths="paths" :pageName="pageName">
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">{{ $t("equipment.tab.dcu") }}</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">{{ $t("equipment.tab.meter") }}</b-button>
				<b-button pill :variant="activeTab(2)" @click="tabIndex = 2">{{ $t("equipment.tab.other") }}</b-button>
			</div>
		</content-header>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab>
				<template #title> </template>
				<equipment-dcu></equipment-dcu>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<equipment-other></equipment-other>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<equipment-other></equipment-other>
			</b-tab>
		</b-tabs>
	</div>
</template>
<script>
import ContentHeader from "@/components/content/ContentHeader";
import EquipmentDcu from "./Equipment/Dcu";
import EquipmentOther from "./Equipment/Other";

export default {
	props: {
		initTabIndex: {
			type: Number,
			default: 0
		}
	},
	components: { ContentHeader, EquipmentDcu, EquipmentOther },
	computed: {
		activeTab() {
			return currentTab => (this.tabIndex == currentTab ? "primary" : "outline-primary");
		}
	},
	data() {
		return {
			tabIndex: this.initTabIndex,
			pageName: this.$t("menu.device.equipment"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.equipment") }
			]
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
