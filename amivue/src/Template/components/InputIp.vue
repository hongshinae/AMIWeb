<template>
	<fieldset class="form-group input-ip-wrap is-invalid">
		<legend>DCU IdddP</legend>
		<div>
			<div class="input-group">
				<div class="input-text-style">
					<input type="text" placeholder="20" class="form-control" maxlength="3" /><span>.</span>
					<input type="text" placeholder="101" class="form-control" maxlength="3" /><span>.</span>
					<input type="text" placeholder="23" class="form-control" maxlength="3" /><span>.</span>
					<input type="text" placeholder="10" class="form-control" maxlength="3" />
				</div>
				<div class="input-group-append"><button type="button" class="btn btn-light">수정</button></div>
			</div>
		</div>
	</fieldset>
</template>

<style lang="scss">
@import "~@/assets/scss/components/inputIp.scss";
#addEquipmentDcu .input-ip-wrap {
	.input-text-style {
		width: inherit;
	}
}
</style>
