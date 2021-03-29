<template>
	<div class="main-bg">
		<add-estate></add-estate>
		<content-header :paths="paths" :pageName="pageName" />
		<content-search :isLazySearch="true" @update:searchItem="searchEstateList">
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
				<b-dropdown right :text="perPage" class="btn-light">
					<b-dropdown-item v-for="(value, index) in pages" :key="index" @click="changePageCount">{{ value }}</b-dropdown-item>
				</b-dropdown>
			</template>
			<template #table-main>
				<b-table
					:striped="true"
					:busy.sync="isBusy"
					:items="estateList"
					:fields="estateFields"
					:current-page="currentPage"
					:per-page="perPage"
					:filter="filterEstate"
					:filter-included-fields="filterTargetFields"
					@filtered="onFiltered"
					show-empty
				>
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
					<template #cell(remark)="row">
						<b-button @click="info(row.item, row.index, $event.target)" variant="outline-primary" size="sm">
							{{ $t("estate.details") }}
						</b-button>
						<!-- <b-button size="sm" @click="row.toggleDetails"> {{ row.detailsShowing ? "Hide" : "Show" }} Details </b-button> -->
					</template>
				</b-table>
			</template>
			<template #table-footer-pagination>
				<b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" :limit="10">
					<template #first-text><span class="text-success">«</span></template>
					<template #prev-text><span class="text-danger">‹</span></template>
					<template #next-text><span class="text-warning">›</span></template>
					<template #last-text><span class="text-info">»</span></template>
				</b-pagination>
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
	props: { pageNumber: { type: Number, default: 1 } },
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
		},
		filterTargetFields: function() {
			const filters = this.estateFields.filter(item => {
				return item.hasFilter;
			});
			console.log(filters);
			return filters.map(item => item.key);
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
			totalRows: 1,
			currentPage: 1,
			regionList: [],
			filterRegion: 0,
			filterEstate: "",
			perPage: "15",
			pages: ["10", "15", "20", "30", "50"],
			estates: [],
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
					label: this.$t("estate.table.houseCount"),
					sortable: true,
					sortDirection: "desc"
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
					label: this.$t("estate.table.deviceCount"),
					sortable: true,
					sortDirection: "desc"
				},
				{
					key: "meteringTypeCount",
					label: this.$t("estate.table.meteringTypeCount")
				},
				{
					key: "remark",
					label: this.$t("estate.table.remark")
				}
			]
		};
	},
	methods: {
		changeRegion(value) {
			this.searchEstates(value);
		},
		changePageCount(event) {
			this.perPage = event.target.text;
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
		},
		onFiltered(filteredItems) {
			// 필터링으로 인해 페이지 매김을 트리거하여 버튼 / 페이지 수 업데이트
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
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
