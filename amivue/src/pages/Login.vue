<template>
	<div id="app" class="loginBg">
		<div class="loginWrap">
			<div class="logo"></div>
			<h5>CNU GLOBAL AMI Server System</h5>
			<div class="lnputWrap">
				<form action="/dashboard" @submit.prevent="login({ userid, password })">
					<b-input v-model="userid" placeholder="id" @input="msg = ''"></b-input>
					<b-input type="password" v-model="password" placeholder="password" @input="msg = ''"></b-input>
					<b-button type="submit" block variant="primary" :disabled="disabled">로그인</b-button>
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
import { mapActions, mapMutations } from "vuex";
export default {
	name: "Login",
	mounted() {
		this.initUserState();
		this.initSearchState();
	},
	data() {
		return {
			msg: "",
			userid: "",
			password: "",
			disabled: false
		};
	},
	methods: {
		...mapMutations({ initUserState: "USER_RESET", initSearchState: "SEARCH_RESET" }),
		...mapActions({ loginAction: "LOGIN", regionsAction: "REGIONS", estatesAction: "ESTATES" }),
		login({ userid, password }) {
			this.msg = "로그인 중...";
			this.disabled = true;
			this.loginAction({ userid, password })
				.then(async () => {
					try {
						this.msg = "지역정보 가져오는중... (1/2)";
						await this.regionsAction().catch(response => {
							throw Error("지역정보 가져오는데 실패하였습니다.", response);
						});
						this.msg = "단지정보 가져오는중... (2/2)";
						await this.estatesAction().catch(response => {
							throw Error("단지정보 가져오는데 실패하였습니다.", response);
						});
						this.msg = "성공";
						this.$router.push("/dashboard");
					} catch (error) {
						console.log(error);
						this.msg = "시스템 환경구성에 실패하였습니다. 관리자에게 문의해주세요.";
					} finally {
						this.disabled = false;
					}
				})
				.catch(response => {
					this.disabled = false;

					try {
						this.msg = response.data.response.error_message;
					} catch (e) {
						this.msg = "로그인 도중 오류가 발생하였습니다. 관리자에게 문의해주세요.";
						throw Error(e);
					}
				});
		}
	}
};
</script>

<style lang="scss">
.loginBg {
	width: 100%;
	height: 100%;
	background: url("../assets/images/bg.png") 0 0 no-repeat #09172e;
}
.loginWrap {
	width: 400px;
	height: 520px;
	margin: 0 auto;
	padding-top: 100px;
	color: #6c757d;
	.logo {
		width: 362px;
		height: 53px;
		background: url("../assets/images/logo_login.png") 0 0 no-repeat;
		margin: 20px auto 0px auto;
	}
	h5 {
		text-align: center;
		margin: 15px 0 20px 0;
		letter-spacing: 5px;
	}
	.lnputWrap {
		input {
			margin-bottom: 10px;
			height: 35px;
			font-size: 12px !important;
		}
		select,
		button {
			height: 35px;
			font-size: 12px !important;
		}
	}
	ul {
		width: 400px;
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
		color: #4a4f54;
	}
	.error {
		color: red;
		background: rgba(255, 0, 0, 0.08);
		margin-top: 10px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		border-radius: 4px;
		border: 1px solid #ff4a5a;
	}
}
</style>
