<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>장비 관리</h1>
			<div class="tap-wrap">
				<b-button pill variant="primary">DCU</b-button>
				<b-button pill variant="outline-primary" href="Equipment/Meter">METER</b-button
				><!--링크-->
				<b-button pill variant="outline-primary">가스, 수도, 온수, 난방</b-button>
			</div>
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
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<form>
						<b-row>
							<b-col cols="4" xl="3">
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
							<b-col cols="4" xl="3">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="그랑시아 아파트" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
							<b-col cols="4" xl="3">
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
					<b-button block variant="primary">검색</b-button>
				</div>
			</div>
		</div>
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<b-button v-b-modal.dcu-modal-1 variant="light"><b-icon icon="pencil-fill"></b-icon>DCU 신규 등록</b-button>
				<b-button-group>
					<b-button variant="light btn-excel">엑셀 다운로드</b-button>
					<b-button variant="light">전체 연동하기</b-button>
				</b-button-group>
				<b-button variant="light">저장</b-button>
			</div>
			<div class="filter-wrap">
				<b-form-group id="" label="DCU ID">
					<b-form-select v-model="selected">
						<b-form-select-option>NS09_011A</b-form-select-option>
						<b-form-select-option>NS09_01124A</b-form-select-option>
						<b-form-select-option>NS09_01511A</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="FITMWARE">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>2.3</b-form-select-option>
						<b-form-select-option>2.1</b-form-select-option>
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
				<table class="table b-table table-striped">
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.modal-xl>상세정보</b-button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="pa-wrap">
			<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
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
						viewBox="0 0 396 378"
						enable-background="new 0 0 396 378"
						xml:space="preserve"
					>
						<path
							fill="#5E5C5C"
							d="M33,224c0,5.523-4.478,10-10,10h-8c-5.522,0-10-4.477-10-10v-19c0-5.523,4.478-10,10-10h8
	c5.522,0,10,4.477,10,10V224z"
						/>
						<path
							fill="#5E5C5C"
							d="M391,224c0,5.523-4.478,10-10,10h-8c-5.523,0-10-4.477-10-10v-19c0-5.523,4.477-10,10-10h8
	c5.522,0,10,4.477,10,10V224z"
						/>
						<path
							fill="#5E5C5C"
							d="M33,64c0,5.523-4.478,10-10,10h-8C9.478,74,5,69.523,5,64V45c0-5.523,4.478-10,10-10h8
	c5.522,0,10,4.477,10,10V64z"
						/>
						<path
							fill="#5E5C5C"
							d="M391,64c0,5.523-4.478,10-10,10h-8c-5.523,0-10-4.477-10-10V45c0-5.523,4.477-10,10-10h8
	c5.522,0,10,4.477,10,10V64z"
						/>
						<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="198.4019" y1="372.1526" x2="198.8319" y2="323.2784">
							<stop offset="0" style="stop-color:#808080" />
							<stop offset="0.9975" style="stop-color:#999999" />
						</linearGradient>
						<path
							fill="url(#SVGID_1_)"
							d="M366,347h-14v-2c0-2.209-1.791-4-4-4H48c-2.209,0-4,1.791-4,4v2H31c-2.209,0-4,1.791-4,4v20
	c0,2.209,1.791,4,4,4h31c2.209,0,4-1.791,4-4v-5h265v5c0,2.209,1.791,4,4,4h31c2.209,0,4-1.791,4-4v-20
	C370,348.791,368.209,347,366,347z"
						/>
						<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="208.7482" y1="21.1558" x2="187.6494" y2="329.0415">
							<stop offset="0.4063" style="stop-color:#808080" />
							<stop offset="0.6359" style="stop-color:#848484" />
							<stop offset="0.8838" style="stop-color:#919191" />
							<stop offset="0.9864" style="stop-color:#999999" />
						</linearGradient>
						<path
							fill="url(#SVGID_2_)"
							d="M380,345c0,5.522-4.478,10-10,10H26c-5.522,0-10-4.478-10-10V11c0-5.523,4.478-10,10-10h344
	c5.522,0,10,4.477,10,10V345z"
						/>
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="26.75" cy="14.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="26.75" cy="343.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="368.75" cy="343.75" r="2.75" />
						<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="368.75" cy="14.75" r="2.75" />
						<g>
							<image
								overflow="visible"
								opacity="0.3"
								width="324"
								height="234"
								xlink:href="data:image/png;base64,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
SUVORK5CYII="
								transform="matrix(1 0 0 1 36 24)"
							></image>
							<g>
								<path
									fill="#FFFFFF"
									d="M354,242c0,5.523-4.478,10-10,10H52c-5.523,0-10-4.477-10-10V40c0-5.523,4.477-10,10-10h292
			c5.522,0,10,4.477,10,10V242z"
								/>
							</g>
						</g>
						<g>
							<image
								overflow="visible"
								opacity="0.2"
								width="112"
								height="46"
								xlink:href="data:image/png;base64,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"
								transform="matrix(1 0 0 1 147 284)"
							></image>
							<g>
								<g>
									<path
										fill="#444444"
										d="M154.723,289.23h6.803c1.77,0,3.287,0.164,4.553,0.492s2.414,0.943,3.445,1.846
				c2.684,2.297,4.025,5.789,4.025,10.477c0,1.547-0.135,2.959-0.404,4.236s-0.686,2.429-1.248,3.454s-1.283,1.942-2.162,2.751
				c-0.691,0.621-1.447,1.119-2.268,1.494s-1.702,0.639-2.646,0.791s-2.007,0.229-3.19,0.229h-6.803
				c-0.949,0-1.664-0.144-2.145-0.431s-0.794-0.691-0.94-1.213s-0.22-1.198-0.22-2.03V292.43c0-1.125,0.252-1.939,0.756-2.443
				S153.598,289.23,154.723,289.23z M156.744,293.361v17.49h3.955c0.867,0,1.547-0.023,2.039-0.07s1.002-0.164,1.529-0.352
				s0.984-0.451,1.371-0.791c1.746-1.477,2.619-4.02,2.619-7.629c0-2.543-0.384-4.447-1.151-5.713s-1.714-2.071-2.839-2.417
				s-2.484-0.519-4.078-0.519H156.744z"
									/>
									<path
										fill="#444444"
										d="M209.092,306.861c0,0.82-0.202,1.708-0.606,2.663s-1.04,1.893-1.907,2.813s-1.975,1.667-3.322,2.241
				s-2.918,0.861-4.711,0.861c-1.359,0-2.596-0.129-3.709-0.387s-2.124-0.659-3.032-1.204s-1.743-1.263-2.505-2.153
				c-0.68-0.809-1.26-1.714-1.74-2.716s-0.841-2.071-1.081-3.208s-0.36-2.344-0.36-3.621c0-2.074,0.302-3.932,0.905-5.572
				s1.468-3.044,2.593-4.21s2.443-2.054,3.955-2.663s3.123-0.914,4.834-0.914c2.086,0,3.943,0.416,5.572,1.248
				s2.877,1.86,3.744,3.085s1.301,2.382,1.301,3.472c0,0.598-0.211,1.125-0.633,1.582s-0.932,0.686-1.529,0.686
				c-0.668,0-1.169-0.158-1.503-0.475s-0.706-0.861-1.116-1.635c-0.68-1.277-1.479-2.232-2.399-2.865s-2.054-0.949-3.401-0.949
				c-2.145,0-3.853,0.814-5.124,2.443s-1.907,3.943-1.907,6.943c0,2.004,0.281,3.671,0.844,5.001s1.359,2.323,2.391,2.979
				s2.238,0.984,3.621,0.984c1.5,0,2.769-0.372,3.806-1.116s1.819-1.837,2.347-3.278c0.223-0.68,0.498-1.233,0.826-1.661
				s0.855-0.642,1.582-0.642c0.621,0,1.154,0.217,1.6,0.65S209.092,306.217,209.092,306.861z"
									/>
									<path
										fill="#444444"
										d="M222.82,304.348v-12.393c0-1.055,0.237-1.846,0.712-2.373s1.099-0.791,1.872-0.791
				c0.809,0,1.45,0.264,1.925,0.791s0.712,1.318,0.712,2.373v12.674c0,1.441,0.161,2.646,0.483,3.612s0.894,1.717,1.714,2.25
				s1.969,0.8,3.445,0.8c2.039,0,3.48-0.542,4.324-1.626s1.266-2.728,1.266-4.931v-12.779c0-1.066,0.234-1.86,0.703-2.382
				s1.096-0.782,1.881-0.782s1.421,0.261,1.907,0.782s0.729,1.315,0.729,2.382v12.393c0,2.016-0.196,3.697-0.589,5.045
				s-1.134,2.531-2.224,3.551c-0.938,0.867-2.027,1.5-3.27,1.898s-2.695,0.598-4.359,0.598c-1.98,0-3.686-0.214-5.115-0.642
				s-2.596-1.09-3.498-1.986s-1.564-2.045-1.986-3.445S222.82,306.293,222.82,304.348z"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="svg-input">
					<b-form-group label="DCU ID" label-for="">
						<b-form-input id="" placeholder="DCU_ID_123"></b-form-input>
					</b-form-group>
					<b-form-group label="IP Address" label-for="">
						<b-form-input id="" placeholder="20.101.235.100"></b-form-input>
					</b-form-group>
					<b-form-group label="IP Router" label-for="">
						<b-form-input id="" placeholder="20.1.1.235.254"></b-form-input>
					</b-form-group>
					<b-form-group label="설치 일자" label-for="">
						<b-form-input id="" placeholder="2020-12-29 13:45:00"></b-form-input>
					</b-form-group>
					<b-form-group label="설치 위치" label-for="">
						<b-form-input id="" placeholder="위도 : 0,  경도 : 0"></b-form-input>
					</b-form-group>
				</div>
			</div>
		</b-modal>
		<b-modal id="modal-xl" size="xl" title="서울 아파트">
			<div class="modal-content-wrap modal-equip">
				<form>
					<b-row align-h="center">
						<b-form>
							<ul class="left">
								<li>
									<div class="modal-1st-box">
										<b-form-group label="DCU 동작시간" label-for="">
											<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
										</b-form-group>
										<b-form-group label="DCU 고유번호" label-for="">
											<b-form-input id="" placeholder="cnu111"></b-form-input>
										</b-form-group>
										<b-form-group label="DCU 모델번호" label-for="">
											<b-form-input id="" placeholder="a12d125"></b-form-input>
										</b-form-group>
										<b-form-group label="MAC 번호" label-for="">
											<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
										</b-form-group>
										<b-form-group label="DCU IP / PORT" label-for="">
											<b-form-input id="" placeholder="20.200.11.11 / 1234"></b-form-input>
										</b-form-group>
										<b-form-group label="T-Mask" label-for="">
											<b-form-input id="" placeholder="0x0000000"></b-form-input>
										</b-form-group>
										<b-form-group label="Master mod. A" label-for="">
											<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
										</b-form-group>
										<b-form-group label="T-Mask" label-for="">
											<b-form-input id="" placeholder="0x0000000"></b-form-input>
										</b-form-group>
										<b-form-group label="Master mod. B" label-for="">
											<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
										</b-form-group>
										<b-form-group label="Master mod. C" label-for="">
											<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
										</b-form-group>
									</div>
									<div class="modal-2nd-box">
										<b-form-group label="간선망" label-for="">
											<b-form-select v-model="selected">
												<b-form-select-option>LTE</b-form-select-option>
												<b-form-select-option>5G</b-form-select-option>
											</b-form-select>
										</b-form-group>
										<b-form-group label="인입망" label-for="">
											<b-form-select v-model="selected">
												<b-form-select-option>HS-PLC</b-form-select-option>
												<b-form-select-option>HS-PLC2</b-form-select-option>
											</b-form-select>
										</b-form-group>
										<b-form-group label=">DCU 종류" label-for="">
											<b-form-input id="" placeholder="DCU A type"></b-form-input>
										</b-form-group>
										<b-form-group label="Meter count" label-for="">
											<b-form-input id="" placeholder="110"></b-form-input>
										</b-form-group>
										<b-form-group label="검침 Agent" label-for="">
											<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
										</b-form-group>
										<b-form-group label="SNMP (RO)" label-for="">
											<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
										</b-form-group>
										<b-form-group label="SNMP (RW)" label-for="">
											<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
										</b-form-group>
										<b-form-group label="FEP IP / PORT" label-for="">
											<b-form-input id="" placeholder="20.200.11.11 / 1234"></b-form-input>
										</b-form-group>
										<b-form-group label="DCU 현재시간" label-for="">
											<b-form-input id="" placeholder="2021-01-29 12:11:26"></b-form-input>
										</b-form-group>
										<b-form-group label="MAC 번호" label-for="">
											<b-form-input id="" placeholder="2021-01-29 12:11:26"></b-form-input>
										</b-form-group>
									</div>
									<div class="modal-3rd-box">
										<div class="table-wrap">
											<div class="basic-table">
												<table class="table b-table" id="">
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
									</div>
								</li>
								<li>
									<div class="modal-4th-box">
										<div class="info-box"></div>
										<b-row class="double-input">
											<b-col cols="6">
												<b-form-group label="OS 버전" label-for="" c->
													<b-form-input id="" placeholder="Linux 10.0"></b-form-input>
												</b-form-group>
											</b-col>
											<b-col cols="6">
												<b-form-group label="펌웨어 버전" label-for="">
													<b-form-input id="" placeholder="FW 2.3"></b-form-input>
												</b-form-group>
											</b-col>
										</b-row>
										<b-row class="double-input">
											<b-col cols="6">
												<b-form-group label="하드웨어 버전" label-for="" c->
													<b-form-input id="" placeholder="HW 20"></b-form-input>
												</b-form-group>
											</b-col>
											<b-col cols="6">
												<b-form-group label="SNMP 암호화" label-for="">
													<b-form-input id="" placeholder="false"></b-form-input>
												</b-form-group>
											</b-col>
										</b-row>

										<b-form-group label="위치 정보" label-for="">
											<b-form-input id="" placeholder="위도 :0, 경도 : 0"></b-form-input>
										</b-form-group>

										<div class="map">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
												width="100%"
												height="252"
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
		</b-modal>
	</div>
</template>
