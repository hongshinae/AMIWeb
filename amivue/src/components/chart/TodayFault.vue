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
						type: this.chartName
					},
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.today.map(item => item.count)
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
			console.log("SSE Destroyed!!");
		}
	}
};
</script>

<style lang="scss">
.power {
	.highcharts-yaxis-grid .highcharts-grid-line {
		stroke: #232f4b !important;
	}
	.highcharts-point {
		stroke: none !important;
	}
	.highcharts-color-1 {
		fill: #1ee2df !important;
	}
	.highcharts-color-0 {
		fill: #feff85 !important;
	}
}
</style>
