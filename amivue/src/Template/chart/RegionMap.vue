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
						[0, "#f65164"],
						[0.85, "#ff8190"],
						[0.9, "#85a5ff"],
						[1, "#4e7cff"]
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
				["kr-kg", 10], // 경기도
				["kr-cb", 20], // 전라북도
				["kr-kn", 30], // 경상남도
				["kr-2685", 40], // 전라남도
				["kr-pu", 50], // 부산광역시
				["kr-2688", 100], // 경상북도
				["kr-sj", 70], // 세종특별자치시
				["kr-tj", 80], // 대전광역시
				["kr-ul", 90], // 울산광역시
				["kr-in", 100], // 인천광역시
				["kr-kw", 0], // 강원도
				["kr-gn", 10], // 충청남도
				["kr-cj", 60], // 제주도
				["kr-gb", 70], // 충청북도
				["kr-so", 80], // 서울
				["kr-tg", 90], // 대구광역시
				["kr-kj", 100] // 광주광역시
			]
		};
	}
};
</script>
