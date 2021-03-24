<template>
	<div class="main-bg">
		<add-estate></add-estate>
		<content-header :paths="paths" :pageName="pageName" />
		<content-search :isLazySearch="true" @update:searchItem="searchEstateList">
			<b-row>
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.area") }}</label>
						</b-col>
						<b-col lg="8">
							<b-select
								v-model="regionSelected"
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
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.estateName") }}</label>
						</b-col>
						<b-col lg="8">
							<b-form-input id="filterInput" type="search" placeholder="ex) 그랑시아 아파트" class="form-control" list="estates" />
							<b-form-datalist id="estates" :options="estates" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</content-search>
		<content-table>
			<template #table-header-left>
				<button type="button" class="btn btn-primary" v-b-modal.addEstate>
					<icon-base viewBox="0 0 16 16" width="1em" height="1em" icon-color="" icon-name="pencil" cls="bi-pencil-fill mx-auto b-icon bi">
						<icon-pencil />
					</icon-base>
					{{ $t("estate.add") }}
				</button>
			</template>
			<template v-slot:table-header-right>
				<button type="button" class="btn btn-light btn-excel">
					<icon-base viewBox="0 0 30 30" width="10px" height="10px" icon-name="excel" cls="bi-pencil-fill mx-auto b-icon bi">
						<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
						<polyline
							fill="#FFFFFF"
							points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
						/>
					</icon-base>
					{{ $t("estate.excelDownload") }}
				</button>
				<b-dropdown right :text="pageSelected" class="btn-light">
					<b-dropdown-item v-for="(value, index) in pages" :key="index" @click="changePageCount">{{ value }}</b-dropdown-item>
				</b-dropdown>
				<!--<b-select v-model="pageSelected" :options="pageList" />버튼 그룹 안에서는 셀렉트 사용 안됨-->
			</template>
			<template #table-main>
				<b-table :striped="true" :busy.sync="isBusy" :items="searchEstateList" :fields="estateFields" show-empty>
					<template #table-busy>
						<div class="text-center text-danger my-2">
							<b-spinner class="align-middle"></b-spinner>
							<strong>Loading...</strong>
						</div>
					</template>
					<template #empty="scope">
						<h4>{{ $t("msg.search.emptyText") || scope.emptyText }}</h4>
					</template>
					<template #emptyfiltered="scope">
						<h4>{{ $t("msg.search.emptyFilteredText") || scope.emptyFilteredText }}</h4>
					</template>
				</b-table>
			</template>
		</content-table>
	</div>
</template>
<script>
import Vue from "vue";
import Estate from "@/service/estate";
import AddEstate from "@/components/modal/addEstate";
import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

import IconSearch from "@/components/icons/IconSearch";
import IconHomeUp from "@/components/icons/IconHomeUp";
import IconHomeDown from "@/components/icons/IconHomeDown";
import IconPencil from "@/components/icons/IconPencil";

Vue.component(AddEstate);
Vue.component(ContentHeader);
Vue.component(ContentSearch);
Vue.component(ContentTable);
Vue.component("icon-search", IconSearch);
Vue.component("icon-home-up", IconHomeUp);
Vue.component("icon-home-down", IconHomeDown);
Vue.component("icon-pencil", IconPencil);

export default {
	props: { pageNumber: { default: 1 } },
	components: { AddEstate, ContentHeader, ContentSearch, ContentTable },
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
	mounted() {},
	data() {
		return {
			isBusy: false,
			pageName: this.$t("menu.device.estate"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.estate") }
			],
			totalRows: 0,
			currentPage: 1,
			regionSelected: 0,
			regionList: null,
			pageSelected: "15",
			pages: ["10", "15", "20", "30", "50"],
			estates: [],
			estateList: null,
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
					sortDirection: "asc"
				},
				{
					key: "houseCount",
					label: this.$t("estate.table.houseCount"),
					sortable: true,
					sortDirection: "desc"
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
					label: this.$t("estate.table.deviceCount"),
					sortable: true,
					sortDirection: "desc"
				},
				{
					key: "meteringTypeCount",
					label: this.$t("estate.table.meteringTypeCount")
				},
				{
					key: "",
					label: ""
					// ,formatter: "methodName"
				}
			]
		};
	},
	methods: {
		changeRegion(value) {
			this.searchEstates(value);
		},
		changePageCount(event) {
			this.pageSelected = event.target.text;
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

				return result;
			} catch (error) {
				const result = [];
				this.totalRows = result.length;

				return result;
			} finally {
				this.isBusy = false;
			}
		}
	}
};
</script>
<style>
table.b-table[aria-busy="true"] {
	opacity: 0.6;
}
table.b-table .flip-list-move {
	transition: transform 1s;
}
</style>
