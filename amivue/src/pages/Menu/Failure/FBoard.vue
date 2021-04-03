<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>장애 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>장애</b-breadcrumb-item>
					<b-breadcrumb-item active>장애 현황</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-row>
			<b-col xl="7" lg="7">
				<div class="box">
					<h5>
						<span>시간별 장애 발생 건수</span>
						<b class="fontC">5건</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="/resources/images/charhimg01.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<span>지역별 현황</span>
						<b class="fontC">7개</b>
					</h5>
					<div class="tableWarp">
						<div class="tableContainer mboard-table">
							<table class="table">
								<thead>
									<tr>
										<th>지역</th>
										<th>전체 수집건수</th>
										<th>검침 건</th>
										<th>미 검침 건</th>
										<th>네트워크</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>서울</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>경기</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>인천</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>강원</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>충북</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>대전 충남</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="linkage"></span>양호</td>
									</tr>
									<tr>
										<td>대구 경북</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td class="error"><span class="unlinkage"></span>DCU 1개 오류</td>
									</tr>
									<tr>
										<td>광주 전남</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="normal"></span>정상</td>
									</tr>
									<tr>
										<td>제주</td>
										<td>15050</td>
										<td>15000</td>
										<td>50</td>
										<td><span class="unlinkage"></span>양호</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</b-col>
			<b-col xl="5" lg="5">
				<b-row>
					<b-col xl="6" lg="12">
						<div class="box svg">
							<h6>전일 대비 장애 증감율</h6>
							<div class="data">-10%</div>
							<div class="svg-wrap">
								<img src="@/assets/svg/box.svg" />
							</div>
						</div>
					</b-col>
					<b-col xl="6" lg="12">
						<div class="box svg">
							<h6>장애 복구율</h6>
							<div class="data">100%</div>
							<div class="svg-wrap">
								<img src="@/assets/svg/sound.svg" />
							</div>
						</div>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>
<style type="text/css">
.st0 {
	fill: #ffffff;
}
</style>
