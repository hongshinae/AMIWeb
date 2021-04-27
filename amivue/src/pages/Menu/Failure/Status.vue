<template>
	<div class="main-bg content">
		<dcu-modem-1></dcu-modem-1>
		<router-modem-1></router-modem-1>
		<div class="main-location-wrap">
			<h1>네트워크 상태</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>장애</b-breadcrumb-item>
					<b-breadcrumb-item active>네트워크 상태</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="search-wrap">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<b-row>
						<b-col xl="3" md="12" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">지역 이름</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected">
										<b-form-select-option>서울시</b-form-select-option>
										<b-form-select-option>경기도</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
						</b-col>
						<b-col xl="3" md="12" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">단지 명</label>
								</b-col>
								<b-col lg="8">
									<b-form-select v-model="selected">
										<b-form-select-option>1단지</b-form-select-option>
										<b-form-select-option>2단지</b-form-select-option>
									</b-form-select>
								</b-col>
							</b-row>
						</b-col>
						<b-col xl="3" md="12" sm="12">
							<b-row>
								<b-col lg="4">
									<label class="d-block">DCU ID</label>
								</b-col>
								<b-col lg="8">
									<b-form-input v-model="text" placeholder="DCU ID"></b-form-input>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button block variant="primary">검색</b-button>
				</div>
			</div>
		</div>
		<div class="dcu-list-wrap">
			<b-row>
				<b-col class="dcu-modem" xl="2" lg="2" sm="3">
					<div class="wbox">
						<ul class="stats-wrap">
							<li><span class="linkage"></span>DCU</li>
							<li><span class="unlinkage"></span>Router</li>
						</ul>
						<p class="dcu-name">DCU ID 1</p>
						<ul class="dcu-button-wrap">
							<li><b-button v-b-modal.dcuModem1 block variant="dark">DCU ping</b-button></li>
							<li><b-button v-b-modal.routerModem1 block variant="dark">Router ping</b-button></li>
						</ul>
					</div>
				</b-col>

				<b-col class="dcu-modem" xl="2" lg="2" sm="3">
					<b-overlay id="overlay-background" show variant="light" opacity="0.85" blur="2px" rounded="sm">
						<div class="wbox">
							<ul class="stats-wrap">
								<li><span class="linkage"></span>DCU</li>
								<li><span class="unlinkage"></span>Router</li>
							</ul>
							<p class="dcu-name">DCU ID 1</p>
							<ul class="dcu-button-wrap">
								<li><b-button v-b-modal.dcuModem1 block variant="dark">DCU ping</b-button></li>
								<li><b-button v-b-modal.routerModem1 block variant="dark">Router ping</b-button></li>
							</ul>
						</div>
					</b-overlay>
				</b-col>
			</b-row>
		</div>
		<div class="overlay-wrap">
			<b-overlay id="overlay-background" show variant="light" opacity="0.85" blur="2px" rounded="sm"></b-overlay>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import DcuModem1 from "@/components/modal/dcuModem1";
import RouterModem1 from "@/components/modal/routerModem1";

Vue.component(DcuModem1);
Vue.component(RouterModem1);

export default {
	components: { DcuModem1, RouterModem1 }
};
</script>

<style lang="scss">
.dcu-list-wrap {
	.dcu-modem {
		.wbox {
			height: 145px;
			position: relative;
			background: #293042;
			p {
				font-size: 16px;
				text-align: center;
				margin-top: 30px;
				font-weight: 600;
				color: #fff;
			}
			.stats-wrap {
				position: absolute;
				top: 16px;
				right: 16px;
				li {
					width: 70px;
					height: 14px;
					line-height: 14px;
					font-size: 11px;
					margin-bottom: 5px;
					text-align: right;
					color: #57668b;
					.linkage,
					.unlinkage {
						float: right;
						margin-left: 5px;
						vertical-align: middle;
						margin-top: 4px;
					}
				}
			}
			.dcu-button-wrap {
				height: 20px;
				margin-top: 20px;
				li {
					width: 48%;
					float: left;
					margin: 0 1%;
				}
				button {
					background: #293042;
					border: 1px solid #4e4e4e;
				}
			}
		}
	}
}
</style>
