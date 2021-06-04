<template>
	<ul class="inspection">
		<!-- <li class="title">검침률</li> -->
		<li class="chart"><high-charts :options="chartOptions" /></li>
		<!-- <li class="title">적시율</li> -->
		<li class="chart"><high-charts :options="chartOptions" /></li>
	</ul>
</template>
<script>
import Highcharts from "highcharts";
import HighChartsMoreInit from "highcharts/highcharts-more";
import SolidGaugeInit from "highcharts/modules/solid-gauge";
import { Chart } from "highcharts-vue";
HighChartsMoreInit(Highcharts);
SolidGaugeInit(Highcharts);

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
						height: "120",
						borderWidth: 0,
						plotBackgroundColor: false
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
							{
								// Track for Move
								outerRadius: "92%",
								innerRadius: "68%",
								backgroundColor: "#10182a",
								borderWidth: 1,
								borderColor: "#10182a"
							}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: "round",
							stickyTracking: false,
							rounded: true
						}
					},
					title: "",
					exporting: { enabled: false },
					credits: { enabled: false },
					menu: false,
					series: [
						{
							name: "적시율",
							data: [
								{
									color: "#04d47d",
									radius: "92%",
									innerRadius: "68%",
									y: 70
								}
							],
							dataLabels: {
								enabled: true,
								style: {
									fontSize: "7px"
								},
								format: "<b>{series.name}</b><br>{point.y:.1f} %"
							}
						}
					]
				};
			}
		}
	},
	data() {
		return {
			chartName: "solidgauge"
		};
	}
};
</script>
