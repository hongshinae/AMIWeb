<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>장비 관리</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>장비 관리</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="tab-wrap">
			<b-tabs>
				<b-tab title="DCU 관리" active>
					<div class="search-wrap1">
						<div class="wbox">
							<div class="search-img">
								<b-icon icon="search" variant="primary"></b-icon>
							</div>
							<div class="search">
								<!--검색영역-->
								<form>
									<b-row>
										<b-col cols="4" lg="4">
											<b-row class="form-group">
												<b-col lg="4">
													<label class="d-block">지역 이름</label>
												</b-col>
												<b-col lg="8">
													<b-form-select v-model="selected" class="form-control">
														<b-form-select-option>서울시</b-form-select-option>
														<b-form-select-option>경기도</b-form-select-option>
													</b-form-select>
												</b-col>
											</b-row>
										</b-col>
										<b-col cols="4" lg="4">
											<b-row class="form-group">
												<b-col lg="4">
													<label class="d-block">단지 명</label>
												</b-col>
												<b-col lg="8">
													<b-form-input v-model="text" placeholder="그랑시아 아파트" class="form-control"></b-form-input>
												</b-col>
											</b-row>
										</b-col>
										<b-col cols="4" lg="4">
											<b-row class="form-group">
												<b-col lg="4">
													<label class="d-block">DCU ID</label>
												</b-col>
												<b-col lg="8">
													<b-form-input v-model="text" placeholder="DCU ID" class="form-control"></b-form-input>
												</b-col>
											</b-row>
										</b-col>
									</b-row>
								</form>
								<!--//검색영역-->
							</div>
							<div class="btn-wrap ml-auto">
								<b-button variant="primary btn-block">검색</b-button>
							</div>
						</div>
					</div>
					<div class="btn-wrap">
						<div role="group" class="btn-group">
							<b-button variant="primary" v-b-modal.dcu-modal-1><b-icon icon="pencil-fill"></b-icon>DCU 신규등록</b-button>
						</div>
						<div role="group" class="btn-group">
							<b-button variant="outline-secondary"><!--svg icon-->엑셀 다운로드</b-button>
						</div>
					</div>
					<div class="table-wrap">
						<table class="table bgtable b-table table-striped">
							<thead>
								<tr>
									<th><div>지역</div></th>
									<th><div>단지 명</div></th>
									<th><div>설치 동 명</div></th>
									<th><div>DCU ID</div></th>
									<th><div>IP</div></th>
									<th><div>LTE 장비 IP</div></th>
									<th><div>Firmware</div></th>
									<th><div>Modem</div></th>
									<th><div>Meter</div></th>
									<th><div></div></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
								<tr>
									<td>서울</td>
									<td>서울 아파트</td>
									<td>101동</td>
									<td>NS09_0101A</td>
									<td>20.101.235.100</td>
									<td>20.101.235.100</td>
									<td>2.3</td>
									<td>55</td>
									<td>110</td>
									<td><b-button class="btn" variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="pa-wrap">
						<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
					</div>
					<div class="map-wrap">
						<div class="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
								width="100%"
								height="300"
								style="border:0;"
								allowfullscreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</b-tab>
				<b-tab title="METER 관리"><p>METER 관리</p></b-tab>
				<b-tab title="가스,수도,온수,난방 관리"><p>가스,수도,온수,난방 관리</p></b-tab>
			</b-tabs>
		</div>
		<b-modal id="dcu-modal-1" title="DCU 등록">
			<div class="svg-wrap">
				<div class="svg">
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						width="312px"
						height="378px"
						viewBox="0 0 312 378"
						enable-background="new 0 0 312 378"
						xml:space="preserve"
					>
						<path
							fill="#211E1E"
							d="M28,64c0,5.523-4.478,10-10,10h-8C4.478,74,0,69.523,0,64V45c0-5.523,4.478-10,10-10h8
	c5.522,0,10,4.477,10,10V64z"
						/>
						<path
							fill="#211E1E"
							d="M312,64c0,5.523-4.478,10-10,10h-8c-5.522,0-10-4.477-10-10V45c0-5.523,4.478-10,10-10h8
	c5.522,0,10,4.477,10,10V64z"
						/>
						<path fill="#211E1E" d="M64,371c0,2.209-1.791,4-4,4H29c-2.209,0-4-1.791-4-4v-20c0-2.209,1.791-4,4-4h31c2.209,0,4,1.791,4,4V371z" />
						<path
							fill="#211E1E"
							d="M288,371c0,2.209-1.791,4-4,4h-31c-2.209,0-4-1.791-4-4v-20c0-2.209,1.791-4,4-4h31c2.209,0,4,1.791,4,4V371
	z"
						/>
						<path
							fill="#211E1E"
							d="M270,362c0,2.209-1.791,4-4,4H46c-2.209,0-4-1.791-4-4v-17c0-2.209,1.791-4,4-4h220c2.209,0,4,1.791,4,4V362
	z"
						/>
						<path
							fill="#8C8B8B"
							d="M-65,614c0,5.522-4.478,10-10,10h-264c-5.522,0-10-4.478-10-10V370c0-5.523,4.478-10,10-10h264
	c5.522,0,10,4.477,10,10V614z"
						/>
						<path
							fill="#8C8B8B"
							d="M298,345c0,5.522-4.478,10-10,10H24c-5.522,0-10-4.478-10-10V11c0-5.523,4.478-10,10-10h264
	c5.522,0,10,4.477,10,10V345z"
						/>
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="24.75" cy="14.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="24.75" cy="343.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="286.75" cy="343.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="286.75" cy="14.75" r="2.75" />
						<path
							fill="#FFFFFF"
							d="M272,242c0,5.523-4.478,10-10,10H50c-5.523,0-10-4.477-10-10V40c0-5.523,4.477-10,10-10h212
	c5.522,0,10,4.477,10,10V242z"
						/>
						<text transform="matrix(1 0 0 1 114.2954 315)" fill="#070707" font-family="'MyriadPro-Regular'" font-size="36">D C U</text>
					</svg>
				</div>
				<div class="svg-input">
					<b-row class="form-group">
						<b-col lg="5">
							<label class="d-block">DCU ID</label>
						</b-col>
						<b-col lg="7">
							<b-form-input v-model="text" placeholder="DCU_ID_123" class="form-control"></b-form-input>
						</b-col>
					</b-row>
					<b-row class="form-group">
						<b-col lg="5">
							<label class="d-block">IP Address</label>
						</b-col>
						<b-col lg="7">
							<b-form-input v-model="text" placeholder="20.101.235.100" class="form-control"></b-form-input>
						</b-col>
					</b-row>
					<b-row class="form-group">
						<b-col lg="5">
							<label class="d-block">IP Router</label>
						</b-col>
						<b-col lg="7">
							<b-form-input v-model="text" placeholder="20.1.1.235.254" class="form-control"></b-form-input>
						</b-col>
					</b-row>
					<b-row class="form-group">
						<b-col lg="5">
							<label class="d-block">설치 일자</label>
						</b-col>
						<b-col lg="7">
							<b-form-input v-model="text" placeholder="2020-12-29 13:45:00" class="form-control"></b-form-input>
						</b-col>
					</b-row>
					<b-row class="form-group">
						<b-col lg="5">
							<label class="d-block">설치 위치</label>
						</b-col>
						<b-col lg="7">
							<b-form-input v-model="text" placeholder="위도 : 0,  경도 : 0" class="form-control"></b-form-input>
						</b-col>
					</b-row>
				</div>
			</div>
		</b-modal>
		<b-modal id="modal-xl" size="xl" class="modal-equip" title="서울 아파트">
			<!---->
			<div class="modal-content-wrap modal-equip">
				<form>
					<b-row align-h="center">
						<b-form>
							<ul class="left">
								<li>
									<div class="modal-1st-box">
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 고유번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="cnu111" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 모델번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="a12d125" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
									</div>
									<div class="modal-2nd-box">
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 고유번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="cnu111" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 모델번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="a12d125" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">MAC 번호</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="" class="form-control"></b-form-input>
											</b-col>
										</b-row>
									</div>
									<div class="modal-3rd-box">
										<div class="table-wrap">
											<table class="table b-table basic-table" id="">
												<thead role="rowgroup" class="">
													<tr role="row" class="">
														<th class=""><div>Meter Type</div></th>
														<th class=""><div>현재 검침</div></th>
														<th class=""><div>LP</div></th>
														<th class=""><div>평균 전압전류</div></th>
														<th class=""><div>순시 전압전류</div></th>
														<th class=""><div>시간 확인주기</div></th>
														<th class=""><div>시간오차 한계</div></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th class="">표준형</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
													<tr>
														<th class="">S-Type</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
													<tr>
														<th class="">E-Type</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
													<tr>
														<th class="">G-Type</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
													<tr>
														<th class="">AE-Type</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</li>
								<li>
									<div class="modal-4th-box">
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<b-row class="form-group">
											<b-col lg="5">
												<label class="d-block">DCU 동작시간</label>
											</b-col>
											<b-col lg="7">
												<b-form-input v-model="text" placeholder="2020-12-01 15:00:00" class="form-control"></b-form-input>
											</b-col>
										</b-row>
										<div class="map">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
												width="100%"
												height="300"
												style="border:0;"
												allowfullscreen=""
												loading="lazy"
											></iframe>
										</div>
									</div>
								</li>
							</ul>
						</b-form>
					</b-row>
				</form>
			</div>
			<!---->
		</b-modal>
	</div>
</template>
