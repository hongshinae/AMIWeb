<template>
	<div>
		<content-search @handle:searchItem="searchItemList" />
		<b-row class="row-wrap">
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>DCU</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="dcuList" :fields="dcuFields" show-empty>
								<template #empty="scope">
									<h4>{{ $t("msg.search.emptyText") || scope.emptyText }}</h4>
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
						<span>Meter</span>
						<small>금일 최종 수집시간 : 2020-12-09 19:00</small>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="meterList" :fields="meterFields" show-empty>
								<template #empty="scope">
									<h4>{{ $t("msg.search.emptyText") || scope.emptyText }}</h4>
								</template>
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
		<div class="btn-only-wrap">
			<div class="btn-wrap">
				<div role="group" class="btn-group">
					<b-button variant="light">SNMP read/write</b-button>
					<b-button variant="light">trap</b-button>
					<b-button variant="light">상태리스트</b-button>
					<b-button variant="light">SNMP / FEP 통신 동작 확인</b-button>
					<b-button variant="light">시간 동기화</b-button>
				</div>
				<div role="group" class="btn-group">
					<b-button variant="light">펌웨어 이미지 관리</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Collection from "@/service/info/collection";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
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
			meterList: [],
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
					key: "collectionPeriod",
					label: this.$t("info.collection.table.collectionPeriod")
				},
				{
					key: "readingCount",
					label: this.$t("info.collection.table.readingCount")
				},
				{
					key: "accCount",
					label: this.$t("info.collection.table.accCount")
				}
			],
			isDcuBusy: false,
			isMeterBusy: false
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
		async getMeterList(estateSeq, dcuId) {
			const params = { estateSeq: estateSeq, dcuId: dcuId };

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
		}
	}
};
</script>

<style></style>
