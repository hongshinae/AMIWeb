<template>
	<div>
		<div class="time">
			<div>{{ time | moment("A h") }}<span class="blink">:</span>{{ time | moment("mm") }}<span class="blink">:</span>{{ time | moment("ss") }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		timer: Number
	},
	data: () => {
		return {
			time: Date.now()
		};
	},
	created() {
		this.time = Date.now();
		this.timer = setInterval(() => this.countdown(), 1000);
	},
	destoryed() {
		clearInterval(this.timer);
	},
	methods: {
		countdown: function() {
			this.time = Date.now();
		},
		padTime: function(time) {
			return (time < 10 ? "0" : "") + time;
		}
	},
	computed: {}
};
</script>
