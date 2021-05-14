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
					<content-table-filter-region v-if="item == 'region'" v-model="filter.region" @init-filter-text="filter.estate = ''" debounce="100" />
					<content-table-filter-firmware v-if="item == 'firmware'" v-model="filter.firmware" :firmwareList="firmwareList" debounce="100" />
					<content-table-filter-reading-day v-if="item == 'readingDay'" v-model="filter.readingDay" :readingDayList="readingDayList" debounce="100" />
					<content-table-filter-meter-reading-day
						v-if="item == 'meterReadingDay'"
						v-model="filter.meterReadingDay"
						:meterReadingDayList="meterReadingDayList"
						debounce="100"
					/>
					<content-table-filter-reading-type
						v-if="item == 'readingType'"
						v-model="filter.readingType"
						:readingTypeList="$t('component.content.filter.readingTypeList')"
						debounce="100"
					/>
					<content-table-filter-day v-if="item == 'day'" v-model="filter.day" :dayList="dayList" debounce="100" />
					<content-table-filter-time v-if="item == 'time'" v-model="filter.time" :timeList="timeList" debounce="100" />
					<content-table-filter-hour v-if="item == 'hour'" v-model="filter.hour" :hourList="hourList" debounce="100" />
					<content-table-filter-estate v-if="item == 'estate'" v-model="filter.estate" debounce="100" />
					<content-table-filter-estate-id v-if="item == 'estateId'" v-model="filter.estateId" debounce="100" />
					<content-table-filter-building v-if="item == 'building'" v-model="filter.building" debounce="100" />
					<content-table-filter-house v-if="item == 'house'" v-model="filter.house" debounce="100" />
					<content-table-filter-gateway v-if="item == 'gateway'" v-model="filter.gateway" debounce="100" />
					<content-table-filter-dcu-id v-if="item == 'dcuId'" v-model="filter.dcuId" debounce="100" />
					<content-table-filter-mac v-if="item == 'mac'" v-model="filter.mac" debounce="100" />
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
						<div class="blank-box">
							<span>
								<img src="@/assets/svg/monitor_empty.svg" />
								<b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
							</span>
							<p>{{ $t("msg.search.emptyText") || scope.emptyText }}</p>
						</div>
					</template>
					<template #emptyfiltered="scope">
						<div class="blank-box" v-if="itemList.length == 0">
							<span>
								<img src="@/assets/svg/monitor_empty.svg" />
								<b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
							</span>
							<p>{{ $t("msg.search.emptyText") || scope.emptyText }}</p>
						</div>
						<h4 v-else>{{ $t("msg.search.emptyFilteredText") || scope.emptyFilteredText }}</h4>
					</template>
					<template v-for="(field1, index1) in editableFields" v-slot:[`cell(${field1.key})`]="{ item }">
						<b-input v-model="item[field1.key]" :key="index1" />
					</template>
					<template v-for="(field2, index2) in datetimeableFields" v-slot:[`cell(${field2.key})`]="{ item }">
						<span :key="'date' + index2">{{ item[field2.key] | moment("YYYY-MM-DD HH:mm:ss") }}</span>
					</template>
					<template v-for="(field3, index3) in dateableFields" v-slot:[`cell(${field3.key})`]="{ item }">
						<span :key="'datetime' + index3">{{ item[field3.key] | moment("YYYY-MM-DD") }}</span>
					</template>
					<template #cell(readingStatus)="row">
						<span :class="{ linkage: row.item.readingStatus == 0, unlinkage: row.item.readingStatus == 1 }"></span>
					</template>
					<template #cell(readingDayCompare)="row">
						{{ row.item.readingDayCompare ? "일치" : "불일치 (계량기:" + row.item.meterReadingDay + "일)" }}
					</template>
					<template #cell(readingType)="row">{{ readingType(row.item.readingType) }}</template>
					<template #cell(hour)="row">{{ row.item.hour }}시</template>
					<template #cell(dcuMapp)="row">{{ row.item.dcuMapp.map(item => item.dcuId).join(", ") }}</template>
					<template #cell(code)="row"><span :class="{ linkage: row.item.code == 0, unlinkage: row.item.code == 1 }"></span></template>
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
import ContentTableFilterEstateId from "./ContentTableFilterEstateId";
import ContentTableFilterBuilding from "./ContentTableFilterBuilding";
import ContentTableFilterHouse from "./ContentTableFilterHouse";
import ContentTableFilterGateway from "./ContentTableFilterGateway";
import ContentTableFilterFirmware from "./ContentTableFilterFirmware";
import ContentTableFilterMeterId from "./ContentTableFilterMeterId";
import ContentTableFilterDcuId from "./ContentTableFilterDcuId";
import ContentTableFilterMac from "./ContentTableFilterMac";
import ContentTableFilterReadingDay from "./ContentTableFilterReadingDay";
import ContentTableFilterMeterReadingDay from "./ContentTableFilterMeterReadingDay";
import ContentTableFilterReadingType from "./ContentTableFilterReadingType";
import ContentTableFilterDay from "./ContentTableFilterDay";
import ContentTableFilterTime from "./ContentTableFilterTime";
import ContentTableFilterHour from "./ContentTableFilterHour";
import XLSX from "xlsx";

export default {
	components: {
		ContentTableFilterRegion,
		ContentTableFilterEstate,
		ContentTableFilterEstateId,
		ContentTableFilterBuilding,
		ContentTableFilterHouse,
		ContentTableFilterGateway,
		ContentTableFilterFirmware,
		ContentTableFilterDcuId,
		ContentTableFilterMac,
		ContentTableFilterMeterId,
		ContentTableFilterReadingDay,
		ContentTableFilterMeterReadingDay,
		ContentTableFilterReadingType,
		ContentTableFilterDay,
		ContentTableFilterTime,
		ContentTableFilterHour
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
		editableFields() {
			return this.fields.filter(field => field.editable);
		},
		datetimeableFields() {
			return this.fields.filter(field => field.datetimeable);
		},
		dateableFields() {
			return this.fields.filter(field => field.dateable);
		},
		readingType() {
			return readingType => {
				if (readingType === 1) {
					return "전기";
				} else if (readingType === 2) {
					return "가스";
				} else if (readingType === 3) {
					return "수도";
				} else if (readingType === 4) {
					return "온수";
				} else if (readingType === 5) {
					return "난방";
				}

				return this.$t("common.unknown");
			};
		},
		firmwareList() {
			const firmwareList = this.items.map(item => item.firmwareVersion);
			return firmwareList.filter((item, index, array) => array.indexOf(item) === index);
		},
		readingDayList() {
			const readingDayList = this.items.map(item => item.meterReadingDay);
			return readingDayList.filter((item, index, array) => array.indexOf(item) === index);
		},
		meterReadingDayList() {
			const meterReadingDayList = this.items.map(item => item.meterReadingDay);
			return meterReadingDayList.filter((item, index, array) => array.indexOf(item) === index);
		},
		dayList() {
			let dayList = this.items.map(item => item.day);
			dayList = dayList.filter((item, index, array) => array.indexOf(item) === index);

			return dayList.map(item => {
				return { value: item, text: this.$moment(item).format("YYYY-MM-DD") };
			});
		},
		timeList() {
			const timeList = this.items.map(item => item.time);
			return timeList.filter((item, index, array) => array.indexOf(item) === index);
		},
		hourList() {
			let hourList = this.items.map(item => item.hour);
			hourList = hourList.filter((item, index, array) => array.indexOf(item) === index);

			return hourList.map(item => {
				return { value: item, text: item + "시" };
			});
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
			return this.showFilterList.some(row => row == "region");
		},
		useEstate() {
			return this.showFilterList.some(row => row == "estate");
		},
		useEstateId() {
			return this.showFilterList.some(row => row == "estateId");
		},
		useBuilding() {
			return this.showFilterList.some(row => row == "building");
		},
		useHouse() {
			return this.showFilterList.some(row => row == "house");
		},
		useGateway() {
			return this.showFilterList.some(row => row == "gateway");
		},
		useDcuId() {
			return this.showFilterList.some(row => row == "dcuId");
		},
		useMac() {
			return this.showFilterList.some(row => row == "mac");
		},
		useMeterId() {
			return this.showFilterList.some(row => row == "meterId");
		},
		useFirmware() {
			return this.showFilterList.some(row => row == "firmware");
		},
		useReadingDay() {
			return this.showFilterList.some(row => row == "readingDay");
		},
		useMeterReadingDay() {
			return this.showFilterList.some(row => row == "meterReadingDay");
		},
		useReadingType() {
			return this.showFilterList.some(row => row == "readingType");
		},
		useDay() {
			return this.showFilterList.some(row => row == "day");
		},
		useTime() {
			return this.showFilterList.some(row => row == "time");
		},
		useHour() {
			return this.showFilterList.some(row => row == "hour");
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
				region: null,
				estate: "",
				estateId: "",
				building: "",
				house: "",
				gateway: "",
				dcuId: "",
				mac: "",
				meterId: "",
				firmware: null,
				readingDay: null,
				meterReadingDay: null,
				readingType: null,
				day: null,
				time: null,
				hour: null
			},
			totalRow: this.itemsTotalCount
		};
	},
	methods: {
		initFilter() {
			this.filter.region = null;
			this.filter.estate = "";
			this.filter.estateId = "";
			this.filter.building = "";
			this.filter.house = "";
			this.filter.gateway = "";
			this.filter.dcuId = "";
			this.filter.mac = "";
			this.filter.meterId = "";
			this.filter.firmware = null;
			this.filter.readingDay = null;
			this.filter.meterReadingDay = null;
			this.filter.readingType = null;
			this.filter.day = null;
			this.filter.time = null;
			this.filter.hour = null;
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
			let region, estate, estateId, building, house, dcuId, mac, meterId, gateway, firmware, readingDay, meterReadingDay, readingType, time, day, hour;
			region = estate = estateId = building = house = dcuId = mac = meterId = gateway = firmware = readingDay = meterReadingDay = readingType = time = day = hour = true;

			if (this.useRegion && filter.region) {
				region = row.regionSeq == filter.region;
			}

			if (this.useEstate) {
				estate = row.estateName.indexOf(filter.estate) != -1;
			}

			if (this.useEstateId) {
				estateId = row.estateId.toUpperCase().indexOf(filter.estateId.toUpperCase()) != -1;
			}

			if (this.useDcuId) {
				dcuId = row.dcuId.toUpperCase().indexOf(filter.dcuId.toUpperCase()) != -1;
			}

			if (this.useMac) {
				mac = row.mac.toUpperCase().indexOf(filter.mac.toUpperCase()) != -1;
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

			if (this.useHouse) {
				house = row.houseName.toUpperCase().indexOf(filter.house.toUpperCase()) != -1;
			}

			if (this.useFirmware && filter.firmware) {
				firmware = row.firmwareVersion == filter.firmware;
			}

			if (this.useReadingDay && filter.readingDay) {
				readingDay = row.meterReadingDay == filter.readingDay;
			}

			if (this.useMeterReadingDay && filter.meterReadingDay) {
				meterReadingDay = row.meterReadingDay == filter.meterReadingDay;
			}

			if (this.useReadingType && filter.readingType) {
				readingType = row.readingType == filter.readingType;
			}

			if (this.useDay && filter.day) {
				day = row.day == filter.day;
			}

			if (this.useTime && filter.time) {
				time = row.time == filter.time;
			}

			if (this.useHour && (filter.hour || filter.hour == 0)) {
				hour = row.hour == filter.hour;
			}

			const result1 = region && estate && estateId && building && house && dcuId && mac && meterId;
			const result2 = gateway && firmware && readingDay && meterReadingDay && readingType && day && time && hour;
			return result1 && result2;
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/table/tableCommon.scss";
@import "~@/assets/scss/table/tableBasic.scss";

table.b-table[aria-busy="true"] {
	opacity: 0.6;
}
table.b-table .flip-list-move {
	transition: transform 1s;
}
</style>
