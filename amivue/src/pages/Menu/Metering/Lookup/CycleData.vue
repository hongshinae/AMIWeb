<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<content-table
			:isBusy="isBusy"
			:items="lpCycleList"
			:fields="lpCycleFields"
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
				return [["region", "estate", "building"], ["date"]];
			}
		},
		showFilterList: {
			type: Array,
			default: function() {
				return ["meterId", "mac", "house", "time"];
			}
		}
	},
	data() {
		return {
			isBusy: false,
			lpCycleList: [],
			lpCycleFields: [
				{
					key: "estateName",
					label: this.$t("component.content.table.estateName")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "mac",
					label: this.$t("component.content.table.mac")
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
					label: this.$t("component.content.table.day"),
					dateable: true
				},
				{
					key: "time",
					label: this.$t("component.content.table.time")
				},
				{
					key: "fap",
					label: this.$t("component.content.table.fap")
				},
				{
					key: "rfap",
					label: this.$t("component.content.table.rfap")
				}
			]
		};
	},
	methods: {
		async getLpCycleList(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpCycleList(params);
				const result = response.data.response;
				this.lpCycleList = result;
			} catch (error) {
				const result = [];
				this.lpCycleList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			searchItem.day = searchItem.date;
			this.getLpCycleList(searchItem);
		}
	}
};
</script>

<style></style>
