<template>
	<div class="box">
		<h5>
			<span>서버운영정보</span>
			<b class="fontC">정상</b>
		</h5>
		<div class="dutyCycle cpu">
			<high-charts :options="chartOptions" />
		</div>
		<ul class="serveInfo">
			<li>
				<h6>JVMUSED</h6>
				<span>1.272</span>
			</li>
			<li>
				<h6>JVMFREE</h6>
				<span>0.982</span>
			</li>
			<li>
				<h6>JVMTOTAL</h6>
				<span>2.225</span>
			</li>
			<li>
				<h6>JVMMAX</h6>
				<span>26.65</span>
			</li>
		</ul>
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
						type: "spline",
						height: 150,
						marginRight: 10,
						borderWidth: 0,
						plotBackgroundColor: false,
						plotBorderWidth: false,
						style: {
							fontFamily: "san-serif"
						}
					},

					time: {
						useUTC: false
					},

					title: null,

					xAxis: {
						type: "datetime",
						gridLineColor: "#232f4b",
						tickPixelInterval: 150,
						tickColor: "#232f4b",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},

					yAxis: {
						title: {
							text: null,
							gridLineColor: "#232f4b",
							lineColor: "#232f4b" //라인컬러
						},
						plotLines: [
							{
								value: 0,
								width: 1,
								color: "#808080"
							}
						],
						tickColor: "#232f4b",
						gridLineColor: "#232f4b",
						lineColor: "#232f4b",
						labels: {
							style: {
								color: "#61719e"
							}
						}
					},

					tooltip: {
						headerFormat: "<b>{series.name}</b><br/>",
						pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}"
					},

					legend: {
						enabled: false
					},

					exporting: {
						enabled: false
					},
					credits: { enabled: false },
					series: [
						{
							name: this.$t("server.used"),
							data: this.systemList,
							color: "#7383fd"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			systemList: [
				{ x: 1622187398000, y: 0 },
				{ x: 1622187399000, y: 0 },
				{ x: 1622187400000, y: 0.115 },
				{ x: 1622187401000, y: 0 },
				{ x: 1622187402000, y: 0.115 },
				{ x: 1622187403000, y: 0 },
				{ x: 1622187404000, y: 0 },
				{ x: 1622187405000, y: 0.115 },
				{ x: 1622187406000, y: 0 },
				{ x: 1622187407000, y: 11.162 },
				{ x: 1622187408000, y: 0.115 },
				{ x: 1622187409000, y: 0 },
				{ x: 1622187410000, y: 0 },
				{ x: 1622187411000, y: 0.115 },
				{ x: 1622187412000, y: 0 },
				{ x: 1622187413000, y: 0.115 },
				{ x: 1622187414000, y: 0 },
				{ x: 1622187415000, y: 0 },
				{ x: 1622187416000, y: 0.115 },
				{ x: 1622187417000, y: 0 }
			]
		};
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/chart/serverInfo.scss";
</style>
