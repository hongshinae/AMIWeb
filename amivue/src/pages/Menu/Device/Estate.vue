<template>
	<div class="main-bg">
		<!-- <icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
			<icon-search />
		</icon-base> -->
		<b-modal id="addEstate" size="lg" title="First Modal" ok-only no-stacking>
			<p class="my-2">First Modal</p>
			<b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
		</b-modal>
		<content-header :paths="paths" :pageName="pageName" />
		<content-search>
			<b-row>
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.area") }}</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected" class="form-control">
								<b-form-select-option v-for="(path, i) in estateList" :key="i" :value="path.regionSeq" default>
									{{ path.regionName }}
								</b-form-select-option>
							</b-form-select>
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
			<template v-slot:header-left-icon>
				<icon-pencil />
			</template>
			<template #header-left-name>
				{{ $t("estate.add") }}
			</template>
			<template #header-right-icon>
				<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
				<polyline
					fill="#FFFFFF"
					points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
				/>
			</template>
			<template v-slot:header-right-name>
				{{ $t("estate.excelDownload") }}
			</template>
		</content-table>
	</div>
</template>
<script>
import Vue from "vue";
import Estate from "@/service/estate";
import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

import IconSearch from "@/components/icons/IconSearch";
import IconHomeUp from "@/components/icons/IconHomeUp";
import IconHomeDown from "@/components/icons/IconHomeDown";
import IconPencil from "@/components/icons/IconPencil";

Vue.component(ContentHeader);
Vue.component(ContentSearch);
Vue.component(ContentTable);
Vue.component("icon-search", IconSearch);
Vue.component("icon-home-up", IconHomeUp);
Vue.component("icon-home-down", IconHomeDown);
Vue.component("icon-pencil", IconPencil);

export default {
	props: { pageNumber: { default: 1 } },
	components: { ContentHeader, ContentSearch, ContentTable },
	created() {
		Estate.region()
			.then(({ data }) => {
				this.estateList = data.response;
				this.selected = data.response[0].regionSeq;
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	},
	data() {
		return {
			pageName: this.$t("menu.device.estate"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.estate") }],
			selected: null,
			estateList: Array
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
