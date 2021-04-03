<template>
	<div class="main-bg content">
		<add-building></add-building>
		<content-header :pageName="pageName" :paths="paths" />
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
										<b-form-input v-model="text" placeholder="그랑시아 아파트"></b-form-input>
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
				<b-button v-b-modal.addBuilding variant="light"><b-icon icon="pencil-fill"></b-icon>신규 동 등록</b-button>
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
				</b-button-group>
			</div>
			<div class="filter-wrap">
				<b-form-group id="" label="지역">
					<b-form-select v-model="selected">
						<b-form-select-option>서울</b-form-select-option>
						<b-form-select-option>경기</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="단지">
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
				<b-form-group id="">
					<b-form-select v-model="selected">
						<b-form-select-option>5개씩 보기</b-form-select-option>
						<b-form-select-option>10개씩 보기</b-form-select-option>
						<b-form-select-option>50개씩 보기</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group label="등록 동명" label-for="">
					<b-form-input id="" placeholder="404동"></b-form-input>
				</b-form-group>
			</div>
		</div>
		<div class="table-wrap">
			<div class="bgtable">
				<table class="table b-table table-striped">
					<thead>
						<tr>
							<th><div>SI_ID</div></th>
							<th><div>단지(아파트,상가)명</div></th>
							<th><div>세대수</div></th>
							<th><div>지역</div></th>
							<th><div>주소</div></th>
							<th><div>설치 장비수</div></th>
							<th><div>검침타입</div></th>
							<th><div></div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>SE01</td>
							<td>경기도 성남시 이지더원 아파트</td>
							<td>1011</td>
							<td>서울</td>
							<td>서울시</td>
							<td>1234</td>
							<td>5종</td>
							<td><b-button variant="outline-primary" size="sm">상세정보</b-button></td>
						</tr>
						<tr>
							<td>SE01</td>
							<td>경기도 성남시 이지더원 아파트</td>
							<td>1011</td>
							<td>서울</td>
							<td>서울시</td>
							<td>1234</td>
							<td>5종</td>
							<td><b-button variant="outline-primary" size="sm">상세정보</b-button></td>
						</tr>
						<tr>
							<td>SE01</td>
							<td>경기도 성남시 이지더원 아파트</td>
							<td>1011</td>
							<td>서울</td>
							<td>서울시</td>
							<td>1234</td>
							<td>5종</td>
							<td><b-button variant="outline-primary" size="sm">상세정보</b-button></td>
						</tr>
						<tr>
							<td>SE01</td>
							<td>경기도 성남시 이지더원 아파트</td>
							<td>1011</td>
							<td>서울</td>
							<td>서울시</td>
							<td>1234</td>
							<td>5종</td>
							<td><b-button variant="outline-primary" size="sm">상세정보</b-button></td>
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
import AddBuilding from "@/components/modal/addBuilding";
import ContentHeader from "@/components/content/ContentHeader";

Vue.component(ContentHeader);
Vue.component(AddBuilding);

export default {
	components: { AddBuilding, ContentHeader },
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.building") }]
		};
	}
};
</script>
