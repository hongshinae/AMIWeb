<template>
	<div class="main-bg">
		<add-estate id="addEstate"></add-estate>
		<content-header :paths="paths" :pageName="pageName" />
		<!-- <content-search :isLazySearch="true" @update:searchItem="searchEstateList">
			<b-row>
				<b-col xl="3" md="12" sm="12">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.region") }}</label>
						</b-col>
						<b-col lg="8">
							<b-select
								v-model.number="filterRegion"
								class="form-control"
								value-field="regionSeq"
								text-field="regionName"
								:options="regionList"
								@change="changeRegion"
							>
							</b-select>
						</b-col>
					</b-row>
				</b-col>
				<b-col xl="3" md="12" sm="12">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.estateName") }}</label>
						</b-col>
						<b-col lg="8">
							<b-form-input
								id="filterEstate"
								v-model="filterEstate"
								type="search"
								:placeholder="placeholder"
								class="form-control"
								list="estates"
							/>
							<b-form-datalist id="estates" autocomplete="off" :options="estates"> </b-form-datalist>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</content-search> -->
		<content-table :busy="isBusy" :items="estateList" :fields="estateFields" :perpage="true">
			<template #table-header-left> </template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>
<script>
import Vue from "vue";
import Estate from "@/service/estate";
import AddEstate from "@/components/modal/addEstate";
import ContentHeader from "@/components/content/ContentHeader";
// import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

import IconSearch from "@/components/icons/IconSearch";
import IconHomeUp from "@/components/icons/IconHomeUp";
import IconHomeDown from "@/components/icons/IconHomeDown";
import IconPencil from "@/components/icons/IconPencil";

Vue.component(AddEstate);
Vue.component(ContentHeader);
// Vue.component(ContentSearch);
Vue.component(ContentTable);
Vue.component("icon-search", IconSearch);
Vue.component("icon-home-up", IconHomeUp);
Vue.component("icon-home-down", IconHomeDown);
Vue.component("icon-pencil", IconPencil);

export default {
	components: { AddEstate, ContentHeader, /* ContentSearch ,*/ ContentTable },
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
				return this.$t("msg.filter.estate").replace(
					"{}",
					this.regionList[this.filterRegion] ? this.regionList[this.filterRegion].regionName : "unknown"
				);
			}
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
			estateList: [],
			estateFields: [
				{
					key: "estateId",
					label: this.$t("estate.table.estateId"),
					sortable: true,
					sortDirection: "asc",
					hasFilter: true
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
					sortDirection: "asc",
					hasFilter: true
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
			estates: []
		};
	},
	methods: {
		changeRegion(value) {
			this.searchEstates(value);
		},
		async searchEstates(value) {
			const response = await Estate.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.estates = result;
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
		}
	}
};
</script>
<style></style>
