<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>장비 관리</h1>
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
		<div class="tab-wrap">
			<b-tabs>
				<b-tab title="DCU 관리" active>
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
							<b-button variant="primary" v-b-modal.modal-1><b-icon icon="pencil-fill"></b-icon>신규등록</b-button>
						</div>
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light btn-excel"><!--svg icon-->엑셀 다운로드</button>
						</div>
					</div>
					<div class="table-wrap">테이블 영역</div>
					<div class="pa-wrap">
						<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
					</div>
					<div class="map-wrap">
						<div class="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
								width="100%"
								height="300"
								style="border:0;"
								allowfullscreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</b-tab>
				<b-tab title="METER 관리"><p>I'm the second tab</p></b-tab>
				<b-tab title="가스,수도,온수,난방 관리"><p>I'm a disabled tab!</p></b-tab>
			</b-tabs>
		</div>
	</div>
</template>
