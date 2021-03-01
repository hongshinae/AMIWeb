<template>
	<div class="navWrap">
		<b-row>
			<b-navbar variant="faded">
				<b-navbar-brand href="#"> <img src="@/assets/images/logo.png" alt="로고이미지"/></b-navbar-brand>
				<a class="sidebar-toggle">
					<b-button v-b-toggle.sidebar-1 class="menu"></b-button>
				</a>
			</b-navbar>
			<b-nav class="infowrap ml-auto">
				<b-nav-item class="error"><i></i></b-nav-item>
				<b-nav-item class="aram"><i></i></b-nav-item>
				<b-nav-item class="user" disabled>씨앤유</b-nav-item>
				<b-nav-item class="uerName">관리자</b-nav-item>
				<b-nav-item class="logout" href="#">로그아웃</b-nav-item>
			</b-nav>
		</b-row>
	</div>
</template>

<script>
// Header css
import "@/assets/css/header.css";
export default {
	name: "Header"
};
</script>

<style>
.main {
	display: flex;
	width: 100%;
	min-height: 100vh;
	min-width: 0;
	transition: margin-left 0.35s ease-in-out, left 0.35s ease-in-out, margin-right 0.35s ease-in-out, right 0.35s ease-in-out;
	flex-direction: column;
}
.main .navWrap {
	height: 52px;
	padding: 2px;
	box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.2);
	background-color: #07132b;
	margin-bottom: 20px;
	padding: 0px 25px;
}
.main .navWrap .navbar {
	padding: 10px 0 0 0;
}
.main .navbar a.sidebar-toggle {
	width: 20px;
	height: 20px;
	display: block;
	float: left;
	overflow: hidden;
	cursor: pointer;
}
ul.infowrap {
	height: 45px;
}
ul.infowrap li {
	float: left;
	height: 52px;
	line-height: 39px;
}
.infowrap a {
	color: #d3d3d3;
}
.infowrap a:hover {
	color: #ffffff;
}
/*
.main .menu {
	width: 20px;
	height: 20px;
	display: block;
	background: url(assets/images/img.png) -152px -56px no-repeat;
	border: 0;
}

.infowrap .aram i {
	background: url(assets/images/img.png) -379px -2px no-repeat;
	height: 20px;
	width: 20px;
	display: inline-block;
}
.infowrap .aram.on i {
	background: url(assets/images/img.png) -410px -2px no-repeat;
}
.infowrap .error {
	width: 20px;
	height: 20px;
	margin-right: 4px;
}
.infowrap .error i {
	background: url(assets/images/img.png) -441px -2px no-repeat;
	width: 20px;
	height: 20px;
	display: inline-block;
}
.infowrap .error.on i {
	background: url(assets/images/img.png) -460px -2px no-repeat;
}*/
</style>
