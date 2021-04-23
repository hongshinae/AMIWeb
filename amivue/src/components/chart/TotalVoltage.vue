<template>
	<div class="box power">
		<h5>
			<span>{{ $t("dashboard.totalVoltage") }}</span>
			<b class="fontC">{{ todayTotal }} wh</b>
		</h5>
		<div class="chartWarp">
			<div class="">
				<high-charts :options="chartOptions" />
			</div>
		</div>
	</div>
</template>

<script>
import Dashboard from "@/service/dashboard";
import { Chart } from "highcharts-vue";
let sse;

export default {
	components: {
		HighCharts: Chart
	},
	mounted() {
		sse = Dashboard.totalVoltage(5);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.todayTotal = data.todayUseAll;
			this.todayData = data.todayData.map(item => item.use);
			this.yesterdayData = data.yesterdayData.map(item => item.use);
		};
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						//전국 전력 사용량
						type: this.chartName,
						height: 150
					},
					legend: {
						symbolHeight: 8,
						symbolWidth: 8,
						symbolRadius: 4,
						marginTop: 10,
						itemStyle: {
							fontSize: "0.9rem",
							fontWeight: 100
						}
					},
					plotOptions: {
						series: {
							borderColor: "none"
						}
					},
					credits: {
						enabled: false
					},
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.todayData,
							color: "#1ee2df"
						},
						{
							name: "어제",
							data: this.yesterdayData,
							color: "#75cee2"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			todayTotal: 0,
			todayData: [],
			yesterdayData: [],
			chartName: "column"
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("TotalVoltage SSE Destroyed!!");
		}
	}
};
</script>

<style></style>
