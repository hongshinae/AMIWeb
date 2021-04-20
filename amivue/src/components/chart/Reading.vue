<template>
	<div class="box">
		<h5>
			<ul class="inspection">
				<li>
					<span>적시 검침률</span>
					<b class="fontC">{{ todayTimelyRate }}%</b>
				</li>
				<li>
					<span>검침 신뢰성</span>
					<b class="fontC">{{ todayMeterReadingRate[0] }}%</b>
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
import Dashboard from "@/service/dashboard";
import { Chart } from "highcharts-vue";
let sse;

export default {
	components: {
		HighCharts: Chart
	},
	mounted() {
		sse = Dashboard.readingRate(5);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.todayMeterReadingRate = [data.todayMeterReadingRate];
			this.yesterdayMeterReadingRate = [data.yesterdayMeterReadingRate];
			this.todayTimelyRate = data.todayTimelyRate;
			this.yesterdayTimelyRate = data.yesterdayTimelyRate;
		};
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						type: this.chartName
					},
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.todayMeterReadingRate
						},
						{
							name: "어제",
							data: this.yesterdayMeterReadingRate
						}
					]
				};
			}
		}
	},
	data() {
		return {
			todayMeterReadingRate: 0,
			yesterdayMeterReadingRate: 0,
			todayTimelyRate: 0,
			yesterdayTimelyRate: 0,
			chartName: "column"
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("SSE Destroyed!!");
		}
	}
};
</script>

<style></style>
