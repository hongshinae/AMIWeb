<template>
	<div>
		<content-search :shows="shows" @handle:searchItem="searchItemList" />
		<b-row class="row-wrap">
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>DCU</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="dcuList" :fields="dcuFields" select-mode="single" selectable @row-selected="onDcuRowSelected" :busy="isDcuBusy">
								<template #table-busy>
									<div class="text-center text-danger my-2">
										<b-spinner class="align-middle"></b-spinner>
										<slot name="table-loading-text">
											<strong>{{ $t("msg.loading") }}</strong>
										</slot>
									</div>
								</template>
							</b-table>
						</div>
					</div>
				</div>
			</b-col>
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>Meter ({{ dateSelected }})</span>
						<small v-show="false">금일 최종 수집시간 : {{ $moment().format("YYYY-MM-DD HH:mm:ss") }}</small>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="meterList" :fields="meterFields" :busy="isMeterBusy" show-empty>
								<template #empty="scope">
									<div class="blank-box">
										<span>
											<img src="@/assets/svg/monitor_empty.svg" />
											<b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
										</span>
										<p>{{ $t("msg.selectDcu") || scope.emptyText }}</p>
									</div>
								</template>
								<template #cell(lpPeriod)="row"> {{ row.item.lpPeriod }}분 </template>
								<template #cell(lpCount)="row"> {{ row.item.countLp }} / {{ row.item.totalLp }} ({{ row.item.rateLp }}) </template>
								<template #cell(onCount)="row"> {{ row.item.countOn }} / {{ row.item.totalOn }} ({{ row.item.rateOn }}) </template>
								<template #cell(_remark)="row">
									<b-button @click="_detail(row.item, row.index, $event.target)" variant="outline-primary" size="sm">
										<slot name="table-cell-remark">{{ $t("common.button.details") }}</slot>
									</b-button>
								</template>
							</b-table>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Collection from "@/service/info/collection";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		shows: {
			type: Array,
			default: function() {
				return [["region", "estate", "date"]];
			}
		},
		showFilterList: {
			type: Array,
			default: function() {
				return ["region", "estate"];
			}
		}
	},
	data() {
		return {
			dcuList: [],
			dcuFields: [
				{
					key: "regionName",
					label: this.$t("info.collection.table.region")
				},
				{
					key: "estateName",
					label: this.$t("info.collection.table.estate")
				},
				{
					key: "buildingName",
					label: this.$t("info.collection.table.building")
				},
				{
					key: "dcuId",
					label: this.$t("info.collection.table.dcuId")
				}
			],
			meterList: null,
			meterFields: [
				{
					key: "houseName",
					label: this.$t("info.collection.table.houseName")
				},
				{
					key: "meterId",
					label: this.$t("info.collection.table.meterId")
				},
				{
					key: "lpPeriod",
					label: this.$t("info.collection.table.lpPeriod")
				},
				{
					key: "lpCount",
					label: this.$t("info.collection.table.lpCount")
				},
				{
					key: "onCount",
					label: this.$t("info.collection.table.onCount")
				}
			],
			isDcuBusy: false,
			isMeterBusy: false,
			dateSelected: null
		};
	},
	methods: {
		async getDcuList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isDcuBusy = true;
				const response = await Collection.dcu(params);
				const result = response.data.response;
				this.dcuList = result;
			} catch (error) {
				const result = [];
				this.dcuList = result;
			} finally {
				this.isDcuBusy = false;
			}
		},
		async getMeterList(estateSeq, day, dcuId) {
			const params = { estateSeq: estateSeq, day: day, dcuId: dcuId };

			try {
				this.isMeterBusy = true;
				const response = await Collection.meter(params);
				const result = response.data.response;
				this.meterList = result;
			} catch (error) {
				const result = [];
				this.meterList = result;
			} finally {
				this.isMeterBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			this.getDcuList(searchItem);
			this.dateSelected = searchItem.date;
		},
		async onDcuRowSelected(items) {
			if (items.length > 0) {
				const params = { estateSeq: items[0].estateSeq, day: this.$moment(this.dateSelected).format("YYYYMMDD"), dcuId: items[0].dcuId };
				const response = await Collection.meter(params);
				const result = response.data.response;
				this.meterList = result;
			} else {
				this.meterList = null;
			}
		}
	}
};
</script>

<style></style>
