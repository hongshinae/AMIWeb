<template>
	<b-modal id="addEstate" class="addEstate" title="단지 상세 관리" ok-only no-stacking>
		<div class="modal-content-wrap">
			<form>
				<b-row align-h="center">
					<div class="modal-1st-box">
						<b-form-group>
							<label class="d-block label-wrap">단지 ID</label>
							<div class="input-wrap">
								<b-form-input placeholder="단지 ID" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">세대 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="세대 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">지역</label>
							<div class="input-wrap">
								<b-form-input placeholder="지역" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">담당자 1</label>
							<div class="input-wrap">
								<b-form-input placeholder="담당자 1" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">담당자 2</label>
							<div class="input-wrap">
								<b-form-input placeholder="담당자 2" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">설치 DCU 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="설치 DCU 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">설치 Meter 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="설치 Meter 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">수도 Meter 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="수도 Meter 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">기타</label>
							<div class="input-wrap">
								<b-form-input placeholder="기타" class="form-control"></b-form-input>
							</div>
						</b-form-group>
					</div>
					<div class="modal-2nd-box">
						<b-form-group>
							<label class="d-block label-wrap">단지 명</label>
							<div class="input-wrap">
								<b-form-input placeholder="삼성단지" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">주소</label>
							<div class="input-wrap">
								<b-form-input placeholder="경기도 성남시 분당구 삼평동 1006동 210호" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">연락처</label>
							<div class="input-wrap">
								<b-form-input placeholder="010.1212.1211" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">담당자 1 연락처</label>
							<div class="input-wrap">
								<b-form-input placeholder="담당자 1 연락처" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">담당자 2 연락처</label>
							<div class="input-wrap">
								<b-form-input placeholder="담당자 2 연락처" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">설치 모뎀 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="설치 모뎀 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">가스 Meter 수</label>
							<div class="input-wrap">
								<b-form-input placeholder="가스 Meter 수" class="form-control"></b-form-input>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">동 호수</label>
							<div class="input-wrap">
								<label>1006 동</label>
								<b-button variant="primary" class="btn btn-light">동 선택</b-button>
								<label>104 호</label>
								<b-button variant="primary" class="btn btn-light">호 선택</b-button>
							</div>
						</b-form-group>
						<b-form-group>
							<label class="d-block label-wrap">기타</label>
							<div class="input-wrap">
								<b-form-input placeholder="기타" class="form-control"></b-form-input>
							</div>
						</b-form-group>
					</div>
					<div class="modal-3rd-box">
						<b-form-group>
							<label class="d-block label-wrap">검침 타입</label>
							<div class="input-wrap">
								<ul class="modal-ul">
									<li><b-form-checkbox></b-form-checkbox><label>전기</label></li>
									<li><b-form-checkbox></b-form-checkbox><label>가스</label></li>
									<li><b-form-checkbox></b-form-checkbox><label>수도</label></li>
									<li><b-form-checkbox></b-form-checkbox><label>온수</label></li>
									<li><b-form-checkbox></b-form-checkbox><label>난방</label></li>
								</ul>
							</div>
						</b-form-group>
					</div>
					<div class="modal-4th-box">
						<b-form-group>
							<label class="d-block label-wrap">검침 일</label>
							<ul class="bg">
								<li>전기 <i class="p-Color">15</i>일</li>
								<li>가스 <i class="p-Color">1</i>일</li>
								<li>수도 <i class="p-Color">4</i>일</li>
								<li>온수 <i class="p-Color">1</i>일</li>
								<li>난방 <i class="p-Color">5</i>일</li>
							</ul>
							<b-button variant="primary" class="btn btn-light">단지 검침일 일괄 변경</b-button>
						</b-form-group>
					</div>
				</b-row>
			</form>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
