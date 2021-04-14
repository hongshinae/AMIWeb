<template>
	<div>
		<add-equipment-dcu></add-equipment-dcu>
		<!-- <detail-equipment-dcu></detail-equipment-dcu> -->
		<content-search @handle:searchItem="searchItemList"> </content-search>
		<content-table
			:isBusy="isBusy"
			:items="dcuList"
			:fields="dcuFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('equipment.dcu.excelFileName')"
			:excelSheetName="$t('equipment.tab.dcu')"
			@handle:selectedItem="handleSelectedItem"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addEquipmentDcu'" variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("equipment.button.add") }}</b-button>
			</template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>
<script>
import EquipmentDcu from "@/service/equipment/dcu";
import ContentMixin from "@/components/content/mixin";
import AddEquipmentDcu from "@/components/modal/addEquipmentDcu";
// import DetailEquipmentDcu from "@/components/modal/detailEquipmentDcu";

export default {
	mixins: [ContentMixin],
	props: {
		showFilterList: {
			type: Array,
			default: function() {
				return ["dcuId", "firmware"];
			}
		}
	},
	components: {
		AddEquipmentDcu /*, DetailEquipmentDcu */
	},
	data() {
		return {
			dcuList: [],
			dcuFields: [
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
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "dcuIp",
					label: this.$t("component.content.table.dcuIp")
				},
				{
					key: "fepIp",
					label: this.$t("component.content.table.fepIp")
				},
				{
					key: "firmwareVersion",
					label: this.$t("component.content.table.firmwareVersion")
				},
				{
					key: "modemCount",
					label: this.$t("component.content.table.modemCount")
				},
				{
					key: "meterCount",
					label: this.$t("component.content.table.meterCount")
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
		async getDcuList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await EquipmentDcu.list(params);
				const result = response.data.response;
				this.dcuList = result;
			} catch (error) {
				const result = [];
				this.dcuList = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleSelectedItem(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("detailEquipmentDcu");
		},
		searchItemList: function(searchItem) {
			this.getDcuList(searchItem);
		}
	}
};
</script>
