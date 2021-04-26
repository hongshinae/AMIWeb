<template>
	<div class="main-bg content">
		<content-header :pageName="pageName" :paths="paths" />
		<content-search @handle:searchItem="searchItemList"> </content-search>
		<b-row class="row-wrap">
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>DCU <i class="p-Color">4</i> </span>
						<div role="group" class="btn-group">
							<b-button variant="light">{{ $t("nms.button.reboot") }}</b-button>
							<b-button variant="light">{{ $t("nms.button.rescan") }}</b-button>
							<b-button variant="light" disabled>{{ $t("nms.button.dcuFirmwareUpgrade") }}</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="dcuList" :fields="dcuFields" select-mode="single" selectable @row-selected="onDcuRowSelected">
								<template #cell(sysState)="row">
									{{ row.item.sysState == 1 ? "정상" : "비정상" }}
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
						<span>Modem <i class="p-Color">4</i> Meter <i class="p-Color">8</i> </span>
						<div role="group" class="btn-group" disabled>
							<b-button variant="light">{{ $t("nms.button.modemReset") }}</b-button>
							<b-button variant="light" disabled>{{ $t("nms.button.modemFirmwareUpgrade") }}</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="meterList" :fields="meterFields">
								<template #cell(statusCode)="row">
									{{ row.item.statusCode == 1 ? $t("nms.dcuStatusTrue") : $t("nms.dcuStatusFalse") }}
								</template>
								<template #cell(test)="row">
									<b-button size="sm" @click="row.toggleDetails">
										{{ row.detailsShowing ? $t("nms.collapse") : $t("nms.expand") }}
									</b-button>
								</template>
								<template #row-details="">
									<b-card>
										<div class="basic-table">
											<table>
												<thead>
													<tr class="error">
														<td><b-icon icon="arrow-return-right"></b-icon></td>
														<td>06090009424 (301호)</td>
														<td>2020-12-29 12:00:00)</td>
														<td>12451</td>
													</tr>
													<tr>
														<td><b-icon icon="arrow-return-right"></b-icon></td>
														<td>06090009424 (301호)</td>
														<td>2020-12-29 12:00:00)</td>
														<td>12451</td>
													</tr>
												</thead>
											</table>
										</div>
									</b-card>
								</template>
							</b-table>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
		<div class="btn-only-wrap" style="display:none">
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
import Nms from "@/service/nms";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	data() {
		return {
			pageName: this.$t("menu.device.nms"),
			paths: [{ name: this.$t("menu.title"), bicon: "house", link: "/" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.nms") }],
			dcuList: [],
			dcuFields: [
				{
					key: "buildingName",
					label: this.$t("component.content.table.buildingName")
				},
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "dcuIp",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "sysState",
					label: this.$t("component.content.table.sysState")
				},
				{
					key: "firmwareVersion",
					label: this.$t("component.content.table.firmwareVersion")
				}
			],
			meterList: [{ sysMac: "00:00:AC:5E:8C:A0:38:63​", connEquip: "2", statusCode: "비정상​" }],
			meterFields: [
				{
					key: "sysMac",
					label: this.$t("component.content.table.mac")
				},
				{
					key: "connEquip",
					label: this.$t("component.content.table.connEquip")
				},
				{
					key: "statusCode",
					label: this.$t("component.content.table.statusCode")
				},
				{
					key: "test",
					label: ""
				}
			]
		};
	},
	methods: {
		async getNmsDcuList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await Nms.dcuList(params);
				const result = response.data.response;
				this.dcuList = result;
			} catch (error) {
				const result = [];
				this.dcuList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList(searchItem) {
			this.getNmsDcuList(searchItem);
		},
		onDcuRowSelected(items) {
			console.log(items);
		},
		onMeterRowSelected(items, rows) {
			console.log(items, rows);
		}
	}
};
</script>
<style lang="scss">
.card {
	border: 0 none;
	.card-body {
		padding: 0;
		.basic-table {
			width: 100%;
			table {
				width: 100%;
				background: #ecf2f6;
			}
		}
	}
}
</style>
