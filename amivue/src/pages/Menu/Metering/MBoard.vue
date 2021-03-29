<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>검침 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>검침</b-breadcrumb-item>
					<b-breadcrumb-item active>검침 현황</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-row>
			<b-col xl="7" lg="7">
				<div class="box">
					<h5>
						<span>데이터 수집 수</span>
						<b class="fontC">?</b>
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
						<div class="tableContainer">
							<table class="table">
								<thead>
									<tr>
										<th>지역</th>
										<th>사용</th>
										<th>사용량 quater</th>
										<th>데이터A</th>
										<th>데이터A quater</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>서울</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>인천</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>강원</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>경기</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>충북</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>대전</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>나주</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>경북</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
									</tr>
									<tr>
										<td>제주</td>
										<td>254</td>
										<td></td>
										<td>11</td>
										<td></td>
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
						<div class="box">
							<h5>
								<span>데이터 수집 수</span>
								<b class="fontC">?</b>
							</h5>
						</div>
					</b-col>
					<b-col xl="6" lg="12">
						<div class="box">
							<h5>
								<span>데이터 수집 수</span>
								<b class="fontC">?</b>
							</h5>
						</div>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>
