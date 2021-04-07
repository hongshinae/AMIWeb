<template>
	<div>
		<content-search>
			<b-row>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">지역 이름</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
						</b-col>
					</b-row>
				</b-col>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">단지 명</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected">
								<b-form-select-option>1단지</b-form-select-option>
								<b-form-select-option>2단지</b-form-select-option>
							</b-form-select>
						</b-col>
					</b-row>
				</b-col>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">동 명</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected">
								<b-form-select-option>1단지</b-form-select-option>
								<b-form-select-option>2단지</b-form-select-option>
							</b-form-select>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">DCU ID</label>
						</b-col>
						<b-col lg="8">
							<b-form-input v-model="text" placeholder="DCU ID"></b-form-input>
						</b-col>
					</b-row>
				</b-col>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">METER ID</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected">
								<b-form-select-option>2919219225</b-form-select-option>
								<b-form-select-option>2919219225</b-form-select-option>
							</b-form-select>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row>
				<b-col xl="3" md="4" sm="12">
					<b-row>
						<b-col lg="4">
							<label class="d-block">조회 날짜</label>
						</b-col>
						<b-col lg="8">
							<b-form-datepicker placeholder="조회날짜" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
							</b-form-datepicker>
						</b-col>
					</b-row>
				</b-col>
				<b-col xl="6" md="6" sm="12">
					<b-row>
						<b-col lg="2">
							<label class="d-block">기간</label>
						</b-col>
						<b-col lg="4">
							<b-form-datepicker placeholder="조회날짜" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
							</b-form-datepicker>
						</b-col>
						<b-col lg="1">
							~
						</b-col>
						<b-col lg="4">
							<b-form-datepicker placeholder="조회날짜" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
							</b-form-datepicker>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</content-search>
		<div>그래프 넣는 영역</div>
		<content-table
			:busy="isBusy"
			:items="lookupFilterList"
			:fields="lookupFields"
			:perpage="true"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('menu.device.estate')"
		>
			<template #table-header-left-head> </template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>

<script>
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { ContentSearch, ContentTable },
	computed: {
		lookupFilterList() {
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
		}
	},
	data() {
		return {
			isBusy: false,
			lookupFields: [
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
	}
};
</script>

<style></style>
