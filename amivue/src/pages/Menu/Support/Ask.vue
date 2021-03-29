<template>
	<div class="main-bg content">
		<add-writing></add-writing>
		<div class="main-location-wrap">
			<h1>문의 게시판</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>고객 지원</b-breadcrumb-item>
					<b-breadcrumb-item active>문의 게시판</b-breadcrumb-item>
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
										<label class="d-block">사용자 ID</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="ID 입력해주세요." class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
							<b-col xl="3" md="12" sm="12">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">문의 종류</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>DCU</b-form-select-option>
											<b-form-select-option>Meter</b-form-select-option>
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
				<b-button v-b-modal.addWriting variant="light"><b-icon icon="pencil-fill"></b-icon>글쓰기</b-button>
			</div>
			<div class="filter-wrap">
				<b-form-group id="" label="단지">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>1단지</b-form-select-option>
						<b-form-select-option>2단지</b-form-select-option>
					</b-form-select>
				</b-form-group>
				<b-form-group id="" label="문의정보">
					<b-form-select v-model="selected" class="form-control">
						<b-form-select-option>DCU</b-form-select-option>
						<b-form-select-option>Meter</b-form-select-option>
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
							<th><div>ID</div></th>
							<th><div>사용자 ID</div></th>
							<th><div>단지 명</div></th>
							<th><div>동</div></th>
							<th><div>문의 정보</div></th>
							<th><div>문의 내용</div></th>
							<th><div>문의 시간</div></th>
							<th><div></div></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>user003</td>
							<td>서울아파트</td>
							<td>101동</td>
							<td>DCU</td>
							<td>문의 드립니다.</td>
							<td>2020-12-21 15:00:00</td>
							<td><b-button class="btn" variant="outline-primary" size="sm">상세정보</b-button></td>
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
import AddWriting from "@/components/modal/addWriting";

Vue.component(AddWriting);

export default {
	components: { AddWriting }
};
</script>
