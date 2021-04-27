<template>
	<b-modal id="detailBuilding" ref="detailBuilding" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ $t("building.modal.detail") }}</h4>
				</li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">X</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ ok, cancel }">
			<div class="btn-wrap">
				<ul>
					<li>
						<b-button variant="light" @click="ok()">{{ $t("building.modal.button.buildingDelete") }}</b-button>
						<b-button variant="light">
							<b-icon icon="arrow-clockwise"></b-icon>
							{{ $t("building.modal.button.Reflash") }}
						</b-button>
					</li>
					<li>
						<b-button variant="light" @click="ok()">{{ $t("building.modal.button.buildingModify") }}</b-button>
						<b-button variant="light" @click="cancel()">{{ $t("building.modal.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
			<div class="modal-content-wrap">
				<div class="modal-box">
					<form ref="detailBuildingForm">
						<b-form-group>
							<template #label>{{ $t("building.modal.selectRegion") }}<span>*</span></template>
							<b-form-select
								v-model="form.regionSeq"
								:options="regionList"
								text-field="regionName"
								value-field="regionSeq"
								:state="states.regionSeqState"
								@change="form.estateSeq = 0"
							>
							</b-form-select>
						</b-form-group>

						<b-form-group>
							<template #label>{{ $t("building.modal.selectEstate") }}<span>*</span></template>
							<b-form-select
								v-model="form.estateSeq"
								:options="estateOptions"
								text-field="estateName"
								value-field="estateSeq"
								:disabled="estateOptions.length == 0"
								:state="states.estateSeqState"
								required
							>
								<template #first>
									<b-form-select-option :value="0" selected>{{ estateSelectMessage }}</b-form-select-option>
								</template>
							</b-form-select>
						</b-form-group>

						<b-form-group label-for="buildingName" :state="states.buildingNameCheckState">
							<template #label>{{ $t("building.modal.buildingName") }}<span>*</span></template>
							<template #invalid-feedback>{{ buildingNameCheckInvalidMessage }}</template>
							<b-input-group>
								<b-form-input id="buildingName" placeholder="404동" v-model="form.buildingName" :state="isBuildingNameState" required />
								<b-input-group-append>
									<b-button variant="light" @click="buildingNameCheck">{{ $t("building.modal.button.nameCheck") }}</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>

						<b-form-group v-show="dcuList && dcuList.length > 0" label-for="">
							<template #label>{{ $t("building.modal.dcuIdMapping") }}<span>*</span></template>
							<b-input-group v-for="(dcuId, index) in dcuList" :key="index">
								<b-form-input :value="dcuId" disabled></b-form-input>
								<b-input-group-append>
									<b-button :value="dcuId" variant="light" @click="deleteDcu(dcuId)">
										{{ $t("building.modal.button.dcuIdDelete") }}
									</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
						<b-form-group :label="$t('building.modal.dcuIdAdd')" label-for="" :state="isDcuIdState">
							<template #invalid-feedback>{{ dcuIdCheckInvalidMessage }}</template>
							<b-input-group>
								<b-form-input ref="dcuId" v-model="dcuId" :state="states.dcuIdState && isDcuIdState" @input="resetDcuIdInput"></b-form-input>
								<b-input-group-append>
									<b-button variant="light" @click="addDcu">{{ $t("building.modal.button.dcuIdAdd") }}</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
					</form>
				</div>
			</div>
		</b-overlay>
		<!---->
	</b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import Building from "@/service/building";

export default {
	props: { item: { type: Object } },
	watch: {
		"form.regionSeq": {
			handler(/*value, oldvalue*/) {
				this.states.regionSeqState = null;
			}
		},
		"form.estateSeq": {
			handler() {
				this.states.estateSeqState = null;
			}
		},
		"form.buildingName": {
			handler() {
				this.states.buildingNameState = null;
				this.states.buildingNameCheckState = null;
			}
		}
	},
	computed: {
		...mapGetters({ regionList: "getRegions", estateList: "getEstates", getEstate: "getEstateByRegion" }),
		estateOptions() {
			if (this.form.regionSeq == 0) {
				return this.estateList;
			} else {
				return this.getEstate(this.form.regionSeq);
			}
		},
		estateSelectMessage() {
			if (this.estateOptions.length == 0) {
				return this.$t("building.modal.nothing");
			} else {
				return this.$t("building.modal.selecting");
			}
		},
		isBuildingNameState() {
			if (this.states.buildingNameCheckState == null) {
				return this.states.buildingNameState;
			} else {
				return this.states.buildingNameCheckState && this.states.buildingNameState;
			}
		},
		buildingNameCheckInvalidMessage() {
			if (!this.buildingNameCheckMessage) {
				return this.$t("building.modal.validation.nameCheck");
			} else {
				return this.buildingNameCheckMessage;
			}
		},
		isDcuIdState() {
			if (this.dcuIdCheckStatus == 0 || this.dcuIdCheckStatus == 1) {
				return true;
			} else {
				return false;
			}
		},
		dcuIdCheckInvalidMessage() {
			if (this.dcuIdCheckStatus == 2) {
				return this.$t("building.modal.validation.dcuStatus.nothing");
			} else if (this.dcuIdCheckStatus == 3) {
				return this.$t("building.modal.validation.dcuStatus.registered");
			}

			return this.$t("building.modal.validation.dcuStatus.ok");
		}
	},
	data() {
		return {
			buildingNameCheckMessage: null,
			dcuIdCheckStatus: 1,
			states: {
				regionSeqState: null,
				estateSeqState: null,
				buildingNameState: null,
				buildingNameCheckState: null,
				dcuIdState: null
			},
			form: {
				buildingSeq: null,
				regionSeq: 0,
				estateSeq: null,
				buildingName: null
			},
			dcuList: [],
			dcuId: null,
			isLoading: true
		};
	},
	methods: {
		show() {
			this.states.regionSeqState = null;
			this.states.estateSeqState = null;
			this.states.buildingNameState = null;
			this.states.buildingNameCheckState = null;
			this.states.dcuIdState = null;
			this.dcuList = [];
			this.dcuId = null;
			this.isLoading = true;
		},
		shown() {
			this.getBuilding(this.item);
		},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		async getBuilding(params) {
			try {
				const response = await Building.info(params);
				const result = response.data.response;
				this.form = result;
				this.dcuList = result.dcuMapp.map(v => v.dcuId);
			} catch (error) {
				if (error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				alert("오류가 발생하였습니다.");
			} finally {
				this.isLoading = false;
			}
		},
		checkValidation() {
			let result = this.$refs.detailBuildingForm.checkValidity();
			this.states.regionSeqState = this.form.regionSeq && this.form.regionSeq != 0 ? true : false;
			this.states.estateSeqState = this.form.estateSeq && this.form.estateSeq != 0 ? true : false;
			this.states.buildingNameState = this.form.buildingName ? true : false;

			return result && this.states.regionSeqState && this.states.estateSeqState && this.states.buildingNameState;
		},
		async addDcu() {
			this.states.dcuIdState = this.dcuId ? true : false;

			if (!this.states.dcuIdState) {
				return;
			}

			try {
				const response = await Building.dcuAdd({ buildingSeq: this.form.buildingSeq, dcuId: this.dcuId });
				const result = response.data.response;

				if (!result.result) {
					this.dcuIdCheckStatus = result.returnData.statusCode;
				} else {
					this.dcuList.push(result.returnData.dcuId);
					this.$emit("handle:searchItem");
					this.dcuId = "";
					this.states.dcuIdState = null;
					this.$refs.dcuId.focus();
				}
			} catch (error) {
				console.log(error);
				throw Error(error);
			}
		},
		async deleteDcu(dcuId) {
			try {
				const response = await Building.dcuDelete({ buildingSeq: this.form.buildingSeq, dcuId: dcuId });
				const result = response.data.response;

				if (result.result) {
					const index = this.dcuList.indexOf(dcuId);
					this.dcuList.splice(index, 1);
					this.$emit("handle:searchItem");
				} else {
					alert("삭제 실패하였습니다.");
				}
			} catch (error) {
				throw Error(error);
			}
		},
		async buildingNameCheck() {
			this.buildingNameCheckMessage = null;
			const checkResult = this.checkValidation();

			if (checkResult) {
				try {
					const response = await Building.namecheck({
						buildingSeq: this.form.buildingSeq,
						estateSeq: this.form.estateSeq,
						buildingName: this.form.buildingName
					});
					this.states.buildingNameCheckState = !response.data.response.result;
				} catch (error) {
					this.states.buildingNameCheckState = false;

					if (error && error.status == 500) {
						this.duplicateErrorMessage = "알 수 없는 오류";
					}
				}
			}
		},
		async handleSubmit(event) {
			if (!this.states.buildingNameCheckState) {
				alert(this.$t("building.modal.validation.duplicateNameCheck"));
				event.preventDefault();
				return;
			}

			try {
				await Building.update(this.form);
				this.$emit("handle:searchItem");
			} catch (error) {
				this.states.buildingNameCheckState = false;
				this.buildingNameCheckMessage = "알 수 없는 오류";
				event.preventDefault();
				throw Error(error);
			}
		},
		resetDcuIdInput() {
			this.states.dcuIdState = null;
			this.dcuIdCheckStatus = 1;
		}
	}
};
</script>

<style></style>
