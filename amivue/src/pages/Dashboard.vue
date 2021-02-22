<template>
	<div class="home">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<div>{{ mNow() }}</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Home",
	components: {
		HelloWorld
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
