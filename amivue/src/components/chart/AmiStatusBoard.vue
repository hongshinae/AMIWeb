<template>
	<div class="box">
		<h5>
			<span>AMI 시스템 현황</span>
			<b class="fontC">설치 수 / 장애 수</b>
		</h5>
		<div>
			<ul class="amiBoard">
				<li>
					<ul>
						<li><img src="@/assets/svg/icon_dashboard_meter.svg" /></li>
						<li>METER</li>
						<li><span>145000 / </span><span class="r-color blink">1000</span></li>
					</ul>
				</li>
				<li>
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<ul>
								<li><img src="@/assets/svg/icon_dashboard_server.svg" /></li>
								<li>SERVER</li>
								<li><span>2 / </span><span class="r-color blink">1</span></li>
							</ul>
						</div>
						<div class="col-sm-12 col-md-6">
							<ul>
								<li><img src="@/assets/svg/icon_dashboard_dcu.svg" /></li>
								<li>DCU</li>
								<li><span>120 / </span><span class="r-color blink">120</span></li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<ul>
								<li><img src="@/assets/svg/icon_dashboard_modem.svg" /></li>
								<li>MODEM</li>
								<li><span>600 / </span><span class="r-color blink">50</span></li>
							</ul>
						</div>
						<div class="col-sm-12 col-md-6">
							<ul>
								<li><img src="@/assets/svg/icon_dashboard_wifi.svg" /></li>
								<li>LTE</li>
								<li><span>208 / </span><span class="r-color blink">1</span></li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script></script>
<style lang="scss">
@import "~@/assets/scss/components/amiStatusBoard.scss";
</style>
