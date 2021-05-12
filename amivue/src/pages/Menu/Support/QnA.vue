<template>
	<div class="main-bg content">
		<content-header :paths="paths" :pageName="pageName" />
		<div class="btn-filter-wrap" v-show="false">
			<div class="btn-wrap">
				<b-button-group>
					<b-button variant="light btn-excel"><img src="@/assets/svg/excel.svg" />엑셀 다운로드</b-button>
				</b-button-group>
			</div>
		</div>
		<div class="accordion-wrap">
			<div class="accordion" role="tablist">
				<b-card no-body>
					<b-card-header header-tag="header" class="" role="tab">
						<b-button block v-b-toggle.accordion-1>
							<ul>
								<li class="icon-bg"><span>Q</span></li>
								<li class="title">스마트그리드 문의는 어디로 하나요?</li>
							</ul>
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<ul>
								<li class="icon-bg">A.</li>
								<li class="accordion-content">
									<div>
										<br />
										<p>스마트그리드 고객센터 운영 안내</p>
										<br /><br />
										<p>문의게시판 : 사이트 상단의 [장애접수] 버튼 클릭</p>
										<br /><br />
										<p>문의전화 : 씨앤유글로벌 (☎ 070-4837-5818)</p>
										<br /><br />
										<p>운영시간 : 오전 9시 30분 ~ 오후 5시 30분 (평일운영 - 공휴일, 기타휴일, 점심시간 제외)</p>
										<br /><br />
										<p>* 문의게시판으로 접수된 내용을 우선적으로 답변 및 처리하고 있습니다. 가능하시면 문의게시판 이용을 부탁드립니다.</p>
										<br /><br />
									</div>
								</li>
							</ul>
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body>
					<b-card-header header-tag="header" role="tab">
						<b-button block v-b-toggle.accordion-2>
							<ul>
								<li class="icon-bg"><span>Q</span></li>
								<li class="title">아파트의 명칭, 정기검침일, 세대의 계량기 등이 변경됐거나 잘못 표시됐습니다.</li>
							</ul>
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<ul>
								<li class="icon-bg">A.</li>
								<li class="accordion-content">
									<div>
										<br />
										<p>정상적인 서비스를 위해 반드시 해당 내용에 대해 문의게시판 혹은 문의전화로 전달 바랍니다.</p>
									</div>
								</li>
							</ul>
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body>
					<b-card-header header-tag="header" role="tab">
						<b-button block v-b-toggle.accordion-3>
							<ul>
								<li class="icon-bg"><span>Q</span></li>
								<li class="title">스마트그리드 사업의 시스템 구성은 어떻게 돼있나요?</li>
							</ul>
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<ul>
								<li class="icon-bg">A.</li>
								<li class="accordion-content">
									<div>
										<br />
										<p>
											각 세대마다 전자식 계량기가 설치돼있고, 계량기 안에 들어간 PLC모뎀이 계량기의 데이터를 수집합니다.<br />
											PLC모뎀은 경우에따라 1:N으로 계량기의 데이터를 수집하며, 계량기 디스플레이 우측의 초록색 불이 들어와있다면 그
											계량기에 PLC모뎀이 들어있다는 뜻입니다.<br /><br />
										</p>
										<p>
											PLC모뎀은 계량기 데이터를 수집하여 전기선을 통해 분전반 근처의 DCU 장치로 데이터를 보냅니다. <br />이렇게 DCU 장치는
											전기선으로 연결된 세대의 PLC모뎀들로부터 데이터를 전달받습니다. DCU 장치는 PLC모뎀들로부터 전달받은 데이터를 모아서
											통신사의 LTE라우터를 통해 검침서버로 데이터를 전송합니다.
										</p>
										<br />
										<p>간단하게 정리하면 다음과 같습니다.</p>
										<br /><br />
										<p class="img_flow_LTE"></p>
										<br /><br />
										<p>* 건물의 전기선 라인에 따라 한 동에 하나의 DCU만 설치된 경우가 있고, 여러 대의 DCU가 설치된 경우도 있습니다.</p>
										<br /><br />
									</div>
								</li>
							</ul>
						</b-card-body>
					</b-collapse>
				</b-card>
				<b-card no-body>
					<b-card-header header-tag="header" role="tab">
						<b-button block v-b-toggle.accordion-4>
							<ul class="accordiond-header">
								<li class="icon-bg"><span>Q</span></li>
								<li class="title">정기검침일인데 데이터가 제대로 나오지 않습니다.</li>
							</ul>
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<ul>
								<li class="icon-bg">A.</li>
								<li class="accordion-content">
									<div>
										<br />
										<p>다음의 경우를 참고하여 문의 접수 바랍니다.</p>
										<br />
										<p>
											1. 단지 내의 모든 데이터가 비정상인 경우 – 서버장애<br /><br />
											2. 특정 동, 라인의 데이터가 비정상인 경우 – DCU 혹은 LTE라우터 장애<br /><br />
											3. 붙어있는 몇 개 세대의 데이터가 비정상인 경우 – PLC모뎀 혹은 계량기 장애<br /><br />
											4. 1개 세대의 데이터가 비정상인 경우 – PLC모뎀 혹은 계량기 장애<br />
										</p>
										<p>해당 내용에 대한 자세한 진단 방법은 사용자 매뉴얼을 참고 바랍니다.</p>
										<br />
										<br />
										<p>* 정기검침일 일자, 데이터 이상 여부를 반드시 확인해주세요.</p>
										<br />
										<br />
									</div>
								</li>
							</ul>
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</div>
	</div>
</template>
<script>
import ContentHeader from "@/components/content/ContentHeader";

export default {
	components: { ContentHeader },
	data() {
		return {
			pageName: this.$t("menu.support.qna"),
			paths: [{ name: this.$t("menu.title"), bicon: "house", link: "/" }, { name: this.$t("menu.support.title") }, { name: this.$t("menu.support.qna") }]
		};
	}
};
</script>
<style lang="scss">
@import "~@/assets/scss/pages/qna.scss";
</style>
