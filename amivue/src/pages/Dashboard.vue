<template>
	<div class="home">
		<div>{{ mNow() }}</div>
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
	computed: {
		now: () => {
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
