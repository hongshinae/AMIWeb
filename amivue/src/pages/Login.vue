<template>
	<div id="app" class="loginBg">
		<div class="loginWrap">
			<div class="logo"></div>
			<div class="lnputWrap">
				<form action="/dashboard" @submit.prevent="login({ userid, password })">
					<b-input v-model="userid" placeholder="id"></b-input>
					<b-input type="password" v-model="password" placeholder="password"></b-input>
					<b-button type="submit" block variant="primary">로그인</b-button>
					<div class="error" v-if="msg">{{ msg }}</div>
				</form>
			</div>
			<ul>
				<li>아이디나 비밀번호가 기억나지 않으세요?</li>
				<li><a>아이디 비밀번호 찾기</a></li>
			</ul>
			<div class="lnputWrap">
				<b-button block variant="outline-primary">회원 가입</b-button>
			</div>
			<div class="copyright">COPYRIGHT ⓒ CNU GLOBAL Corp.</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
	name: "Login",
	data() {
		return {
			msg: "",
			userid: "",
			password: ""
		};
	},
	mounted() {
		this.initUserState();
	},
	methods: {
		...mapMutations({ initUserState: "USER_RESET", initSearchState: "SEARCH_RESET" }),
		...mapActions({ loginAction: "LOGIN", regionsAction: "REGIONS", estatesAction: "ESTATES" }),
		...mapGetters(["getRegions", "getEstates", "getEstateByRegion"]),
		login({ userid, password }) {
			this.msg = "로그인 중...";
			this.loginAction({ userid, password })
				.then(async () => {
					try {
						this.msg = "지역정보 가져오는중... (1/2)";
						await this.regionsAction()
							.then(() => {
								//console.log(this.getRegions());
							})
							.catch(() => {
								//console.log(response);
							});
						this.msg = "단지정보 가져오는중... (2/2)";
						await this.estatesAction()
							.then(() => {
								//console.log(this.getEstates());
								//console.log(this.getEstateByRegion(1));
							})
							.catch(() => {
								//console.log(response);
							});
						this.msg = "성공";
						this.$router.push("/dashboard");
					} catch (error) {
						this.msg = "시스템 환경구성에 실패하였습니다. 관리자에게 문의해주세요.";
					}
				})
				.catch(response => {
					this.msg = response.data.response.error_message;
				});
		}
	}
};
</script>

<style lang="scss">
$color-bg: #ecf2f6;
.loginBg {
	width: 100%;
	height: 100%;
	background: $color-bg;
}
.loginWrap {
	width: 500px;
	height: 520px;
	margin: 0 auto;
	padding-top: 100px;
	color: #6c757d;
	.logo {
		width: 362px;
		height: 53px;
		background: url("../assets/images/logo_login.png") 0 0 no-repeat;
		margin: 10px auto 50px auto;
	}
	.lnputWrap {
		input {
			margin-bottom: 10px;
			height: 45px;
			font-size: 14px !important;
		}
		select,
		button {
			height: 45px;
			font-size: 14px !important;
		}
	}
	ul {
		width: 500px;
		height: 30px;
		margin-top: 20px;
		margin-bottom: 60px;
		li {
			float: left;
		}
		li:last-child {
			float: right;
		}
	}
	.copyright {
		margin: 20px;
		text-align: center;
		font-weight: 600;
		color: #b9b9b9;
	}
	.error {
		color: red;
		background: rgb(255 0 0 / 8%);
		margin-top: 10px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		border-radius: 4px;
		border: 1px solid #ffafaf;
	}
}
</style>
