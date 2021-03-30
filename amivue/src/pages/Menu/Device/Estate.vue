<template>
	<div class="main-bg">
		<add-estate></add-estate>
		<content-header :paths="paths" :pageName="pageName" />
		<content-table :busy="isBusy" :items="estateFilterList" :fields="estateFields" :perpage="true" :filter="filterList" @update:selected="callbackEvent">
			<template #table-header-left>
				<b-button v-b-modal="'addEstate'" variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}</b-button>
				<b-button-group>
					<b-button variant="light btn-excel">
						<icon-base viewBox="0 0 30 30" width="10px" height="10px" icon-name="excel" cls="bi-pencil-fill mx-auto b-icon bi">
							<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
							<polyline
								fill="#FFFFFF"
								points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
							/>
						</icon-base>
						{{ $t("estate.button.excelDownload") }}
					</b-button>
					<b-button variant="light">{{ $t("estate.button.allInterlink") }}</b-button>
				</b-button-group>
				<b-button variant="light">{{ $t("estate.button.save") }}</b-button>
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
import ContentHeader from "@/components/content/ContentHeader";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { AddEstate, ContentHeader, ContentTable },
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
			return this.estateList;
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
					key: "remark",
					label: this.$t("estate.table.remark")
				}
			],
			estates: [],
			filterText: "",
			filterRegion: ""
		};
	},
	methods: {
		async searchEstates(value) {
			const response = await Estate.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.estates = result;
			this.filterText = "";
			this.filterRegion = value;
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
		}
	}
};
</script>
<style></style>
