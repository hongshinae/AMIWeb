<template>
	<div class="home">
		<div>현재 : {{ mNow() | moment("YYYY-MM-DD hh:mm:ss a") }}</div>
		<div>변형 : {{ cNow | moment("YYYY-MM-DD hh:mm:ss a") }}</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Home",
	components: {
		// HelloWorld
	},
	data: () => {
		return {
			now: Date.now()
		};
	},
	computed: {
		cNow: () => {
			// return this.data.now - 86400000 + 1000;
			return Date.now();
		}
	},
	methods: {
		mNow: () => {
			return Date.now();
		}
	}
};
</script>
