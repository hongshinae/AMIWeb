<template>
	<div class="main-bg content">
		<div class="main-location-wrap clearfix">
			<h1>매핑 정보</h1>
			<div class="main-location">
				<div class="home-img">
					<b-icon icon="arrow-up"></b-icon>
				</div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">매핑정보</span></li>
				</ol>
			</div>
		</div>
		<div class="search-wrap clearfix">
			<div class="box-wh">
				<div class="search-img">
					<svg
						viewBox="0 0 16 16"
						width="1.2em"
						height="1.2em"
						focusable="false"
						role="img"
						aria-label="search"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi-search mx-auto b-icon bi"
						data-v-41be6633=""
					>
						<g data-v-41be6633="">
							<path
								d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
							></path>
						</g>
					</svg>
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
				<div class="box-wh">
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
				<div class="box-wh">
					<h5>
						<div><i class="icon-arroew"></i>서울아파트 : <span class="p-Color">1007</span>세대 검침일 : <span class="p-Color">1</span>일</div>
					</h5>
					<div class="table-wrap">
						<table class="table b-table" id="">
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
					<div class="pa-wrap">
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
							<svg
								viewBox="0 0 16 16"
								width="1em"
								height="1em"
								focusable="false"
								role="img"
								aria-label="pencil fill"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi-pencil-fill mx-auto b-icon bi"
								data-v-41be6633=""
							>
								<g data-v-41be6633="">
									<path
										d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
									></path>
								</g>
							</svg>
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
							<!----><!---->
						</tbody>
						<!---->
					</table>
				</div>
			</div>
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
