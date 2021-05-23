<template>
	<b-modal id="addEstate" title="단지관리">
		<div class="b-overlay-wrap position-relative" id="overlay-background">
			<div class="modal-content-wrap">
				<div class="center">
					<form>
						<div class="modal-1st-box">
							<div class="form-group">
								<label>단지 ID<span>*</span></label>
								<div>
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="form-group">
								<label>세대 수<span>*</span></label>
								<div>
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="form-group">
								<label>지역 선택<span>*</span></label>
								<div>
									<select class="custom-select">
										<option>판교</option>
									</select>
								</div>
							</div>
							<fieldset class="form-group">
								<legend>담당자1</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>담당자2</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>설치 DCU 수</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>설치 Meter 수</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
						</div>
						<div class="modal-2nd-box">
							<div class="form-group">
								<label>단지 명<span>*</span></label>
								<div>
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="form-group">
								<label>주소<span>*</span></label>
								<div>
									<input type="text" class="form-control" />
								</div>
							</div>
							<fieldset class="form-group">
								<legend>연락처</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>담당자1 연락처</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>담당자2 연락처</legend>
								<div>
									<input type="text" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>설치 모뎀 수</legend>
								<div>
									<input type="number" class="form-control" />
								</div>
							</fieldset>
							<fieldset class="form-group">
								<legend>동 호수</legend>
								<div>
									<div class="row">
										<div class="col-6"><div id="tooltip-button-building" class="tooltip-button-building">0</div></div>
										<div class="col-6"><div id="tooltip-button-number" class="tooltip-button-number">0</div></div>
									</div>
								</div>
							</fieldset>
						</div>
						<div class="modal-3rd-box">
							<fieldset class="form-group">
								<legend>검침 타입</legend>
								<div>
									<div>
										<div class="custom-control custom-control-inline custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<label class="custom-control-label">
												전기
											</label>
										</div>
									</div>
									<div>
										<div class="custom-control custom-control-inline custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<label class="custom-control-label">
												가스
											</label>
										</div>
									</div>
									<div>
										<div class="custom-control custom-control-inline custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<label class="custom-control-label">
												수도
											</label>
										</div>
									</div>
									<div>
										<div class="custom-control custom-control-inline custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<label class="custom-control-label">
												온수
											</label>
										</div>
									</div>
									<div>
										<div class="custom-control custom-control-inline custom-checkbox">
											<input type="checkbox" class="custom-control-input" />
											<label class="custom-control-label">
												난방
											</label>
										</div>
									</div>
								</div>
							</fieldset>
						</div>
						<div class="modal-4th-box">
							<fieldset class="form-group">
								<legend>검침일</legend>
								<div>
									<div class="input-group">
										<ul class="bg">
											<li>
												<fieldset class="form-group">
													<legend>전기</legend>
													<div>
														<input type="number" class="form-control" />
													</div>
												</fieldset>
											</li>
											<li>
												<fieldset class="form-group">
													<legend>가스</legend>
													<div>
														<input type="number" class="form-control" />
													</div>
												</fieldset>
											</li>
											<li>
												<fieldset class="form-group">
													<legend>수도</legend>
													<div>
														<input type="number" class="form-control" />
													</div>
												</fieldset>
											</li>
											<li>
												<fieldset class="form-group">
													<legend>온수</legend>
													<div>
														<input type="number" class="form-control" />
													</div>
												</fieldset>
											</li>
											<li>
												<fieldset class="form-group">
													<legend>난방</legend>
													<div>
														<input type="number" class="form-control" />
													</div>
												</fieldset>
											</li>
										</ul>
										<div class="input-group-append">
											<button type="button" disabled="disabled" class="btn btn-light disabled">단지 검침일 일괄 변경</button>
										</div>
									</div>
								</div>
							</fieldset>
						</div>
					</form>
				</div>
			</div>
		</div>
	</b-modal>
</template>
<style lang="scss">
@import "~@/assets/scss/modal/modalEstate.scss";
</style>
