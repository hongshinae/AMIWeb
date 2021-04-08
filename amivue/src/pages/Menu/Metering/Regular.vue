<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>월검침</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>검침</b-breadcrumb-item>
					<b-breadcrumb-item active>월 검침</b-breadcrumb-item>
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
									<b-form-select v-model="selected">
										<b-form-select-option>1단지</b-form-select-option>
										<b-form-select-option>2단지</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
						</b-col>
						<b-col xl="3" md="4" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">조회 월</label>
								</b-col>
								<b-col lg="8">
									<b-form-datepicker placeholder="조회날짜" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
									</b-form-datepicker>
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
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
				</b-button-group>
			</div>
			<div class="filter-wrap">
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
				<b-form-group id="" label="Meter ID">
					<b-form-select v-model="selected">
						<b-form-select-option>06190010031</b-form-select-option>
						<b-form-select-option>06190010031</b-form-select-option>
						<b-form-select-option>06190010031</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="수용가 검침일 비교">
					<b-form-select v-model="selected">
						<b-form-select-option>일치</b-form-select-option>
						<b-form-select-option>불일치</b-form-select-option>
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
							<th><div>동</div></th>
							<th><div>호</div></th>
							<th><div>METER ID</div></th>
							<th><div>정기 검침 일</div></th>
							<th><div>검침 시간</div></th>
							<th><div>정기 검침 값</div></th>
							<th><div>LP값</div></th>
							<th><div>사용량</div></th>
							<th><div>역방향</div></th>
							<th><div>수용가 검침일 비교</div></th>
							<th><div>상태</div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>201동</td>
							<td>101호</td>
							<td>06190010031</td>
							<td>15</td>
							<td>2020-12-15 00:00:00</td>
							<td>5209</td>
							<td>5209</td>
							<td>209</td>
							<td>0</td>
							<td>일치</td>
							<td><span class="linkage"></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
