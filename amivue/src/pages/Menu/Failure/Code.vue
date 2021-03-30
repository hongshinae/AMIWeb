<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>상태 코드 관리</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>장애</b-breadcrumb-item>
					<b-breadcrumb-item active>상태 코드 관리</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="search-wrap2">
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
										<label class="d-block">지역 코드</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
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
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>1단지</b-form-select-option>
											<b-form-select-option>2단지</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">DCU ID</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>전기</b-form-select-option>
											<b-form-select-option>난방</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
						<b-row>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">Meter ID</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="DCU ID 또는 Gateway" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">상태 코드</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>정전</b-form-select-option>
											<b-form-select-option>복전</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="6" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="2">
										<label class="d-block">기간</label>
									</b-col>
									<b-col lg="4">
										<b-form-datepicker id="datepicker-placeholder" placeholder=""></b-form-datepicker>
									</b-col>
									<b-col lg="1">
										~
									</b-col>
									<b-col lg="4">
										<b-form-datepicker id="datepicker-placeholder" placeholder=""></b-form-datepicker>
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
					<b-button variant="light btn-excel">엑셀 다운로드</b-button>
				</b-button-group>
			</div>
			<div class="filter-wrap">
				<b-form-group id="" label="지역">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>서울</b-form-select-option>
						<b-form-select-option>경기</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="단지 명">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>1단지</b-form-select-option>
						<b-form-select-option>2단지</b-form-select-option>
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
							<th><div>발생 시각</div></th>
							<th><div>지역</div></th>
							<th><div>단지 명</div></th>
							<th><div>DCU ID</div></th>
							<th><div>Meter ID</div></th>
							<th><div>상태</div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2019-05-01 13:56:49</td>
							<td>서울</td>
							<td>서울 아파트</td>
							<td>NS09_0101A</td>
							<td>2941092159</td>
							<td>정전</td>
						</tr>
						<tr>
							<td>2019-05-01 13:56:49</td>
							<td>서울</td>
							<td>서울 아파트</td>
							<td>NS09_0101A</td>
							<td>2941092159</td>
							<td>복전</td>
						</tr>
						<tr>
							<td>2019-05-01 13:56:49</td>
							<td>서울</td>
							<td>서울 아파트</td>
							<td>NS09_0101A</td>
							<td>2941092159</td>
							<td>정전</td>
						</tr>
						<tr>
							<td>2019-05-01 13:56:49</td>
							<td>서울</td>
							<td>서울 아파트</td>
							<td>NS09_0101A</td>
							<td>2941092159</td>
							<td>정전</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
