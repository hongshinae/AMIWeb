<template>
	<div class="main-bg content">
		<add-building @handle:searchItem="searchItemList"></add-building>
		<detail-building :item="selectedItem" @handle:searchItem="searchItemList"></detail-building>
		<content-header :pageName="pageName" :paths="paths" />
		<content-search @handle:searchItem="searchItemList"> </content-search>
		<content-table
			:isBusy="isBusy"
			:items="buildingList"
			:fields="buildingFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
			@handle:selectedItem="handleSelectedItem"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addBuilding'" variant="light">
					<b-icon icon="pencil-fill"></b-icon>
					{{ $t("building.button.add") }}
				</b-button>
			</template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>
<script>
import Building from "@/service/building";
import AddBuilding from "@/components/modal/addBuilding";
import DetailBuilding from "@/components/modal/detailBuilding";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		showFilterList: {
			type: Array,
			default: function() {
				return ["region", "estate"];
			}
		}
	},
	components: { AddBuilding, DetailBuilding },
	mounted() {
		// this.getBuildingList();
	},
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.building") }
			],
			buildingList: [],
			buildingFields: [
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
					key: "dcuMapp",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "systemState",
					label: this.$t("component.content.table.systemState")
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
		async getBuildingList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await Building.list(params);
				const result = response.data.response;
				this.buildingList = result;
			} catch (error) {
				const result = [];
				this.buildingList = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleSelectedItem(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("detailBuilding");
		},
		searchItemList: function(searchItem) {
			this.getBuildingList(searchItem);
		}
	}
};
</script>
