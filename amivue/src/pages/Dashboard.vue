<template>
	<div>
		<div class="row">
			<div class="col-lg-4">
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
			</div>
			<div class="col-lg-4"></div>
		</div>
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
