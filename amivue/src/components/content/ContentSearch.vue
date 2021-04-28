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
							<content-search-duration-type v-if="item == 'durationType'" v-model="durationType" />
							<content-search-duration-date
								v-if="item == 'durationDate'"
								:fromDate.sync="durationDate.fromDate"
								:toDate.sync="durationDate.toDate"
							/>
						</b-col>
					</b-row>
				</form>
				<!--//검색영역-->
			</div>
			<div class="btn-wrap ml-auto">
				<b-button block variant="primary" @click="search()">{{ $t("component.content.search.title") }}</b-button>
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
		ContentSearchDurationDate
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
				params.durationType = this.durationType;
			}

			if (this.shows.join().indexOf("durationDate") > -1) {
				Object.assign(params, {
					fromDate: this.$moment(this.durationDate.fromDate).format("YYYYMMDD"),
					toDate: this.$moment(this.durationDate.toDate).format("YYYYMMDD")
				});
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
			durationType: 1,
			durationDate: {
				fromDate: this.$moment().format("YYYY-MM-DD"),
				toDate: this.$moment().format("YYYY-MM-DD")
			}
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

<style></style>
