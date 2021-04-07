<template>
	<div class="main-bg content">
		<add-building></add-building>
		<content-header :pageName="pageName" :paths="paths" />
		<content-search @handle:searchItem="searchBuildingList"> </content-search>
		<content-table
			:busy="isBusy"
			:items="tableFilterList"
			:fields="tableFields"
			:perpage="true"
			:filter="filterList"
			@update:selected="callbackEvent"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addMapping'" variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}</b-button>
			</template>
			<template v-slot:table-header-right> </template>
			<template #table-cell-remark>
				{{ $t("estate.details") }}
			</template>
		</content-table>
	</div>
</template>
<script>
import Search from "@/service/search";
import Building from "@/service/building";
import AddBuilding from "@/components/modal/addBuilding";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	components: { AddBuilding },
	created() {
		Search.region()
			.then(({ data }) => {
				this.regionList = data.response;

				if (this.regionList.length > 0) {
					this.searchEstates(0);
				}
			})
			.catch(error => {
				console.log(error);
			});
	},
	computed: {
		tableFilterList() {
			if (this.filterRegion != "0") {
				return this.tableList.filter(region => region.regionSeq == this.filterRegion);
			} else {
				return this.tableList;
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
			pageName: this.$t("menu.device.building"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.building") }],
			tableList: [],
			tableFields: [
				{
					key: "regionName",
					label: this.$t("building.table.regionName")
				},
				{
					key: "estateName",
					label: this.$t("building.table.estateName")
				},
				{
					key: "building",
					label: this.$t("building.table.building")
				},
				{
					key: "dcuId",
					label: this.$t("building.table.dcuId")
				},
				{
					key: "dataLinkage",
					label: this.$t("building.table.dataLinkage")
				},
				{
					key: "_ramark",
					label: ""
				}
			]
		};
	},
	methods: {
		async searchEstates(value) {
			this.filterRegion = value;
			const response = await Search.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.estates = result;
			// this.filterText = "";	// reactive 미작동 오류..ㅠㅠ
		},
		async searchBuildingList() {
			this.isBusy = true;

			try {
				await Building.list();
			} catch (error) {
				const result = [];
				this.buildingList = result;
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
