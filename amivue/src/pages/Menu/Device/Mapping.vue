<template>
	<div class="main-bg content">
		<div class="main-location-wrap clearfix">
			<h1>매핑 정보</h1>
			<div class="main-location">
				<div class="home-img">
					<b-icon icon="house"></b-icon>
				</div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">매핑정보</span></li>
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
									<label id="" for="input-1" class="d-block col-lg-4">지역 코드</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="전기" class="form-control" />
										<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-2" class="d-block col-lg-4">단지 명</label>
									<div class="col-lg-8">
										<input id="input-2" type="text" placeholder="반도 유보라 10차 아파트" class="form-control col" /><!----><!----><!---->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-3" class="d-block col-lg-4">조회 시간</label>
									<div class="col-lg-8">
										<select id="input-3" class="custom-select"
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
								<div id="input-group-1" role="group" class="form-group row">
									<label id="" for="input-1" class="d-block col-lg-4">지역 코드</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="전기" class="form-control" />
										<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-2" class="d-block col-lg-4">단지 명</label>
									<div class="col-lg-8">
										<input id="input-2" type="text" placeholder="반도 유보라 10차 아파트" class="form-control col" /><!----><!----><!---->
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-3" class="d-block col-lg-4">조회 시간</label>
									<div class="col-lg-8">
										<select id="input-3" class="custom-select"
											><option value="06:00">06:00</option
											><option value="07:00">07:00</option
											><option value="08:00">08:00</option
											><option value="09:00">09:00</option
											><option value="10:00">10:00</option></select
										><!----><!----><!---->
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
			<div class="col-lg-4">
				<div class="wbox whbg">
					<form class="one-row">
						<div id="" role="group" class="form-group row">
							<label id="" for="input-1" class="d-block col-lg-4">지역 코드</label>
							<div class="col-lg-8">
								<input id="input-1" type="text" placeholder="전기" class="form-control" />
								<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
							</div>
						</div>
						<div id="" role="group" class="form-group row">
							<label id="" for="input-1" class="d-block col-lg-4">지역 코드</label>
							<div class="col-lg-8">
								<input id="input-1" type="text" placeholder="전기" class="form-control" />
								<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
							</div>
						</div>
						<div id="" role="group" class="form-group row">
							<label id="" for="input-1" class="d-block col-lg-4">지역 코드</label>
							<div class="col-lg-8">
								<input id="input-1" type="text" placeholder="전기" class="form-control" />
								<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
							</div>
						</div>
						<div id="" role="group" class="form-group row">
							<label id="" for="input-1" class="d-block col-lg-4"></label>
							<div class="col-lg-8">
								<button type="button" class="btn btn-primary btn-block">검 색</button>
								<!----><!--<small tabindex="-1" id="input-group-1__BV_description_" class="form-text text-muted"></small>-->
							</div>
						</div>
					</form>
				</div>
				<div class="wbox whbg">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>서울아파트 : <i class="p-Color">1007</i> 세대 검침일 : <i class="p-Color">1</i>일</span>
					</h5>
					<div class="table-wrap">
						<table class="table b-table basic-table" id="">
							<!----><!---->
							<thead role="rowgroup" class="">
								<!---->
								<tr role="row" class="">
									<th class=""><div>번호</div></th>
									<th class=""><div>이력날짜</div></th>
									<th class=""><div>변경수</div></th>
								</tr>
							</thead>
							<tbody role="rowgroup">
								<!---->
								<tr role="row" class="">
									<td class="">1</td>
									<td class="">2020-12-12 17:21:28</td>
									<td class="">2</td>
								</tr>
								<tr role="row" class="">
									<td class="">1</td>
									<td class="">2020-12-12 17:21:28</td>
									<td class="">2</td>
								</tr>
								<tr role="row" class="">
									<td class="">1</td>
									<td class="">2020-12-12 17:21:28</td>
									<td class="">2</td>
								</tr>
								<tr role="row" class="">
									<td class="">1</td>
									<td class="">2020-12-12 17:21:28</td>
									<td class="">2</td>
								</tr>
								<!----><!---->
							</tbody>
							<!---->
						</table>
					</div>
					<div class="pa-wrap" align-h="center">
						<nav aria-hidden="false" aria-label="Pagination">
							<ul aria-disabled="false" class="pagination b-pagination">
								<li aria-hidden="true" class="page-item disabled">
									<span aria-label="Go to first page" aria-disabled="true" class="page-link">«</span>
								</li>
								<li aria-hidden="true" class="page-item disabled">
									<span aria-label="Go to previous page" aria-disabled="true" class="page-link">‹</span>
								</li>
								<!----><!---->
								<li class="page-item">
									<a href="/docs/components/pagination-nav" class="page-link nuxt-link-active" aria-label="Go to page 1" target="_self">1</a>
								</li>
								<li class="page-item">
									<a href="/docs/components/pagination-nav?page=2" class="page-link" aria-label="Go to page 2" target="_self">2</a>
								</li>
								<li class="page-item">
									<a href="/docs/components/pagination-nav?page=3" class="page-link" aria-label="Go to page 3" target="_self">3</a>
								</li>
								<li class="page-item bv-d-xs-down-none">
									<a href="/docs/components/pagination-nav?page=4" class="page-link" aria-label="Go to page 4" target="_self">4</a>
								</li>
								<li role="separator" class="page-item disabled bv-d-xs-down-none"><span class="page-link">…</span></li>
								<!---->
								<li aria-hidden="true" class="page-item disabled">
									<span aria-label="Go to next page" aria-disabled="true" class="page-link">›</span>
								</li>
								<li aria-hidden="true" class="page-item disabled">
									<span aria-label="Go to last page" aria-disabled="true" class="page-link">»</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div class="col-lg-8">
				<div class="btn-wrap clearfix">
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-primary">
							<b-icon icon="pencil-fill"></b-icon>
							신규 등록
						</button>
					</div>
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-light">엑셀 다운로드</button>
						<button type="button" class="btn btn-light">전체 연동 확인</button>
						<button type="button" class="btn btn-light">저장</button>
					</div>
				</div>
				<div class="table-wrap">
					<table class="table bgtable b-table table-striped table-hover" id="">
						<!----><!---->
						<thead role="rowgroup" class="">
							<!---->
							<tr role="row" class="">
								<th class=""><div>동</div></th>
								<th class=""><div>호수</div></th>
								<th class=""><div>METER ID</div></th>
								<th class=""><div>검침일</div></th>
								<th class=""><div>MAC ADDR</div></th>
								<th class=""><div>DCU ID</div></th>
								<th class=""><div>연동확인</div></th>
							</tr>
						</thead>
						<tbody role="rowgroup">
							<!---->
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<tr role="row" class="">
								<td class="">1006동</td>
								<td class="">101호</td>
								<td class="">29140192159</td>
								<td class="">1일</td>
								<td class="">00:00:AC:5E:8C:A0:38:63</td>
								<td class="">NS09_0101A</td>
								<td class=""><span class="linkage">연동</span></td>
							</tr>
							<!----><!---->
						</tbody>
						<!---->
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<div class="wbox whbg">
					<h5 class="tltle">
						지역별 현황
						<b class="p-Color">45.452kWh</b>
					</h5>
					<div class="chart-wrap">chart</div>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="wbox blbg">
					<h5 class="tltle">적시 검침률</h5>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="wbox abbg">
					<h5 class="tltle">검침 신뢰성</h5>
				</div>
			</div>
		</div>
		<div class="row">
			<button type="button" class="btn btn-primary">
				<b-icon icon="pencil-fill"></b-icon>
				신규 등록
			</button>
			<button type="button" class="btn btn-primary">신규 등록</button>
			<button type="button" class="btn btn-light">다운로드</button>
			<button type="button" class="btn btn-blight">블루버튼</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: "홈",
					href: "#"
				},
				{
					text: "설비",
					href: "#"
				},
				{
					text: "매핑정보",
					active: true
				}
			]
		};
	}
};

// Header css
import "@/assets/css/contents_wh.css";
</script>
<style lang="scss"></style>
