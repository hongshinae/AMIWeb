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
				<b-form-group :label="$t('building.modal.selectRegion')" label-for="input1">
					<b-form-select
						v-model="regionSelected"
						:options="regionList"
						text-field="regionName"
						value-field="regionSeq"
						@change="searchEstates($event)"
					>
						<template #first>
							<b-form-select-option :value="0" selected>{{ $t("building.modal.selecting") }}</b-form-select-option>
						</template>
					</b-form-select>
				</b-form-group>

				<b-form-group :label="$t('building.modal.selectEstate')" label-for="">
					<b-form-select
						v-model="estateSelected"
						:options="estateList"
						text-field="estateName"
						value-field="estateSeq"
						:disabled="!estateList || estateList.length == 0"
					>
						<template #first>
							<b-form-select-option :value="0" selected>{{ estateLoading }}</b-form-select-option>
						</template>
					</b-form-select>
				</b-form-group>

				<b-form-group :label="$t('building.modal.buildingName')" label-for="">
					<b-form-input id="" placeholder="404동"></b-form-input>
				</b-form-group>

				<b-form-group :label="$t('building.modal.dcuId')" label-for="">
					<b-input-group>
						<b-form-input placeholder="4521542"></b-form-input>
						<b-input-group-append>
							<b-button variant="light">{{ $t("building.modal.button.linkCheck") }}</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-form-group>
			</div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
import Search from "@/service/search";
// import Building from "@/service/building";

export default {
	mounted() {
		Search.region()
			.then(({ data }) => {
				this.regionList = data.response;
			})
			.catch(error => {
				console.log(error);
			});
		this.searchEstates(this.regionSelected);
	},
	data() {
		return {
			regionSelected: 0,
			estateSelected: 0,
			regionList: [],
			estateList: []
		};
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
		}
	},
	methods: {
		shown() {},
		show() {
			console.log(this.regionSelected);
			this.regionSelected = 0;
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async searchEstates(value) {
			this.estateSelected = 0;

			if (value == 0) {
				this.estateList = [];
				return;
			}

			this.estateList = null;
			const response = await Search.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.estateList = result;
		}
	}
};
</script>

<style></style>
