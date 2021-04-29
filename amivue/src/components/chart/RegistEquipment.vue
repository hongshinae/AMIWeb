<template>
	<div class="box">
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
	props: ["data"],
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
						height: 150,
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
							name: "DCU",
							data: this.data ? [this.data[0].deviceRegConut] : [],
							color: "#1ee2df"
						},
						{
							name: "MODEM",
							data: this.data ? [this.data[1].deviceRegConut] : [],
							color: "#fdff4b"
						},
						{
							name: "METER",
							data: this.data ? [this.data[2].deviceRegConut] : [],
							color: "#ff8931"
						}
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

<style></style>
