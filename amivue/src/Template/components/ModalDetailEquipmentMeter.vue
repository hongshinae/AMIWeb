<template>
	<b-modal id="detailEquipmentMeter" size="lg" title="METER 상세">
		<div class="b-overlay-wrap position-relative" id="overlay-background">
			<div class="modal-content-wrap">
				<div class="svg-wrap">
					<div class="svg"><img src="/img/meter.2cec9154.svg" alt="" title="" /></div>
					<div class="svg-input">
						<ul>
							<li>
								<div class="meter-value">13<span class="blink">.</span>34</div>
								<fieldset class="form-group">
									<legend>METER ID</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>Modem MAC</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>Device Name</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
							</li>
							<li>
								<fieldset class="form-group">
									<legend>DCU ID</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>DCU IP</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>검침일</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
											<div class="input-group-append">
												<button type="button" class="btn btn-light">검침일</button>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>계량기 시각</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
											<div class="input-group-append">
												<button type="button" class="btn btn-light">시각설정</button>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>LP 주기</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
											<div class="input-group-append">
												<button type="button" class="btn btn-light">수정</button>
											</div>
										</div>
									</div>
								</fieldset>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!---->
		</div>
	</b-modal>
</template>
<style lang="scss">
@import "~@/assets/scss/modal/modalDetailEquipmentMeter.scss";
</style>
