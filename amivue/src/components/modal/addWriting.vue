<template>
	<b-modal id="addWriting" size="lg">
		<template #modal-header="{ close }">
			<ul>
				<li><h4>글쓰기</h4></li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ ok, cancel }">
			<div class="btn-wrap">
				<ul>
					<li><!-- Button with custom close trigger value --></li>
					<li>
						<b-button variant="light" @click="ok()">등록</b-button>
						<b-button variant="light" @click="cancel()">취소</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="modal-content-wrap">
			<div class="modal-box">
				<b-row>
					<b-col>
						<b-form-group label="등록 동명" label-for="">
							<b-form-input id="" placeholder="404동"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="지역 선택" label-for="input1">
							<b-form-select v-model="selected">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-form-group label="등록 동명" label-for="">
							<b-form-input id="" placeholder="404동"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="지역 선택" label-for="input1">
							<b-form-select v-model="selected">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-form-group label="등록 동명" label-for="">
							<b-form-textarea id="" v-model="text" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
						</b-form-group>
					</b-col>
				</b-row>

				<b-form-group label="지역 선택" label-for="input1">
					<b-form-select v-model="selected">
						<b-form-select-option>서울시</b-form-select-option>
						<b-form-select-option>경기도</b-form-select-option>
					</b-form-select>
				</b-form-group>

				<b-form-group label="단지 선택" label-for="">
					<b-form-select v-model="selected">
						<b-form-select-option>서울시</b-form-select-option>
						<b-form-select-option>경기도</b-form-select-option>
					</b-form-select>
				</b-form-group>

				<b-form-group label="등록 동명" label-for="">
					<b-form-input id="" placeholder="404동"></b-form-input>
				</b-form-group>

				<b-form-group label="DCU ID" label-for="">
					<b-input-group>
						<b-form-input v-model="text" placeholder="4521542"></b-form-input>
						<b-input-group-append>
							<b-button variant="light">연동 확인</b-button>
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
