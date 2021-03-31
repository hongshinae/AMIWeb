<template>
	<b-modal id="addEstate" title="단지 상세 관리" ok-only no-stacking>
		<div class="center">
			<div class="modal-1st-box">
				<b-form-group label="단지 ID" label-for="">
					<b-form-input id="" placeholder="단지 ID"></b-form-input>
				</b-form-group>
				<b-form-group label="세대 수" label-for="">
					<b-form-input id="" placeholder="세대 수"></b-form-input>
				</b-form-group>
				<b-form-group label="지역 선택" label-for="input1">
					<b-form-select>
						<b-form-select-option>서울시</b-form-select-option>
						<b-form-select-option>경기도</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group label="담당자1" label-for="">
					<b-form-input id="" placeholder="담당자1"></b-form-input>
				</b-form-group>
				<b-form-group label="담당자2" label-for="">
					<b-form-input id="" placeholder="담당자2"></b-form-input>
				</b-form-group>
				<b-form-group label="설치 DCU 수" label-for="">
					<b-form-input id="" placeholder="설치 DCU 수"></b-form-input>
				</b-form-group>
				<b-form-group label="설치 Meter 수" label-for="">
					<b-form-input id="" placeholder="설치 Meter 수"></b-form-input>
				</b-form-group>
				<b-form-group label="수도 Meter 수" label-for="">
					<b-form-input id="" placeholder="수도 Meter 수"></b-form-input>
				</b-form-group>
				<b-form-group label="기타" label-for="">
					<b-form-input id="" placeholder="기타"></b-form-input>
				</b-form-group>
			</div>
			<div class="modal-2nd-box">
				<b-form-group label="단지 명" label-for="">
					<b-form-select>
						<b-form-select-option>1단지</b-form-select-option>
						<b-form-select-option>2단지</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group label="주소" label-for="">
					<b-form-input id="" placeholder="경기도 성남시 분당구 삼평동 1006동 210호"></b-form-input>
				</b-form-group>
				<b-form-group label="연락처" label-for="">
					<b-form-input id="" placeholder="010.1211.1111"></b-form-input>
				</b-form-group>
				<b-form-group label="담당자1 연락처" label-for="">
					<b-form-input id="" placeholder="담당자1 연락처"></b-form-input>
				</b-form-group>
				<b-form-group label="담당자2 연락처" label-for="">
					<b-form-input id="" placeholder="담당자2 연락처"></b-form-input>
				</b-form-group>
				<b-form-group label="설치 모뎀 수" label-for="">
					<b-form-input id="" placeholder="설치 모뎀 수"></b-form-input>
				</b-form-group>
				<b-form-group label="가스 Meter 수" label-for="">
					<b-form-input id="" placeholder="가스 Meter 수"></b-form-input>
				</b-form-group>
				<b-form-group label="기타" label-for="">
					<b-form-input id="" placeholder="기타"></b-form-input>
				</b-form-group>
				<b-form-group label="동 호수" label-for="">
					<b-row>
						<b-col col="6">
							<b-input-group>
								<b-form-input v-model="text" placeholder="1006동"></b-form-input>
								<b-input-group-append>
									<b-button variant="light">동 선택</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-col>
						<b-col col="6">
							<b-input-group>
								<b-form-input v-model="text" placeholder="902호"></b-form-input>
								<b-input-group-append>
									<b-button variant="light">호 선택</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-col>
					</b-row>
				</b-form-group>
			</div>
			<div class="modal-3rd-box">
				<b-form-group label="검침 타입">
					<b-form-checkbox-group>
						<b-form-checkbox value="전기">전기</b-form-checkbox>
						<b-form-checkbox value="가스">가스</b-form-checkbox>
						<b-form-checkbox value="수도">수도</b-form-checkbox>
						<b-form-checkbox value="온수">온수</b-form-checkbox>
						<b-form-checkbox value="난방">난방</b-form-checkbox>
					</b-form-checkbox-group>
				</b-form-group>
			</div>
			<div class="modal-4th-box">
				<b-form-group label="검침일">
					<b-input-group>
						<ul class="bg">
							<li>전기 <i class="p-Color">15</i>일</li>
							<li>가스 <i class="p-Color">1</i>일</li>
							<li>수도 <i class="p-Color">4</i>일</li>
							<li>온수 <i class="p-Color">1</i>일</li>
							<li>난방 <i class="p-Color">5</i>일</li>
						</ul>
						<b-input-group-append>
							<b-button variant="light">단지 검침일 일괄 변경</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-form-group>
			</div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
