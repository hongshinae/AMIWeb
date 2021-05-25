<template>
	<div class="row double">
		<div class="col-lg-6">
			<div class="todayWeather box">
				<h4>오늘의<br />날씨</h4>
				<span class="pulsate-bck codeSky1 codeRain0"></span>
				<ul>
					<li style="display: none;">연동실패</li>
					<li>17 ℃</li>
					<li>맑음</li>
					<li>없음</li>
				</ul>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="detaeWeather box">
				<h4>데이터<br />날씨</h4>
				<span class="pulsate-bck codeValue2"></span>
				<ul>
					<li>나쁨</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "~@/assets/scss/chart/todayWeather.scss";
</style>
