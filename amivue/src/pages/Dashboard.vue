<template>
	<div class="content">
		<b-row>
			<b-col xl="4" lg="6" md="12" sm="12">
				<div class="timeWrap">
					<div class="date">{{ Date.now() | moment("YYYY.M.D") }}</div>
					<dashboard-timer></dashboard-timer>
				</div>
				<div class="box power">
					<h5>
						<span>전국 전력 사용량</span>
						<b class="fontC">45.452kWh</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="@/assets/images/charhimg01.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<ul class="inspection">
							<li>
								<span>적시 검침률</span>
								<b class="fontC">99%</b>
							</li>
							<li>
								<span>검침 신뢰성</span>
								<b class="fontC">100%</b>
							</li>
						</ul>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="@/assets/images/charhimg02.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						금일 장애
						<b class="fontC">5건</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="@/assets/images/charhimg03.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="row double">
					<div class="col-lg-6">
						<div class="todayWeather box">
							<h4>오늘의 날씨</h4>
							<span class="good"></span>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="detaeWeather box">
							<h4>데이터 날씨</h4>
							<span class="good"></span>
						</div>
					</div>
				</div>
			</b-col>
			<b-col xl="4" lg="6" md="12" sm="12">
				<div class="high-map-wrap">
					<div class="high-map"></div>
					<div class="high-table">
						<ul>
							<li>
								<span>설비</span>
								<span>설치 수</span>
								<span>장애 수</span>
							</li>
							<li>
								<span>DCU</span>
								<span>2081</span>
								<span class="r-color">40</span>
							</li>
							<li>
								<span>Meter</span>
								<span>2081</span>
								<span>40</span>
							</li>
						</ul>
					</div>
				</div>
			</b-col>
			<b-col xl="4" lg="12" md="12" sm="12">
				<div class="presentMenu">
					<ul>
						<li>난방</li>
						<li>온수</li>
						<li>수도</li>
						<li>가스</li>
						<li class="on">전기</li>
					</ul>
				</div>
				<div class="box">
					<h5>
						<span>서버운영정보</span>
						<b class="fontC">정상</b>
					</h5>
					<div class="dutyCycle cpu">
						<h4>
							<span class="title">OS CPU 사용률</span>
							<span class="deta">0.000%</span>
						</h4>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
								<span class="sr-only">60% Complete</span>
							</div>
						</div>
					</div>
					<div class="dutyCycle">
						<h4>
							<span class="title">OS CPU 사용률</span>
							<span class="deta">0.000%</span>
						</h4>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
								<span class="sr-only">60% Complete</span>
							</div>
						</div>
					</div>
					<ul class="serveInfo">
						<li>
							<h6>JVMUSED</h6>
							<span>0.330</span>
						</li>
						<li>
							<h6>JVMFREE</h6>
							<span>1.243</span>
						</li>
						<li>
							<h6>JVMTOTAL</h6>
							<span>1.573</span>
						</li>
						<li>
							<h6>JVMMAX</h6>
							<span>26.665</span>
						</li>
					</ul>
				</div>
				<div class="box">
					<h5>
						<span>등록장비</span>
						<b class="fontC">11건</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="/resources/images/charhimg04.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						지역별 사용
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
		</b-row>
	</div>
</template>

<script>
import DashboardTimer from "@/components/DashboardTimer";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Home",
	components: {
		DashboardTimer
		// HelloWorld
	},
	data: function() {
		return {
			now: Date.now()
		};
	},
	computed: {
		cNow() {
			return this.now - 86400000 + 1000;
		}
	},
	methods: {}
};
</script>
