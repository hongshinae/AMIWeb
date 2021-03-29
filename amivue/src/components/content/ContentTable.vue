<template>
	<div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<b-button v-b-modal.mapping-modal-1 variant="light"><b-icon icon="pencil-fill"></b-icon>{{ $t("estate.button.add") }}</b-button>
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
