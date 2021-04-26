<template>
	<div class="box">
		<h5>
			<span>{{ $t("dashboard.serverInfo") }}</span>
			<b class="fontC">정상</b>
		</h5>
		<div class="dutyCycle cpu">
			<h4>
				<span class="title">{{ $t("dashboard.cpuUsage") }}</span>
				<span class="deta">{{ osCpu }}%</span>
			</h4>
			<b-progress :value="osCpu" :max="100"></b-progress>
		</div>
		<div class="dutyCycle">
			<h4>
				<span class="title">{{ $t("dashboard.memoryUsage") }}</span>
				<span class="deta">{{ osMemory }}%</span>
			</h4>
			<b-progress class="progress-bar-2" :value="osMemory" :max="100"></b-progress>
		</div>
		<ul class="serveInfo">
			<li>
				<h6>JVMUSED</h6>
				<span>{{ jvmUsed }}</span>
			</li>
			<li>
				<h6>JVMFREE</h6>
				<span>{{ jvmFree }}</span>
			</li>
			<li>
				<h6>JVMTOTAL</h6>
				<span>{{ jvmTotal }}</span>
			</li>
			<li>
				<h6>JVMMAX</h6>
				<span>{{ jvmMax }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import Dashboard from "@/service/dashboard";
let sse;

export default {
	mounted() {
		sse = Dashboard.serverInfo(1);
		sse.onerror = function() {};
		sse.onopen = function() {};
		sse.onmessage = e => {
			const data = JSON.parse(e.data).response;
			this.jvmFree = data.jvmFree;
			this.jvmMax = data.jvmMax;
			this.jvmTotal = data.jvmTotal;
			this.jvmUsed = data.jvmUsed;
			this.osCpu = data.osCpu;
			this.osMemory = data.osMemory;
		};
	},
	computed: {},
	data() {
		return {
			jvmFree: 0,
			jvmMax: 0,
			jvmTotal: 0,
			jvmUsed: 0,
			osCpu: 0,
			osMemory: 0
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

<style>
.progress-bar {
	background-image: linear-gradient(to bottom, #1fdede 0, #23bada 100%) !important;
}
.progress-bar-2 .progress-bar {
	background-image: linear-gradient(to bottom, #dedb1f 0, #dab823 100%) !important;
}
.progress-bar-3 .progress-bar {
	background-image: linear-gradient(to bottom, #ff5959 0, #da2323 100%) !important;
}

.progress {
	background-image: linear-gradient(to bottom, #07132b 0, #07132b 100%) !important;
	height: 5px !important;
}
</style>
