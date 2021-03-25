<template>
	<div>
		<div class="btn-wrap">
			<div role="group" class="btn-group">
				<slot name="table-header-left" />
			</div>
			<div role="group" class="btn-group">
				<slot name="table-header-right" />
			</div>
		</div>
		<div class="table-wrap ">
			<div class="bgtable">
				<slot name="table-main" />
			</div>
		</div>
		<div class="pa-wrap">
			<slot name="table-footer-pagination" aria-label="Pagination" />
		</div>
	</div>
</template>

<script>
export default {
	created() {}
};
</script>

<style></style>
