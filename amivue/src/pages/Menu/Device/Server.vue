<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>서버 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>서버 현황</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-row>
			<b-col lg="12" xl="8">
				<div class="box">
					<h5>
						<span>최대 수요</span>
						<b class="fontC">45.452kWh</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="/resources/images/charhimg01.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<span>서버 설치 구성도</span>
					</h5>
					<div class="svg-Warp">
						<img src="@/assets/svg/server.svg" />
					</div>
				</div>
			</b-col>
			<b-col lg="12" xl="4">
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
						<span>등록정보</span>
						<small>5종 검침 관련 모든 계량기 수 모뎀 수 DCU/Gateway 수</small>
					</h5>
					<div class="regist-info">
						<ul>
							<li>
								<div class="serve-box">
									<h6>등록 장비 수</h6>
									<b>2개</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>계량기</h6>
									<b>41.5천</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>DCU / Gate</h6>
									<b>2,081개</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>Modem</h6>
									<b>2,081개</b>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="box serve-ex-ip-wrap">
					<div class="serve-ex-ip">
						<ol>
							<li>서버 EXTERNAL IP</li>
							<li>211.170.156.178</li>
						</ol>
					</div>
					<div class="svg-wrap">
						<img src="@/assets/svg/icon_server.svg" />
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>
