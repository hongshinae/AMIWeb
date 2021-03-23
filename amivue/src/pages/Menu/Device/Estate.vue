<template>
	<div class="main-bg">
		<!-- <icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
			<icon-search />
		</icon-base> -->
		<b-modal id="addEstate" class="addEstate" title="단지 상세 관리" ok-only no-stacking>
			<!---->
			<div class="modal-content-wrap">
				<form>
					<b-row align-h="center">
						<div class="modal-1st-box">
							<div class="form-group">
								<label class="d-block label-wrap">단지 ID</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="단지 ID" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">세대 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="세대 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">지역</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="지역" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">담당자 1</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="담당자 1" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">담당자 2</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="담당자 2" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">설치 DCU 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="설치 DCU 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">설치 Meter 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="설치 Meter 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">수도 Meter 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="수도 Meter 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">기타</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="기타" class="form-control"></b-form-input>
								</div>
							</div>
						</div>
						<div class="modal-2nd-box">
							<div class="form-group">
								<label class="d-block label-wrap">단지 명</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="삼성단지" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">주소</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="경기도 성남시 분당구 삼평동 1006동 210호" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">연락처</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="010.1212.1211" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">담당자 1 연락처</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="담당자 1 연락처" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">담당자 2 연락처</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="담당자 2 연락처" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">설치 모뎀 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="설치 모뎀 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">가스 Meter 수</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="가스 Meter 수" class="form-control"></b-form-input>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">동 호수</label>
								<div class="input-wrap">
									<label>1006 동</label><b-button variant="primary" class="btn btn-light">동 선택</b-button> <label>104 호</label
									><b-button variant="primary" class="btn btn-light">호 선택</b-button>
								</div>
							</div>
							<div class="form-group">
								<label class="d-block label-wrap">기타</label>
								<div class="input-wrap">
									<b-form-input v-model="text" placeholder="기타" class="form-control"></b-form-input>
								</div>
							</div>
						</div>
						<div class="modal-3rd-box">
							<div class="form-group">
								<label class="d-block label-wrap">검침 타입</label>
								<div class="input-wrap">
									<ul class="modal-ul">
										<li><b-form-checkbox></b-form-checkbox><label>전기</label></li>
										<li><b-form-checkbox></b-form-checkbox><label>가스</label></li>
										<li><b-form-checkbox></b-form-checkbox><label>수도</label></li>
										<li><b-form-checkbox></b-form-checkbox><label>온수</label></li>
										<li><b-form-checkbox></b-form-checkbox><label>난방</label></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="modal-4th-box">
							<div class="form-group">
								<label class="d-block label-wrap">검침 일</label>
								<ul class="bg">
									<li>전기 <i class="p-Color">15</i>일</li>
									<li>가스 <i class="p-Color">1</i>일</li>
									<li>수도 <i class="p-Color">4</i>일</li>
									<li>온수 <i class="p-Color">1</i>일</li>
									<li>난방 <i class="p-Color">5</i>일</li>
								</ul>
								<b-button variant="primary" class="btn btn-light">단지 검침일 일괄 변경</b-button>
							</div>
						</div>
					</b-row>
				</form>
			</div>
			<!---->
		</b-modal>
		<content-header :paths="paths" :pageName="pageName" />
		<content-search>
			<b-row>
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.area") }}</label>
						</b-col>
						<b-col lg="8">
							<b-form-select v-model="selected" class="form-control">
								<b-form-select-option v-for="(path, i) in estateList" :key="i" :value="path.regionSeq" default>
									{{ path.regionName }}
								</b-form-select-option>
							</b-form-select>
						</b-col>
					</b-row>
				</b-col>
				<b-col cols="4" lg="4">
					<b-row class="form-group">
						<b-col lg="4">
							<label class="d-block">{{ $t("estate.estateName") }}</label>
						</b-col>
						<b-col lg="8">
							<b-form-input placeholder="그랑시아 아파트" class="form-control"></b-form-input>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</content-search>
		<content-table>
			<template v-slot:header-left-icon>
				<icon-pencil />
			</template>
			<template #header-left-name>
				{{ $t("estate.add") }}
			</template>
			<template #header-right-icon>
				<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
				<polyline
					fill="#FFFFFF"
					points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
				/>
			</template>
			<template v-slot:header-right-name>
				{{ $t("estate.excelDownload") }}
			</template>
		</content-table>
	</div>
</template>
<script>
import Vue from "vue";
import Estate from "@/service/estate";
import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

import IconSearch from "@/components/icons/IconSearch";
import IconHomeUp from "@/components/icons/IconHomeUp";
import IconHomeDown from "@/components/icons/IconHomeDown";
import IconPencil from "@/components/icons/IconPencil";

Vue.component(ContentHeader);
Vue.component(ContentSearch);
Vue.component(ContentTable);
Vue.component("icon-search", IconSearch);
Vue.component("icon-home-up", IconHomeUp);
Vue.component("icon-home-down", IconHomeDown);
Vue.component("icon-pencil", IconPencil);

export default {
	props: { pageNumber: { default: 1 } },
	components: { ContentHeader, ContentSearch, ContentTable },
	created() {
		Estate.region()
			.then(({ data }) => {
				this.estateList = data.response;
				this.selected = data.response[0].regionSeq;
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	},
	data() {
		return {
			pageName: this.$t("menu.device.estate"),
			paths: [{ name: this.$t("menu.title"), bicon: "house" }, { name: this.$t("menu.device.title") }, { name: this.$t("menu.device.estate") }],
			selected: null,
			estateList: Array
		};
	},
	methods: {
		searchItem() {
			Estate.estateList()
				.then(({ data }) => {
					console.log(data);
				})
				.catch(error => {
					console.log(error);
					throw error;
				});
		}
	}
};
</script>
