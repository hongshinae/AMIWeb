<template>
	<div class="main-bg">
		<b-modal id="modal-multi-1" size="lg" title="First Modal" ok-only no-stacking>
			<p class="my-2">First Modal</p>
			<b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
		</b-modal>
		<div class="main-location-wrap clearfix">
			<h1>단지 관리</h1>
			<div class="main-location">
				<div class="home-img">
					<b-icon icon="house"></b-icon>
				</div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">단지 관리</span></li>
				</ol>
			</div>
		</div>
		<div class="search-wrap clearfix">
			<div class="wbox whbg">
				<div class="search-img">
					<b-icon icon="search"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<form>
						<div class="row">
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-1" class="d-block col-lg-4">지역</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="전기" class="form-control" />
										<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-2" class="d-block col-lg-4">SI_ID</label>
									<div class="col-lg-8">
										<select id="s" class="form-control"
											><option value="06:00">06:00</option
											><option value="07:00">07:00</option
											><option value="08:00">08:00</option
											><option value="09:00">09:00</option
											><option value="10:00">10:00</option></select
										><!----><!----><!---->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-3" class="d-block col-lg-4">단지 명</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="전기" class="form-control" />
										<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
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
		<div class="row">
			<div class="col-lg-12">
				<div class="btn-wrap clearfix">
					<div role="group" class="btn-group">
						<button v-b-modal.modal-multi-1 type="button" class="btn btn-primary">
							<b-icon icon="pencil-fill"></b-icon>
							신규 등록
						</button>
					</div>
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-light btn-excel">
							<b-icon icon="file-excel-fill" variant="success"></b-icon>
							엑셀 다운로드
						</button>
					</div>
				</div>
				<div class="table-wrap">
					<table class="table bgtable b-table table-striped table-hover" id="">
						<!----><!---->
						<thead role="rowgroup" class="">
							<!---->
							<tr role="row" class="">
								<th class=""><div>SI_ID</div></th>
								<th class=""><div>단지(아파트,상가)명</div></th>
								<th class=""><div>세대수</div></th>
								<th class=""><div>지역</div></th>
								<th class=""><div>주소</div></th>
								<th class=""><div>설치 장비수</div></th>
								<th class=""><div>검침타입</div></th>
								<th class=""><div></div></th>
							</tr>
						</thead>
						<tbody role="rowgroup">
							<!---->
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<tr role="row" class="">
								<td class="">SE01</td>
								<td class="">서울아파트</td>
								<td class="">1011</td>
								<td class="">서울</td>
								<td class="">서울시</td>
								<td class="">1234</td>
								<td class="">5종</td>
								<td class=""><button class="btn btn-primary">상세정보</button></td>
							</tr>
							<!----><!---->
						</tbody>
						<!---->
					</table>
				</div>
			</div>
		</div>
		<div class="pa-wrap">
			<nav aria-label="Pagination">
				<ul class="pagination b-pagination">
					<li class="page-item disabled">
						<span class="page-link">«</span>
					</li>
					<li class="page-item disabled">
						<span class="page-link">‹</span>
					</li>
					<!----><!---->
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
					<!---->
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
<script>
export default {
	components: {},
	data: () => {
		return {};
	},
	methods: {}
};
</script>
