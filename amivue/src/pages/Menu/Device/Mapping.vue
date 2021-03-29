<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>매핑 정보</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>매핑 정보</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="">
			<b-row>
				<b-col col lg="12" xl="4">
					<div class="wbox m-b-20">
						<form class="one-row">
							<b-row class="form-group">
								<b-col lg="4">
									<label class="d-block">검침 타입</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>전기</b-form-select-option>
										<b-form-select-option>수도</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
							<b-row class="form-group">
								<b-col lg="4">
									<label class="d-block">지역 코드</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
							<b-row class="form-group">
								<b-col lg="4">
									<label class="d-block">단지 명</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울 아파트</b-form-select-option>
										<b-form-select-option>판교 아파트</b-form-select-option>
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
					<div class="wbox">
						<h5 class="tltle">
							<b-icon icon="arrow-return-right"></b-icon>
							<span>서울아파트 : <i class="p-Color">1007</i> 세대 검침일 : <i class="p-Color">1</i>일</span>
						</h5>
						<div class="table-wrap">
							<table class="table b-table basic-table" id="">
								<thead role="rowgroup" class="">
									<tr role="row" class="">
										<th class=""><div>번호</div></th>
										<th class=""><div>이력날짜</div></th>
										<th class=""><div>변경수</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup">
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
									<tr role="row" class="">
										<td class="">1</td>
										<td class="">2020-12-12 17:21:28</td>
										<td class="">2</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="pa-wrap">
							<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
						</div>
					</div>
				</b-col>
				<b-col col lg="12" xl="8">
					<div class="btn-filter-wrap">
						<div class="btn-wrap">
							<b-button v-b-modal.mapping-modal-1 variant="light"><b-icon icon="pencil-fill"></b-icon>신규 등록</b-button>
							<b-button-group>
								<b-button variant="light btn-excel">엑셀 다운로드</b-button>
								<b-button variant="light">전체 연동하기</b-button>
							</b-button-group>
							<b-button variant="light">저장</b-button>
						</div>
						<div class="filter-wrap">
							<b-form-group id="" label="동">
								<b-form-select v-model="selected">
									<b-form-select-option>101동</b-form-select-option>
									<b-form-select-option>102동</b-form-select-option>
								</b-form-select>
							</b-form-group>
							<b-form-group id="" label="호">
								<b-form-select v-model="selected" class="form-control">
									<b-form-select-option>101호</b-form-select-option>
									<b-form-select-option>102호</b-form-select-option>
								</b-form-select>
							</b-form-group>
							<b-form-group id="">
								<b-form-select v-model="selected" class="form-control">
									<b-form-select-option>5개씩 보기</b-form-select-option>
									<b-form-select-option>10개씩 보기</b-form-select-option>
									<b-form-select-option>50개씩 보기</b-form-select-option>
								</b-form-select>
							</b-form-group>
						</div>
					</div>
					<div class="table-wrap">
						<div class="bgtable">
							<table class="table b-table table-striped" id="">
								<!----><!---->
								<thead role="rowgroup" class="">
									<!---->
									<tr role="row" class="">
										<th class=""><div>동</div></th>
										<th class=""><div>호수</div></th>
										<th class=""><div>METER ID</div></th>
										<th class=""><div>검침일</div></th>
										<th class=""><div>MAC ADDR</div></th>
										<th class=""><div>DCU ID</div></th>
										<th class=""><div>연동확인</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup">
									<!---->
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<tr role="row" class="error">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="unlinkage"></span></td>
									</tr>
									<tr role="row" class="">
										<td class=""><input id="input-1" type="text" placeholder="106동" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="101호" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="29140192159" class="form-control" /></td>
										<td class=""><input id="input-1" type="text" placeholder="1일" class="form-control" /></td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">NS09_0101A</td>
										<td class=""><span class="linkage"></span></td>
									</tr>
									<!----><!---->
								</tbody>
								<!---->
							</table>
						</div>
					</div>
				</b-col>
			</b-row>
		</div>
		<b-modal id="mapping-modal-1" title="매핑정보 신규 등록">
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
											<b-form-select v-model="selected" class="form-control">
												<b-form-select-option>전기</b-form-select-option>
												<b-form-select-option>수도</b-form-select-option>
											</b-form-select>
										</b-col>
									</b-row>
									<b-row class="form-group">
										<b-col lg="4">
											<label class="d-block">지역 코드</label>
										</b-col>
										<b-col lg="8">
											<b-form-select v-model="selected" class="form-control">
												<b-form-select-option>서울시</b-form-select-option>
												<b-form-select-option>경기도</b-form-select-option>
											</b-form-select>
										</b-col>
									</b-row>
									<b-row class="form-group">
										<b-col lg="4">
											<label class="d-block">단지 명</label>
										</b-col>
										<b-col lg="8">
											<b-form-select v-model="selected" class="form-control">
												<b-form-select-option>서울 아파트</b-form-select-option>
												<b-form-select-option>판교 아파트</b-form-select-option>
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
	</div>
</template>
<script></script>
<style lang="scss"></style>
