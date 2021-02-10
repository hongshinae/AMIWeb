<template>
	<div id="app">
		<Header />
		<Menu />
		<router-view />
	</div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Menu from "./components/layout/Menu.vue";

export default {
	name: "App",
	components: {
		Header,
		Menu
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
