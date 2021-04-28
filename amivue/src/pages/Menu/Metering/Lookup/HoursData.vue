<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div>그래프 넣는 영역</div>
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
	data() {
		return {
			isBusy: false,
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
