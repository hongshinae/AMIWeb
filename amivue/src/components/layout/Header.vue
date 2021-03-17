<template>
	<div class="navWrap">
		<b-row>
			<b-navbar variant="faded">
				<a class="sidebar-toggle">
					<b-button class="menu" @click="toggleMenu"></b-button>
				</a>
			</b-navbar>
			<b-nav class="infowrap ml-auto">
				<b-nav-item class="error"><i></i></b-nav-item>
				<b-nav-item class="aram"><i></i></b-nav-item>
				<b-nav-item class="user" disabled>{{ apartName ? apartName : "아파트 없음" }}</b-nav-item>
				<b-nav-item class="uerName">{{ userName }}</b-nav-item>
				<b-nav-item class="logout" href="#" @click.prevent="logout()">로그아웃</b-nav-item>
			</b-nav>
		</b-row>
	</div>
</template>

<script>
// Header css
import "@/assets/css/header.css";
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
