<template>
	<div class="box">
		<h5>
			<span></span>
			<b class="fontC">정상</b>
		</h5>
		<div class="dutyCycle cpu">
			<h4><span class="title">OS CPU 사용률</span><span class="deta">0.125%</span></h4>
			<div class="progress">
				<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="progress-bar" style="width: 0.125%;"></div>
			</div>
		</div>
		<div class="dutyCycle">
			<h4><span class="title">OS Memory 사용률</span><span class="deta">84.388%</span></h4>
			<div class="progress progress-bar-3">
				<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="84" class="progress-bar" style="width: 84.388%;"></div>
			</div>
		</div>
		<ul class="serveInfo">
			<li>
				<h6>JVMUSED</h6>
				<span>1.272</span>
			</li>
			<li>
				<h6>JVMFREE</h6>
				<span>0.982</span>
			</li>
			<li>
				<h6>JVMTOTAL</h6>
				<span>2.225</span>
			</li>
			<li>
				<h6>JVMMAX</h6>
				<span>26.65</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
@import "~@/assets/scss/chart/serverInfo.scss";
</style>
