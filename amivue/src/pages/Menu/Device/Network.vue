<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>네트워크 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>동 관리</b-breadcrumb-item>
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
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>1단지</b-form-select-option>
											<b-form-select-option>2단지</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
							<b-col cols="4" xl="3">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">검침 타입</label>
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
							<b-col cols="4" xl="3">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">DCU ID 또는 Gateway</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="DCU ID 또는 Gateway" class="form-control"></b-form-input>
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
				<span class="small">2021-01-20 12:15 기준</span>
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
				<b-form-group id="" label="DCU ID">
					<b-form-select v-model="selected">
						<b-form-select-option>NS09_011A</b-form-select-option>
						<b-form-select-option>NS09_01124A</b-form-select-option>
						<b-form-select-option>NS09_01511A</b-form-select-option>
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
							<th><div>단지명</div></th>
							<th><div>DCU ID</div></th>
							<th><div>IP</div></th>
							<th><div>Ping 평균</div></th>
							<th><div>Ping 최소</div></th>
							<th><div>Ping 최대</div></th>
							<th><div>상태</div></th>
							<th><div>DCU 통신</div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="2">서울</td>
							<td rowspan="2">서울 아파트</td>
							<td class="br" rowspan="2">NS09_010A</td>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td class="br"><span class="linkage"></span></td>
							<td rowspan="2"><span class="linkage"></span></td>
						</tr>
						<tr>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td><span class="linkage"></span></td>
						</tr>
						<tr>
							<td rowspan="2">서울</td>
							<td rowspan="2">서울 아파트</td>
							<td class="br" rowspan="2">NS09_010A</td>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td class="br"><span class="linkage"></span></td>
							<td rowspan="2"><span class="linkage"></span></td>
						</tr>
						<tr>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td><span class="linkage"></span></td>
						</tr>
						<tr>
							<td rowspan="2">서울</td>
							<td rowspan="2">서울 아파트</td>
							<td class="br" rowspan="2">NS09_010A</td>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td class="br"><span class="linkage"></span></td>
							<td rowspan="2"><span class="linkage"></span></td>
						</tr>
						<tr>
							<td>20.101.235.254</td>
							<td>10ms</td>
							<td>2ms</td>
							<td>15ms</td>
							<td><span class="linkage"></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
