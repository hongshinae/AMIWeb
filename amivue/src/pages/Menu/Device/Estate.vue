<template>
	<div>
		<dashboard-timer v-bind:timer="value"> </dashboard-timer>
		<button v-on:click="divide">1시간 전으로</button>
	</div>
</template>
<script>
import Vue from "vue";
import DashboardTimer from "@/components/DashboardTimer";

Vue.use(DashboardTimer);

export default {
	components: {
		DashboardTimer
	},
	data: () => {
		return {
			value: 1,
			now: Date.now()
		};
	},
	methods: {
		divide() {
			this.value = Date.now() - 60 * 1000;
		}
	}
};
</script>
