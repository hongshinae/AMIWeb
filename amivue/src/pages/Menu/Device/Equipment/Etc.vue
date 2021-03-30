<template>
	<div>
		<detail-equipmenet-etc></detail-equipmenet-etc>
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
										<label class="d-block">동 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>101동</b-form-select-option>
											<b-form-select-option>102동</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
						<b-row>
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
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">METER ID</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="METER ID" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button block variant="primary"></b-button>
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
					<b-form-select v-model="selected">
						<b-form-select-option>경기</b-form-select-option>
						<b-form-select-option>서울</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="단지 명">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>서울 아파트</b-form-select-option>
						<b-form-select-option>붓들마을</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="DCU ID">
					<b-form-select v-model="selected">
						<b-form-select-option>NS09_011A</b-form-select-option>
						<b-form-select-option>NS09_01124A</b-form-select-option>
						<b-form-select-option>NS09_01511A</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="METER ID">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>06190010031</b-form-select-option>
						<b-form-select-option>06190010031</b-form-select-option>
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.detailEquipmenetEtc>상세정보</b-button></td>
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
							<td><b-button variant="outline-primary" size="sm" v-b-modal.detailEquipmenetEtc>상세정보</b-button></td>
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
import DetailEquipmenetEtc from "@/components/modal/detailEquipmenetEtc";
Vue.component(DetailEquipmenetEtc);
export default {
	components: { DetailEquipmenetEtc }
};
</script>
