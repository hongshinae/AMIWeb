<template>
	<div class="box">
		<h5>
			<span>서버운영정보</span>
			<b class="fontC">정상</b>
		</h5>
		<div class="dutyCycle cpu">
			<h4>
				<span class="title">OS CPU 사용률</span>
				<span class="deta">0.000%</span>
			</h4>
			<div class="progress">
				<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
					<span class="sr-only">60% Complete</span>
				</div>
			</div>
		</div>
		<div class="dutyCycle">
			<h4>
				<span class="title">OS CPU 사용률</span>
				<span class="deta">0.000%</span>
			</h4>
			<div class="progress">
				<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
					<span class="sr-only">60% Complete</span>
				</div>
			</div>
		</div>
		<ul class="serveInfo">
			<li>
				<h6>JVMUSED</h6>
				<span>0.330</span>
			</li>
			<li>
				<h6>JVMFREE</h6>
				<span>1.243</span>
			</li>
			<li>
				<h6>JVMTOTAL</h6>
				<span>1.573</span>
			</li>
			<li>
				<h6>JVMMAX</h6>
				<span>26.665</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
