<template>
	<div class="main-bg">
		<add-estate :regionList="regionList" @update:search-estate-list="searchEstateList" />
		<detail-estate :regionList="regionList" :item="selectedItem" />
		<content-header :paths="paths" :pageName="pageName" />
		<content-table
			:busy="isBusy"
			:items="estateFilterList"
			:fields="estateFields"
			:perpage="true"
			:filter="filterList"
			@update:selected="callbackEvent"
			@handle:selectedItem="handleSelectedItem"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
			:detailModalId="'detailEstate'"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addEstate'" variant="light" :disabled="regionList.length == 0">
					<b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}
				</b-button>
			</template>
			<template v-slot:table-header-right> </template>
			<template #table-cell-remark>
				{{ $t("estate.details") }}
			</template>
		</content-table>
	</div>
</template>
<script>
import Estate from "@/service/estate";
import AddEstate from "@/components/modal/addEstate";
import DetailEstate from "@/components/modal/detailEstate";
import ContentHeader from "@/components/content/ContentHeader";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { AddEstate, DetailEstate, ContentHeader, ContentTable },
	created() {
		Estate.region()
			.then(({ data }) => {
				this.regionList = data.response;

				if (this.regionList.length > 0) {
					this.searchEstates(this.regionList[0].regionSeq);
				}
			})
			.catch(error => {
				console.log(error);
			});
	},
	mounted() {
		this.searchEstateList();
	},
	computed: {
		placeholder: function() {
			if (this.estates != 0) {
				return this.$t("estate.placeholder.estate");
			} else {
				return this.$t("msg.filter.estateEmpty").replace(
					"{}",
					this.regionList[this.filterRegion] ? this.regionList[this.filterRegion].regionName : "unknown"
				);
			}
		},
		estateFilterList: function() {
			if (this.filterRegion != "0") {
				return this.estateList.filter(region => region.regionSeq == this.filterRegion);
			} else {
				return this.estateList;
			}
		},
		filterList: function() {
			return [
				{
					label: this.$t("estate.filter.region"),
					type: Array,
					options: this.regionList,
					textField: "regionName",
					valueField: "regionSeq",
					eventName: "region",
					filterFieldKey: "regionName"
				},
				{
					label: this.$t("estate.filter.estateName"),
					type: String,
					text: this.filterText,
					options: this.estates,
					textField: "estateName",
					valueField: "estateSeq",
					eventName: "estate",
					placeholder: this.placeholder
				}
			];
		}
	},
	data() {
		return {
			isBusy: false,
			pageName: this.$t("menu.device.estate"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.estate") }
			],
			regionList: [],
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
			estates: [],
			filterText: "",
			filterRegion: "",
			selectedItem: null
		};
	},
	methods: {
		async searchEstates(value) {
			this.filterRegion = value;
			const response = await Estate.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.estates = result;
			// this.filterText = "";	// reactive 미작동 오류..ㅠㅠ
		},
		async searchEstateList() {
			this.isBusy = true;

			try {
				const response = await Estate.estateList();
				const result = response.data.response;
				this.totalRows = result.length;
				this.estateList = result;
			} catch (error) {
				const result = [];
				this.totalRows = result.length;
				this.estateList = result;
			} finally {
				this.isBusy = false;
			}
		},
		callbackEvent({ eventName, value }) {
			if (eventName == "region") {
				this.searchEstates(value);
			} else if (eventName == "estate") {
				this.filterText = value;
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
