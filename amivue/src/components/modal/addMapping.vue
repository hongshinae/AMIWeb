<template>
	<b-modal id="addMapping" title="매핑정보 신규 등록">
		<!---->
		<div class="modal-content-wrap">
			<form>
				<b-row align-h="center">
					<div class="modal-4th-box">
						<div class="m-b-20">
							<form class="one-row">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">검침 타입</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="meteringType" class="form-control">
											<b-form-select-option value="1">전기</b-form-select-option>
											<b-form-select-option value="12">수도</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">지역 코드</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="regionCode" class="form-control">
											<b-form-select-option value="1">서울시</b-form-select-option>
											<b-form-select-option value="12">경기도</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="estateCode" class="form-control">
											<b-form-select-option value="1">서울 아파트</b-form-select-option>
											<b-form-select-option value="12">판교 아파트</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
								<b-row class="form-group">
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
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
											</td>
										</tr>
										<tr role="row" class="">
											<td class="">
												<b-form-input v-model="text" placeholder="1006동" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="2020-12-12 17:21:28" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="1542541" class="form-control"></b-form-input>
											</td>
											<td class="">
												<b-form-input v-model="text" placeholder="15일" class="form-control"></b-form-input>
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
			meteringType: "1",
			regionCode: "1",
			estateCode: "1",
			text: "",
			currentPage: 1,
			rows: 10
		};
	}
};
</script>
