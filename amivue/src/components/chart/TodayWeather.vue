<template>
	<div class="row double">
		<div class="col-lg-6">
			<div class="todayWeather box">
				<h4>오늘의<br />날씨</h4>
				<span class="good pulsate-bck"></span>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="detaeWeather box">
				<h4>데이터<br />날씨</h4>
				<span class="good pulsate-bck"></span>
			</div>
		</div>
	</div>
</template>

<script>
// import Dashboard from "@/service/dashboard";
let todaySse;
let dataSse;

export default {
	// async mounted() {
	// 	todaySse = Dashboard.todayWeather(5);
	// 	todaySse.onerror = function() {};
	// 	todaySse.onopen = function() {};
	// 	todaySse.onmessage = e => {
	// 		const data = JSON.parse(e.data).response;
	// 		console.log(data);
	// 		this.todayWeather = data;
	// 	};
	// 	dataSse = Dashboard.dataWeather(5);
	// 	dataSse.onerror = function() {};
	// 	dataSse.onopen = function() {};
	// 	dataSse.onmessage = e => {
	// 		const data = JSON.parse(e.data).response;
	// 		this.dataWeather = data;
	// 	};
	// },
	data() {
		return {
			todayWeather: null,
			dataWeather: null,
			chartName: "column"
		};
	},
	beforeDestroy() {
		if (todaySse) {
			todaySse.close();
			console.log("TodayWeather_todaySse Destroyed!!");
		}
		if (dataSse) {
			dataSse.close();
			console.log("TodayWeather_dataSse Destroyed!!");
		}
	}
};
</script>

<style></style>
