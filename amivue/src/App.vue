<template>
	<router-view />
</template>

<script>
export default {
	created() {
		let locale = (navigator.language || navigator.userLanguage).substr(0, 2);
		locale = locale !== "ko" ? "en" : locale;
		this.$i18n.locale = locale;
	}
};
</script>

<style lang="scss"></style>
