<template>
	<b-modal id="detailEquipmentOther" size="lg" title="가스, 수도, 온수, 난방">
		<div class="b-overlay-wrap position-relative" id="overlay-background">
			<div class="modal-content-wrap">
				<div class="svg-wrap">
					<div class="svg"><img src="/img/waterworks.ba22416b.svg" alt="" title="" /></div>
					<div class="svg-input other">
						<ul>
							<li>
								<h4>가스</h4>
								<div class="meter-value">00000<span class="blink">.</span>00</div>
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
									<legend>Gateway ID</legend>
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
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>계량기 시각</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>LP 주기</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
										</div>
									</div>
								</fieldset>
								<fieldset class="form-group">
									<legend>검침 타입</legend>
									<div>
										<div class="input-group">
											<input type="text" class="form-control" />
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
@import "~@/assets/scss/modal/modalDetailEquipmentOther.scss";
</style>
