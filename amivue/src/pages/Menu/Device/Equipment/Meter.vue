<template>
	<div>
		<detail-equipment-meter :item="selectedItem" @handle:searchItem="searchItemList"></detail-equipment-meter>
		<content-search @handle:searchItem="searchItemList"> </content-search>
		<content-table
			:isBusy="isBusy"
			:items="meterList"
			:fields="meterFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('equipment.meter.excelFileName')"
			:excelSheetName="$t('equipment.tab.meter')"
			@handle:selectedItem="handleSelectedItem"
		>
		</content-table>
	</div>
</template>
<script>
import EquipmentMeter from "@/service/equipment/meter";
import ContentMixin from "@/components/content/mixin";
import DetailEquipmentMeter from "@/components/modal/detailEquipmentMeter";

export default {
	mixins: [ContentMixin],
	props: {
		showFilterList: {
			type: Array,
			default: function() {
				return ["dcuId", "meterId", "readingDay"];
			}
		}
	},
	components: { DetailEquipmentMeter },
	mounted() {
		this.getMeterList();
	},
	data() {
		return {
			meterList: [],
			meterFields: [
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
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "mac",
					label: this.$t("component.content.table.mac")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "readingDay",
					label: this.$t("component.content.table.readingDay")
				},
				{
					key: "updateDate",
					label: this.$t("component.content.table.updateDate")
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
		async getMeterList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await EquipmentMeter.list(params);
				const result = response.data.response;
				this.meterList = result;
			} catch (error) {
				const result = [];
				this.meterList = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleSelectedItem(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("detailEquipmentMeter");
		},
		searchItemList: function(searchItem) {
			this.getMeterList(searchItem);
		}
	}
};
</script>
