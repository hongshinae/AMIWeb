<template>
	<div class="main-bg content">
		<content-header :pageName="pageName" :paths="paths" />
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<form>
						<b-row>
							<b-col cols="4" lg="4">
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
							<b-col cols="4" lg="4">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="그랑시아 아파트" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button variant="primary btn-block">검색</b-button>
				</div>
			</div>
		</div>
		<div class="btn-wrap">
			<div role="group" class="btn-group">
				<b-button variant="primary" v-b-modal.modal-1><b-icon icon="pencil-fill"></b-icon>신규등록</b-button>
			</div>
			<div role="group" class="btn-group">
				<b-button variant="outline-secondary"><!--svg icon-->엑셀 다운로드</b-button>
			</div>
		</div>
		<div class="table-wrap">
			<table class="table bgtable b-table table-striped">
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
						<td><b-button class="btn" variant="outline-primary" size="sm">상세정보</b-button></td>
					</tr>
					<tr>
						<td>SE01</td>
						<td>경기도 성남시 이지더원 아파트</td>
						<td>1011</td>
						<td>서울</td>
						<td>서울시</td>
						<td>1234</td>
						<td>5종</td>
						<td><b-button class="btn" variant="outline-primary" size="sm">상세정보</b-button></td>
					</tr>
					<tr>
						<td>SE01</td>
						<td>경기도 성남시 이지더원 아파트</td>
						<td>1011</td>
						<td>서울</td>
						<td>서울시</td>
						<td>1234</td>
						<td>5종</td>
						<td><b-button class="btn" variant="outline-primary" size="sm">상세정보</b-button></td>
					</tr>
					<tr>
						<td>SE01</td>
						<td>경기도 성남시 이지더원 아파트</td>
						<td>1011</td>
						<td>서울</td>
						<td>서울시</td>
						<td>1234</td>
						<td>5종</td>
						<td><b-button class="btn" variant="outline-primary" size="sm">상세정보</b-button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="pa-wrap">
			<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
		</div>
		<b-modal id="modal-1" title="동 등록">
			<!---->
			<div class="modal-content-wrap">
				<form>
					<b-row align-h="center">
						<div class="modal-4th-box">
							<div class="form-group">
								<label class="d-block label-wrap">지역 선택</label>
								<div class="input-wrap">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">단지 선택</label>
								<div class="input-wrap">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">등록 동명</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="404동" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">DCU ID</label>
								<div class="input-wrap">
									<ul>
										<li><b-form-input v-model="text" placeholder="4521542" class="form-control"></b-form-input></li>
										<li><b-button class="btn" variant="outline-primary">연동확인</b-button></li>
									</ul>
								</div>
							</div>
						</div>
					</b-row>
				</form>
			</div>
			<!---->
		</b-modal>
	</div>
</template>
<script>
import Vue from "vue";
import ContentHeader from "@/components/content/ContentHeader";

Vue.component(ContentHeader);

export default {
	components: { ContentHeader },
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.building") }]
		};
	}
};
</script>
