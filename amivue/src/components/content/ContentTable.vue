<template>
	<div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<slot name="table-header-left-head" />
				<b-button-group>
					<b-button variant="light btn-excel" @click="excelDownload">
						<img src="@/assets/svg/excel.svg" />
						{{ $t("common.button.excelDownload") }}
					</b-button>
					<slot name="table-header-left-group" />
				</b-button-group>
				<slot name="table-header-left-tail" />
			</div>
			<div class="filter-wrap">
				<slot name="table-header-right" />
				<b-form-group v-for="(item, index) in showFilterList" :key="index">
					<content-table-filter-region
						v-if="item == 'region'"
						v-model="filter.region"
						:selected="filter.region"
						@init-filter-text="filter.estate = ''"
						debounce="100"
					/>
					<content-table-filter-firmware
						v-if="item == 'firmware'"
						v-model="filter.firmware"
						:selected="filter.firmware"
						:firmwareList="firmwareList"
						debounce="100"
					/>
					<content-table-filter-reading-day
						v-if="item == 'readingDay'"
						v-model="filter.readingDay"
						:selected="filter.readingDay"
						:readingDayList="readingDayList"
						debounce="100"
					/>
					<content-table-filter-estate v-if="item == 'estate'" v-model="filter.estate" debounce="100" />
					<content-table-filter-building v-if="item == 'building'" v-model="filter.building" debounce="100" />
					<content-table-filter-gateway v-if="item == 'gateway'" v-model="filter.gateway" debounce="100" />
					<content-table-filter-dcu-id v-if="item == 'dcuId'" v-model="filter.dcuId" debounce="100" />
					<content-table-filter-meter-id v-if="item == 'meterId'" v-model="filter.meterId" debounce="100" />
				</b-form-group>
				<b-form-group v-if="isPerPage">
					<b-form-select v-model="perPage" :options="pages" />
				</b-form-group>
			</div>
		</div>
		<div class="table-wrap ">
			<div class="bgtable">
				<b-table
					:striped="true"
					:busy="isBusy"
					:items="itemList"
					:fields="fields"
					:current-page="currentPage"
					:per-page="perPage"
					:filter="filter"
					:filter-function="onFilter"
					@filtered="onFiltered"
					show-empty
				>
					<template #table-busy>
						<div class="text-center text-danger my-2">
							<b-spinner class="align-middle"></b-spinner>
							<slot name="table-loading-text">
								<strong>{{ $t("msg.loading") }}</strong>
							</slot>
						</div>
					</template>
					<template #empty="scope">
						<h4>{{ $t("msg.search.emptyText") || scope.emptyText }}</h4>
					</template>
					<template #emptyfiltered="scope">
						<h4>{{ $t("msg.search.emptyText") || scope.emptyFilteredText }}</h4>
					</template>
					<template #cell(dcuMapp)="row">
						{{ row.item.dcuMapp.map(item => item.dcuId).join(", ") }}
					</template>
					<template #cell(_remark)="row">
						<b-button @click="_detail(row.item, row.index, $event.target)" variant="outline-primary" size="sm">
							<slot name="table-cell-remark">{{ $t("common.button.details") }}</slot>
						</b-button>
					</template>
				</b-table>
			</div>
		</div>
		<div class="pa-wrap">
			<b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" :limit="10">
				<template #first-text><span class="text-success">«</span></template>
				<template #prev-text><span class="text-danger">‹</span></template>
				<template #next-text><span class="text-warning">›</span></template>
				<template #last-text><span class="text-info">»</span></template>
			</b-pagination>
		</div>
	</div>
</template>

<script>
import ContentTableFilterRegion from "./ContentTableFilterRegion";
import ContentTableFilterEstate from "./ContentTableFilterEstate";
import ContentTableFilterBuilding from "./ContentTableFilterBuilding";
import ContentTableFilterGateway from "./ContentTableFilterGateway";
import ContentTableFilterFirmware from "./ContentTableFilterFirmware";
import ContentTableFilterMeterId from "./ContentTableFilterMeterId";
import ContentTableFilterDcuId from "./ContentTableFilterDcuId";
import ContentTableFilterReadingDay from "./ContentTableFilterReadingDay";
import XLSX from "xlsx";

export default {
	components: {
		ContentTableFilterRegion,
		ContentTableFilterEstate,
		ContentTableFilterBuilding,
		ContentTableFilterGateway,
		ContentTableFilterFirmware,
		ContentTableFilterDcuId,
		ContentTableFilterMeterId,
		ContentTableFilterReadingDay
	},
	props: {
		isPerPage: { type: Boolean, default: true },
		isBusy: Boolean,
		items: Array,
		fields: Array,
		itemsTotalCount: null,
		excelFileName: { type: String, default: "excel.xlsx" },
		excelSheetName: { type: String, default: "sheet1" },
		showFilterList: {
			type: Array,
			default: () => {
				return ["region", "estate"];
			}
		}
	},
	watch: {
		items: function() {
			this.initFilter();
		}
	},
	created() {},
	mounted() {},
	computed: {
		totalRows() {
			if (this.totalRow != null) {
				return this.totalRow;
			} else {
				return this.itemList.length;
			}
		},
		itemList() {
			return this.items;
		},
		firmwareList() {
			const firmwareList = this.items.map(item => item.firmwareVersion);
			return firmwareList.filter((item, index, array) => array.indexOf(item) === index);
		},
		readingDayList() {
			const readingDayList = this.items.map(item => item.readingDay);
			return readingDayList.filter((item, index, array) => array.indexOf(item) === index);
		},
		excelList: function() {
			return this.items.map(item => {
				let o = {};

				for (let key in item) {
					this.fields.map(x => {
						const newKey = x.key == key ? x.label : null;
						if (!newKey) return;
						Object.defineProperty(o, newKey, Object.getOwnPropertyDescriptor(item, key));
					});
				}

				return o;
			});
		},
		useRegion() {
			return this.showFilterList.find(row => row == "region") == undefined ? false : true;
		},
		useEstate() {
			return this.showFilterList.find(row => row == "estate") == undefined ? false : true;
		},
		useBuilding() {
			return this.showFilterList.find(row => row == "building") == undefined ? false : true;
		},
		useGateway() {
			return this.showFilterList.find(row => row == "gateway") == undefined ? false : true;
		},
		useDcuId() {
			return this.showFilterList.find(row => row == "dcuId") == undefined ? false : true;
		},
		useMeterId() {
			return this.showFilterList.find(row => row == "meterId") == undefined ? false : true;
		},
		useFirmware() {
			return this.showFilterList.find(row => row == "firmware") == undefined ? false : true;
		},
		useReadingDay() {
			return this.showFilterList.find(row => row == "readingDay") == undefined ? false : true;
		}
	},
	data() {
		return {
			currentPage: 1,
			perPage: 15,
			pages: [
				{ value: 10, text: this.$t("common.filter.page10") },
				{ value: 15, text: this.$t("common.filter.page15") },
				{ value: 20, text: this.$t("common.filter.page20") },
				{ value: 30, text: this.$t("common.filter.page30") },
				{ value: 50, text: this.$t("common.filter.page50") }
			],
			filter: {
				region: 0,
				estate: "",
				building: "",
				gateway: "",
				dcuId: "",
				meterId: "",
				firmware: 0,
				readingDay: 0
			},
			totalRow: this.itemsTotalCount
		};
	},
	methods: {
		initFilter() {
			this.filter.region = 0;
			this.filter.estate = "";
			this.filter.building = "";
			this.filter.gateway = "";
			this.filter.dcuId = "";
			this.filter.meterId = "";
			this.filter.firmware = 0;
			this.filter.readingDay = 0;
		},
		onFiltered(filteredItems) {
			// 필터링으로 인해 페이지 매김을 트리거하여 버튼 / 페이지 수 업데이트
			this.totalRow = filteredItems.length;
			this.currentPage = 1;
		},
		_detail(item) {
			this.$emit("handle:selectedItem", item);
		},
		excelDownload() {
			// 엑셀 워크시트로 json 내보내기
			// 배열만 가능
			var dataWS = XLSX.utils.json_to_sheet(this.excelList);
			// 엑셀의 workbook을 만든다
			// workbook은 엑셀파일에 지정된 이름이다.
			var wb = XLSX.utils.book_new();
			// workbook에 워크시트 추가
			// 시트명은 'nameData'
			XLSX.utils.book_append_sheet(wb, dataWS, this.excelSheetName);
			// 엑셀 파일을 내보낸다.
			XLSX.writeFile(wb, this.excelFileName);
		},
		onFilter(row, filter) {
			let region = true;
			let estate = true;
			let building = true;
			let dcuId = true;
			let meterId = true;
			let gateway = true;
			let firmware = true;
			let readingDay = true;

			if (this.useRegion) {
				region = filter.region == 0 ? true : false;

				if (!region) {
					region = row.regionSeq == filter.region;
				}
			}

			if (this.useEstate) {
				estate = row.estateName.indexOf(filter.estate) != -1;
			}

			if (this.useDcuId) {
				dcuId = row.dcuId.toUpperCase().indexOf(filter.dcuId.toUpperCase()) != -1;
			}

			if (this.useMeterId) {
				meterId = row.meterId.toUpperCase().indexOf(filter.meterId.toUpperCase()) != -1;
			}

			if (this.useGateway) {
				gateway = row.gatewayId.toUpperCase().indexOf(filter.gateway.toUpperCase()) != -1;
			}

			if (this.useBuilding) {
				building = row.buildingName.toUpperCase().indexOf(filter.building.toUpperCase()) != -1;
			}

			if (this.useFirmware) {
				firmware = filter.firmware == 0 ? true : false;

				if (!firmware) {
					firmware = row.firmwareVersion == filter.firmware;
				}
			}

			if (this.useReadingDay) {
				readingDay = filter.readingDay == 0 ? true : false;

				if (!readingDay) {
					readingDay = row.readingDay == filter.readingDay;
				}
			}

			return region && estate && building && dcuId && meterId && gateway && firmware && readingDay;
		}
	}
};
</script>

<style>
table.b-table[aria-busy="true"] {
	opacity: 0.6;
}
table.b-table .flip-list-move {
	transition: transform 1s;
}
</style>
