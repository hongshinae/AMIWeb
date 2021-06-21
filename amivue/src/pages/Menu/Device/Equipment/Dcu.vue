<template>
	<div>
		<add-equipment-dcu @handle:searchItem="searchItemList" />
		<detail-equipment-dcu :item="selectedItem" @handle:searchItem="searchItemList" />
		<content-search @handle:searchItem="searchItemList" @handle:customSearch="searchNoMappingList" :useCustomButton="true" />
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
		</content-table>
	</div>
</template>
<script>
import EquipmentDcu from "@/service/equipment/dcu";
import ContentMixin from "@/components/content/mixin";
import AddEquipmentDcu from "@/components/modal/addEquipmentDcu";
import DetailEquipmentDcu from "@/components/modal/detailEquipmentDcu";

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
	components: { AddEquipmentDcu, DetailEquipmentDcu },
	mounted() {},
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
					key: "routerIp",
					label: this.$t("component.content.table.routerIp")
				},
				{
					key: "firmwareVersion",
					label: this.$t("component.content.table.firmwareVersion")
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
		},
		searchNoMappingList: function() {
			this.getDcuList({ region: 0, estate: 0 });
		}
	}
};
</script>
