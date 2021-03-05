<template>
	<div class="main-bg">
		<div class="main-location-wrap">
			<h1>매핑 정보</h1>
			<div class="main-location">
				<i class="home-img"></i>
				<b-breadcrumb :items="items"></b-breadcrumb>
			</div>
		</div>
		<div class="search-wrap">
			<div class="search-img"><i>검색이미지</i></div>
			<div class="search">인풋 영역</div>
			<div class="btn-wrap ml-auto">버튼 영역</div>
		</div>
		<b-row>
			<b-col cols="4">
				<!-- left-->
				<div class="box-wh">검침타입</div>
				<div class="box-wh">표</div>
				<!--/left-->
			</b-col>
			<b-col cols="8">
				<!-- left-->
				<div class="btn-wrap"></div>
				<div class="table-wrap">
					<table>
						<thead>
							<tr>
								<th>1</th>
								<th>2</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>2</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!--/left-->
			</b-col>
		</b-row>
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
</script>
<style lang="scss">
@mixin title() {
	margin-top: 5px;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px solid #6979a9;
	padding: 0 15px 5px 15px;
	font-family: "NanumSquare", sans-serif;
}

.status-board .box h5 {
	@include title;
	color: red; //수정예정
}

.main-bg {
	background: #ecf2f6;
	height: calc(100vh - 52px);
	color: #000;
}
</style>
