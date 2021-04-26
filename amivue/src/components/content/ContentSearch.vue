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
						<b-col xl="3" md="12" sm="12" v-for="item in items" :key="item">
							<content-search-region v-if="item == 'region'" v-model="regionSelected" :selected="regionSelected" />
							<content-search-estate v-if="item == 'estate'" v-model="estateSelected" :region="regionSelected" />
							<content-search-date v-if="item == 'date'" v-model="dateSelected" />
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

export default {
	props: {
		shows: {
			type: Array,
			default: () => {
				return [["region", "estate"]];
			}
		}
	},
	components: { ContentSearchRegion, ContentSearchEstate, ContentSearchDate },
	created() {},
	mounted() {},
	computed: {
		result() {
			return {
				regionSeq: this.regionSelected,
				estateSeq: this.estateSelected,
				date: this.dateSelected
			};
		}
	},
	data() {
		return {
			regionSelected: null,
			estateSelected: null,
			dateSelected: this.$moment().format("YYYY-MM-DD")
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
