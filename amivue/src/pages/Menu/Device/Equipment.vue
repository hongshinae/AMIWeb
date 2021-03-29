<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>장비 관리</h1>
			<div class="tap-wrap">
				<b-button pill :variant="activeTab(0)" @click="tabIndex = 0">DCU</b-button>
				<b-button pill :variant="activeTab(1)" @click="tabIndex = 1">METER</b-button>
				<b-button pill :variant="activeTab(2)" @click="tabIndex = 2">가스, 수도, 온수, 난방</b-button>
			</div>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>장비 관리</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-tabs v-model="tabIndex" :no-nav-style="true">
			<b-tab active>
				<template #title style="display:none"> </template>
				<equipment-dcu></equipment-dcu>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<equipment-meter></equipment-meter>
			</b-tab>

			<b-tab>
				<template #title> </template>
				<equipment-etc></equipment-etc>
			</b-tab>
		</b-tabs>
	</div>
</template>
<script>
import EquipmentDcu from "./Equipment/Dcu.vue";
import EquipmentMeter from "./Equipment/Meter.vue";
import EquipmentEtc from "./Equipment/Etc.vue";

export default {
	components: { EquipmentDcu, EquipmentMeter, EquipmentEtc },
	data() {
		return {
			tabIndex: 0
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
