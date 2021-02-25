<template>
	<b-nav id="sidebar" class="sidebar" tabs justified vertical>
		<router-link class="logoWrap" to="/dashboard"></router-link>
		<ul class="sidebarNav">
			<li class="on">
				<a class="facilities" href="#documentation"><i></i><span>설비</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/complexManagement"><a>단지 관리</a></router-link>
					<router-link tag="li" to="/equipmentManagement"><a>장비 관리</a></router-link>
					<router-link tag="li" to="/mappingManagement"><a>매핑 관리</a></router-link>
					<router-link tag="li" to="/networkCondition"><a>네트워크 현황</a></router-link>
					<router-link tag="li" to="/nms"><a>NMS ( SNMP )</a></router-link>
					<router-link tag="li" to="/serverStatus"><a>서버 현황</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="read"><i></i><span>검침</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/metering"><a>test</a></router-link>
					<router-link tag="li" to="/meteringStatus"><a>검침 현황</a></router-link>
					<router-link tag="li" to="/meteringInquiry"><a>검침 조회</a></router-link>
					<router-link tag="li" to="/meteringInformation"><a>검침 정보</a></router-link>
					<router-link tag="li" to="/monthMetering"><a>월 검침</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="charge"><i></i><span>요금</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/bill"><a>요금</a></router-link>
					<router-link tag="li" to="/meteringBill"><a>검침 고지서</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="error"><i></i><span>장애</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/disabilityStatus"><a>장애 현황</a></router-link>
					<router-link tag="li" to="/disabilityStatusCode"><a>장애/상태코드</a></router-link>
					<router-link tag="li" to="/networkStatus"><a>네트워크 상태</a></router-link>
					<router-link tag="li" to="/unMeteringInformation"><a>미검침 정보</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="analysis"><i></i><span>분석</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/usageStatistics"><a>사용량 통계</a></router-link>
					<router-link tag="li" to="/maximumDemand"><a>최대 수요</a></router-link>
					<router-link tag="li" to="/disabilityFrequency"><a>장애 발생 빈도</a></router-link>
					<router-link tag="li" to="/report"><a>보고서</a></router-link>
					<router-link tag="li" to="/reliabilityAnalysis"><a>신뢰성 분석</a></router-link>
					<router-link tag="li" to="/timeRateAnalysis"><a>적시율 분석</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="customer"><i></i><span>고객 지원</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/board"><a>문의 게시판</a></router-link>
					<router-link tag="li" to="/qa"><a>QA</a></router-link>
				</ul>
			</li>
			<li class="on">
				<a class="set"><i></i><span>설정</span></a>
				<ul class="subNav">
					<router-link tag="li" to="/userManagement"><a>사용자 관리</a></router-link>
					<router-link tag="li" to="/settingsManagement"><a>설정 관리</a></router-link>
				</ul>
			</li>
		</ul>
	</b-nav>
</template>

<script>
export default {};
</script>

<style></style>
