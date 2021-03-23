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
		<div class="table-wrap">
			<slot name="table-main" />
		</div>
		<div class="pa-wrap">
			<nav aria-label="Pagination">
				<ul class="pagination b-pagination">
					<li class="page-item disabled">
						<span class="page-link">«</span>
					</li>
					<li class="page-item disabled">
						<span class="page-link">‹</span>
					</li>
					<li class="page-item">
						<a href="" class="page-link nuxt-link-active" target="_self">1</a>
					</li>
					<li class="page-item">
						<a href="" class="page-link" target="_self">2</a>
					</li>
					<li class="page-item">
						<a href="" class="page-link" target="_self">3</a>
					</li>
					<li class="page-item bv-d-xs-down-none">
						<a href="" class="page-link" target="_self">4</a>
					</li>
					<li class="page-item disabled bv-d-xs-down-none"><span class="page-link">…</span></li>
					<li class="page-item disabled">
						<span class="page-link">›</span>
					</li>
					<li aclass="page-item disabled">
						<span class="page-link">»</span>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	created() {}
};
</script>

<style></style>
