<template>
	<b-modal id="addBuilding" title="동 등록">
		<!---->
		<div class="modal-content-wrap">
			<form>
				<b-row align-h="center">
					<div class="modal-box">
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
								<b-form-input v-model="text" placeholder="4521542" class="form-control"></b-form-input>
								<b-input-group-append>
									<b-button variant="light">연동 확인</b-button>
								</b-input-group-append>
							</b-input-group>
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
