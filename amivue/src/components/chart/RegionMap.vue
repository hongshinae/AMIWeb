<template>
	<div class="highch">
		<!-- <chart :constructor-type="'stockChart'" :options="chartOptions" /> -->
		<high-chart :constructor-type="'mapChart'" :options="chartOptions" :highcharts="hcInstance" />
	</div>
</template>

<script>
import Highcharts from "highcharts";

import mapInit from "highcharts/modules/map";
import exportingInit from "highcharts/modules/exporting";
import darkUnicaInit from "highcharts/themes/dark-unica";
import koreaMap from "@/assets/js/highchart/map-kr-all.json";
mapInit(Highcharts);
exportingInit(Highcharts);
darkUnicaInit(Highcharts);

import { Chart } from "highcharts-vue";
import Dashboard from "@/service/dashboard";
let sse;

export default {
	components: {
		HighChart: Chart
	},
	mounted() {
		sse = Dashboard.mapInfo(30);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.data = data.map(v => [v.hckey, v.value]);
		};
	},
	computed: {
		chartOptions() {
			return {
				chart: {
					height: 850,
					borderWidth: 0,
					plotBackgroundColor: false,
					plotBorderWidth: false,
					map: koreaMap,
					events: {
						load: function() {
							this.mapZoom(0.8);
						}
					}
				},

				title: {
					text: "확산사업 운영 정보"
				},

				mapNavigation: { enabled: false },

				colorAxis: {
					min: 0,
					minColor: "rgba(220,53,69,0)", //min컬러
					maxColor: "rgba(220,53,69,1)" //max컬러
				},
				exporting: { enabled: false },
				credits: { enabled: false },
				series: [
					{
						data: this.data,
						name: "DCU Fault",
						//s borderColor: "black",
						borderWidth: 0.2,
						states: {
							hover: {
								color: "#1ee2df", // 마우스 오버 색상
								borderColor: "none" // 테두리 색상
							}
						},
						dataLabels: {
							enabled: true,
							format: "{point.name}"
						}
					}
				]
			};
		}
	},
	data() {
		return {
			hcInstance: Highcharts,
			data: [
				["kr-4194", 0], // 전국
				["kr-kg", 1], // 경기도
				["kr-cb", 2], // 전라북도
				["kr-kn", 3], // 경상남도
				["kr-2685", 4], // 전라남도
				["kr-pu", 5], // 부산광역시
				["kr-2688", 6], // 경상북도
				["kr-sj", 7], // 세종특별자치시
				["kr-tj", 8], // 대전광역시
				["kr-ul", 9], // 울산광역시
				["kr-in", 10], // 인천광역시
				["kr-kw", 11], // 강원도
				["kr-gn", 12], // 충청남도
				["kr-cj", 13], // 제주도
				["kr-gb", 14], // 충청북도
				["kr-so", 15], // 서울
				["kr-tg", 16], // 대구광역시
				["kr-kj", 17] // 광주광역시
			]
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("RegionMap SSE Destroyed!!");
		}
	}
};
</script>

<style lang="scss">
.high-map-wrap {
	position: relative;
	.high-map {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.high-table {
		position: absolute;
		top: -183px;
		right: 0;
		width: 200px;
		height: 110px;
		padding-top: 10px;
		padding-bottom: 10px;
		background: linear-gradient(70deg, rgba(13, 24, 25, 0.08), #0f1e35, rgba(13, 24, 25, 0.08));
		box-shadow: 0px 5px 5px 0 rgb(0 0 0 / 11%);
		ul li {
			text-align: center;
			height: 30px;
			span {
				width: 60px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				display: inline-block;
				font-size: 11px;
			}
		}
		ul li:first-child {
			border-bottom: 1px solid #1a2a42;
		}
	}
}
</style>
