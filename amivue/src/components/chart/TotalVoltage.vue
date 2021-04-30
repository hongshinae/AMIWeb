<template>
	<div class="box power">
		<h5>
			<span>{{ $t("dashboard.totalVoltage") }}</span>
			<b class="fontC">{{ data ? data.todayUseAll : "" }} wh</b>
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
						//전국 전력 사용량
						type: this.chartName,
						height: 220,
						borderWidth: 0,
						plotBackgroundColor: false,
						plotBorderWidth: false,
						style: {
							fontFamily: "san-serif"
						}
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
						column: { borderRadius: 1 },
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
					yAxis: {
						title: null,
						tickColor: "#232f4b",
						gridLineColor: "#232f4b",
						min: "0",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},
					xAxis: {
						title: null,
						gridLineColor: null,
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.data ? this.data.todayData.map(item => item.use) : [],
							color: "#1ee2df"
						},
						{
							name: "어제",
							data: this.data ? this.data.yesterdayData.map(item => item.use) : [],
							color: "#75cee2"
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

<style lang="scss">
.chartWarp .text {
	font-family: sans-serif;
}
</style>
