<template>
	<div class="box">
		<h5>
			<ul class="inspection">
				<li>
					<span>{{ $t("dashboard.timelyRate") }}</span>
					<b class="fontC">{{ this.data ? this.data.todayTimelyRate : "" }}%</b>
				</li>
				<li>
					<span>{{ $t("dashboard.readingRate") }}</span>
					<b class="fontC">{{ this.data ? this.data.todayMeterReadingRate : "" }}%</b>
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
							data: this.data ? [this.data.todayTimelyRate, this.data.yesterdayTimelyRate] : [],
							color: "#c45bdb"
						},
						{
							name: "검침률",
							data: this.data ? [this.data.todayMeterReadingRate, this.data.yesterdayMeterReadingRate] : [],
							color: "#a66dee"
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

<style lang="scss">
.inspection {
	li {
		width: 42%;
		float: left;
		&:last-child {
			float: right;
		}
	}
}
</style>
