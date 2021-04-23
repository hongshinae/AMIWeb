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
							<b-button variant="light">Reboot</b-button>
							<b-button variant="light">재스캔</b-button>
							<b-button variant="light" disabled>DCU펌웨어 업그레이드</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<b-table :items="dcuList" :fields="dcuFields">
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
						<div role="group" class="btn-group">
							<b-button variant="light">모뎀리셋</b-button>
							<b-button variant="light">모뎀펌웨어 업그레이드</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table" id="">
								<thead role="rowgroup" class="">
									<tr role="row" class="">
										<th class=""><div>Mac address</div></th>
										<th class=""><div>연동 장비수</div></th>
										<th class=""><div></div></th>
										<th class=""><div>상태코드</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup">
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
								</tbody>
							</table>
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
		searchItemList: function(searchItem) {
			this.getNmsDcuList(searchItem);
		}
	}
};
</script>
