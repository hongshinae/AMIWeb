<template>
	<div class="loginBg">
		<div class="loginWrap">
			<div class="logo"></div>
			<h5>CNU GLOBAL AMI Server System</h5>
			<div class="lnputWrap">
				<form>
					<input type="text" placeholder="id" class="form-control" />
					<input type="password" placeholder="password" class="form-control" id="__BVID__78" />
					<button type="submit" class="btn btn-primary btn-block">로그인</button>
					<div class="error">아이디 재확인 바랍니다.</div>
				</form>
			</div>
			<ul>
				<li>아이디나 비밀번호가 기억나지 않으세요?</li>
				<li><a>아이디 비밀번호 찾기</a></li>
			</ul>
			<div class="lnputWrap"><button type="button" class="btn btn-outline-primary btn-block">회원 가입</button></div>
			<div class="copyright">COPYRIGHT ⓒ CNU GLOBAL Corp.</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/assets/scss/pages/login.scss";
</style>
