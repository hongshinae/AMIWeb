<template>
	<b-modal id="addEquipmentDcu" title="DCU 등록">
		<div class="modal-content-wrap">
			<div class="svg-wrap">
				<div class="svg"><img src="/img/DCU.c6f03260.svg" alt="" title="" /></div>
				<div class="svg-input">
					<fieldset class="form-group">
						<legend class="bv-no-focus-ring col-form-label pt-0">DCU ID</legend>
						<div>
							<input type="text" placeholder="NS09_0101A" class="form-control" />
						</div>
					</fieldset>
					<fieldset class="form-group input-ip-wrap is-invalid">
						<legend class="bv-no-focus-ring col-form-label pt-0">DCU IP</legend>
						<div>
							<div role="group" class="input-group">
								<div class="input-text-style">
									<input type="text" placeholder="20" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="101" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="23" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="10" class="form-control" maxlength="3" />
								</div>
							</div>
							<div class="d-block invalid-feedback">
								invalidFeedback
							</div>
						</div>
					</fieldset>
					<fieldset class="form-group" value="">
						<legend class="bv-no-focus-ring col-form-label pt-0">DCU PORT</legend>
						<div>
							<div class="input-group">
								<input type="text" placeholder="88080" class="form-control" />
							</div>
						</div>
					</fieldset>
					<fieldset class="form-group input-ip-wrap is-invalid">
						<legend class="bv-no-focus-ring col-form-label pt-0">ROUTER IP</legend>
						<div>
							<div class="input-group">
								<div class="input-text-style">
									<input type="text" placeholder="20" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="101" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="23" class="form-control" maxlength="3" />
									<span>.</span>
									<input type="text" placeholder="10" class="form-control" maxlength="3" />
								</div>
							</div>
							<div class="d-block invalid-feedback">
								invalidFeedback
							</div>
						</div>
					</fieldset>
					<fieldset class="form-group install-Location">
						<legend class="bv-no-focus-ring col-form-label pt-0">설치 위치</legend>
						<div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text">위도</div>
								</div>
								<input type="number" placeholder="위도" min="-90" max="90" class="form-control" />
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text">경도</div>
								</div>
								<input type="number" placeholder="경도" min="-90" max="90" class="form-control" />
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	</b-modal>
</template>
<style lang="scss">
@import "~@/assets/scss/modal/modalAddEquipmentDcu.scss";
@import "~@/assets/scss/components/inputIp.scss";
</style>
