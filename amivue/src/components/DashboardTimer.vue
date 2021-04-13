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
<style>
/* for MS계열 브라우저 */
@keyframes blink {
	0% {
		color: rgba(255, 255, 255, 0.5);
	}
	50% {
		color: rgba(255, 255, 255, 1);
	}
}

/* for Chrome, Safari */
@-webkit-keyframes blink {
	0% {
		color: rgba(255, 255, 255, 0.5);
	}
	50% {
		color: rgba(255, 255, 255, 1);
	}
}
.timeWrap {
	height: 50px;
	width: 100%;
}
.timeWrap .date {
	float: left;
}
.timeWrap .time {
	float: right;
	font-size: 2.4em;
	font-family: alarm_clock;
}
.blink {
	animation: blink 1s step-end infinite;
	-webkit-animation: blink 1s step-end infinite;
}
</style>
