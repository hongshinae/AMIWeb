<template>
	<div>
		<detail-equipment-other></detail-equipment-other>
		<content-search @handle:searchItem="searchItemList"> </content-search>
		<content-table
			:isBusy="isBusy"
			:items="otherList"
			:fields="otherFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('equipment.other.excelFileName')"
			:excelSheetName="$t('equipment.tab.other')"
			@handle:selectedItem="handleSelectedItem"
		>
			<template #table-header-left-head> </template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>
<script>
import EquipmentOther from "@/service/equipment/other";
import ContentMixin from "@/components/content/mixin";
import DetailEquipmentOther from "@/components/modal/detailEquipmentOther";

export default {
	mixins: [ContentMixin],
	props: {
		showFilterList: {
			type: Array,
			default: function() {
				return ["building", "gateway"];
			}
		}
	},
	components: {
		DetailEquipmentOther
	},
	mounted() {
		this.getOtherList();
	},
	data() {
		return {
			otherList: [],
			otherFields: [
				{
					key: "regionName",
					label: this.$t("component.content.table.regionName"),
					sortable: true,
					sortDirection: "asc"
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
					key: "gatewayId",
					label: this.$t("component.content.table.gatewayId")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "updateDate",
					label: this.$t("component.content.table.updateDate")
				},
				{
					key: "meterType",
					label: this.$t("component.content.table.meterType")
				},
				{
					key: "_remark",
					label: ""
				}
			],
			selectedItem: null
		};
	},
	methods: {
		async getOtherList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await EquipmentOther.list(params);
				const result = response.data.response;
				this.otherList = result;
			} catch (error) {
				const result = [];
				this.otherList = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleSelectedItem(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("detailEquipmentOther");
		},
		searchItemList: function(searchItem) {
			this.getOtherList(searchItem);
		}
	}
};
</script>
