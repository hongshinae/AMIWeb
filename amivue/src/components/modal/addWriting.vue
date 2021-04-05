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
						<b-form-group label="단지 ID" label-for="">
							<b-form-input id="" placeholder="단지 ID"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="단지 명" label-for="">
							<b-form-select v-model="selected">
								<b-form-select-option>1단지</b-form-select-option>
								<b-form-select-option>2단지</b-form-select-option>
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-form-group label="동명" label-for="">
							<b-form-select v-model="selected">
								<b-form-select-option>101동</b-form-select-option>
								<b-form-select-option>102동</b-form-select-option>
							</b-form-select>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="문의 정보" label-for="">
							<b-form-select v-model="selected">
								<b-form-select-option>DCU</b-form-select-option>
								<b-form-select-option>METER</b-form-select-option>
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row class="textarea-wrap">
					<b-col>
						<b-form-group label="내용" label-for="">
							<b-form-textarea id="" v-model="text" placeholder="" rows="10" max-rows="15" size="sm"></b-form-textarea>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row class="textarea-wrap">
					<b-col>
						<b-form-group label="원인" label-for="">
							<b-form-textarea id="" v-model="text" placeholder="" rows="3" max-rows="6" size="sm"></b-form-textarea>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row class="textarea-wrap">
					<b-col>
						<b-form-group label="댓글" label-for="">
							<b-form-textarea id="" v-model="text" placeholder="" rows="3" max-rows="6" size="sm"></b-form-textarea>
						</b-form-group>
					</b-col>
				</b-row>
				<div class="one-row">
					<b-form-group label="조치 상태" label-for="">
						<b-form-select v-model="selected">
							<b-form-select-option>처리 완료</b-form-select-option>
							<b-form-select-option>미처리</b-form-select-option>
						</b-form-select>
					</b-form-group>
				</div>
			</div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
