<template>
	<b-modal
		v-click-outside="data => console.log(555)"
		id="addEstate"
		ref="addEstate"
		:title="$t('estate.modal.add')"
		@shown="shownAddEstate"
		@show="showAddEstate"
		@hide="hideAddEstate"
		@hidden="hiddenAddEstate"
		@ok="okAddEstate"
		@cancel="cancel"
	>
		<template #modal-header="{ close }">
			<ul>
				<li><h4>단지 등록</h4></li>
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
						<b-button variant="light" @click="ok()">저장</b-button>
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
		</template>
		<div class="center">
			<b-form ref="addEstateForm" @submit.prevent="onSubmit" @reset="showAddEstate">
				<div class="modal-1st-box">
					<b-form-group
						:label="$t('estate.modal.estateId') + '(*)'"
						label-for="estateId"
						:invalid-feedback="$t('estate.modal.validation.estateId')"
						:state="estateIdState"
					>
						<b-form-input
							v-model="form.estateId"
							:state="estateIdState"
							@input="estateIdState = null"
							:placeholder="$t('estate.modal.estateId')"
							autofocus
							required
						/>
					</b-form-group>
					<b-form-group
						:label="$t('estate.modal.houseCount') + '(*)'"
						label-for="houseCount"
						:invalid-feedback="$t('estate.modal.validation.houseCount')"
						:state="estateIdState"
					>
						<b-form-input
							v-model="form.houseCount"
							:state="houseCountState"
							@input="houseCountState = null"
							:placeholder="$t('estate.modal.houseCount')"
							type="number"
							min="0"
							required
						/>
					</b-form-group>
					<b-form-group
						:label="$t('estate.modal.regionSeq') + '(*)'"
						label-for="regionSeq"
						:invalid-feedback="$t('estate.modal.validation.regionSeq')"
						:state="regionSeqState"
					>
						<b-form-select
							v-model="form.regionSeq"
							:state="regionSeqState"
							@input="regionSeqState = null"
							:options="regionList"
							text-field="regionName"
							value-field="regionSeq"
							required
						>
							<template #first>
								<b-form-select-option value="">-- 선택해주세요 --</b-form-select-option>
							</template>
						</b-form-select>
					</b-form-group>
					<b-form-group :label="$t('estate.modal.manager1')">
						<b-form-input v-model="form.manager1" :placeholder="$t('estate.modal.manager1')" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.manager2')">
						<b-form-input v-model="form.manager2" :placeholder="$t('estate.modal.manager2')" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.dcuCount')">
						<b-form-input v-model="form.dcuCount" :placeholder="$t('estate.modal.dcuCount')" type="number" min="0" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.meterCount')">
						<b-form-input v-model="form.meterCount" :placeholder="$t('estate.modal.meterCount')" type="number" min="0" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.waterCount')">
						<b-form-input v-model="form.waterCount" :placeholder="$t('estate.modal.waterCount')" type="number" min="0" />
					</b-form-group>
				</div>
				<div class="modal-2nd-box">
					<b-form-group
						:label="$t('estate.modal.estateName') + '(*)'"
						label-for="estateName"
						:invalid-feedback="$t('estate.modal.validation.estateName')"
						:state="estateNameState"
					>
						<b-form-input
							v-model="form.estateName"
							:state="estateNameState"
							@input="estateNameState = null"
							:placeholder="$t('estate.modal.estateName')"
							required
						/>
					</b-form-group>
					<b-form-group
						:label="$t('estate.modal.address') + '(*)'"
						label-for="address"
						:invalid-feedback="$t('estate.modal.validation.address')"
						:state="addressState"
					>
						<b-form-input
							v-model="form.address"
							:state="addressState"
							@input="addressState = null"
							:placeholder="$t('estate.modal.addressEx')"
							required
						/>
					</b-form-group>
					<b-form-group :label="$t('estate.modal.telEstate')">
						<b-form-input v-model="form.telEstate" :placeholder="$t('estate.modal.telEstateEx')" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.manager1Tel')">
						<b-form-input v-model="form.manager1Tel" :placeholder="$t('estate.modal.manager1Tel')" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.manager2Tel')">
						<b-form-input v-model="form.manager2Tel" :placeholder="$t('estate.modal.manager2Tel')" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.modemCount')">
						<b-form-input v-model="form.modemCount" :placeholder="$t('estate.modal.modemCount')" type="number" min="0" />
					</b-form-group>
					<b-form-group :label="$t('estate.modal.gasCount')">
						<b-form-input v-model="form.gasCount" :placeholder="$t('estate.modal.gasCount')" type="number" min="0" />
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
					<b-form-group :label="$t('estate.modal.meteringType')">
						<b-form-checkbox-group>
							<b-form-checkbox v-model="form.checkPower" unchecked-value="N" value="Y">{{ $t("estate.modal.powerType") }} </b-form-checkbox>
						</b-form-checkbox-group>
						<b-form-checkbox-group>
							<b-form-checkbox v-model="form.checkGas" unchecked-value="N" value="Y">{{ $t("estate.modal.gasType") }} </b-form-checkbox>
						</b-form-checkbox-group>
						<b-form-checkbox-group>
							<b-form-checkbox v-model="form.checkWater" unchecked-value="N" value="Y">{{ $t("estate.modal.waterType") }} </b-form-checkbox>
						</b-form-checkbox-group>
						<b-form-checkbox-group>
							<b-form-checkbox v-model="form.checkHot" unchecked-value="N" value="Y">{{ $t("estate.modal.hotType") }} </b-form-checkbox>
						</b-form-checkbox-group>
						<b-form-checkbox-group>
							<b-form-checkbox v-model="form.checkHeating" unchecked-value="N" value="Y">{{ $t("estate.modal.heatingType") }} </b-form-checkbox>
						</b-form-checkbox-group>
					</b-form-group>
				</div>
				<div class="modal-4th-box">
					<b-form-group :label="$t('estate.modal.metering')">
						<b-input-group>
							<ul class="bg">
								<li>
									<b-form-group :label="$t('estate.modal.powerDay')">
										<b-form-input v-model="form.dayPower" :placeholder="$t('estate.modal.meteringDefault')" />
									</b-form-group>
								</li>
								<li>
									<b-form-group :label="$t('estate.modal.gasDay')">
										<b-form-input v-model="form.dayGas" :placeholder="$t('estate.modal.meteringDefault')" />
									</b-form-group>
								</li>
								<li>
									<b-form-group :label="$t('estate.modal.waterDay')">
										<b-form-input v-model="form.dayWater" :placeholder="$t('estate.modal.meteringDefault')" />
									</b-form-group>
								</li>
								<li>
									<b-form-group :label="$t('estate.modal.hotDay')">
										<b-form-input v-model="form.dayHot" :placeholder="$t('estate.modal.meteringDefault')" />
									</b-form-group>
								</li>
								<li>
									<b-form-group :label="$t('estate.modal.heatingDay')">
										<b-form-input v-model="form.dayHeating" :placeholder="$t('estate.modal.meteringDefault')" />
									</b-form-group>
								</li>
							</ul>
							<b-input-group-append>
								<b-button variant="light">{{ $t("estate.modal.changeDay") }}</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-form-group>
				</div>
			</b-form>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {
	props: { regionList: { type: Array } },
	mounted() {},
	data() {
		return {
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
				dayPower: null, // 검침일 전기
				dayGas: null, // 검침일 가스
				dayWater: null, // 검침일 수도
				dayHot: null, // 검침일 온수
				dayHeating: null // 검침일 난방
			}
		};
	},
	methods: {
		checkValidation() {
			let result = this.$refs.addEstateForm.checkValidity();
			result &= this.regionSeqState = this.form.regionSeq ? true : false;
			result &= this.estateIdState = this.form.estateId ? true : false;
			result &= this.estateNameState = this.form.estateName ? true : false;
			result &= this.houseCountState = this.form.houseCount ? true : false;
			result &= this.addressState = this.form.address ? true : false;

			return result;
		},
		showAddEstate(/* event */) {
			this.estateIdState = null;
			this.estateNameState = null;
			this.houseCountState = null;
			this.addressState = null;
			this.regionSeqState = null;
			this.form.regionSeq = "1"; // 지역 SEQ
			this.form.estateId = "asdf"; // 단지 ID
			this.form.estateName = "aaaa"; // 단지명
			this.form.houseCount = 1; // 세대수
			this.form.address = "asdfbbbb"; // 주소
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
			this.form.dayPower = null; // 검침일 전기
			this.form.dayGas = null; // 검침일 가스
			this.form.dayWater = null; // 검침일 수도
			this.form.dayHot = null; // 검침일 온수
			this.form.dayHeating = null; // 검침일 난방
		},
		shownAddEstate() {},
		hideAddEstate() {},
		hiddenAddEstate() {},
		okAddEstate(event) {
			event.preventDefault();

			if (this.checkValidation()) {
				// console.log(this.$refs.addEstateForm);
				// this.$refs.addEstateForm.submit();
			}
		},
		onSubmit(event) {
			alert("submit");
			console.log(event);
		},
		cancel(event) {
			console.log(event);
		}
	}
};
</script>

<style></style>
