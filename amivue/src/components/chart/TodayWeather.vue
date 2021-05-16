<template>
	<div class="row double">
		<div class="col-lg-6">
			<div class="todayWeather box">
				<h4>오늘의<br />날씨</h4>
				<span class="pulsate-bck" :class="[codeSky, codeRain]"></span>
				<ul>
					<li v-show="!data || !data.todayWeather">연동실패</li>
					<li>{{ data && data.todayWeather ? data.todayWeather.temperature : 0 }} ℃</li>
					<li>{{ data && data.todayWeather ? $t("dashboard.codeSky")[data.todayWeather.codeSky] : "" }}</li>
					<li>{{ data && data.todayWeather ? $t("dashboard.codeRain")[data.todayWeather.codeRain] : "" }}</li>
				</ul>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="detaeWeather box">
				<h4>데이터<br />날씨</h4>
				<span class="pulsate-bck" :class="codeValue"></span>
				<ul>
					<li>{{ data && data.weatherData ? $t("dashboard.codeValue")[data.weatherData.codeValue] : "" }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
	computed: {
		codeSky() {
			if (this.data == null) {
				return "codeSky";
			}

			if (this.data.todayWeather != null) {
				return "codeSky" + this.data.todayWeather.codeSky;
			} else {
				return null;
			}
		},
		codeRain() {
			if (this.data == null) {
				return "codeRain";
			}

			if (this.data.todayWeather != null) {
				return "codeRain" + this.data.todayWeather.codeRain;
			} else {
				return null;
			}
		},
		codeValue() {
			if (this.data == null) {
				return "codeValue";
			}

			if (this.data.weatherData != null) {
				return "codeValue" + this.data.weatherData.codeValue;
			} else {
				return null;
			}
		}
	}
};
</script>
<style lang="scss" scope>
@import "~@/assets/scss/chart/boxblackCommon.scss";
@import "~@/assets/scss/chart/todayWeather.scss";
</style>
