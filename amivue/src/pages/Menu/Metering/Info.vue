<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>수집 정보</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>검침</b-breadcrumb-item>
					<b-breadcrumb-item active>수집 정보</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="search-wrap">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<b-row>
						<b-col xl="3" md="4" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">지역 이름</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
						</b-col>
						<b-col xl="3" md="4" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">단지 명</label>
								</b-col>
								<b-col lg="8">
									<b-form-input v-model="text" placeholder="그랑시아 아파트"></b-form-input>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button block variant="primary">검색</b-button>
				</div>
			</div>
		</div>
		<b-row>
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>DCU</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table" id="">
								<thead>
									<tr>
										<th class=""><div>지역</div></th>
										<th class=""><div>단지 명</div></th>
										<th class=""><div>동 명</div></th>
										<th class=""><div>DCU ID</div></th>
									</tr>
								</thead>
								<tbody>
									<tr class="">
										<td class="">서울</td>
										<td class="">아파트</td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
									</tr>
									<tr class="">
										<td class="">서울</td>
										<td class="">아파트</td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
									</tr>
									<tr class="">
										<td class="">서울</td>
										<td class="">아파트</td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
									</tr>
									<tr class="">
										<td class="">서울</td>
										<td class="">아파트</td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</b-col>
			<b-col lg="6" sm="12">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>Meter</span>
						<small>금일 최종 수집시간 : 2020-12-09 19:00</small>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table" id="">
								<thead class="">
									<tr class="">
										<th class=""><div>호</div></th>
										<th class=""><div>Meter id</div></th>
										<th class=""><div>Modem Mac address</div></th>
										<th class=""><div>수집 주기</div></th>
										<th class=""><div>검침수 (검침율)</div></th>
										<th class=""><div>적시 수(적시율)</div></th>
									</tr>
								</thead>
								<tbody>
									<tr class="">
										<td>101호</td>
										<td>061900009424</td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">15분</td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
									</tr>
									<tr class="">
										<td>101호</td>
										<td>061900009424</td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">15분</td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
									</tr>
									<tr class="">
										<td>101호</td>
										<td>061900009424</td>
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">15분</td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
										<td class="">96/96 <b-badge variant="primary">100%</b-badge></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
		<div class="btn-only-wrap">
			<div class="btn-wrap">
				<div role="group" class="btn-group">
					<b-button variant="light">SNMP read/write</b-button>
					<b-button variant="light">trap</b-button>
					<b-button variant="light">상태리스트</b-button>
					<b-button variant="light">SNMP / FEP 통신 동작 확인</b-button>
					<b-button variant="light">시간 동기화</b-button>
				</div>
				<div role="group" class="btn-group">
					<b-button variant="light">펌웨어 이미지 관리</b-button>
				</div>
			</div>
		</div>
	</div>
</template>
