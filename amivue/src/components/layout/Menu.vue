<template>
	<div class="wrapper status-board">
		<nav id="sidebar" class="sidebar">
			<a class="logoWrap"></a>
			<ul class="sidebarNav">
				<li class="on">
					<a class="facilities" href="#documentation"><i></i><span>설비</span></a>
					<ul class="subNav">
						<li class="on"><a>단지 관리</a></li>
						<li><a>장비 관리</a></li>
						<li><a>매핑 관리</a></li>
						<li><a>네트워크 현황</a></li>
						<li><a>NMS ( SNMP )</a></li>
						<li><a>서버 현황</a></li>
					</ul>
				</li>
				<li>
					<a class="read"><i></i><span>검침</span></a>
					<ul class="subNav">
						<li><a>검침 현황</a></li>
						<li><a>검침 조회</a></li>
						<li><a>검침 정보</a></li>
						<li><a>월 검침</a></li>
					</ul>
				</li>
				<li>
					<a class="charge"><i></i><span>요금</span></a>
					<ul class="subNav">
						<li><a>요금</a></li>
						<li><a>검침 고지서</a></li>
					</ul>
				</li>
				<li>
					<a class="error"><i></i><span>장애</span></a>
					<ul class="subNav">
						<li><a>장애 현황</a></li>
						<li><a>장애/상태코드</a></li>
						<li><a>네트워크 상태</a></li>
						<li><a>미 검침 정보</a></li>
					</ul>
				</li>
				<li>
					<a class="analysis"><i></i><span>분석</span></a>
					<ul class="subNav">
						<li><a>사용량 통계</a></li>
						<li><a>최대 수요</a></li>
						<li><a>장애 발생 빈도</a></li>
						<li><a>보고서</a></li>
						<li><a>신뢰성 분석</a></li>
						<li><a>적시 검침윫 분석</a></li>
					</ul>
				</li>
				<li>
					<a class="customer"><i></i><span>고객 지원</span></a>
					<ul class="subNav">
						<li><a>문의 게시판</a></li>
						<li><a>qa</a></li>
					</ul>
				</li>
				<li>
					<a class="set"><i></i><span>설정</span></a>
					<ul class="subNav">
						<li><a>사용자 관리</a></li>
						<li><a>설정 관리</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
