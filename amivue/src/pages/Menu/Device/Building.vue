<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>동 관리</h1>
			<div class="main-location">
				<div class="home-img"></div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">동 관리</span></li>
				</ol>
			</div>
		</div>
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img"></div>
				<div class="search">
					<!--검색영역-->
					<form>
						<div class="row">
							<div class="col-lg-4">
								<div class="form-group row">
									<label class="d-block col-lg-4">지역</label>
									<div class="col-lg-8">
										<select class="form-control">
											<option value="서울">서울</option>
											<option value="경기">경기</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-3" class="d-block col-lg-4">단지 명</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="삼성 아파트" class="form-control" />
									</div>
								</div>
							</div>
						</div>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<button type="button" class="btn btn-primary btn-block">검 색</button>
				</div>
			</div>
		</div>
		<div class="btn-wrap">
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-primary">
					신규 등록
				</button>
			</div>
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-light btn-excel">
					엑셀 다운로드
				</button>
			</div>
		</div>
		<div class="table-wrap"></div>
		<div class="pa-wrap">
			<nav aria-label="Pagination">
				<ul class="pagination b-pagination">
					<li class="page-item disabled">
						<span class="page-link">«</span>
					</li>
					<li class="page-item disabled">
						<span class="page-link">‹</span>
					</li>
					<li class="page-item">
						<a href="" class="page-link nuxt-link-active" target="_self">1</a>
					</li>
					<li class="page-item">
						<a href="" class="page-link" target="_self">2</a>
					</li>
					<li class="page-item">
						<a href="" class="page-link" target="_self">3</a>
					</li>
					<li class="page-item bv-d-xs-down-none">
						<a href="" class="page-link" target="_self">4</a>
					</li>
					<li class="page-item disabled bv-d-xs-down-none"><span class="page-link">…</span></li>
					<li class="page-item disabled">
						<span class="page-link">›</span>
					</li>
					<li aclass="page-item disabled">
						<span class="page-link">»</span>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>
