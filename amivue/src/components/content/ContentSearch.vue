<template>
	<div class="search-wrap">
		<div class="wbox">
			<div class="search-img">
				<b-icon icon="search" variant="primary"></b-icon>
			</div>
			<div class="search">
				<!--검색영역-->
				<form ref="searchForm">
					<b-row v-for="(items, index) in shows" :key="index">
						<b-col :xl="xl(item)" md="12" sm="12" :class="addClass(item)" v-for="item in items" :key="item">
							<content-search-region v-if="item == 'region'" v-model="regionSelected" :selected="regionSelected" />
							<content-search-estate v-if="item == 'estate'" v-model="estateSelected" :region="regionSelected" />
							<content-search-date v-if="item == 'date'" v-model="dateSelected" />
							<content-search-month v-if="item == 'month'" v-model="monthSelected" />
							<content-search-building v-if="item == 'building'" v-model="buildingSelected" :region="regionSelected" :estate="estateSelected" />
							<content-search-duration-type v-if="item == 'durationType'" v-model="durationTypeSelected" />
							<content-search-duration-date
								v-if="item == 'durationDate'"
								:fromDate.sync="durationDate.fromDate"
								:toDate.sync="durationDate.toDate"
							/>
							<content-search-status-code v-if="item == 'dcuCode'" v-model="dcuCodeSelected" />
						</b-col>
					</b-row>
				</form>
				<!--//검색영역-->
			</div>
			<div class="btn-wrap ml-auto">
				<b-button variant="primary" @click="search()">{{ $t("component.content.search.title") }}</b-button>
				<b-button variant="blight" @click="search()">미 매핑 정보 불러오기</b-button>
			</div>
		</div>
	</div>
</template>

<script>
import ContentSearchRegion from "./ContentSearchRegion";
import ContentSearchEstate from "./ContentSearchEstate";
import ContentSearchDate from "./ContentSearchDate";
import ContentSearchMonth from "./ContentSearchMonth";
import ContentSearchBuilding from "./ContentSearchBuilding";
import ContentSearchDurationType from "./ContentSearchDurationType";
import ContentSearchDurationDate from "./ContentSearchDurationDate";
import ContentSearchStatusCode from "./ContentSearchStatusCode";

export default {
	props: {
		shows: {
			type: Array,
			default: () => {
				return [["region", "estate"]];
			}
		}
	},
	components: {
		ContentSearchRegion,
		ContentSearchEstate,
		ContentSearchDate,
		ContentSearchMonth,
		ContentSearchBuilding,
		ContentSearchDurationType,
		ContentSearchDurationDate,
		ContentSearchStatusCode
	},
	created() {},
	mounted() {},
	computed: {
		xl() {
			return item => {
				if (item == "durationDate") {
					return "6";
				}

				return "3";
			};
		},
		addClass() {
			return item => {
				return { "search-datepicker-wrap": item == "durationDate" };
			};
		},
		result() {
			let params = {};

			if (this.shows.join().indexOf("region") > -1) {
				params.regionSeq = this.regionSelected;
			}

			if (this.shows.join().indexOf("estate") > -1) {
				params.estateSeq = this.estateSelected;
				params.gseq = this.estateSelected;
			}

			if (this.shows.join().indexOf("date") > -1) {
				params.date = this.$moment(this.dateSelected).format("YYYYMMDD");
			}

			if (this.shows.join().indexOf("month") > -1) {
				params.yearMonth = this.$moment(this.monthSelected).format("YYYYMM");
			}

			if (this.shows.join().indexOf("building") > -1) {
				Object.assign(params, this.buildingSelected);
			}

			if (this.shows.join().indexOf("durationType") > -1) {
				params.durationType = this.durationTypeSelected;
			}

			if (this.shows.join().indexOf("durationDate") > -1) {
				Object.assign(params, {
					fromDate: this.$moment(this.durationDate.fromDate).format("YYYYMMDD"),
					startDay: this.$moment(this.durationDate.fromDate).format("YYYYMMDD"),
					toDate: this.$moment(this.durationDate.toDate).format("YYYYMMDD"),
					endDay: this.$moment(this.durationDate.toDate).format("YYYYMMDD")
				});
			}

			if (this.shows.join().indexOf("dcuCode") > -1) {
				params.statusCode = this.dcuCodeSelected;
			}

			return params;
		}
	},
	data() {
		return {
			regionSelected: null,
			estateSelected: null,
			dateSelected: this.$moment().format("YYYY-MM-DD"),
			monthSelected: this.$moment().format("YYYY-MM"),
			buildingSelected: null,
			durationTypeSelected: 1,
			durationDate: {
				fromDate: this.$moment()
					.subtract(1, "week")
					.format("YYYY-MM-DD"),
				toDate: this.$moment().format("YYYY-MM-DD")
			},
			dcuCodeSelected: null
		};
	},
	methods: {
		search() {
			const result = this.$refs.searchForm.checkValidity();

			if (!result) {
				this.$refs.searchForm.reportValidity();
				return;
			}

			this.$emit("handle:searchItem", this.result);
		}
	}
};
</script>

<style lang="scss">
.search-wrap {
	position: relative;
	.search-img {
		background: #ecf2f6;
		border-radius: 20px;
		padding: 8px 6px;
		width: 34px;
		height: 34px;
		margin-right: 10px;
		float: left;
		svg {
			margin-top: 0px;
			margin-left: 4px;
			font-size: 14px;
		}
	}
	.search {
		padding-left: 65px;
		padding-right: 85px;
	}
	.btn-wrap {
		right: 19px;
		bottom: 15px;
		height: unset;
		position: absolute;
		margin-bottom: 0 !important;
		top: 15px;
		button {
			padding: 0 20px;
			height: 100%;
		}
		button:first-child {
			// display: none;
			margin-right: 10px;
		}
	}
	.b-form-datepicker label {
		white-space: nowrap !important;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@media (max-width: 1200px) {
	.search-wrap .search-img {
		display: none;
	}
	.search-wrap .search {
		padding: 0;
	}
	.search-wrap {
		.wbox {
			height: inherit !important;
			.col-lg-4 {
				width: 30% !important;
				max-width: 30% !important;
				flex: 30%;
			}
			.col-lg-8 {
				width: 70% !important;
				max-width: 70% !important;
				flex: 70%;
			}
		}
		.btn-wrap {
			margin-top: 10px;
			width: 100%;
			left: inherit !important;
			top: inherit !important;
			right: inherit !important;
			bottom: inherit !important;
			position: inherit !important;
			button {
				background: #ffffff !important;
				border: 1px solid #ced4da !important;
				color: #212529;
			}
		}
	}
}
</style>
