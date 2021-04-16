<template>
	<div class="content">
		<content-header :paths="paths" :pageName="pageName" />
		<b-row class="row-wrap">
			<b-col lg="12" xl="8">
				<div class="box">
					<h5>
						<span>{{ $t("server.used") }}</span>
						<b class="fontC">{{ system.jvmUsed }}</b>
					</h5>
					<div class="chartWarp">
						<div class="">
							<img src="/resources/images/charhimg01.png" alt="" title="" />
						</div>
					</div>
				</div>
				<div class="box">
					<h5>
						<span>{{ $t("server.serverMap") }}</span>
					</h5>
					<div class="svg-Warp">
						<img src="@/assets/svg/server.svg" />
					</div>
				</div>
			</b-col>
			<b-col lg="12" xl="4">
				<div class="presentMenu">
					<ul>
						<li>난방</li>
						<li>온수</li>
						<li>수도</li>
						<li>가스</li>
						<li class="on">전기</li>
					</ul>
				</div>
				<div class="box">
					<h5>
						<span>{{ $t("server.serverInformation.title") }}</span>
						<b class="fontC">정상</b>
					</h5>
					<div class="dutyCycle cpu">
						<h4>
							<span class="title">{{ $t("server.serverInformation.osCpu") }}</span>
							<span class="deta">{{ system.osCpu }}%</span>
						</h4>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								:aria-valuenow="system.osCpu"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="'width: ' + system.osCpu + '%;'"
							>
								<span class="sr-only">{{ system.osCpu }}% Complete</span>
							</div>
						</div>
					</div>
					<div class="dutyCycle">
						<h4>
							<span class="title">{{ $t("server.serverInformation.osMemory") }}</span>
							<span class="deta">{{ system.osMemory }}%</span>
						</h4>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								:aria-valuenow="system.osMemory"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="'width: ' + system.osMemory + '%;'"
							>
								<span class="sr-only">{{ system.osMemory }}% Complete</span>
							</div>
						</div>
					</div>
					<ul class="serveInfo">
						<li>
							<h6>JVMUSED</h6>
							<span>{{ system.jvmUsed }}</span>
						</li>
						<li>
							<h6>JVMFREE</h6>
							<span>{{ system.jvmFree }}</span>
						</li>
						<li>
							<h6>JVMTOTAL</h6>
							<span>{{ system.jvmTotal }}</span>
						</li>
						<li>
							<h6>JVMMAX</h6>
							<span>{{ system.jvmMax }}</span>
						</li>
					</ul>
				</div>
				<div class="box">
					<h5>
						<span>등록정보</span>
						<small>5종 검침 관련 모든 계량기 수 모뎀 수 DCU/Gateway 수</small>
					</h5>
					<div class="regist-info">
						<ul>
							<li>
								<div class="serve-box">
									<h6>등록 장비 수</h6>
									<b>2개</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>계량기</h6>
									<b>41.5천</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>DCU / Gate</h6>
									<b>2,081개</b>
								</div>
							</li>
							<li>
								<div class="serve-box">
									<h6>Modem</h6>
									<b>2,081개</b>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="box serve-ex-ip-wrap">
					<div class="serve-ex-ip">
						<ol>
							<li>서버 EXTERNAL IP</li>
							<li>cass.cnuglobal.co.kr</li>
						</ol>
					</div>
					<div class="svg-wrap">
						<img src="@/assets/svg/icon_server.svg" />
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>
<script>
import Server from "@/service/server";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	mounted() {
		this.getSystem();
	},
	data() {
		return {
			pageName: this.$t("menu.device.server"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.server") }
			],
			system: {}
		};
	},
	methods: {
		async getSystem() {
			try {
				const response = await Server.system();
				const result = response.data.response;
				this.system = result;
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>
