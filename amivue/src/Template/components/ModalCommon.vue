<template>
	<b-modal id="addBuilding" title="동 등록">
		<div class="modal-content-wrap">
			<div class="modal-box">
				<form>
					<fieldset class="form-group">
						<legend>지역 선택<span>*</span></legend>
						<div>
							<select class="custom-select">
								<option selected="selected" value="0">-- 선택하세요 --</option>
							</select>
						</div>
					</fieldset>
					<fieldset class="form-group">
						<legend>단지 선택<span>*</span></legend>
						<div>
							<select class="custom-select">
								<option selected="selected" value="0">-- 선택하세요 --</option>
							</select>
						</div>
					</fieldset>
					<div class="form-group">
						<label>등록 동명<span>*</span></label>
						<div>
							<div class="input-group">
								<input id="buildingName" type="text" placeholder="404동" class="form-control" />
								<div class="input-group-append">
									<button type="button" class="btn btn-light">등록 확인</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</b-modal>
</template>
<style lang="scss">
@import "~@/assets/scss/modal/modalBuilding.scss";
</style>
