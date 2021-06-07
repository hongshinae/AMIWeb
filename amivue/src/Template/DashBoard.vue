<template>
	<div class="">
		<div class="row row-wrap">
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<dashboard-timer />
				<total-voltage />
				<reading />
				<today-weather />
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<region-map />
				<equipment-state />
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<dashboard-type />
				<server-info />
				<region-usage />
				<regist-equipment />
				<today-fault />
				<ami-status-board />
				<regular-board />
				<today-fault-board />
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
import AmiStatusBoard from "@/Template/chart/AmiStatusBoard";
import RegularBoard from "@/Template/chart/RegularBoard";
import TodayFaultBoard from "@/Template/chart/TodayFaultBoard";

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
		DashboardType,
		AmiStatusBoard,
		RegularBoard,
		TodayFaultBoard
	}
};
</script>
