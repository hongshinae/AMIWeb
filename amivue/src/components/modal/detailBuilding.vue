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
							:state="regionSeqState"
							@change="
								regionSeqState = null;
								searchEstates($event);
							"
						>
						</b-form-select>
					</b-form-group>

					<b-form-group>
						<template #label>{{ $t("building.modal.selectEstate") }}<span>*</span></template>
						<b-form-select
							v-model="form.estateSeq"
							:options="estateList"
							text-field="estateName"
							value-field="estateSeq"
							:disabled="!estateList || estateList.length == 0"
							:state="estateSeqState"
							@change="estateSeqState = null"
							required
						>
						</b-form-select>
					</b-form-group>

					<b-form-group label-for="buildingName" :state="buildingNameCheckState">
						<template #label>{{ $t("building.modal.buildingName") }}<span>*</span></template>
						<template #invalid-feedback>{{ buildingNameMessage }}</template>
						<b-input-group>
							<b-form-input
								id="buildingName"
								placeholder="404동"
								v-model="form.buildingName"
								:state="buildingState"
								@input="
									buildingNameState = null;
									buildingNameCheckState = null;
								"
								required
							/>
							<b-input-group-append>
								<b-button variant="light" @click="buildingNameCheck">{{ $t("building.modal.button.nameCheck") }}</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-form-group>

					<b-form-group label-for="" :state="isDcuIdCheckState">
						<template #label>{{ $t("building.modal.dcuId") }}<span>*</span></template>
						<template #invalid-feedback>{{ dcuStatusMessage }}</template>
						<b-input-group>
							<b-form-input
								v-model="form.dcuId"
								placeholder="0910233546"
								:state="isDcuIdState"
								@input="
									dcuIdState = null;
									dcuStatus = null;
								"
							></b-form-input>
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
import Search from "@/service/search";
import Building from "@/service/building";

export default {
	props: { item: { type: Object } },
	mounted() {
		Search.region()
			.then(({ data }) => {
				this.regionList = data.response;
			})
			.catch(error => {
				console.log(error);
			});
	},
	computed: {
		estateLoading() {
			if (this.estateList == null) {
				return this.$t("building.modal.loading");
			} else if (this.estateList.length == 0) {
				return this.$t("building.modal.nothing");
			} else {
				return this.$t("building.modal.selecting");
			}
		},
		buildingState() {
			if (this.buildingNameCheckState == null) {
				return this.buildingNameState;
			} else if (this.buildingNameState == null) {
				return this.buildingNameCheckState;
			} else {
				console.log(this.buildingNameCheckState, this.buildingNameState);
				return this.buildingNameCheckState && this.buildingNameState;
			}
		},
		buildingNameMessage() {
			if (!this.duplicateErrorMessage) {
				return this.$t("building.modal.validation.nameCheck");
			} else {
				return this.duplicateErrorMessage;
			}
		},
		isDcuIdState() {
			if (!this.isDcuIdCheckState) {
				return false;
			} else if (this.dcuStatus == "1") {
				return true;
			}

			return this.dcuIdState;
		},
		isDcuIdCheckState() {
			if (this.dcuStatus && this.dcuStatus != "1") {
				return false;
			}

			return true;
		},
		dcuStatusMessage() {
			if (this.dcuStatus == 0) {
				return this.$t("building.modal.validation.dcuStatus.error");
			} else if (this.dcuStatus == 2) {
				return this.$t("building.modal.validation.dcuStatus.nothing");
			} else if (this.dcuStatus == 3) {
				return this.$t("building.modal.validation.dcuStatus.registered");
			}

			return this.$t("building.modal.validation.dcuStatus.ok");
		}
	},
	data() {
		return {
			regionSeqState: null,
			estateSeqState: null,
			buildingNameState: null,
			buildingNameCheckState: null,
			dcuIdState: null,
			regionList: [],
			estateList: [],
			dcuStatus: null,
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
			this.estateList = [];
			this.regionSeqState = null;
			this.estateSeqState = null;
			this.buildingNameState = null;
			this.buildingNameCheckState = null;
			this.dcuIdState = null;
		},
		shown() {
			this.form.buildingSeq = this.item.buildingSeq;
			this.form.regionSeq = this.item.regionSeq;
			this.form.estateSeq = this.item.estateSeq;
			this.form.buildingName = this.item.buildingName;
			this.form.dcuId = this.item.dcuId;
			this.searchEstates(this.item.regionSeq);
		},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		checkValidation() {
			let result = this.$refs.detailBuildingForm.checkValidity();
			result &= this.regionSeqState = this.form.regionSeq && this.form.regionSeq != 0 ? true : false;
			result &= this.estateSeqState = this.form.estateSeq && this.form.estateSeq != 0 ? true : false;
			this.buildingNameState = this.form.buildingName ? null : false;

			return result;
		},
		async searchEstates(value) {
			this.estateList = null;

			try {
				const response = await Search.estate({ regionSeq: value });
				const estates = response.data.response;
				this.estateList = estates;
			} catch (error) {
				this.estateList = [];
			}
		},
		async buildingNameCheck() {
			if (this.checkValidation()) {
				try {
					const response = await Building.namecheck(this.form);
					this.buildingNameCheckState = !response.data.response.result;
				} catch (error) {
					this.buildingNameCheckState = false;

					if (error && error.status == 500) {
						this.duplicateErrorMessage = "알 수 없는 오류";
					}
				}
			}
		},
		async dcuIdCheck() {
			this.dcuIdState = this.form.dcuId ? null : false;

			if (this.dcuIdState != false) {
				const response = await Building.dcucheck(this.form);
				this.dcuStatus = response.data.response.statusCode;
			}
		},
		handleSubmit(event) {
			if (!this.buildingNameCheckState) {
				alert(this.$t("building.modal.validation.duplicateNameCheck"));
				event.preventDefault();
			} else if (!this.isDcuIdCheckState) {
				alert(this.$t("building.modal.validation.duplicateLinkCheck"));
				event.preventDefault();
			}
		}
	}
};
</script>

<style></style>
