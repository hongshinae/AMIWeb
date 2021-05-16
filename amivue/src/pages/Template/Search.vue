<template>
	<div class="search-wrap">
		<div class="wbox">
			<div class="search-img">
				<b-icon icon="search" variant="primary"></b-icon>
			</div>
			<div class="search">
				<form>
					<div class="row">
						<div class="col-sm-12 col-md-12 col-xl-3">
							<div class="row">
								<div class="col-lg-4"><label class="d-block">텍스트</label></div>
								<div class="col-lg-8">
									<select class="custom-select">
										<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
										<option value="1">텍스트1</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col-sm-12 col-md-12 col-xl-3">
							<div class="row">
								<div class="col-lg-4"><label class="d-block">텍스트</label></div>
								<div class="col-lg-8">
									<select disabled="disabled" class="custom-select">
										<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col-sm-12 col-md-12 col-xl-3">
							<div class="row">
								<div class="col-lg-4"><label class="d-block">텍스트</label></div>
								<div class="col-lg-8">
									<select disabled="disabled" class="custom-select">
										<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12 col-md-12 col-xl-3">
							<div class="row">
								<div class="col-lg-4"><label class="d-block">텍스트</label></div>
								<div class="col-lg-8">
									<select class="custom-select">
										<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
										<option value="1">텍스트1</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="btn-wrap ml-auto">
				<button type="button" class="btn btn-primary">버튼</button>
				<button type="button" class="btn btn-blight">버튼</button>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scope>
@import "~@/assets/scss/components/search.scss";
</style>
