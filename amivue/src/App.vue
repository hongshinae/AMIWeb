<template>
	<div id="app">
		<Header />
		<Menu2 />
		<router-view />
	</div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Menu2 from "./components/layout/Menu2.vue";

export default {
	name: "App",
	components: {
		Header,
		Menu2
	}
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
