<template>
	<b-modal id="addBuilding" ref="addBuilding" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ $t("building.modal.add") }}</h4>
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
				<form ref="addBuildingForm">
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
							<template #first>
								<b-form-select-option :value="0" selected>{{ $t("building.modal.selecting") }}</b-form-select-option>
							</template>
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
	watch: {
		"form.regionSeq": {
			handler() {
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
		}
	},
	data() {
		return {
			buildingNameCheckMessage: null,
			states: {
				regionSeqState: null,
				estateSeqState: null,
				buildingNameState: null,
				buildingNameCheckState: null
			},
			form: {
				regionSeq: 0,
				estateSeq: 0,
				buildingName: null
			}
		};
	},
	methods: {
		show() {
			this.states.regionSeqState = null;
			this.states.estateSeqState = null;
			this.states.buildingNameState = null;
			this.states.buildingNameCheckState = null;
			this.form.regionSeq = 0;
			this.form.estateSeq = 0;
			this.form.buildingName = null;
		},
		shown() {},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		checkValidation() {
			let result = this.$refs.addBuildingForm.checkValidity();
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
						this.buildingNameCheckMessage = "알 수 없는 오류";
					}
				}
			}
		},
		async handleSubmit(event) {
			this.buildingNameCheckMessage = null;

			if (!this.states.buildingNameCheckState) {
				alert(this.$t("building.modal.validation.duplicateNameCheck"));
				event.preventDefault();
				return;
			}

			try {
				await Building.registration(this.form);
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
