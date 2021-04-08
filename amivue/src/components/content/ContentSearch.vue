<template>
	<div class="search-wrap">
		<div class="wbox">
			<div class="search-img">
				<b-icon icon="search" variant="primary"></b-icon>
			</div>
			<div class="search">
				<!--검색영역-->
				<form>
					<b-row v-for="(items, index) in shows" :key="index">
						<b-col xl="3" md="12" sm="12" v-for="item in items" :key="item">
							<content-search-region v-if="item == 'region'" v-model="regionSelected" :selected="regionSelected" />
							<content-search-estate v-if="item == 'estate'" v-model="estateSelected" :region="regionSelected" />
						</b-col>
					</b-row>
				</form>
				<!--//검색영역-->
			</div>
			<div class="btn-wrap ml-auto">
				<b-button block variant="primary" @click="search()">{{ $t("component.content.search") }}</b-button>
			</div>
		</div>
	</div>
</template>

<script>
import ContentSearchRegion from "./ContentSearchRegion";
import ContentSearchEstate from "./ContentSearchEstate";

export default {
	props: {
		shows: {
			type: Array,
			default: () => {
				return [["region", "estate"]];
			}
		}
	},
	components: { ContentSearchRegion, ContentSearchEstate },
	created() {},
	mounted() {},
	computed: {
		result() {
			return {
				regionSeq: this.regionSelected,
				estateSeq: this.estateSelected
			};
		}
	},
	data() {
		return {
			regionSelected: "0",
			estateSelected: "0"
		};
	},
	methods: {
		search() {
			this.$emit("handle:searchItem", this.result);
		}
	}
};
</script>

<style></style>
