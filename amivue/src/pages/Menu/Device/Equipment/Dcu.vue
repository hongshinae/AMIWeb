<template>
	<div>
		<add-equipmenet-dcu></add-equipmenet-dcu>
		<detail-equipmenet-dcu></detail-equipmenet-dcu>
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
						<b-col xl="3" md="4" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">DCU ID</label>
								</b-col>
								<b-col lg="8">
									<b-form-input v-model="text" placeholder="DCU ID"></b-form-input>
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
				<b-button v-b-modal.addEquipmenetDcu variant="light"><b-icon icon="pencil-fill"></b-icon>DCU 신규 등록</b-button>
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
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
					<b-form-select v-model="selected">
						<b-form-select-option>2.3</b-form-select-option>
						<b-form-select-option>2.1</b-form-select-option>
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.detailEquipmenetDcu>상세정보</b-button></td>
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
import AddEquipmenetDcu from "@/components/modal/addEquipmenetDcu";
import DetailEquipmenetDcu from "@/components/modal/detailEquipmenetDcu";
Vue.component(AddEquipmenetDcu);
Vue.component(DetailEquipmenetDcu);
export default {
	components: { AddEquipmenetDcu, DetailEquipmenetDcu }
};
</script>
