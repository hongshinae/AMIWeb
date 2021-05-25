<template>
	<div class="box">
		<h5>
			<ul class="inspection">
				<li><span>적시율</span><b class="fontC">100%</b></li>
				<li><span>검침률</span><b class="fontC">100%</b></li>
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
import { Chart } from "highcharts-vue";

export default {
	components: {
		HighCharts: Chart
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						//검침률
						type: this.chartName,
						height: 190,
						borderWidth: 0,
						plotBackgroundColor: false
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
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},
					yAxis: {
						title: null,
						tickColor: "#232f4b",
						gridLineColor: "#232f4b",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},
					title: "",
					exporting: { enabled: false },
					menu: false,
					series: [
						{ name: "적시율", data: [100, 100], color: "#1ee2df" },
						{ name: "검침률", data: [100, 100], color: "#fdff4b" }
					]
				};
			}
		}
	},
	data() {
		return {
			chartName: "bar"
		};
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/chart/reading.scss";
</style>
