<template>
	<div class="main-bg content">
		<add-mapping></add-mapping>
		<content-header :paths="paths" :pageName="pageName" />
		<b-row class="row-wrap">
			<b-col col lg="12" xl="4">
				<div class="wbox m-b-20">
					<div class="one-row">
						<b-form-group :label="$t('mapping.search.meterType')" label-for="">
							<b-form-select v-model="meterType" disabled>
								<b-form-select-option value="1">전기</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group :label="$t('mapping.search.region')" label-for="">
							<b-form-select v-model="region" :options="regionList" text-field="regionName" value-field="regionSeq" @input="updateEstate" />
						</b-form-group>
						<b-form-group :label="$t('mapping.search.estate')" label-for="">
							<b-form-select v-model="estate" :options="estateList" text-field="estateName" value-field="estateSeq">
								<template #first>
									<b-form-select-option :value="null" v-if="estateList.length == 0">-- 없음 --</b-form-select-option>
								</template>
							</b-form-select>
						</b-form-group>
						<b-button block variant="light" @click="searchMappingList()" :disabled="estateList.length == 0">{{
							$t("mapping.search.search")
						}}</b-button>
					</div>
				</div>
				<div class="wbox">
					<h5 class="tltle" v-show="historyList.length > 0">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>
							{{ estateName }} :
							<i class="p-Color">{{ houseCount }}</i>
							세대, 검침일 :
							<i class="p-Color">{{ readingDay }}</i> 일
						</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table
								ref="table"
								:busy="isHistoryBusy"
								:items="historyList"
								:fields="historyFields"
								select-mode="single"
								selectable
								@row-selected="onHistoryRowSelected"
							>
								<template #table-busy>
									<div class="text-center text-danger my-2">
										<b-spinner class="align-middle"></b-spinner>
										<slot name="table-loading-text">
											<strong>{{ $t("msg.loading") }}</strong>
										</slot>
									</div>
								</template>
								<template #cell(dateTime)="row">
									{{ $moment(row.item.dateTime).format("YYYY-MM-DD HH:mm:ss") }}
								</template>
							</b-table>
						</div>
					</div>
				</div>
			</b-col>
			<b-col col lg="12" xl="8">
				<content-table
					:isBusy="isMappingBusy"
					:items="mappingList"
					:fields="mappingFields"
					:isPerPage="true"
					:showFilterList="showFilterList"
					:excelFileName="$t('mapping.excelFileName')"
					:excelSheetName="$t('menu.device.mapping')"
				>
					<template #table-header-left-head v-if="false">
						<b-button v-b-modal="'addMapping'" variant="light"><b-icon icon="pencil-fill" />{{ $t("mapping.button.add") }}</b-button>
					</template>
					<template v-slot:table-header-left-tail>
						<b-button variant="light" v-if="false" :disabled="mappingData != null">{{ $t("mapping.button.linkageCheck") }}</b-button>
						<b-button variant="light" @click="addHistoryDetail" :disabled="mappingData == null">{{ $t("mapping.button.save") }}</b-button>
					</template>
				</content-table>
			</b-col>
		</b-row>
	</div>
</template>
<script>
import Mapping from "@/service/mapping";
import AddMapping from "@/components/modal/addMapping";
import ContentHeader from "@/components/content/ContentHeader";
import ContentTable from "@/components/content/ContentTable";

import { mapGetters } from "vuex";

export default {
	components: { AddMapping, ContentHeader, ContentTable },
	computed: {
		...mapGetters({ regionList: "getRegions", getEstate: "getEstateByRegion" }),
		estateList() {
			return this.getEstate(this.region);
		},
		mappingList() {
			return this.mappingData ? this.mappingData.mappingData : [];
		}
	},
	data() {
		return {
			isMappingBusy: false,
			isHistoryBusy: false,
			pageName: this.$t("menu.device.mapping"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.mapping") }
			],
			meterType: "1",
			region: 1,
			estate: 1,
			estateName: "",
			houseCount: 0,
			readingDay: 1,
			showFilterList: [],
			historyList: [],
			historyFields: [
				{
					key: "mappingSeq",
					label: this.$t("component.content.table.mappingSeq")
				},
				{
					key: "dateTime",
					label: this.$t("component.content.table.dateTime")
				},
				{
					key: "checkCount",
					label: this.$t("component.content.table.checkCount")
				}
			],
			mappingData: null,
			mappingFields: [
				{
					key: "buildingName",
					label: this.$t("component.content.table.buildingName"),
					editable: true
				},
				{
					key: "houseName",
					label: this.$t("component.content.table.houseName"),
					editable: true
				},
				{
					key: "meterId",
					label: this.$t("component.content.table.meterId"),
					editable: true
				},
				{
					key: "meterReadingDay",
					label: this.$t("component.content.table.readingDay")
				},
				{
					key: "mac",
					label: this.$t("component.content.table.mac")
				},
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "meterType",
					label: this.$t("component.content.table.meterType")
				},
				{
					key: "code",
					label: this.$t("component.content.table.code")
				}
			]
		};
	},
	methods: {
		async getMappingList(params) {
			try {
				this.isMappingBusy = true;
				const response = await Mapping.mappingList(params);
				const result = response.data.response;
				this.mappingData = result;
			} catch (error) {
				this.mappingData = null;
			} finally {
				this.isMappingBusy = false;
			}
		},
		async getHistoryList(params) {
			try {
				this.isHistoryBusy = true;
				const response = await Mapping.historyList(params);
				const result = response.data.response;
				this.historyList = result.mappingHistory;
				this.estateName = result.estateName;
				this.houseCount = result.houseCount;
				this.readingDay = result.readingDay;
			} catch (error) {
				const result = [];
				this.historyList = result;
			} finally {
				this.isHistoryBusy = false;
			}
		},
		async getHistoryDetail(params) {
			try {
				this.isMappingBusy = true;
				const response = await Mapping.historyDetail(params);
				const result = response.data.response;
				this.mappingData = result;
			} catch (error) {
				this.mappingData = null;
			} finally {
				this.isMappingBusy = false;
			}
		},
		async addHistoryDetail() {
			try {
				this.isMappingBusy = true;
				const response = await Mapping.insert(this.mappingData);
				const result = response.data.response;

				if (result) {
					this.$bvToast.toast(this.mappingData.estateName + "를 저장하였습니다.", { title: "알림", variant: "primary", solid: true });
					await this.getHistoryList({ estateSeq: this.mappingData.estateSeq });
					this.$refs.table.selectRow(0);
				}
			} catch (error) {
				console.log(error);
			} finally {
				this.isMappingBusy = false;
			}
		},
		updateEstate() {
			this.estate = null;

			if (this.estateList.length > 0) {
				this.estate = this.estateList[0].estateSeq;
			}
		},
		searchMappingList() {
			this.getMappingList({ estateSeq: this.estate });
			this.getHistoryList({ estateSeq: this.estate });
		},
		onHistoryRowSelected(items) {
			if (items.length > 0) {
				this.getHistoryDetail({ mappingId: items[0].mappingId });
			} else {
				this.mappingData = null;
			}
		}
	}
};
</script>
<style lang="scss">
@import "~@/assets/scss/pages/mapping.scss";
@import "~@/assets/scss/table/tableCommon.scss";
@import "~@/assets/scss/table/tableWhite.scss";
</style>
