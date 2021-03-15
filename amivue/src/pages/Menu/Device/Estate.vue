<template>
	<div class="main-bg">
		<!-- <icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
			<icon-search />
		</icon-base> -->
		<b-modal id="modal-multi-1" size="lg" title="First Modal" ok-only no-stacking>
			<p class="my-2">First Modal</p>
			<b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
		</b-modal>
		<div class="main-location-wrap">
			<h1>단지 관리</h1>
			<div class="main-location">
				<div class="home-img">
					<svg
						viewBox="0 0 16 16"
						width="1.2em"
						height="1.2em"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi-house mx-auto b-icon bi"
					>
						<g>
							<path
								fill-rule="evenodd"
								d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
							></path>
							<path
								fill-rule="evenodd"
								d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
							></path>
						</g>
					</svg>
				</div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">단지 관리</span></li>
				</ol>
			</div>
		</div>
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img">
					<svg viewBox="0 0 16 16" width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" class="bi-search mx-auto b-icon bi">
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
					신규 단지 등록
				</button>
			</div>
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-light btn-excel">
					<svg
						enable-background="new 0 0 10 10"
						height="10px"
						id="Layer_1"
						version="1.1"
						viewBox="0 0 30 30"
						width="10px"
						xml:space="preserve"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<g>
							<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
							<polyline
								fill="#FFFFFF"
								points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
							/>
						</g>
					</svg>
					엑셀 다운로드
				</button>
			</div>
		</div>
		<div class="table-wrap">
			<table class="table bgtable b-table table-striped table-hover">
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
			</table>
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
<script>
import Vue from "vue";
import IconSearch from "@/components/icons/IconSearch";
Vue.component("icon-search", IconSearch);

export default {
	components: {},
	data: () => {
		return {};
	},
	methods: {}
};
</script>
