<template>
	<b-modal
		id="addEquipmentDcu"
		ref="addEquipmentDcu"
		@shown="shown"
		@show="show"
		@hide="hide"
		@hidden="hidden"
		@ok="ok"
		@cancel="cancel"
		no-close-on-backdrop
	>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ $t("equipment.dcu.modal.add") }}</h4>
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
		<div class="svg-wrap">
			<div class="svg">
				<img src="@/assets/svg/DCU.svg" alt="" title="" />
			</div>
			<div class="svg-input">
				<b-form-group :label="$t('equipment.dcu.modal.dcuId')" label-for="">
					<b-form-input v-model="form.dcuId" :placeholder="$t('common.placeholder.dcuId')"></b-form-input>
				</b-form-group>
				<input-ip v-model="form.dcuIp" :label="$t('equipment.dcu.modal.dcuIp')" />
				<input-ip v-model="form.routerIp" :label="$t('equipment.dcu.modal.routerIp')" />
				<input-location :label="$t('equipment.dcu.modal.installLocation')" :latitude.sync="form.latitude" :longitude.sync="form.longitude" />
			</div>
		</div>
	</b-modal>
</template>

<script>
import InputIp from "@/components/InputIp";
import InputLocation from "@/components/InputLocation";
export default {
	components: { InputIp, InputLocation },
	data() {
		return {
			form: {
				dcuId: "",
				dcuIp: "",
				routerIp: "",
				latitude: 3,
				longitude: 3
			}
		};
	},
	methods: {
		show() {
			// this.states.regionSeqState = null;
			// this.states.estateSeqState = null;
			// this.states.buildingNameState = null;
			// this.states.buildingNameCheckState = null;
			// this.form.regionSeq = 0;
			// this.form.estateSeq = 0;
			// this.form.buildingName = null;
		},
		shown() {},
		hide() {},
		hidden() {},
		ok(event) {
			this.handleSubmit(event);
		},
		cancel() {},
		checkValidation() {
			// let result = this.$refs.addBuildingForm.checkValidity();
			// this.states.regionSeqState = this.form.regionSeq && this.form.regionSeq != 0 ? true : false;
			// this.states.estateSeqState = this.form.estateSeq && this.form.estateSeq != 0 ? true : false;
			// this.states.buildingNameState = this.form.buildingName ? true : false;
			// return result && this.states.regionSeqState && this.states.estateSeqState && this.states.buildingNameState;
		},
		async handleSubmit(event) {
			event.preventDefault();
			console.log(this.form);
		}
	}
};
</script>
