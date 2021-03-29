<template>
	<div class="main-bg content">
		<add-dcu></add-dcu>
		<detail-info></detail-info>
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
							<b-col xl="3" md="12" sm="12">
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
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="그랑시아 아파트" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="3" md="12" sm="12">
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
				<b-button v-b-modal.addDcu variant="light"><b-icon icon="pencil-fill"></b-icon>DCU 신규 등록</b-button>
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.detailInfo>상세정보</b-button></td>
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
	</div>
</template>
<script>
import Vue from "vue";
import AddDcu from "@/components/modal/addDcu";
import DetailInfo from "@/components/modal/detailInfo";

Vue.component(DetailInfo);
Vue.component(AddDcu);

export default {
	components: { AddDcu, DetailInfo }
};
</script>
