<template>
	<b-row>
		<b-col xl="6" lg="12">
			<div class="box svg">
				<h6>{{ $t("FBoard.comparePersent") }}</h6>
				<div class="data">{{ data ? Math.floor(data.comparePersent * 100) / 100 : 0 }}%</div>
				<div class="svg-wrap">
					<img src="@/assets/svg/box.svg" />
				</div>
			</div>
		</b-col>
		<b-col xl="6" lg="12">
			<div class="box svg">
				<h6>{{ $t("FBoard.restorePersent") }}</h6>
				<div class="data">{{ data ? data.restorePersent : 0 }}%</div>
				<div class="svg-wrap">
					<img src="@/assets/svg/sound.svg" />
				</div>
			</div>
		</b-col>
	</b-row>
</template>

<script>
import Fboard from "@/service/fboard";
let sse;

export default {
	mounted() {
		sse = Fboard.rate();
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.data = data;
		};
	},
	data() {
		return {
			chartName: "column",
			data: null
		};
	},
	beforeDestroy() {
		if (sse) {
			sse.close();
			console.log("TodayFault SSE Destroyed!!");
		}
	}
};
</script>

<style lang="scss">
.chartWarp .text {
	font-family: sans-serif;
}
</style>
