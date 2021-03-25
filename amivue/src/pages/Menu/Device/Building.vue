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
				<b-button class="btn-light btn-excel"><!--svg icon-->엑셀 다운로드</b-button>
			</div>
		</div>
		<div class="filter-wrap">
			<b-row>
				<b-col lg="2">
					<b-form-group>
						<label class="d-block label-wrap">지역 선택</label>
						<b-input-group>
							<b-form-select v-model="selected" class="form-control">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
							<b-form-select v-model="selected" class="form-control">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
						</b-input-group>
					</b-form-group>
				</b-col>
				<b-col lg="2">
					<b-form-group>
						<label class="d-block label-wrap">단지 선택</label>
						<div class="input-wrap">
							<b-form-select v-model="selected" class="form-control">
								<b-form-select-option>서울시</b-form-select-option>
								<b-form-select-option>경기도</b-form-select-option>
							</b-form-select>
						</div>
					</b-form-group>
				</b-col>
				<div class="my-1 col-lg-6">
					<div role="group" class="form-row form-group mb-0" id="__BVID__1341">
						<label for="sort-by-select" class="col-sm-3 col-form-label col-form-label-sm text-sm-right" id="__BVID__1341__BV_label_">Sort</label>
						<div class="col">
							<div role="group" class="input-group input-group-sm">
								<!----><select id="sort-by-select" class="w-75 custom-select"
									><option value="">-- none --</option
									><option value="name">Person full name</option
									><option value="age">Person age</option
									><option value="isActive">Is Active</option></select
								>
								<select class="w-25 custom-select custom-select-sm" id="__BVID__1343"
									><option value="false">Asc</option>
									<option value="true">Desc</option></select
								><!---->
							</div>
						</div>
					</div>
				</div>
				<div class="my-1 col-lg-6">
					<div role="group" class="form-row form-group mb-0" id="__BVID__1344">
						<label for="initial-sort-select" class="col-sm-3 col-form-label col-form-label-sm text-sm-right" id="__BVID__1344__BV_label_"
							>Initial sort</label
						>
						<div class="col">
							<select id="initial-sort-select" class="custom-select custom-select-sm"
								><option value="asc">asc</option
								><option value="desc">desc</option
								><option value="last">last</option></select
							>
						</div>
					</div>
				</div>
				<div class="my-1 col-lg-6">
					<div role="group" class="form-row form-group mb-0" id="__BVID__1346">
						<label for="filter-input" class="col-sm-3 col-form-label col-form-label-sm text-sm-right" id="__BVID__1346__BV_label_">Filter</label>
						<div class="col">
							<div role="group" class="input-group input-group-sm">
								<!----><input id="filter-input" type="search" placeholder="Type to Search" class="form-control" />
								<div class="input-group-append">
									<button type="button" class="btn btn-secondary disabled" disabled="disabled">Clear</button>
								</div>
								<!---->
							</div>
						</div>
					</div>
				</div>
				<div class="my-1 col-lg-6">
					<fieldset class="form-group mb-0" value="desc" id="__BVID__1348" aria-labelledby="__BVID__1348__BV_label_">
						<div class="form-row">
							<legend tabindex="-1" class="col-sm-3 bv-no-focus-ring col-form-label col-form-label-sm text-sm-right" id="__BVID__1348__BV_label_">
								Filter On
							</legend>
							<div class="col">
								<div role="group" tabindex="-1" class="mt-1 bv-no-focus-ring" id="__BVID__1349">
									<div class="custom-control custom-control-inline custom-checkbox">
										<input type="checkbox" class="custom-control-input" value="name" id="__BVID__1350" name="__BVID__1349" /><label
											class="custom-control-label"
											for="__BVID__1350"
											>Name</label
										>
									</div>
									<div class="custom-control custom-control-inline custom-checkbox">
										<input type="checkbox" class="custom-control-input" value="age" id="__BVID__1351" name="__BVID__1349" /><label
											class="custom-control-label"
											for="__BVID__1351"
											>Age</label
										>
									</div>
									<div class="custom-control custom-control-inline custom-checkbox">
										<input type="checkbox" class="custom-control-input" value="isActive" id="__BVID__1352" name="__BVID__1349" /><label
											class="custom-control-label"
											for="__BVID__1352"
											>Active</label
										>
									</div>
								</div>
								<!----><!----><small tabindex="-1" class="form-text text-muted" id="__BVID__1348__BV_description_"
									>Leave all unchecked to filter on all data</small
								>
							</div>
						</div>
					</fieldset>
				</div>
				<div class="my-1 col-sm-5 col-md-6">
					<div role="group" class="form-row form-group mb-0" id="__BVID__1353">
						<label
							for="per-page-select"
							class="col-sm-6 col-md-4 col-lg-3 col-form-label col-form-label-sm text-sm-right"
							id="__BVID__1353__BV_label_"
							>Per page</label
						>
						<div class="col">
							<select id="per-page-select" class="custom-select custom-select-sm"
								><option value="5">5</option
								><option value="10">10</option
								><option value="15">15</option
								><option value="100">Show a lot</option></select
							><!----><!----><!---->
						</div>
					</div>
				</div>
			</b-row>
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
			<div class="modal-content-wrap modal-building">
				<form>
					<b-row align-h="center">
						<div class="modal-4th-box">
							<b-form-group>
								<label class="d-block label-wrap">지역 선택</label>
								<div class="input-wrap">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</div>
							</b-form-group>
							<b-form-group>
								<label class="d-block label-wrap">단지 선택</label>
								<div class="input-wrap">
									<b-form-select v-model="selected" class="form-control">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</div>
							</b-form-group>
							<b-form-group>
								<label class="d-block label-wrap">등록 동명</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="404동" class="form-control"></b-form-input>
								</div>
							</b-form-group>
							<b-form-group>
								<label class="d-block label-wrap">DCU ID</label>
								<div class="input-wrap">
									<ul>
										<li><b-form-input v-model="text" placeholder="4521542" class="form-control"></b-form-input></li>
										<li><b-button class="btn" variant="outline-primary">연동확인</b-button></li>
									</ul>
								</div>
							</b-form-group>
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
