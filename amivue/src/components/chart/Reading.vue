<template>
	<div class="box">
		<h5>
			<ul class="inspection">
				<li>
					<span>{{ $t("dashboard.timelyRate") }}</span>
					<b class="fontC">{{ timelyRate[0] }}%</b>
				</li>
				<li>
					<span>{{ $t("dashboard.readingRate") }}</span>
					<b class="fontC">{{ readingRate[0] }}%</b>
				</li>
			</ul>
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
		sse = Dashboard.readingRate(1);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.readingRate = [data.todayMeterReadingRate, data.yesterdayMeterReadingRate];
			this.timelyRate = [data.todayTimelyRate, data.yesterdayTimelyRate];
		};
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						//검침률
						type: this.chartName,
						height: 150
					},
					legend: {
						symbolHeight: 8,
						symbolWidth: 8,
						symbolRadius: 4,
						marginTop: 10,
						align: "right",
						verticalAlign: "middle",
						layout: "vertical",
						itemMarginTop: 5,
						itemMarginBottom: 5,
						itemStyle: {
							fontSize: "0.9rem",
							fontWeight: 100,
							lineHeight: "14px"
						}
					},
					plotOptions: {
						column: { borderRadius: 3 },
						series: {
							borderColor: "none",
							dataLabels: {
								align: "left",
								enabled: true
							}
						}
					},
					credits: {
						enabled: false
					},
					xAxis: {
						categories: ["오늘", "어제"],
						title: null,
						gridLineColor: "#232f4b",
						lineColor: "#232f4b"
					},
					yAxis: {
						title: null,
						gridLineColor: "#232f4b",
						lineColor: "#232f4b"
					},
					title: "",
					exporting: { enabled: false },
					menu: false,
					series: [
						{
							name: "적시율",
							data: this.timelyRate,
							color: "#c45bdb"
						},
						{
							name: "검침률",
							data: this.readingRate,
							color: "#a66dee"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			timelyRate: [0],
			readingRate: [0],
			chartName: "bar"
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("Reading SSE Destroyed!!");
		}
	}
};
</script>

<style></style>
