<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>Q&A</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>고객지원</b-breadcrumb-item>
					<b-breadcrumb-item active>Q&A</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="accordion-wrap">
			<div class="wbox">
				<b-button v-b-toggle:my-collapse variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">정기검침 또는 월검침 확인 방법</li>
					</ul>
				</b-button>
				<b-collapse id="my-collapse">
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div class="">
								<p>정기 검침일은 매년 1월, 6월입니다.</p>
								<p>월검침일 매월 23일이여, 해당 지역에 따라 달라 질수 있습니다.</p>
								<p>
									검침 메뉴에서 월검침을 선택하시면 계량기에서 정기검침일로 설정되어진 정기검침 정보와 검침일 기준으로 00시 00분 데이터를
									기반으로 한 월 검침을 확인 할 수 있습니다. 검침 메뉴에서 월검침을 선택하시면 계량기에서 정기검침일로 설정되어진 정기검보는
									웹에서 확인이 가능합니다.
								</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
			<div class="wbox">
				<b-button v-b-toggle:my-collapse1 variant="none">
					<span class="when-open">Close</span><span class="when-closed">Open</span> My Collapse
				</b-button>
				<b-collapse id="my-collapse1">
					<!-- Content here -->
					fff
				</b-collapse>
			</div>
		</div>
	</div>
</template>
<script></script>
<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
	display: none;
}
</style>
