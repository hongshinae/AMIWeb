<template>
	<div class="box power">
		<h5>
			<span>차트제목</span>
			<b class="fontC">추가정보란</b>
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
						//전국 전력 사용량
						type: "column",
						height: 260,
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
							data: [11, 13, 12, 12, 13, 11, 13, 11, 12, 73, 156, 157, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
							color: "#1ee2df"
						},
						{
							name: "어제",
							data: [12, 12, 12, 13, 10, 14, 12, 11, 14, 11, 12, 11, 14, 12, 11, 14, 11, 12, 12, 13, 11, 12, 13, 12],
							color: "#fdff4b"
						}
					]
				};
			}
		}
	}
};
</script>
