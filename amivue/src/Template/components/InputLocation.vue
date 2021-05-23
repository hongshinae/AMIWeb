<template>
	<fieldset class="form-group install-Location">
		<legend>설치 위치</legend>
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
			<button type="button" class="btn btn-light">확인</button>
		</div>
	</fieldset>
</template>

<style lang="scss">
@import "~@/assets/scss/components/locationWrap​.scss";
</style>
