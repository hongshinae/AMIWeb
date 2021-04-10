<template>
	<b-modal id="detailBuilding" ref="detailBuilding" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ $t("building.modal.detail") }}</h4>
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
					<li><!-- Button with custom close trigger value --></li>
					<li>
						<b-button variant="light" @click="ok()">{{ $t("building.modal.button.save") }}</b-button>
						<b-button variant="light" @click="cancel()">{{ $t("building.modal.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
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

					<b-form-group label-for="" :state="isDcuIdCheckState">
						<template #label>{{ $t("building.modal.dcuId") }}<span>*</span></template>
						<template #invalid-feedback>{{ dcuIdCheckInvalidMessage }}</template>
						<b-input-group>
							<b-form-input v-model="form.dcuId" placeholder="0910233546" :state="isDcuIdState"></b-form-input>
							<b-input-group-append>
								<b-button variant="light" @click="dcuIdCheck">{{ $t("building.modal.button.dcuCheck") }}</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-form-group>
				</form>
			</div>
		</div>
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
		},
		"form.dcuId": {
			handler() {
				this.states.dcuIdState = null;
				this.dcuIdCheckStatus = null;
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
			if (this.isDcuIdCheckState === false) {
				return false;
			}

			return this.states.dcuIdState;
		},
		isDcuIdCheckState() {
			if (!this.dcuIdCheckStatus) {
				return null;
			} else if (this.dcuIdCheckStatus != "1") {
				return false;
			}

			return true;
		},
		dcuIdCheckInvalidMessage() {
			if (this.dcuIdCheckStatus == 0) {
				return this.$t("building.modal.validation.dcuStatus.error");
			} else if (this.dcuIdCheckStatus == 2) {
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
			dcuIdCheckMessage: null,
			dcuIdCheckStatus: null,
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
				buildingName: null,
				dcuId: null
			}
		};
	},
	methods: {
		show() {
			this.states.regionSeqState = null;
			this.states.estateSeqState = null;
			this.states.buildingNameState = null;
			this.states.buildingNameCheckState = null;
			this.states.dcuIdState = null;
		},
		shown() {
			this.form.buildingSeq = this.item.buildingSeq;
			this.form.regionSeq = this.item.regionSeq;
			this.form.estateSeq = this.item.estateSeq;
			this.form.buildingName = this.item.buildingName;
			this.form.dcuId = this.item.dcuId;
		},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		checkValidation() {
			let result = this.$refs.detailBuildingForm.checkValidity();
			this.states.regionSeqState = this.form.regionSeq && this.form.regionSeq != 0 ? true : false;
			this.states.estateSeqState = this.form.estateSeq && this.form.estateSeq != 0 ? true : false;
			this.states.buildingNameState = this.form.buildingName ? true : false;

			return result && this.states.regionSeqState && this.states.estateSeqState && this.states.buildingNameState;
		},
		async buildingNameCheck() {
			this.buildingNameCheckMessage = null;

			if (this.checkValidation()) {
				try {
					const response = await Building.namecheck(this.form);
					this.states.buildingNameCheckState = !response.data.response.result;
				} catch (error) {
					this.states.buildingNameCheckState = false;

					if (error && error.status == 500) {
						this.duplicateErrorMessage = "알 수 없는 오류";
					}
				}
			}
		},
		async dcuIdCheck() {
			this.states.dcuIdState = this.form.dcuId ? null : false;

			if (this.states.dcuIdState != false) {
				const response = await Building.dcucheck(this.form);
				this.dcuIdCheckStatus = response.data.response.statusCode;
			}
		},
		async handleSubmit(event) {
			if (!this.states.buildingNameCheckState) {
				alert(this.$t("building.modal.validation.duplicateNameCheck"));
				event.preventDefault();
			} else if (!this.isDcuIdCheckState) {
				alert(this.$t("building.modal.validation.duplicateLinkCheck"));
				event.preventDefault();
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
		}
	}
};
</script>

<style></style>
