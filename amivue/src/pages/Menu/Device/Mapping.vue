<template>
	<div class="main-bg content">
		<add-mapping></add-mapping>
		<content-header :paths="paths" :pageName="pageName" />
		<b-row class="row-wrap">
			<b-col col lg="12" xl="4">
				<div class="wbox m-b-20">
					<div class="one-row">
						<b-form-group label="검침 타입" label-for="">
							<b-form-select v-model="meteringType">
								<b-form-select-option value="1">전기</b-form-select-option>
								<b-form-select-option value="12">수도</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group label="지역 코드" label-for="">
							<b-form-select v-model="regionCode">
								<b-form-select-option value="1">서울시</b-form-select-option>
								<b-form-select-option value="22">경기도</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group label="단지 명" label-for="">
							<b-form-select v-model="estateCode">
								<b-form-select-option value="1">서울 아파트</b-form-select-option>
								<b-form-select-option value="12">판교 아파트</b-form-select-option>
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
					:busy="isBusy"
					:items="mappingFilterList"
					:fields="mappingFields"
					:perpage="true"
					:filter="filterList"
					@update:selected="callbackEvent"
					:excelFileName="$t('estate.excelFileName')"
					:excelSheetName="$t('menu.device.estate')"
				>
					<template #table-header-left-head>
						<b-button v-b-modal="'addMapping'" variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}</b-button>
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
import Mapping from "@/service/mapping";
import AddMapping from "@/components/modal/addMapping";
import ContentHeader from "@/components/content/ContentHeader";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { AddMapping, ContentHeader, ContentTable },
	created() {
		Mapping.region()
			.then(({ data }) => {
				this.regionList = data.response;

				// if (this.regionList.length > 0) {
				// 	this.searchEstates(this.regionList[0].regionSeq);
				// }
			})
			.catch(error => {
				console.log(error);
			});
	},
	mounted() {},
	computed: {
		mappingFilterList() {
			return [
				{
					dcuId: "test",
					meterId: "test2",
					dtime: "test3",
					demand: "test4",
					etime: "test5",
					acc: "test6",
					demanda: "test7",
					etimea: "test8",
					acca: "test10"
				}
			];
		},
		filterList: function() {
			return [
				{
					label: this.$t("estate.filter.region"),
					type: Array,
					options: this.regionList,
					textField: "regionName",
					valueField: "regionSeq",
					eventName: "region",
					filterFieldKey: "regionName"
				},
				{
					label: this.$t("estate.filter.estateName"),
					type: String,
					text: this.filterText,
					options: this.estates,
					textField: "estateName",
					valueField: "estateSeq",
					eventName: "estate",
					placeholder: this.placeholder
				}
			];
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
			meteringType: "1",
			regionCode: "1",
			estateCode: "1",
			mappingFields: [
				{
					key: "dcuId",
					label: this.$t("lookup.table.dcuId")
				},
				{
					key: "meterId",
					label: this.$t("lookup.table.meterId")
				},
				{
					key: "dtime",
					label: this.$t("lookup.table.dtime")
				},
				{
					key: "demand",
					label: this.$t("lookup.table.demand")
				},
				{
					key: "etime",
					label: this.$t("lookup.table.etime")
				},
				{
					key: "acc",
					label: this.$t("lookup.table.acc")
				},
				{
					key: "demanda",
					label: this.$t("lookup.table.demanda")
				},
				{
					key: "etimea",
					label: this.$t("lookup.table.etimea")
				},
				{
					key: "acca",
					label: this.$t("lookup.table.acca")
				}
			]
		};
	},
	methods: {
		callbackEvent({ eventName, value }) {
			if (eventName == "region") {
				this.searchEstates(value);
			} else if (eventName == "estate") {
				this.filterText = value;
			}
		}
	}
};
</script>
<style lang="scss"></style>
