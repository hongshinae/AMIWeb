<template>
	<div class="main-bg content">
		<content-header :pageName="pageName" :paths="paths" />
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div class="table-wrap">
			<div class="bgtable">
				<content-table
					:isBusy="isBusy"
					:items="regularList"
					:fields="regularFields"
					:isPerPage="true"
					:showFilterList="showFilterList"
					:excelFileName="$t('regular.excelFileName')"
					:excelSheetName="$t('menu.metering.regular')"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import Regular from "@/service/regular";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		shows: {
			type: Array,
			default: function() {
				return [["region", "estate", "month"]];
			}
		},
		showFilterList: {
			type: Array,
			default: function() {
				return ["region", "estate"];
			}
		}
	},
	data() {
		return {
			pageName: this.$t("menu.metering.regular"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.metering.title") },
				{ name: this.$t("menu.metering.regular") }
			],
			regularList: [],
			regularFields: [
				{
					key: "buildingName",
					label: this.$t("component.content.table.buildingName")
				},
				{
					key: "houseName",
					label: this.$t("component.content.table.houseName")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "meterReadingDay",
					label: this.$t("component.content.table.meterReadingDay")
				},
				{
					key: "to_meterTime",
					label: this.$t("component.content.table.to_meterTime")
				},
				{
					key: "to_apt1",
					label: this.$t("component.content.table.to_apt1")
				},
				{
					key: "to_rapt1",
					label: this.$t("component.content.table.to_rapt1")
				},
				{
					key: "from_meterTime",
					label: this.$t("component.content.table.from_meterTime")
				},
				{
					key: "from_apt1",
					label: this.$t("component.content.table.from_apt1")
				},
				{
					key: "from_rapt1",
					label: this.$t("component.content.table.from_rapt1")
				},
				{
					key: "use",
					label: this.$t("component.content.table.use")
				},
				{
					key: "readingDayCompare",
					label: this.$t("component.content.table.readingDayCompare")
				},
				{
					key: "readingStatus",
					label: this.$t("component.content.table.readingStatus")
				}
			]
		};
	},
	methods: {
		async getRegularList(params) {
			try {
				this.isBusy = true;
				const response = await Regular.list(params);
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
			searchItem.yearMonth = this.$moment(searchItem.month).format("YYYYMM");
			this.getRegularList(searchItem);
		}
	}
};
</script>
