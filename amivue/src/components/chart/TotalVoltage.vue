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
						type: this.chartName
					},
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.todayData
						},
						{
							name: "어제",
							data: this.yesterdayData
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
