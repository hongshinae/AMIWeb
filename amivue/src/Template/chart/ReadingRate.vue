<template>
	<div style="height: 130px;">
		<high-charts :options="chartOptions" />
	</div>
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
						height: "80%",
						borderWidth: 0,
						plotBackgroundColor: false
					},
					tooltip: {
						borderWidth: 0,
						backgroundColor: "none",
						shadow: false,
						style: {
							fontSize: "7px"
						},
						valueSuffix: "%",
						pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
						positioner: function(labelWidth) {
							return {
								x: (this.chart.chartWidth - labelWidth) / 2,
								y: this.chart.plotHeight / 2 - 15
							};
						}
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
							{
								// Track for Move
								outerRadius: "92%",
								innerRadius: "68%",
								backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
									.setOpacity(0.3)
									.get(),
								borderWidth: 0
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
					menu: false,
					series: [
						{
							name: "적시율",
							data: [
								{
									color: Highcharts.getOptions().colors[2],
									radius: "88%",
									innerRadius: "64%",
									y: 70
								}
							]
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
