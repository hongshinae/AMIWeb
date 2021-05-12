<template>
	<div>
		<div class="time">
			<div>{{ time | moment("A h") }}<span class="blink">:</span>{{ time | moment("mm") }}<span class="blink">:</span>{{ time | moment("ss") }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {},
	data: () => {
		return {
			time: Date.now(),
			timer: Number
		};
	},
	created() {
		this.time = Date.now();
		this.timer = setInterval(() => this.counting(), 1000);
	},
	destoryed() {
		clearInterval(this.timer);
	},
	methods: {
		counting: function() {
			this.time = Date.now();
		}
	},
	computed: {}
};
</script>

<style lang="scss">
@charset "UTF-8";
@import "~@/assets/scss/main.scss";
//@import "~@/assets/scss/dashboard/DashboardTimer.scss";
</style>
