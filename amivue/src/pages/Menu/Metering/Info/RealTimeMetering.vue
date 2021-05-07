<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList" />
		<content-table
			:isBusy="isBusy"
			:items="realtimeList"
			:fields="realtimeFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('info.tab.realtime')"
		>
		</content-table>
	</div>
</template>

<script>
import Realtime from "@/service/info/realtime";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		shows: {
			type: Array,
			default: function() {
				return [["region", "estate"]];
			}
		},
		showFilterList: {
			type: Array,
			default: function() {
				return ["building", "house", "meterId"];
			}
		}
	},
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.building") }
			],
			realtimeList: [],
			realtimeFields: [
				{
					key: "regionName",
					label: this.$t("component.content.table.regionName")
				},
				{
					key: "estateName",
					label: this.$t("component.content.table.estateName")
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
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "mac",
					label: this.$t("component.content.table.mac")
				},
				{
					key: "meterTime",
					label: this.$t("component.content.table.recentlyReadingTime"),
					sortable: true,
					sortDirection: "desc",
					datetimeable: true
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
		async getRealtimeList(params) {
			try {
				this.isBusy = true;
				const response = await Realtime.realtime(params);
				const result = response.data.response;
				this.realtimeList = result;
			} catch (error) {
				const result = [];
				this.realtimeList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			this.getRealtimeList(searchItem);
		}
	}
};
</script>

<style></style>
