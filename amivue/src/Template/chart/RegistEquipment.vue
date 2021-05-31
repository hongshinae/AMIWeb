<template>
	<div class="box" style="display:none">
		<h5>
			<span>등록장비</span>
			<b class="fontC">11건</b>
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
						//등록장비
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
						lineColor: "#232f4b",
						title: null,
						gridLineColor: null,
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},
					yAxis: {
						title: null,
						gridLineColor: "#232f4b",
						tickColor: "#232f4b",
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
						{ name: "DCU", data: [7], color: "#1ee2df" },
						{ name: "MODEM", data: [51], color: "#fdff4b" },
						{ name: "METER", data: [102], color: "#ff8931" }
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
