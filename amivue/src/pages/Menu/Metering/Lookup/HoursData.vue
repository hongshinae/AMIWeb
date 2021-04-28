<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div v-show="this.lpHoursChart.length > 0"><high-charts :options="chartOptions" /></div>
		<content-table
			:isBusy="isBusy"
			:items="lpHoursList"
			:fields="lpHoursFields"
			:perpage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.metering.lookup')"
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
				return [["region", "estate", "building"], ["date"]];
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
						height: 250
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
					exporting: { enabled: false },
					title: "",
					menu: false,
					series: [
						{
							name: "오늘",
							data: this.lpHoursChart.map(item => item.use),
							color: "#1ee2df"
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
			lpHoursChart: [],
			lpHoursList: [],
			lpHoursFields: [
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
					key: "hour",
					label: this.$t("component.content.table.hour")
				},
				{
					key: "fap",
					label: this.$t("component.content.table.fap")
				},
				{
					key: "rfap",
					label: this.$t("component.content.table.rfap")
				},
				{
					key: "use",
					label: this.$t("component.content.table.use")
				}
			]
		};
	},
	methods: {
		async getLpHoursList(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpHoursList(params);
				const result = response.data.response;
				this.lpHoursList = result;
			} catch (error) {
				const result = [];
				this.lpHoursList = result;
			} finally {
				this.isBusy = false;
			}
		},
		async getLpHoursChart(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpHoursChart(params);
				const result = response.data.response;
				this.lpHoursChart = result;
			} catch (error) {
				const result = [];
				this.lpHoursChart = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			searchItem.day = searchItem.date;
			this.getLpHoursList(searchItem);
			this.getLpHoursChart(searchItem);
		}
	}
};
</script>

<style></style>
