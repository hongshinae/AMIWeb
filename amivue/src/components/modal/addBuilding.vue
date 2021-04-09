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
							:state="regionSeqState"
							@change="
								regionSeqState = null;
								searchEstates($event);
							"
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
							:options="estateList"
							text-field="estateName"
							value-field="estateSeq"
							:disabled="!estateList || estateList.length == 0"
							:state="estateSeqState"
							@change="estateSeqState = null"
							required
						>
							<template #first>
								<b-form-select-option :value="0" selected>{{ estateLoading }}</b-form-select-option>
							</template>
						</b-form-select>
					</b-form-group>

					<b-form-group label-for="buildingName" :state="buildingNameCheckState">
						<template #label>{{ $t("building.modal.buildingName") }}<span>*</span></template>
						<template #invalid-feedback>{{ duplicateMessage }}</template>
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
	mounted() {
		Search.region()
			.then(({ data }) => {
				this.regionList = data.response;
			})
			.catch(error => {
				console.log(error);
			});
		this.searchEstates(this.form.regionSeq);
	},
	computed: {
		buildingState() {
			if (this.buildingNameCheckState == null) {
				return this.buildingNameState;
			} else {
				return this.buildingNameCheckState && this.buildingNameState;
			}
		},
		estateLoading() {
			if (this.estateList == null) {
				return this.$t("building.modal.loading");
			} else if (this.estateList.length == 0) {
				return this.$t("building.modal.nothing");
			} else {
				return this.$t("building.modal.selecting");
			}
		},
		duplicateMessage() {
			if (!this.duplicateErrorMessage) {
				return this.$t("building.modal.validation.nameCheck");
			} else {
				return this.duplicateErrorMessage;
			}
		}
	},
	data() {
		return {
			regionSeqState: null,
			estateSeqState: null,
			buildingNameState: null,
			buildingNameCheckState: null,
			duplicateErrorMessage: null,
			regionList: [],
			estateList: [],
			form: {
				regionSeq: 0,
				estateSeq: 0,
				buildingName: null
			}
		};
	},
	methods: {
		shown() {},
		show() {
			this.estateList = [];
			this.regionSeqState = null;
			this.estateSeqState = null;
			this.buildingNameState = null;
			this.buildingNameCheckState = null;
			this.form.regionSeq = 0;
			this.form.estateSeq = 0;
			this.form.buildingName = null;
		},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		checkValidation() {
			let result = this.$refs.addBuildingForm.checkValidity();
			result &= this.regionSeqState = this.form.regionSeq && this.form.regionSeq != 0 ? true : false;
			result &= this.estateSeqState = this.form.estateSeq && this.form.estateSeq != 0 ? true : false;
			this.buildingNameState = this.form.buildingName ? null : false;
			return result;
		},
		async searchEstates(value) {
			this.form.estateSeq = 0;

			if (value == 0) {
				this.estateList = [];
				return;
			}

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
		async handleSubmit(event) {
			if (!this.buildingNameCheckState) {
				alert(this.$t("building.modal.validation.duplicateCheck"));
				event.preventDefault();
				return;
			}

			try {
				await Building.registration(this.form);
				this.$emit("handle:searchItem");
			} catch (error) {
				this.buildingNameCheckState = false;
				this.duplicateErrorMessage = "알 수 없는 오류";
				event.preventDefault();
			}
		}
	}
};
</script>

<style></style>
