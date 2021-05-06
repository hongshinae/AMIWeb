<template>
	<div class="box">
		<h5>
			<span>{{ $t("MBoard.collectionCount") }}</span>
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
import MBoard from "@/service/mboard";
let sse;

export default {
	props: ["allData"],
	components: {
		HighCharts: Chart
	},
	watch: {
		allData: function(value) {
			this.data = value.lp;
		}
	},
	mounted() {
		sse = MBoard.lpCount();
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.data = data;
		};
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						//전국 전력 사용량
						type: this.chartName,
						height: 150,
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
					xAxis: {
						title: null,
						categories: this.data ? this.data.map(item => item.time) : null,
						gridLineColor: null
					},
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							data: this.data ? this.data.map(item => item.count) : [],
							color: "#1ee2df"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			chartName: "column",
			data: null
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("MeteringCollection SSE Destroyed!!");
		}
	}
};
</script>

<style lang="scss">
.chartWarp .text {
	font-family: sans-serif;
}
</style>
