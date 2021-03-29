<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>장애 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
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
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 128 128"
									style="enable-background:new 0 0 128 128;"
									xml:space="preserve"
								>
									<path
										class="st0"
										d="M64,18.1L24.3,41.1v45.9L64,109.9l39.7-22.9V41.1L64,18.1z M101.1,41.8L64,63.3L26.9,41.8L64,20.4L101.1,41.8z
	 M26.3,43.8L63,65v42L26.3,85.8V43.8z M65,107V65l36.7-21.2v42L65,107z"
									/>
								</svg>
							</div>
						</div>
					</b-col>
					<b-col xl="6" lg="12">
						<div class="box svg">
							<h6>장애 복구율</h6>
							<div class="data">100%</div>
							<div class="svg-wrap">
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 128 128"
									style="enable-background:new 0 0 128 128;"
									xml:space="preserve"
								>
									<g>
										<path
											class="st0"
											d="M18.9,31.5h14.3c0.5,4.9,4.7,8.8,9.8,8.8s9.3-3.9,9.8-8.8h56.4c0.6,0,1-0.4,1-1s-0.4-1-1-1H52.7
		c-0.5-4.9-4.7-8.8-9.8-8.8s-9.3,3.9-9.8,8.8H18.9c-0.6,0-1,0.4-1,1S18.3,31.5,18.9,31.5z M43,22.7c4.3,0,7.8,3.5,7.8,7.8
		s-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8S38.7,22.7,43,22.7z"
										/>
										<path
											class="st0"
											d="M109.1,61.2H94.8c-0.5-4.9-4.7-8.8-9.8-8.8s-9.3,3.9-9.8,8.8H18.9c-0.6,0-1,0.4-1,1s0.4,1,1,1h56.4
		c0.5,4.9,4.7,8.8,9.8,8.8s9.3-3.9,9.8-8.8h14.3c0.6,0,1-0.4,1-1S109.7,61.2,109.1,61.2z M85,70.1c-4.3,0-7.8-3.5-7.8-7.8
		s3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8S89.3,70.1,85,70.1z"
										/>
										<path
											class="st0"
											d="M109.1,96.5H73.6c-0.5-4.9-4.7-8.8-9.8-8.8c-5.1,0-9.3,3.9-9.8,8.8H18.9c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1
		h35.2c0.5,4.9,4.7,8.8,9.8,8.8c5.1,0,9.3-3.9,9.8-8.8h35.5c0.6,0,1-0.4,1-1C110.1,97,109.7,96.5,109.1,96.5z M63.9,105.3
		c-4.3,0-7.8-3.5-7.8-7.8c0-4.3,3.5-7.8,7.8-7.8s7.8,3.5,7.8,7.8C71.7,101.8,68.2,105.3,63.9,105.3z"
										/>
									</g>
								</svg>
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
