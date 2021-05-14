<template>
	<b-modal
		id="detailEstate"
		ref="detailEstate"
		@shown="shownDetailEstate"
		@show="showDetailEstate"
		@hide="hideDetailEstate"
		@hidden="hiddenDetailEstate"
		@ok="okDetailEstate"
		@cancel="cancel"
	>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ $t("estate.modal.detail") }}</h4>
				</li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ ok, cancel }">
			<div class="btn-wrap">
				<ul>
					<li></li>
					<li>
						<b-button variant="light" @click="ok()" tabindex="21" disabled>저장</b-button>
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
		</template>
		<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
			<div class="modal-content-wrap">
				<div class="center">
					<modal-alert ref="DetailEstateAlert" :title="alertTitle" :message="alertMessage" />
					<b-form ref="DetailEstateForm" @submit.prevent="onSubmit" @reset="showDetailEstate">
						<div class="modal-1st-box">
							<b-form-group label-for="estateId" :invalid-feedback="$t('estate.modal.validation.estateId')" :state="estateIdState">
								<template #label>{{ $t("estate.modal.estateId") }}<span>*</span></template>
								<b-form-input
									v-model="form.estateId"
									:state="estateIdState"
									@input="estateIdState = null"
									autofocus
									tabindex="1"
									required
									readonly
								/>
							</b-form-group>
							<b-form-group label-for="houseCount" :invalid-feedback="$t('estate.modal.validation.houseCount')" :state="houseCountState">
								<template #label>{{ $t("estate.modal.houseCount") }}<span>*</span></template>
								<b-form-input
									v-model.number="form.houseCount"
									:state="houseCountState"
									@input="houseCountState = null"
									type="number"
									min="0"
									tabindex="3"
									required
									readonly
								/>
							</b-form-group>
							<b-form-group label-for="regionSeq" :invalid-feedback="$t('estate.modal.validation.regionSeq')" :state="regionSeqState">
								<template #label>{{ $t("estate.modal.regionSeq") }}<span>*</span></template>
								<b-form-select
									v-model="form.regionSeq"
									:state="regionSeqState"
									@input="regionSeqState = null"
									:options="regionList"
									text-field="regionName"
									value-field="regionSeq"
									tabindex="5"
									required
									disabled
								>
								</b-form-select>
							</b-form-group>
							<b-form-group :label="$t('estate.modal.manager1')">
								<b-form-input v-model="form.manager1" tabindex="7" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.manager2')">
								<b-form-input v-model="form.manager2" tabindex="9" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.dcuCount')">
								<b-form-input v-model.number="form.dcuCount" type="number" min="0" tabindex="11" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.meterCount')">
								<b-form-input v-model.number="form.meterCount" type="number" min="0" tabindex="13" readonly />
							</b-form-group>
						</div>
						<div class="modal-2nd-box">
							<b-form-group label-for="estateName" :invalid-feedback="$t('estate.modal.validation.estateName')" :state="estateNameState">
								<template #label>{{ $t("estate.modal.estateName") }}<span>*</span></template>
								<b-form-input
									v-model="form.estateName"
									:state="estateNameState"
									@input="estateNameState = null"
									tabindex="2"
									required
									readonly
								/>
							</b-form-group>
							<b-form-group label-for="address" :invalid-feedback="$t('estate.modal.validation.address')" :state="addressState">
								<template #label>{{ $t("estate.modal.address") }}<span>*</span></template>
								<b-form-input v-model="form.address" :state="addressState" @input="addressState = null" tabindex="4" required readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.telEstate')">
								<b-form-input v-model="form.telEstate" v-mask="telEstate" tabindex="6" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.telManager1')">
								<b-form-input v-model="form.telManager1" v-mask="telManager1" tabindex="8" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.telManager2')">
								<b-form-input v-model="form.telManager2" v-mask="telManager2" tabindex="10" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.modemCount')">
								<b-form-input type="number" v-model.number="form.modemCount" min="0" tabindex="12" readonly />
							</b-form-group>
							<b-form-group :label="$t('estate.modal.buildingHouseCount')">
								<b-row>
									<b-col cols="6">
										<div id="tooltip-button-building" class="tooltip-button-building">0</div>
									</b-col>
									<b-tooltip target="tooltip-button-building"> {{ $t("estate.modal.buildingTooltip") }} </b-tooltip>
									<b-col cols="6">
										<div id="tooltip-button-number" class="tooltip-button-number">0</div>
									</b-col>
									<b-tooltip target="tooltip-button-number"> {{ $t("estate.modal.houseTooltip") }} </b-tooltip>
								</b-row>
							</b-form-group>
						</div>
						<div class="modal-3rd-box">
							<b-form-group :label="$t('estate.modal.readingType')">
								<b-form-checkbox-group>
									<b-form-checkbox v-model="form.checkPower" unchecked-value="N" value="Y">
										{{ $t("estate.modal.powerType") }}
									</b-form-checkbox>
								</b-form-checkbox-group>
								<b-form-checkbox-group>
									<b-form-checkbox v-model="form.checkGas" unchecked-value="N" value="Y" disabled
										>{{ $t("estate.modal.gasType") }}
									</b-form-checkbox>
								</b-form-checkbox-group>
								<b-form-checkbox-group>
									<b-form-checkbox v-model="form.checkWater" unchecked-value="N" value="Y" disabled>
										{{ $t("estate.modal.waterType") }}
									</b-form-checkbox>
								</b-form-checkbox-group>
								<b-form-checkbox-group>
									<b-form-checkbox v-model="form.checkHot" unchecked-value="N" value="Y" disabled
										>{{ $t("estate.modal.hotType") }}
									</b-form-checkbox>
								</b-form-checkbox-group>
								<b-form-checkbox-group>
									<b-form-checkbox v-model="form.checkHeating" unchecked-value="N" value="Y" disabled>
										{{ $t("estate.modal.heatingType") }}
									</b-form-checkbox>
								</b-form-checkbox-group>
							</b-form-group>
						</div>
						<div class="modal-4th-box">
							<b-form-group :label="$t('estate.modal.metering')">
								<b-input-group>
									<ul class="bg">
										<li>
											<b-form-group :label="$t('estate.modal.powerDay')">
												<b-form-input type="number" v-model.number="form.dayPower" v-mask="mask" tabindex="16" readonly />
											</b-form-group>
										</li>
										<li>
											<b-form-group :label="$t('estate.modal.gasDay')">
												<b-form-input v-model="form.dayGas" v-mask="mask" type="number" tabindex="17" readonly />
											</b-form-group>
										</li>
										<li>
											<b-form-group :label="$t('estate.modal.waterDay')">
												<b-form-input type="number" v-model.number="form.dayWater" v-mask="mask" tabindex="18" readonly />
											</b-form-group>
										</li>
										<li>
											<b-form-group :label="$t('estate.modal.hotDay')">
												<b-form-input type="number" v-model.number="form.dayHot" v-mask="mask" tabindex="19" readonly />
											</b-form-group>
										</li>
										<li>
											<b-form-group :label="$t('estate.modal.heatingDay')">
												<b-form-input type="number" v-model.number="form.dayHeating" v-mask="mask" tabindex="20" readonly />
											</b-form-group>
										</li>
									</ul>
									<b-input-group-append>
										<b-button variant="light" disabled>{{ $t("estate.modal.changeDay") }}</b-button>
									</b-input-group-append>
								</b-input-group>
							</b-form-group>
						</div>
					</b-form>
				</div>
				<!---->
			</div>
		</b-overlay>
	</b-modal>
</template>

<script>
import Estate from "@/service/estate";

import { mapGetters } from "vuex";

export default {
	props: { item: { type: Object } },
	mounted() {},
	computed: {
		...mapGetters({ regionList: "getRegions" }),
		isDayStateValid() {
			return this.name ? true : false;
		}
	},
	data() {
		return {
			alertTitle: null,
			alertMessage: null,
			estateList: [],
			estateIdState: null,
			estateNameState: null,
			houseCountState: null,
			addressState: null,
			regionSeqState: null,
			form: {
				regionSeq: "", // 지역 SEQ
				estateId: "", // 단지 ID
				estateName: "", // 단지명
				houseCount: 0, // 세대수
				address: "", // 주소
				telEstate: "", // 단지전화번호
				manager1: "", // 관리자1
				telManager1: "", // 관리자1 연락처
				manager2: "", // 관리자2
				telManager2: "", // 관리자2 연락처
				dcuCount: 0, // 설치 DCU 수
				modemCount: 0, // 설치 모뎀 수
				meterCount: 0, // 설치 METER 수
				gasCount: 0, // 설치 가스 수
				waterCount: 0, // 설치 수도 수
				checkPower: "Y", // 체크 전기
				checkGas: "N", // 체크 가스
				checkWater: "N", // 체크 수도
				checkHot: "N", // 체크 온수
				checkHeating: "N", // 체크 난방
				dayPower: 1, // 검침일 전기
				dayGas: 1, // 검침일 가스
				dayWater: 1, // 검침일 수도
				dayHot: 1, // 검침일 온수
				dayHeating: 1 // 검침일 난방
			},
			telEstate: this.getPhoneMask,
			telManager1: this.getPhoneMask,
			telManager2: this.getPhoneMask,
			mask: this.getDayMask,
			isLoading: true
		};
	},
	methods: {
		checkValidation() {
			let result = this.$refs.DetailEstateForm.checkValidity();
			result &= this.regionSeqState = this.form.regionSeq ? true : false;
			result &= this.estateIdState = this.form.estateId ? true : false;
			result &= this.estateNameState = this.form.estateName ? true : false;
			result &= this.houseCountState = this.form.houseCount ? true : false;
			result &= this.addressState = this.form.address ? true : false;

			return result;
		},
		showDetailEstate(/* event */) {
			this.isLoading = true;
			this.estateIdState = null;
			this.estateNameState = null;
			this.houseCountState = null;
			this.addressState = null;
			this.regionSeqState = null;
			this.form.regionSeq = "0"; // 지역 SEQ
			this.form.estateId = ""; // 단지 ID
			this.form.estateName = ""; // 단지명
			this.form.houseCount = 1; // 세대수
			this.form.address = ""; // 주소
			this.form.telEstate = ""; // 단지전화번호
			this.form.manager1 = ""; // 관리자1
			this.form.telManager1 = ""; // 관리자1 연락처
			this.form.manager2 = ""; // 관리자2
			this.form.telManager2 = ""; // 관리자2 연락처
			this.form.dcuCount = 0; // 설치 DCU 수
			this.form.modemCount = 0; // 설치 모뎀 수
			this.form.meterCount = 0; // 설치 METER 수
			this.form.gasCount = 0; // 설치 가스 수
			this.form.waterCount = 0; // 설치 수도 수
			this.form.checkPower = "Y"; // 체크 전기
			this.form.checkGas = "N"; // 체크 가스
			this.form.checkWater = "N"; // 체크 수도
			this.form.checkHot = "N"; // 체크 온수
			this.form.checkHeating = "N"; // 체크 난방
			this.form.dayPower = 1; // 검침일 전기
			this.form.dayGas = 1; // 검침일 가스
			this.form.dayWater = 1; // 검침일 수도
			this.form.dayHot = 1; // 검침일 온수
			this.form.dayHeating = 1; // 검침일 난방
		},
		async shownDetailEstate() {
			await Estate.info({ estateId: this.item.estateId })
				.then(({ data }) => {
					this.form = data.response;
					this.isLoading = false;
				})
				.catch(({ response }) => {
					const code = response.data.response.error_code;
					const message = response.data.response.error_message;
					this.alertTitle = String(code);
					this.alertMessage = message;
					this.$bvModal.show("alert");
				});
		},
		hideDetailEstate() {},
		hiddenDetailEstate() {},
		async okDetailEstate(event) {
			event.preventDefault();
			if (this.checkValidation()) {
				await Estate.registration(this.form)
					.then(({ data }) => {
						if (!data.response.result) {
							throw Error("알수 없는 오류");
						}

						this.$emit("update:search-estate-list");
						this.$bvModal.hide("DetailEstate");
					})
					.catch(({ response }) => {
						const code = response.data.response.error_code;
						const message = response.data.response.error_message;
						this.alertTitle = String(code);
						this.alertMessage = message;
						this.$bvModal.show("alert");
					});
			}
		},
		onSubmit() {},
		cancel() {},
		getDayMask(value) {
			if (value > 9) {
				return [/[1-3]/, Math.floor(value / 10) == 3 ? /[0-1]/ : /[0-9]/];
			} else {
				return [/[1-9]/];
			}
		},
		getPhoneMask(value) {
			let regex = [/[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

			if (value.startsWith("02")) {
				if (value.length < 3) {
					regex = [/[0]/, /[2]/];
				} else if (value.length < 7) {
					regex = [/[0]/, /[2]/, "-", /[0-9]/, /[0-9]/, /[0-9]/];
				} else if (value.length < 12) {
					regex = [/[0]/, /[2]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
				} else {
					regex = [/[0]/, /[2]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
				}
			} else if (value.length < 4) {
				regex = [/[0-9]/, /[0-9]/, /[0-9]/];
			} else if (value.length < 9) {
				regex = [/[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
			} else if (value.length < 13) {
				regex = [/[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
			}

			return regex;
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/modal/modalCommon.scss";
@import "~@/assets/scss/modal/modalEstate.scss";
</style>
