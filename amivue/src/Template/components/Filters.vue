<template>
	<div class="filter-wrap">
		<fieldset class="form-group">
			<div>
				<fieldset class="form-group">
					<legend class="bv-no-focus-ring col-form-label pt-0">동명</legend>
					<div>
						<input type="text" placeholder="101동" class="form-control" />
					</div>
				</fieldset>
			</div>
		</fieldset>
		<fieldset class="form-group">
			<div>
				<select class="custom-select">
					<option value="10">10개씩 보기</option>
					<option value="15">15개씩 보기</option>
					<option value="20">20개씩 보기</option>
					<option value="30">30개씩 보기</option>
					<option value="50">50개씩 보기</option>
				</select>
			</div>
		</fieldset>
	</div>
</template>
<style lang="scss">
@import "~@/assets/scss/components/filterWrap.scss";
</style>
