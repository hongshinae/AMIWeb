<template>
	<div class="content">
		<div class="main-location-wrap">
			<h1>검침 현황</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>검침</b-breadcrumb-item>
					<b-breadcrumb-item active>검침 현황</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<b-row>
			<b-col lg="6">
				<div class="box">
					<h5>
						<span>데이터 수집 수</span>
						<b class="fontC">?</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="/resources/images/charhimg01.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<span>지역별 현황</span>
						<b class="fontC">7개</b>
					</h5>
					<div class="chartWarp"></div>
				</div>
			</b-col>
			<b-col lg="6"> </b-col>
		</b-row>
	</div>
</template>
