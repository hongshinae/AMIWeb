<template>
	<b-modal id="addEstate" :title="$t('estate.modal.add')" @show="showAddEstate" @hidden="hiddenAddEstate" @ok="submitAddEstate">
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
					<li>
						<!--modal footer left button wrap-->
					</li>
					<li>
						<b-button variant="light" @click="ok()">정보 수정</b-button>
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="center">
			<div class="modal-1st-box">
				<b-form-group :label="$t('estate.modal.estateId')">
					<b-form-input :placeholder="$t('estate.modal.estateId')" required />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.houseCount')">
					<b-form-input :placeholder="$t('estate.modal.houseCount')" required />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.regionSelect')">
					<b-form-select :value="selectedRegion" :options="regionList" text-field="regionName" value-field="regionSeq" required />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.person1')">
					<b-form-input :placeholder="$t('estate.modal.person1')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.person2')">
					<b-form-input :placeholder="$t('estate.modal.person2')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.dcuCount')">
					<b-form-input :placeholder="$t('estate.modal.dcuCount')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.meterCount')">
					<b-form-input :placeholder="$t('estate.modal.meterCount')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.waterCount')">
					<b-form-input :placeholder="$t('estate.modal.waterCount')" />
				</b-form-group>
			</div>
			<div class="modal-2nd-box">
				<b-form-group :label="$t('estate.modal.estateName')">
					<b-form-input :placeholder="$t('estate.modal.estateName')" required />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.address')">
					<b-form-input :placeholder="$t('estate.modal.addressEx')" required />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.tel')">
					<b-form-input :placeholder="$t('estate.modal.telEx')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.person1Tel')">
					<b-form-input :placeholder="$t('estate.modal.person1Tel')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.person2Tel')">
					<b-form-input :placeholder="$t('estate.modal.person2Tel')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.modemCount')">
					<b-form-input :placeholder="$t('estate.modal.modemCount')" />
				</b-form-group>
				<b-form-group :label="$t('estate.modal.gasCount')">
					<b-form-input :placeholder="$t('estate.modal.buildingHouseCount')" />
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
						<b-form-checkbox value="1">{{ $t("estate.modal.powerType") }} </b-form-checkbox>
						<b-form-checkbox value="2">{{ $t("estate.modal.gasType") }} </b-form-checkbox>
						<b-form-checkbox value="3">{{ $t("estate.modal.waterType") }} </b-form-checkbox>
						<b-form-checkbox value="4">{{ $t("estate.modal.hotType") }} </b-form-checkbox>
						<b-form-checkbox value="5">{{ $t("estate.modal.heatingType") }} </b-form-checkbox>
					</b-form-checkbox-group>
				</b-form-group>
			</div>
			<div class="modal-4th-box">
				<b-form-group :label="$t('estate.modal.metering')">
					<b-input-group>
						<ul class="bg">
							<li>
								<b-form-group :label="$t('estate.modal.powerDay')">
									<b-form-input :placeholder="$t('estate.modal.meteringDefault')" />
								</b-form-group>
							</li>
							<li>
								<b-form-group :label="$t('estate.modal.gasDay')">
									<b-form-input :placeholder="$t('estate.modal.meteringDefault')" />
								</b-form-group>
							</li>
							<li>
								<b-form-group :label="$t('estate.modal.waterDay')">
									<b-form-input :placeholder="$t('estate.modal.meteringDefault')" />
								</b-form-group>
							</li>
							<li>
								<b-form-group :label="$t('estate.modal.hotDay')">
									<b-form-input :placeholder="$t('estate.modal.meteringDefault')" />
								</b-form-group>
							</li>
							<li>
								<b-form-group :label="$t('estate.modal.heatingDay')">
									<b-form-input :placeholder="$t('estate.modal.meteringDefault')" />
								</b-form-group>
							</li>
						</ul>
						<b-input-group-append>
							<b-button variant="light">{{ $t("estate.modal.changeDay") }}</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-form-group>
			</div>
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
			selectedRegion: "1"
		};
	},
	methods: {
		showAddEstate() {
			console.log("show");
		},
		hiddenAddEstate() {
			console.log("hidden");
		},
		submitAddEstate() {
			console.log("submit button");
		}
	}
};
</script>

<style></style>
