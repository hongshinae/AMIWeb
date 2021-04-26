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
						height: 150
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
							borderColor: "none"
						}
					},
					credits: {
						enabled: false
					},
					yAxis: {
						title: null,
						gridLineColor: "#232f4b",
						lineColor: "#232f4b" //라인컬러
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

<style></style>
