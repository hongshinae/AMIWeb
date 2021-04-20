<template>
	<div class="highch">
		<!-- <chart :constructor-type="'stockChart'" :options="chartOptions" /> -->
		<high-chart :constructor-type="'mapChart'" :options="chartOptions" :highcharts="hcInstance" :callback="init" style="width:500px;height:800px" />
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

export default {
	components: {
		HighChart: Chart
	},
	created() {
		// console.log(this.chartOptions, this.data);
	},
	computed: {
		chartOptions() {
			return {
				chart: {
					map: koreaMap
				},

				title: {
					text: "확산사업 운영 정보"
				},

				mapNavigation: {
					enabled: true,
					buttonOptions: {
						verticalAlign: "bottom"
					}
				},

				colorAxis: {
					min: 0,
					minColor: "#efecf3", //min컬러
					maxColor: "#990041" //max컬러
				},

				series: [
					{
						data: this.data,
						name: "DCU Fault",
						states: {
							hover: {
								color: "#FF00FF", // 마우스 오버 색상
								borderColor: "white" // 테두리 색상
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
	methods: {
		init() {
			// console.log(chart);
		}
	}
};
</script>

<style></style>
