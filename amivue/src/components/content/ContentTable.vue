<template>
	<div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<b-button v-b-modal="addEstate" variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}</b-button>
				<b-button-group>
					<b-button variant="light btn-excel">
						<icon-base viewBox="0 0 30 30" width="10px" height="10px" icon-name="excel" cls="bi-pencil-fill mx-auto b-icon bi">
							<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
							<polyline
								fill="#FFFFFF"
								points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
							/>
						</icon-base>
						{{ $t("estate.button.excelDownload") }}
					</b-button>
					<b-button variant="light">{{ $t("estate.button.allInterlink") }}</b-button>
				</b-button-group>
				<b-button variant="light">{{ $t("estate.button.save") }}</b-button>
			</div>
			<div class="filter-wrap">
				<slot name="table-header-right" />
				<b-form-group :label="$t('estate.filter.region')">
					<b-form-select>
						<b-form-select-option>서울</b-form-select-option>
						<b-form-select-option>경기</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group :label="$t('estate.filter.estateName')">
					<b-form-select class="form-control">
						<b-form-select-option>1단지</b-form-select-option>
						<b-form-select-option>2단지</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group v-if="perpage">
					<b-form-select v-model="perPage" :options="pages" class="form-control" />
				</b-form-group>
				<b-form-group label="등록 동명">
					<b-form-input placeholder="404동"></b-form-input>
				</b-form-group>
			</div>
		</div>
		<div class="table-wrap ">
			<div class="bgtable">
				<b-table
					:striped="true"
					:busy="busy"
					:items="items"
					:fields="fields"
					:current-page="currentPage"
					:per-page="perPage"
					:filter="filterEstate"
					:filter-included-fields="filterTargetFields"
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
						<h4>{{ $t("msg.search.emptyFilteredText") || scope.emptyFilteredText }}</h4>
					</template>
					<template #cell(remark)="row">
						<b-button @click="info(row.item, row.index, $event.target)" variant="outline-primary" size="sm">
							{{ $t("estate.details") }}
						</b-button>
						<!-- <b-button size="sm" @click="row.toggleDetails"> {{ row.detailsShowing ? "Hide" : "Show" }} Details </b-button> -->
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
export default {
	props: {
		perpage: { type: Boolean, default: true },
		busy: Boolean,
		items: Array,
		fields: Array
	},
	created() {},
	mounted() {
		this.totalRows = this.items.length;
	},
	computed: {
		filterTargetFields: function() {
			const filters = this.fields.filter(item => {
				return item.hasFilter;
			});
			console.log(filters);
			return filters.map(item => item.key);
		}
	},
	data() {
		return {
			totalRows: 1,
			currentPage: 1,
			perPage: 15,
			pages: [
				{ value: 2, text: this.$t("estate.filter.page10") },
				{ value: 15, text: this.$t("estate.filter.page15") },
				{ value: 20, text: this.$t("estate.filter.page20") },
				{ value: 30, text: this.$t("estate.filter.page30") },
				{ value: 50, text: this.$t("estate.filter.page50") }
			],
			filterEstate: ""
		};
	},
	methods: {
		changePageCount(event) {
			this.perPage = event.target.text;
		},
		onFiltered(filteredItems) {
			// 필터링으로 인해 페이지 매김을 트리거하여 버튼 / 페이지 수 업데이트
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
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
