<template>
	<div class="content">
		<b-row class="row-wrap">
			<b-col xl="4" lg="6" md="12" sm="12">
				<div class="timeWrap">
					<div class="date">{{ Date.now() | moment("YYYY.M.D") }}</div>
					<dashboard-timer />
				</div>
				<total-voltage />
				<reading />
				<today-fault />
				<today-weather />
			</b-col>
			<b-col xl="4" lg="6" md="12" sm="12">
				<region-map />
				<equipment-state />
			</b-col>
			<b-col xl="4" lg="12" md="12" sm="12">
				<div class="presentMenu">
					<ul>
						<li>{{ $t("dashboard.type.heat") }}</li>
						<li>{{ $t("dashboard.type.hot") }}</li>
						<li>{{ $t("dashboard.type.water") }}</li>
						<li>{{ $t("dashboard.type.gas") }}</li>
						<li class="on">{{ $t("dashboard.type.meter") }}</li>
					</ul>
				</div>
				<server-info />
				<regist-equipment />
				<region-usage />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import DashboardTimer from "@/components/DashboardTimer";
import TotalVoltage from "@/components/chart/TotalVoltage";
import Reading from "@/components/chart/Reading";
import TodayFault from "@/components/chart/TodayFault";
import TodayWeather from "@/components/chart/TodayWeather";
import EquipmentState from "@/components/chart/EquipmentState";
import ServerInfo from "@/components/chart/ServerInfo";
import RegionUsage from "@/components/chart/RegionUsage";
import RegistEquipment from "@/components/chart/RegistEquipment";
import RegionMap from "@/components/chart/RegionMap";

export default {
	name: "Home",
	components: {
		DashboardTimer,
		TotalVoltage,
		Reading,
		TodayFault,
		TodayWeather,
		EquipmentState,
		ServerInfo,
		RegionUsage,
		RegistEquipment,
		RegionMap
	},
	data: function() {
		return {
			now: Date.now()
		};
	},
	computed: {
		cNow() {
			return this.now - 86400000 + 1000;
		}
	},
	methods: {}
};
</script>
