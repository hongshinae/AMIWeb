<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div>그래프 넣는 영역</div>
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
	data() {
		return {
			isBusy: false,
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
		}
	}
};
</script>

<style></style>
