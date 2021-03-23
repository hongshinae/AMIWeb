<template>
	<div class="main-bg">
		<!-- <icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
			<icon-search />
		</icon-base> -->
		<add-estate></add-estate>
		<content-header :paths="paths" :pageName="pageName" />
		<content-search @search-item="searchItem">
			<b-row>
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.area") }}</label>
						</b-col>
						<b-col lg="8">
							<b-select v-model="selected" class="form-control" value-field="regionSeq" text-field="regionName" :options="regionList">
								<!-- <b-form-select-option v-for="(path, i) in estateList" :key="i" :value="path.regionSeq" default>
									{{ path.regionName }}
								</b-form-select-option> -->
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
							<b-form-input placeholder="그랑시아 아파트" class="form-control"></b-form-input>
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
				<b-select v-model="pageSelected" :options="pageList" />
			</template>
			<template #table-main>
				<b-table :striped="true" :items="estateList" :fields="estateFields"> </b-table>
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
			})
			.catch(error => {
				console.log(error);
			});
	},
	mounted() {
		Estate.estateList()
			.then(({ data }) => {
				this.estateList = data.response;
				console.log(this.estateList);
			})
			.catch(error => {
				console.log(error);
			});
	},
	data() {
		return {
			pageName: this.$t("menu.device.estate"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.estate") }],
			selected: 0,
			pageSelected: 15,
			pageList: [
				{ text: 10, value: 10 },
				{ text: 15, value: 15 },
				{ text: 20, value: 20 },
				{ text: 30, value: 30 },
				{ text: 50, value: 50 }
			],
			regionList: null,
			estateList: null,
			estateFields: [
				{
					key: "estateSeq",
					label: "SI_ID",
					class: "si_id_test"
				},
				{
					key: "estateName",
					label: "단지(아파트,상가)명"
				},
				{
					key: "houseCount",
					label: "세대수"
				},
				{
					key: "regionName",
					label: "지역"
				},
				{
					key: "address",
					label: "주소"
				},
				{
					key: "buildCount",
					label: "설치 장비수"
				},
				{
					key: "checkCount",
					label: "검침타입"
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
		searchItem() {
			Estate.estateList()
				.then(({ data }) => {
					console.log(data);
				})
				.catch(error => {
					console.log(error);
					throw error;
				});
		}
	}
};
</script>
<style>
b-table[aria-busy="true"] {
	opacity: 0.6;
}
</style>
