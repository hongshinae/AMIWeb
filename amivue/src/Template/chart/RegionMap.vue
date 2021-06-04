<template>
	<div class="highch">
		<high-charts :constructor-type="'mapChart'" :options="chartOptions" :highcharts="hcInstance" />
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
		HighCharts: Chart
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
					//max: 100,
					labels: {
						format: "{value}%"
					},
					stops: [
						[0, "rgba(246,81,100,1)"],
						[0.8, "rgba(246,81,100,0)"],
						[0.9, "rgba(9,24,46,0)"],
						[1, "rgba(9,24,46,1)"]
					]
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
				["kr-kn", 100], // 경상남도
				["kr-2685", 4], // 전라남도
				["kr-pu", 5], // 부산광역시
				["kr-2688", 6], // 경상북도
				["kr-sj", 0], // 세종특별자치시
				["kr-tj", 8], // 대전광역시
				["kr-ul", 9], // 울산광역시
				["kr-in", 100], // 인천광역시
				["kr-kw", 100], // 강원도
				["kr-gn", 12], // 충청남도
				["kr-cj", 100], // 제주도
				["kr-gb", 14], // 충청북도
				["kr-so", 100], // 서울
				["kr-tg", 16], // 대구광역시
				["kr-kj", 0] // 광주광역시
			]
		};
	}
};
</script>
