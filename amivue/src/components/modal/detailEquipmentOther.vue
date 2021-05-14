<template>
	<b-modal id="detailEquipmentOther" size="lg" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li><h4>서울 서울아파트 101동 101호</h4></li>
				<li>
					<b-form-group>
						<b-form-input id="" placeholder="NS09_0101A"></b-form-input>
					</b-form-group>
				</li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ cancel }">
			<div class="btn-wrap">
				<ul>
					<li>
						<b-button variant="light" style="display:none">검침기 삭제</b-button>
					</li>
					<li>
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
			<div class="modal-content-wrap">
				<div class="svg-wrap">
					<div class="svg">
						<img src="@/assets/svg/waterworks.svg" alt="" title="" />
					</div>
					<div class="svg-input other">
						<ul>
							<li>
								<h4>{{ readingType }}</h4>
								<div class="meter-value">00000<span class="blink">.</span>00</div>
								<input-normal v-model="other.meterId" :label="$t('equipment.other.modal.meterId')" :disabled="true" />
								<input-normal v-model="other.mac" :label="$t('equipment.other.modal.mac')" :disabled="true" />
								<input-normal v-model="other.deviceName" :label="$t('equipment.other.modal.deviceName')" :disabled="true" />
							</li>
							<li>
								<input-normal v-model="other.gatewayId" :label="$t('equipment.other.modal.gatewayId')" :disabled="true" />
								<input-normal v-model="other.otherReadingDay" :label="$t('equipment.other.modal.readingDay')" :disabled="true" />
								<input-normal
									:value="$moment(other.meterTime).format('YYYY-MM-DD HH:mm:ss')"
									:label="$t('equipment.other.modal.meterTime')"
									:disabled="true"
								/>
								<input-normal v-model="other.lpPeriod" :label="$t('equipment.other.modal.lpPeriod')" :disabled="true" />
								<input-normal v-model="readingType" :label="$t('equipment.other.modal.readingType')" :disabled="true" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</b-overlay>
	</b-modal>
</template>

<script>
import EquipmentOther from "@/service/equipment/other";
import InputNormal from "@/components/InputNormal";

export default {
	props: { item: { type: Object } },
	components: { InputNormal },
	computed: {
		lpUp() {
			if (this.meter && this.other.lp) {
				return String(this.other.lp).split(".")[0];
			} else {
				return 0;
			}
		},
		lpDown() {
			if (this.meter && this.other.lp) {
				return String(Math.floor(this.other.lp * 100) / 100).split(".")[1];
			} else {
				return 0;
			}
		},
		address() {
			return "서울 서울아파트 101동 101호";
		},
		readingType() {
			if (this.other.readingType === 2) {
				return "가스";
			} else if (this.other.readingType === 3) {
				return "수도";
			} else if (this.other.readingType === 4) {
				return "온수";
			} else if (this.other.readingType === 5) {
				return "난방";
			}

			return this.$t("common.unknown");
		}
	},
	data() {
		return {
			other: {},
			isLoading: true
		};
	},
	methods: {
		show() {
			this.isLoading = true;
		},
		shown() {
			this.getOther({ estateSeq: this.item.estateSeq, gatewayId: this.item.gatewayId, meterId: this.item.meterId });
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async getOther(params) {
			try {
				const response = await EquipmentOther.info(params);
				const result = response.data.response;
				this.other = result;
				this.isLoading = false;
			} catch (error) {
				this.isLoading = false;

				if (error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				alert("오류가 발생하였습니다.");
			}
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/modal/modalCommon.scss";
@import "~@/assets/scss/modal/modalDetailEquipmentOther.scss";
</style>
