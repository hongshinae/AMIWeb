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

<style lang="scss">
/*메인대시보드닐씨*/
.double {
	h4 {
		padding: 10px 0 0 25px;
		font-size: 12px;
		margin-top: 20px;
		float: left;
	}
}
.todayWeather,
.detaeWeather {
	height: 110px;
	.pulsate-bck {
		width: 40px;
		height: 40px;
		float: right;
		margin-top: 30px;
		margin-right: 25px;
	}
	ul {
		color: #94a0b4;
		margin-top: 25px;
		margin-right: 10px;
		font-size: 11px;
		float: right;
		li {
			margin-bottom: 1px;
		}
	}
}
.detaeWeather ul {
	margin-top: 41px !important;
}

.todayWeather {
	.codeSky1.codeRain0 {
		background: url("~@/assets/svg/weather_sun.svg") 0 0 no-repeat; //맑음//없음
	}
	.codeSky1.codeRain1 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //맑음//비
	}
	.codeSky1.codeRain2 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //맑음//비눈진눈꺠비
	}
	.codeSky1.codeRain3 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //맑음//눈
	}
	.codeSky1.codeRain4 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //맑음//소나기
	}
	.codeSky1.codeRain5 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //맑음//빗방울
	}
	.codeSky1.codeRain6 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //맑음//빗방울/눈날림
	}
	.codeSky1.codeRain7 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //맑음/눈날림
	}

	.codeSky3.codeRain0 {
		background: url("~@/assets/svg/weather_cloud.svg") 0 0 no-repeat; //구름많음//없음
	}
	.codeSky3.codeRain1 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //구름많음//비
	}
	.codeSky3.codeRain2 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음//비눈진눈꺠비
	}
	.codeSky3.codeRain3 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음//눈
	}
	.codeSky3.codeRain4 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음//소나기
	}
	.codeSky3.codeRain5 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음//빗방울
	}
	.codeSky3.codeRain6 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음//빗방울/눈날림
	}
	.codeSky3.codeRain7 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //구름많음/눈날림
	}

	.codeSky4.codeRain0 {
		background: url("~@/assets/svg/weather_cloud.svg") 0 0 no-repeat; //흐림//없음
	}
	.codeSky4.codeRain1 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //흐림//비
	}
	.codeSky4.codeRain2 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //흐림//비눈진눈꺠비
	}
	.codeSky4.codeRain3 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //흐림//눈
	}
	.codeSky4.codeRain4 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //흐림//소나기
	}
	.codeSky4.codeRain5 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //흐림//빗방울
	}
	.codeSky4.codeRain6 {
		background: url("~@/assets/svg/weather_rain.svg") 0 0 no-repeat; //흐림//빗방울/눈날림
	}
	.codeSky4.codeRain7 {
		background: url("~@/assets/svg/weather_snow.svg") 0 0 no-repeat; //흐림/눈날림
	}
}

.detaeWeather .codeValue0 {
	background: url("~@/assets/svg/emo_smile2.svg") 0 0 no-repeat;
}
.detaeWeather .codeValue1 {
	background: url("~@/assets/svg/emo_stop.svg") 0 0 no-repeat;
}
.detaeWeather .codeValue2 {
	background: url("~@/assets/svg/emo_tear.svg") 0 0 no-repeat;
}

@media (max-width: 991px) {
	.double.row .col-lg-6:first-child {
		padding-right: 15px !important;
	}
	.double.row .col-lg-6:last-child {
		padding-left: 15px !important;
	}
}

.pulsate-bck {
	-webkit-animation: pulsate-bck 0.5s ease-in-out;
	animation: pulsate-bck 0.5s ease-in-out;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-4-17 1:55:20
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation pulsate-bck
 * ----------------------------------------
 */
@-webkit-keyframes pulsate-bck {
	0% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	50% {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
@keyframes pulsate-bck {
	0% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	50% {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
</style>
