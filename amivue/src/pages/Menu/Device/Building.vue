<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>동 관리</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item href="#home">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item href="#foo">설비</b-breadcrumb-item>
					<b-breadcrumb-item active>동 관리</b-breadcrumb-item>
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
							<b-col cols="4" lg="4">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">지역의 이름을 길게 테스트 합니다~</label>
									</b-col>
									<b-col lg="8">
										<select class="form-control">
											<option value="서울">서울</option>
											<option value="경기">경기</option>
										</select>
									</b-col>
								</b-row>
							</b-col>
							<b-col cols="4" lg="4">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<input id="input-1" type="text" placeholder="삼성 아파트" class="form-control" />
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button variant="primary">검색</b-button>
				</div>
			</div>
		</div>
		<div class="btn-wrap">
			<div role="group" class="btn-group">
				<b-button variant="primary"><b-icon icon="pencil-fill"></b-icon>신규등록</b-button>
			</div>
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-light btn-excel">
					엑셀 다운로드
				</button>
			</div>
		</div>
		<div class="table-wrap"></div>
		<div class="pa-wrap">
			<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
		</div>
	</div>
</template>
