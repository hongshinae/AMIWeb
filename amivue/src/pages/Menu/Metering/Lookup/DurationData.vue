<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div v-show="this.lpDurationChart.length > 0" class="chart-wrap"><high-charts :options="chartOptions" /></div>
		<content-table
			:isBusy="isBusy"
			:items="lpDurationList"
			:fields="lpDurationFields"
			:perpage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('lookup.lpCycle.excelFileName')"
			:excelSheetName="$t('lookup.tab.lpCycle')"
		/>
	</div>
</template>

<script>
import { Chart } from "highcharts-vue";

import Lookup from "@/service/lookup";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		shows: {
			type: Array,
			default: function() {
				return [
					["region", "estate", "building"],
					["durationType", "durationDate"]
				];
			}
		},
		showFilterList: {
			type: Array,
			default: function() {
				return [];
			}
		}
	},
	components: {
		HighCharts: Chart
	},
	computed: {
		chartOptions: {
			cache: false,
			get() {
				return {
					chart: {
						type: this.chartName,
						height: 350
					},
					legend: {
						symbolHeight: 8,
						symbolWidth: 8,
						symbolRadius: 4,
						itemStyle: {
							fontSize: "1rem",
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
					xAxis: {
						categories: this.lpDurationChart.map(item => this.$moment(item.day).format("YYYY-MM-DD")),
						tickColor: "#0000ff"
					},
					yAxis: {
						title: null,
						gridLineColor: "#ddd",
						lineColor: "#ddd" //라인컬러
					},
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							name: "기간조회",
							data: this.lpDurationChart.map(item => item.use),
							color: "#3b82ec"
						}
					]
				};
			}
		}
	},
	data() {
		return {
			isBusy: false,
			chartName: "column",
			lpDurationChart: [],
			lpDurationList: [],
			lpDurationFields: [
				{
					key: "estateName",
					label: this.$t("component.content.table.estateName")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "buildingName",
					label: this.$t("component.content.table.buildingName")
				},
				{
					key: "houseName",
					label: this.$t("component.content.table.houseName")
				},
				{
					key: "day",
					label: this.$t("component.content.table.day")
				},
				{
					key: "fapUse",
					label: this.$t("component.content.table.fapUse")
				},
				{
					key: "rfapUse",
					label: this.$t("component.content.table.rfapUse")
				},
				{
					key: "use",
					label: this.$t("component.content.table.use")
				}
			]
		};
	},
	methods: {
		async getLpDurationList(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpDurationList(params);
				const result = response.data.response;
				this.lpDurationList = result;
			} catch (error) {
				const result = [];
				this.lpDurationList = result;
			} finally {
				this.isBusy = false;
			}
		},
		async getLpDurationChart(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpDurationChart(params);
				const result = response.data.response;
				this.lpDurationChart = result;
			} catch (error) {
				const result = [];
				this.lpDurationChart = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			searchItem.day = searchItem.date;
			this.getLpDurationList(searchItem);
			this.getLpDurationChart(searchItem);
		}
	}
};
</script>

<style>
.chart-wrap {
	margin-top: 50px;
}
</style>
