<template>
	<div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<slot name="table-header-left" />
			</div>
			<div class="filter-wrap">
				<slot name="table-header-right" />
				<b-form-group v-for="(item, index) in filter" :key="index">
					<table-filter-select
						v-if="item.type === Array"
						:selected="'0'"
						:label="item.label"
						:options="item.options"
						:text_field="item.textField"
						:value_field="item.valueField"
						:eventName="item.eventName"
						@update:selected="selectEvent"
					/>
					<table-filter-input
						v-else-if="item.type === String"
						:value="item.text"
						:label="item.label"
						:options="item.options"
						:placeholder="item.placeholder"
						:eventName="item.eventName"
						@update:selected="inputEvent"
					/>
				</b-form-group>
				<b-form-group v-if="perpage">
					<b-form-select v-model="perPage" :options="pages" class="form-control" />
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
					:filter="filterText"
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
							<slot name="table-cell-remark" />
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
import Vue from "vue";
import TableFilterSelect from "@/components/TableFilterSelect";
import TableFilterInput from "@/components/TableFilterInput";

Vue.component(TableFilterSelect);
Vue.component(TableFilterInput);

export default {
	components: { TableFilterSelect, TableFilterInput },
	props: {
		perpage: { type: Boolean, default: true },
		busy: Boolean,
		items: Array,
		fields: Array,
		filter: Array
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

			return filters.map(item => item.key);
		}
	},
	data() {
		return {
			totalRows: 1,
			currentPage: 1,
			perPage: 15,
			pages: [
				{ value: 2, text: this.$t("common.filter.page10") },
				{ value: 15, text: this.$t("common.filter.page15") },
				{ value: 20, text: this.$t("common.filter.page20") },
				{ value: 30, text: this.$t("common.filter.page30") },
				{ value: 50, text: this.$t("common.filter.page50") }
			],
			filterText: ""
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
		},
		detail(item, index, event) {
			console.log(item);
			console.log(index);
			console.log(event);
		},
		selectEvent(object) {
			this.$emit("update:selected", object);
		},
		inputEvent(object) {
			this.filterText = object.value;
			this.$emit("update:selected", object);
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
