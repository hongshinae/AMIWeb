<template>
	<div class="main-bg content">
		<add-mapping></add-mapping>
		<content-header :paths="paths" :pageName="pageName" />
		<b-row class="row-wrap">
			<b-col col lg="12" xl="4">
				<div class="wbox m-b-20">
					<div class="one-row">
						<b-form-group label="검침 타입" label-for="">
							<b-form-select v-model="meterType" disabled>
								<b-form-select-option value="1">전기</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group label="지역 코드" label-for="">
							<b-form-select v-model="region" :options="regionList" text-field="regionName" value-field="regionSeq" @input="updateEstate" />
						</b-form-group>
						<b-form-group label="단지 명" label-for="">
							<b-form-select v-model="estate" :options="estateList" text-field="estateName" value-field="estateSeq">
								<template #first>
									<b-form-select-option :value="null" v-if="estateList.length == 0">-- 없음 --</b-form-select-option>
								</template>
							</b-form-select>
						</b-form-group>
						<b-button block variant="light">검색</b-button>
					</div>
				</div>
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>서울아파트 : <i class="p-Color">1007</i> 세대 검침일 : <i class="p-Color">1</i>일</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table " id="">
								<thead role="rowgroup" class="">
									<tr role="row" class="">
										<th class=""><div>번호</div></th>
										<th class=""><div>이력날짜</div></th>
										<th class=""><div>변경수</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup">
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</b-col>
			<b-col col lg="12" xl="8">
				<content-table
					:isBusy="isBusy"
					:items="mappingList"
					:fields="mappingFields"
					:isPerPage="true"
					:showFilterList="showFilterList"
					:excelFileName="$t('estate.excelFileName')"
					:excelSheetName="$t('menu.device.estate')"
				>
					<template #table-header-left-head>
						<b-button v-b-modal="'addMapping'" variant="light"><b-icon icon="pencil-fill" />{{ $t("mapping.button.add") }}</b-button>
					</template>
					<template v-slot:table-header-right> </template>
					<template #table-cell-remark>
						{{ $t("estate.details") }}
					</template>
				</content-table>
			</b-col>
		</b-row>
	</div>
</template>
<script>
// import Mapping from "@/service/mapping";
import AddMapping from "@/components/modal/addMapping";
import ContentHeader from "@/components/content/ContentHeader";
import ContentTable from "@/components/content/ContentTable";

import { mapGetters } from "vuex";

export default {
	components: { AddMapping, ContentHeader, ContentTable },
	created() {
		// Mapping.region()
		// 	.then(({ data }) => {
		// 		this.regionList = data.response;
		// 		// if (this.regionList.length > 0) {
		// 		// 	this.searchEstates(this.regionList[0].regionSeq);
		// 		// }
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});
	},
	mounted() {
		console.log(this.region, this.estateList);
	},
	computed: {
		...mapGetters({ regionList: "getRegions", getEstate: "getEstateByRegion" }),
		estateList() {
			return this.getEstate(this.region);
		}
	},
	data() {
		return {
			isBusy: false,
			pageName: this.$t("menu.device.mapping"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.mapping") }
			],
			meterType: "1",
			region: 1,
			estate: 1,
			showFilterList: [],
			mappingList: [],
			mappingFields: [
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId")
				},
				{
					key: "dtime",
					label: this.$t("component.content.table.dtime")
				},
				{
					key: "demand",
					label: this.$t("component.content.table.demand")
				},
				{
					key: "etime",
					label: this.$t("component.content.table.etime")
				},
				{
					key: "acc",
					label: this.$t("component.content.table.acc")
				},
				{
					key: "demanda",
					label: this.$t("component.content.table.demanda")
				},
				{
					key: "etimea",
					label: this.$t("component.content.table.etimea")
				},
				{
					key: "acca",
					label: this.$t("component.content.table.acca")
				}
			]
		};
	},
	methods: {
		updateEstate() {
			this.estate = null;

			if (this.estateList.length > 0) {
				this.estate = this.estateList[0].estateSeq;
			}
		}
	}
};
</script>
<style lang="scss"></style>
