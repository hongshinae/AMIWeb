<template>
	<div>
		<div class="btn-wrap">
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-primary" v-b-modal.addEstate>
					<icon-base viewBox="0 0 16 16" width="1em" height="1em" icon-color="" icon-name="pencil" cls="bi-pencil-fill mx-auto b-icon bi">
						<slot name="header-left-icon" />
					</icon-base>
					<slot name="header-left-name" />
				</button>
			</div>
			<div role="group" class="btn-group">
				<button type="button" class="btn btn-light btn-excel">
					<icon-base viewBox="0 0 30 30" width="10px" height="10px" icon-name="excel" cls="bi-pencil-fill mx-auto b-icon bi">
						<slot name="header-right-icon" />
					</icon-base>
					<slot name="header-right-name" />
				</button>
			</div>
		</div>
		<div class="table-wrap">
			<table class="table bgtable b-table table-striped table-hover">
				<thead role="rowgroup" class="">
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
					<tr role="row" class="error">
						<td class="">SE01</td>
						<td class="">서울아파트</td>
						<td class="">1011</td>
						<td class="">서울</td>
						<td class="">서울시</td>
						<td class="">1234</td>
						<td class="">5종</td>
						<td class=""><button class="btn btn-primary">상세정보</button></td>
					</tr>
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
export default {
	created() {}
};
</script>

<style></style>
