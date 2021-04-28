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
				return [["region", "estate", "building", "date"]];
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
			lpDurationList: [],
			lpDurationFields: [
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "dtime",
					label: this.$t("component.content.table.dtime")
				},
				{
					key: "demand",
					label: this.$t("component.content.table.demand")
				},
				{
					key: "etime",
					label: this.$t("component.content.table.etime")
				},
				{
					key: "acc",
					label: this.$t("component.content.table.acc")
				},
				{
					key: "demanda",
					label: this.$t("component.content.table.demanda")
				},
				{
					key: "etimea",
					label: this.$t("component.content.table.etimea")
				},
				{
					key: "acca",
					label: this.$t("component.content.table.acca")
				}
			]
		};
	},
	methods: {
		async getLpDurationList(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpHourList(params);
				const result = response.data.response;
				this.regularList = result;
			} catch (error) {
				const result = [];
				this.regularList = result;
			} finally {
				this.isBusy = false;
			}
		},
		async getLpHoursChart(params) {
			try {
				this.isBusy = true;
				const response = await Lookup.lpHoursChart(params);
				const result = response.data.response;
				this.regularList = result;
			} catch (error) {
				const result = [];
				this.regularList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			this.getLpDurationList(searchItem);
		}
	}
};
</script>

<style></style>
