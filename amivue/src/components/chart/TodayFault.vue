<template>
	<div class="box">
		<h5>
			금일 장애
			<b class="fontC">{{ failureTodayCount }} 건</b>
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
		sse = Dashboard.todayFault(5);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.today = data.arrayData;
			this.failureTodayCount = data.failureTodayCount;
		};
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						//금일 장애
						type: this.chartName,
						height: 150
					},
					legend: {
						symbolHeight: 8,
						symbolWidth: 8,
						symbolRadius: 4,
						marginTop: 10,
						itemStyle: {
							fontSize: "0.9rem",
							fontWeight: 100
						}
					},
					plotOptions: {
						series: {
							borderColor: "none"
						}
					},
					credits: {
						enabled: false
					},
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.today.map(item => item.count),
							color: "#1ee2df"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			today: [],
			failureTodayCount: 0,
			chartName: "column"
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("TodayFault SSE Destroyed!!");
		}
	}
};
</script>

<style lang="scss"></style>
