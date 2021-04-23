<template>
	<div class="box">
		<h5>
			상태 이상 정보
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
		sse = Dashboard.todayFault(1);
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
						//상태이상정보
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
					yAxis: {
						title: null,
						gridLineColor: "#232f4b"
					},
					title: "",
					menu: false,
					exporting: { enabled: false },
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
