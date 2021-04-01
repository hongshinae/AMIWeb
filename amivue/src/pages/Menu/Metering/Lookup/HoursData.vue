<template>
	<div>
		<content-search>여기다가 검색영역 태그 작업 </content-search>
		<div>그래프 넣는 영역</div>
		<content-table
			:busy="isBusy"
			:items="lookupFilterList"
			:fields="lookupFields"
			:perpage="true"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
		>
			<template #table-header-left-head> </template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>

<script>
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { ContentSearch, ContentTable },
	computed: {
		lookupFilterList() {
			return [
				{
					dcuId: "test",
					meterId: "test2",
					dtime: "test3",
					demand: "test4",
					etime: "test5",
					acc: "test6",
					demanda: "test7",
					etimea: "test8",
					acca: "test10"
				}
			];
		}
	},
	data() {
		return {
			isBusy: false,
			lookupFields: [
				{
					key: "dcuId",
					label: this.$t("lookup.table.dcuId")
				},
				{
					key: "meterId",
					label: this.$t("lookup.table.meterId")
				},
				{
					key: "dtime",
					label: this.$t("lookup.table.dtime")
				},
				{
					key: "demand",
					label: this.$t("lookup.table.demand")
				},
				{
					key: "etime",
					label: this.$t("lookup.table.etime")
				},
				{
					key: "acc",
					label: this.$t("lookup.table.acc")
				},
				{
					key: "demanda",
					label: this.$t("lookup.table.demanda")
				},
				{
					key: "etimea",
					label: this.$t("lookup.table.etimea")
				},
				{
					key: "acca",
					label: this.$t("lookup.table.acca")
				}
			]
		};
	}
};
</script>

<style></style>
