<template>
	<b-modal id="addMapping">
		<template #modal-header="{ close }">
			<ul>
				<li><h4>매핑정보 신규 등록</h4></li>
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
			<form>
				<b-row align-h="center">
					<div class="modal-4th-box">
						<div class="m-b-20">
							<form class="one-row">
								<b-row>
									<b-col lg="4">
										<label class="d-block">검침 타입</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="readingType">
											<b-form-select-option value="1">전기</b-form-select-option>
											<b-form-select-option value="12">수도</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row>
									<b-col lg="4">
										<label class="d-block">지역 코드</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="regionCode">
											<b-form-select-option value="1">서울시</b-form-select-option>
											<b-form-select-option value="12">경기도</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row>
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="estateCode">
											<b-form-select-option value="1">서울 아파트</b-form-select-option>
											<b-form-select-option value="12">판교 아파트</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row>
									<b-col lg="4"> </b-col>
									<b-col lg="8">
										<b-button variant="primary btn-block">검색</b-button>
									</b-col>
								</b-row>
							</form>
						</div>
						<div>
							<div class="table-wrap">
								<table class="table b-table basic-table" id="">
									<thead role="rowgroup" class="">
										<tr role="row" class="">
											<th class=""><div>동</div></th>
											<th class=""><div>호수</div></th>
											<th class=""><div>Meter ID</div></th>
											<th class=""><div>검침일</div></th>
										</tr>
									</thead>
									<tbody role="rowgroup">
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일"></b-form-input>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="pa-wrap">
								<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
							</div>
						</div>
					</div>
				</b-row>
			</form>
		</div>
		<!---->
	</b-modal>
</template>
<script>
export default {
	data() {
		return {
			readingType: "1",
			regionCode: "1",
			estateCode: "1",
			text: "",
			currentPage: 1,
			rows: 10
		};
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/modal/modalCommon.scss";
@import "~@/assets/scss/modal/modalAddMapping.scss";
</style>
