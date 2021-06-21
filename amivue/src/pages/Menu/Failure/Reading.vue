<template>
	<div class="main-bg content">
		<content-header :pageName="pageName" :paths="paths" />
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div class="table-wrap">
			<div class="bgtable">
				<content-table
					:isBusy="isBusy"
					:items="readingList"
					:fields="readingFields"
					:isPerPage="true"
					:showFilterList="showFilterList"
					:excelFileName="$t('reading.excelFileName')"
					:excelSheetName="$t('menu.failure.reading')"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import Reading from "@/service/reading";
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
				return ["region", "estate"];
			}
		}
	},
	data() {
		return {
			pageName: this.$t("menu.failure.reading"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.failure.title") },
				{ name: this.$t("menu.failure.reading") }
			],
			readingList: [],
			readingFields: [
				// {
				// 	key: "regionName",
				// 	label: this.$t("component.content.table.regionName")
				// },
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
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "meterTime",
					label: this.$t("component.content.table.recentlyReadingTime")
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
					key: "status",
					label: this.$t("component.content.table.readingStatus")
				}
			]
		};
	},
	methods: {
		async getReadingList(params) {
			try {
				this.isBusy = true;
				const response = await Reading.list(params);
				const result = response.data.response;
				this.readingList = result;
			} catch (error) {
				const result = [];
				this.readingList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			this.getReadingList(searchItem);
		}
	}
};
</script>
