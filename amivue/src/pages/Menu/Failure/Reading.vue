<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>미 검침 정보</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>장애</b-breadcrumb-item>
					<b-breadcrumb-item active>미 검침 정보</b-breadcrumb-item>
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
					<form>
						<b-row>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
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
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected">
											<b-form-select-option>1단지</b-form-select-option>
											<b-form-select-option>2단지</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">조회 날짜</label>
									</b-col>
									<b-col lg="8">
										<b-form-datepicker id="datepicker-placeholder" placeholder=""></b-form-datepicker>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
						<b-row>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">검침 타입</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected">
											<b-form-select-option>전기</b-form-select-option>
											<b-form-select-option>난방</b-form-select-option>
										</b-form-select>
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
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
				</b-button-group>
			</div>
			<div class="filter-wrap">
				<b-form-group id="" label="단지 명">
					<b-form-select v-model="selected">
						<b-form-select-option>1단지</b-form-select-option>
						<b-form-select-option>2단지</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="동">
					<b-form-select v-model="selected">
						<b-form-select-option>101동</b-form-select-option>
						<b-form-select-option>102동</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="호">
					<b-form-select v-model="selected">
						<b-form-select-option>101호</b-form-select-option>
						<b-form-select-option>102호</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="상태">
					<b-form-select v-model="selected">
						<b-form-select-option>점검필요</b-form-select-option>
						<b-form-select-option>정상</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="">
					<b-form-select v-model="selected">
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
							<th><div>SI_ID</div></th>
							<th><div>단지명</div></th>
							<th><div>동</div></th>
							<th><div>호</div></th>
							<th><div>Meter ID</div></th>
							<th><div>최근 수집시간 OR 미 검침 시간</div></th>
							<th><div>DCU ID</div></th>
							<th><div>MAC</div></th>
							<th><div>상태</div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>SE01</td>
							<td>서울 아파트</td>
							<td>201동</td>
							<td>101호</td>
							<td>061900010031</td>
							<td>2020-12-04 11:00:00</td>
							<td>DCU 1</td>
							<td>00:00:00:00:00</td>
							<td><b-badge variant="primary">정상</b-badge></td>
						</tr>
						<tr>
							<td>SE01</td>
							<td>서울 아파트</td>
							<td>201동</td>
							<td>101호</td>
							<td>061900010031</td>
							<td>2020-12-04 11:00:00</td>
							<td>DCU 1</td>
							<td>00:00:00:00:00</td>
							<td><b-badge variant="danger">점검필요</b-badge></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
