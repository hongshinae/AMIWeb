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
		<div class="btn-filter-wrap">
			<div class="btn-wrap">
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
				</b-button-group>
			</div>
		</div>
		<div class="accordion-wrap">
			<div class="wbox">
				<b-button v-b-toggle:collapse1 variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">스마트그리드 문의는 어디로 하나요?</li>
					</ul>
				</b-button>
				<b-collapse id="collapse1" visible>
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div>
								<p>스마트그리드 고객센터 운영 안내</p>
								<p>문의게시판 : 사이트 상단의 [장애접수] 버튼 클릭</p>
								<p>문의전화 : 씨앤유글로벌 (☎ 070-4837-5818)</p>
								<p>운영시간 : 오전 9시 30분 ~ 오후 5시 30분 (평일운영 - 공휴일, 기타휴일, 점심시간 제외)</p>
								<p>* 문의게시판으로 접수된 내용을 우선적으로 답변 및 처리하고 있습니다. 가능하시면 문의게시판 이용을 부탁드립니다.</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
			<div class="wbox">
				<b-button v-b-toggle:collapse2 variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">아파트의 명칭, 정기검침일, 세대의 계량기 등이 변경됐거나 잘못 표시됐습니다.</li>
					</ul>
				</b-button>
				<b-collapse id="collapse2">
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div>
								<p>정상적인 서비스를 위해 반드시 해당 내용에 대해 문의게시판 혹은 문의전화로 전달 바랍니다.</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
			<div class="wbox">
				<b-button v-b-toggle:collapse3 variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">스마트그리드 사업의 시스템 구성은 어떻게 돼있나요?</li>
					</ul>
				</b-button>
				<b-collapse id="collapse3">
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div>
								<p>
									각 세대마다 전자식 계량기가 설치돼있고, 계량기 안에 들어간 PLC모뎀이 계량기의 데이터를 수집합니다. PLC모뎀은 경우에따라
									1:N으로 계량기의 데이터를 수집하며, 계량기 디스플레이 우측의 초록색 불이 들어와있다면 그 계량기에 PLC모뎀이 들어있다는
									뜻입니다.
								</p>
								<p>
									PLC모뎀은 계량기 데이터를 수집하여 전기선을 통해 분전반 근처의 DCU 장치로 데이터를 보냅니다. 이렇게 DCU 장치는 전기선으로
									연결된 세대의 PLC모뎀들로부터 데이터를 전달받습니다. DCU 장치는 PLC모뎀들로부터 전달받은 데이터를 모아서 통신사의
									LTE라우터를 통해 검침서버로 데이터를 전송합니다.
								</p>
								<p>간단하게 정리하면 다음과 같습니다.</p>
								<p class="img_flow_LTE"></p>
								<p>* 건물의 전기선 라인에 따라 한 동에 하나의 DCU만 설치된 경우가 있고, 여러 대의 DCU가 설치된 경우도 있습니다.</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
			<div class="wbox">
				<b-button v-b-toggle:collapse4 variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">정기검침일인데 데이터가 제대로 나오지 않습니다.</li>
					</ul>
				</b-button>
				<b-collapse id="collapse4">
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div>
								<p>다음의 경우를 참고하여 문의 접수 바랍니다.</p>
								<p>
									1. 단지 내의 모든 데이터가 비정상인 경우 – 서버장애<br />
									2. 특정 동, 라인의 데이터가 비정상인 경우 – DCU 혹은 LTE라우터 장애<br />
									3. 붙어있는 몇 개 세대의 데이터가 비정상인 경우 – PLC모뎀 혹은 계량기 장애<br />
									4. 1개 세대의 데이터가 비정상인 경우 – PLC모뎀 혹은 계량기 장애<br />
								</p>
								<p>해당 내용에 대한 자세한 진단 방법은 사용자 매뉴얼을 참고 바랍니다.</p>
								<p>* 정기검침일 일자, 데이터 이상 여부를 반드시 확인해주세요.</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
			<div class="wbox">
				<b-button v-b-toggle:collapse5 variant="none">
					<ul>
						<li class="icon-bg"><span>Q</span></li>
						<li class="title">사용자 매뉴얼을 활용하세요.</li>
					</ul>
				</b-button>
				<b-collapse id="collapse5">
					<ul>
						<li class="icon-bg">A.</li>
						<li>
							<div>
								<p>상세한 내용은 사용자 매뉴얼에 있습니다. 다운받아 자유롭게 사용하세요.</p>
							</div>
						</li>
					</ul>
				</b-collapse>
			</div>
		</div>
	</div>
</template>
<script></script>
<style lang="scss">
.collapsed > .when-open,
.not-collapsed > .when-closed {
	display: none;
}
/*아코디언*/
.accordion-wrap .wbox {
	margin-bottom: 30px;
	padding: 0;
	button.collapsed,
	button.not-collapsed {
		border-radius: 0;
		width: 100%;
		height: 70px;
		line-height: 70px;
		text-align: left;
		ul {
			width: 100%;
			.icon-bg {
				width: 50px;
				height: 44px;
				float: left;
				margin: 10px;
				span {
					background: #ecf2f6;
					color: #287fff;
					border-radius: 20px;
					font-size: 23px;
					line-height: 24px;
					text-align: center;
					width: 40px;
					height: 40px;
					padding-top: 7px;
					display: inline-block;
				}
			}
			.title {
				float: left;
				font-size: 18px;
				font-weight: 600;
				height: 44px;
				line-height: 44px;
				margin: 10px;
			}
		}
	}
	.collapse {
		border-top: 1px solid #e9f0f4;
		padding: 1.375rem 1.75rem;
		.icon-bg {
			width: 50px;
			height: 60px;
			float: left;
			font-size: 23px;
			margin-left: 9px;
		}
		p {
			margin: 10px 0;
		}
		.img_flow_LTE {
			width: 479px;
			height: 117px;
			background: url("~@/assets/images/img_flow_LTE.png") 0 0 no-repeat;
		}
	}
	.collapse > ul li:nth-child(2) {
		display: flex;
		flex-direction: column;
	}
}
</style>
