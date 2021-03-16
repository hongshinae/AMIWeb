<template>
	<div class="navWrap">
		<b-row>
			<b-navbar variant="faded">
				<a class="sidebar-toggle">
					<b-button v-b-toggle.sidebar-1 class="menu"></b-button>
				</a>
			</b-navbar>
			<b-nav class="infowrap ml-auto">
				<b-nav-item class="error"><i></i></b-nav-item>
				<b-nav-item class="aram"><i></i></b-nav-item>
				<b-nav-item class="user" disabled>씨앤유</b-nav-item>
				<b-nav-item class="uerName">관리자</b-nav-item>
				<b-nav-item class="logout" href="#" @click.prevent="logout()">로그아웃</b-nav-item>
			</b-nav>
		</b-row>
	</div>
</template>

<script>
// Header css
import "@/assets/css/header.css";
export default {
	name: "Header",
	methods: {
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
