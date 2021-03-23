<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>서버 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>서버 현황</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-row>
			<b-col lg="8">
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
						<!--svg가 들어가면 깨짐-->
					</div>
				</div>
			</b-col>
			<b-col lg="4">
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
						<svg
							enable-background="new 0 0 128 128"
							height="128px"
							id="Layer_1"
							version="1.1"
							viewBox="0 0 128 128"
							width="128px"
							xml:space="preserve"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g>
								<path
									d="M63.999,46.284c22.271,0,45.938-4.101,45.938-11.7c0-7.6-23.668-11.7-45.938-11.7   c-22.27,0-45.938,4.101-45.938,11.7C18.061,42.183,41.729,46.284,63.999,46.284z M63.999,24.884c25.896,0,43.938,5.112,43.938,9.7   c0,4.588-18.045,9.7-43.938,9.7s-43.938-5.112-43.938-9.7C20.061,29.996,38.105,24.884,63.999,24.884z"
									fill="#2BACE2"
								/>
								<path
									d="M108.939,44.284c-0.554,0-1,0.448-1,1v8.132c0,4.587-18.045,9.699-43.939,9.699   c-25.894,0-43.938-5.112-43.938-9.699v-8.132c0-0.552-0.447-1-1-1c-0.554,0-1,0.448-1,1v8.132c0,7.599,23.669,11.699,45.938,11.699   s45.939-4.1,45.939-11.699v-8.132C109.939,44.732,109.49,44.284,108.939,44.284z"
									fill="#2BACE2"
								/>
								<path
									d="M108.939,64.284c-0.554,0-1,0.447-1,1v8.133c0,4.588-18.045,9.699-43.939,9.699   c-25.894,0-43.938-5.111-43.938-9.699v-8.133c0-0.553-0.447-1-1-1c-0.554,0-1,0.447-1,1v8.133c0,7.6,23.669,11.699,45.938,11.699   s45.939-4.1,45.939-11.699v-8.133C109.939,64.732,109.49,64.284,108.939,64.284z"
									fill="#2BACE2"
								/>
								<path
									d="M108.939,84.283c-0.554,0-1,0.447-1,1v8.133c0,4.588-18.045,9.699-43.939,9.699   c-25.894,0-43.938-5.111-43.938-9.699v-8.133c0-0.553-0.447-1-1-1c-0.554,0-1,0.447-1,1v8.133c0,7.6,23.669,11.699,45.938,11.699   s45.939-4.1,45.939-11.699v-8.133C109.939,84.732,109.49,84.283,108.939,84.283z"
									fill="#2BACE2"
								/>
							</g>
						</svg>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>
