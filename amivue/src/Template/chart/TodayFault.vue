<template>
	<div class="box" style="display:none">
		<h5>
			상태 이상 정보
			<b class="fontC">152 건</b>
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
						//상태이상정보
						type: this.chartName,
						height: 260,
						borderWidth: 0,
						plotBackgroundColor: false
					},
					legend: {
						symbolHeight: 8,
						symbolWidth: 8,
						symbolRadius: 4,
						marginTop: 10,
						verticalAlign: "top",
						align: "right",
						itemStyle: {
							fontSize: "0.9rem",
							fontWeight: 100
						}
					},
					plotOptions: {
						column: { borderRadius: 2 },
						series: {
							borderColor: "none",
							dataLabels: {
								enabled: true
							}
						}
					},
					credits: {
						enabled: false
					},
					xAxis: {
						lineColor: "#232f4b",
						gridLineColor: null,
						tickColor: "#232f4b",
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
					menu: false,
					exporting: { enabled: false },
					series: [
						{
							name: "오늘",
							data: [104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 26],
							color: "#7383fd"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			chartName: "column"
		};
	}
};
</script>
