<template>
	<div class="content">
		<b-row class="row-wrap">
			<b-col xl="4" lg="6" md="12" sm="12">
				<div class="timeWrap">
					<div class="date">{{ Date.now() | moment("YYYY.M.D") }}</div>
					<dashboard-timer />
				</div>
				<total-voltage :data="totalVoltage" />
				<today-fault :data="todayFault" />
				<today-weather :data="todayWeather" />
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
				<reading :data="reading" />
				<regist-equipment :data="device" />
				<region-usage />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Dashboard from "@/service/dashboard";
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
let sse;

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
	async mounted() {
		sse = Dashboard.allData(30);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data);
			this.totalVoltage = data.useData;
			this.totalWeather = { todayWeather: data.weather, weatherData: data.wheatherData };
			this.todayFault = data.failureStatus;
			this.reading = data.rate;
			this.device = data.device;
		};
		const response = await Dashboard.firstData();
		const data = response.data;
		this.totalVoltage = data.useData;
		this.totalWeather = { todayWeather: data.weather, weatherData: data.wheatherData };
		this.todayFault = data.failureStatus;
		this.reading = data.rate;
		this.device = data.device;
	},
	data: function() {
		return {
			now: Date.now(),
			totalVoltage: null,
			todayWeather: null,
			todayFault: null,
			reading: null,
			device: null
		};
	},
	methods: {},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("AllData SSE Destroyed!!");
		}
	}
};
</script>
