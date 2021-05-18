<template>
	<div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<button type="button" class="btn btn-light">
					<svg
						viewBox="0 0 16 16"
						width="1em"
						height="1em"
						focusable="false"
						role="img"
						aria-label="pencil fill"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi-pencil-fill b-icon bi"
					>
						<g>
							<path
								d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
							></path>
						</g>
					</svg>
					버튼
				</button>
				<button-group />
			</div>
			<filters />
		</div>
		<table-basic />
		<pagination />
	</div>
</template>
<script>
import ButtonGroup from "@/Template/components/ButtonGroup";
import Filters from "@/Template/components/Filters";
import Pagination from "@/Template/components/Pagination";
import TableBasic from "@/Template/components/TableBasic";

export default {
	components: { ButtonGroup, Filters, Pagination, TableBasic }
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/contentTable.scss";
</style>
