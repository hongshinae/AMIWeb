<template>
	<div class="main-bg">
		<add-estate @handle:search-estate-list="getEstateList" />
		<detail-estate :item="selectedItem" />
		<content-header :paths="paths" :pageName="pageName" />
		<content-table
			:isBusy="isBusy"
			:items="estateList"
			:fields="estateFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
			@handle:selectedItem="handleSelectedItem"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addEstate'" variant="light">
					<b-icon icon="pencil-fill"></b-icon>
					{{ $t("estate.button.add") }}
				</b-button>
			</template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>
<script>
import Estate from "@/service/estate";
import AddEstate from "@/components/modal/addEstate";
import DetailEstate from "@/components/modal/detailEstate";
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
	components: { AddEstate, DetailEstate },
	created() {},
	mounted() {
		this.getEstateList();
	},
	data() {
		return {
			pageName: this.$t("menu.device.estate"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.estate") }
			],
			estateList: [],
			estateFields: [
				{
					key: "estateId",
					label: this.$t("estate.table.estateId"),
					sortable: true,
					sortDirection: "asc"
				},
				{
					key: "estateName",
					label: this.$t("estate.table.estateName"),
					sortable: true,
					sortDirection: "asc",
					hasFilter: true
				},
				{
					key: "houseCount",
					label: this.$t("estate.table.houseCount")
				},
				{
					key: "regionName",
					label: this.$t("estate.table.regionName"),
					sortable: true,
					sortDirection: "asc"
				},
				{
					key: "address",
					label: this.$t("estate.table.address")
				},
				{
					key: "deviceCount",
					label: this.$t("estate.table.deviceCount")
				},
				{
					key: "meteringTypeCount",
					label: this.$t("estate.table.meteringTypeCount")
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
		async getEstateList() {
			this.isBusy = true;

			try {
				const response = await Estate.list();
				const result = response.data.response;
				this.estateList = result;
			} catch (error) {
				const result = [];
				this.estateList = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleSelectedItem(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("detailEstate");
		}
	}
};
</script>
<style></style>
