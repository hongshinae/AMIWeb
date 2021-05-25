<template>
	<div class="">
		<div class="row row-wrap">
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<dashboard-timer />
				<total-voltage />
				<today-fault />
				<today-weather />
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<region-map />
				<equipment-state />
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<dashboard-type />
				<server-info />
				<reading />
				<regist-equipment />
				<region-usage />
			</div>
		</div>
	</div>
</template>
<script>
import TotalVoltage from "@/Template/chart/TotalVoltage";
import DashboardTimer from "@/Template/chart/DashboardTimer";
import DashboardType from "@/Template/chart/DashboardType";
import Reading from "@/Template/chart/Reading";
import TodayFault from "@/Template/chart/TodayFault";
import TodayWeather from "@/Template/chart/TodayWeather";
import EquipmentState from "@/Template/chart/EquipmentState";
import ServerInfo from "@/Template/chart/ServerInfo";
import RegionUsage from "@/Template/chart/RegionUsage";
import RegistEquipment from "@/Template/chart/RegistEquipment";
import RegionMap from "@/Template/chart/RegionMap";
export default {
	components: {
		TotalVoltage,
		DashboardTimer,
		Reading,
		TodayFault,
		TodayWeather,
		EquipmentState,
		ServerInfo,
		RegionUsage,
		RegistEquipment,
		RegionMap,
		DashboardType
	}
};
</script>
