<template>
	<div class="navWrap">
		<b-row>
			<b-navbar variant="faded">
				<a class="sidebar-toggle">
					<b-button class="menu" @click="toggleMenu" variant="none"></b-button>
				</a>
			</b-navbar>
			<b-nav class="infowrap ml-auto">
				<b-nav-item class="error"><b-icon icon="question-diamond"></b-icon></b-nav-item>
				<b-nav-item class="aram"><b-icon icon="bell"></b-icon></b-nav-item>
				<b-nav-item class="user" disabled>{{ apartName ? apartName : "아파트 없음" }}</b-nav-item>
				<b-nav-item class="uerName"><b-icon icon="person"></b-icon>{{ userName }}</b-nav-item>
				<b-nav-item class="logout" href="#" @click.prevent="logout()">{{ $t("header.logout") }}</b-nav-item>
			</b-nav>
		</b-row>
	</div>
</template>

<script>
// Header css
import "@/assets/scss/header.scss";
import "@/assets/scss/header_wh.scss";
import { mapGetters } from "vuex";

export default {
	name: "Header",
	computed: {
		...mapGetters({ apartName: "getGname", userName: "getName" })
	},
	methods: {
		toggleMenu() {
			this.$emit("toggle-collapse");
		},
		logout() {
			this.$store
				.dispatch("LOGOUT")
				.then(() => {
					this.$router.push("/login");
				})
				.catch(({ response }) => {
					alert(response.data.response.error_message);
				});
		}
	}
};
</script>

<style></style>
