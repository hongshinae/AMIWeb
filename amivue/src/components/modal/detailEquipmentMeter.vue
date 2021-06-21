<template>
	<b-modal id="detailEquipmentMeter" size="lg" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ address }}</h4>
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
						<b-button variant="light" @click="deleteMeter()">Meter 삭제</b-button>
					</li>
					<li>
						<b-button variant="light" @click="cancel()">{{ $t("building.modal.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
			<div class="modal-content-wrap">
				<div class="svg-wrap">
					<div class="svg">
						<img src="@/assets/svg/meter.svg" alt="" title="" />
					</div>
					<div class="svg-input">
						<ul>
							<li>
								<div class="meter-value">{{ lpUp }}<span class="blink">.</span>{{ lpDown }}</div>
								<input-normal v-model="meter.meterId" :label="$t('equipment.meter.modal.meterId')" :disabled="true" />
								<input-normal v-model="meter.mac" :label="$t('equipment.meter.modal.mac')" :disabled="true" />
								<input-normal v-model="meter.deviceName" :label="$t('equipment.meter.modal.deviceName')" :disabled="true" />
							</li>
							<li>
								<input-normal v-model="meter.dcuId" :label="$t('equipment.meter.modal.dcuId')" :disabled="true" />
								<input-normal v-model="meter.dcuIp" :label="$t('equipment.meter.modal.dcuIp')" :disabled="true" />
								<input-normal
									v-model="meter.meterReadingDay"
									:label="$t('equipment.meter.modal.meterReadingDay')"
									button="검침일"
									@handle:action="settingReadingDay"
								/>
								<input-normal
									:value="$moment(meter.meterTime).format('YYYY-MM-DD HH:mm:ss')"
									:label="$t('equipment.meter.modal.meterTime')"
									button="시각설정"
									@handle:action="settingTime"
								/>
								<input-normal
									v-model="meter.lpPeriod"
									:label="$t('equipment.meter.modal.lpPeriod')"
									button="수정"
									@handle:action="settingPeriod"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</b-overlay>
	</b-modal>
</template>

<script>
import EquipmentMeter from "@/service/equipment/meter";
import InputNormal from "@/components/InputNormal";

export default {
	props: { item: { type: Object } },
	components: { InputNormal },
	computed: {
		lpUp() {
			if (this.meter && this.meter.lp) {
				return String(this.meter.lp).split(".")[0];
			} else {
				return 0;
			}
		},
		lpDown() {
			if (this.meter && this.meter.lp) {
				return String(Math.floor(this.meter.lp * 100) / 100).split(".")[1];
			} else {
				return 0;
			}
		},
		address() {
			return this.item.regionName + " " + this.item.estateName + " " + this.item.buildingName + "동 " + this.item.houseName + "호";
		}
	},
	data() {
		return {
			meter: {},
			isLoading: true
		};
	},
	methods: {
		show() {
			this.isLoading = true;
		},
		shown() {
			this.getMeter({ estateSeq: this.item.estateSeq, meterId: this.item.meterId });
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async getMeter(params) {
			try {
				const response = await EquipmentMeter.info(params);
				const result = response.data.response;
				this.meter = result;
				this.isLoading = false;
			} catch (error) {
				this.isLoading = false;

				if (error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				alert("오류가 발생하였습니다.");
			}
		},
		deleteMeter() {
			this.$bvModal
				.msgBoxConfirm("삭제 하시겠습니까?")
				.then(async value => {
					if (!value) {
						return;
					}

					try {
						const response = await EquipmentMeter.delete({ meterId: this.currentMeterId });
						const result = response.data.response;

						if (result.result) {
							this.$bvToast.toast(`삭제 되었습니다.`, { title: "알림", variant: "primary", solid: true });
							this.$bvModal.hide("detailEquipmentMeter");
						} else {
							alert("삭제 실패하였습니다.");
						}
					} catch (error) {
						console.log(error.response);

						if (error.response) {
							alert(error.response.error_message);
							return;
						}

						alert("오류가 발생하였습니다.");
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		async settingTime() {
			try {
				let params = {};
				params.dcuId = this.meter.dcuId;
				params.dcuIp = this.meter.dcuIp;
				params.meterId = this.meter.meterId;
				const response = await EquipmentMeter.settingTime(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`시각설정 요청하였습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("시간 설정도중 오류가 발생하였습니다.");
			}
		},
		async settingReadingDay(day) {
			try {
				let params = {};
				params.dcuId = this.meter.dcuId;
				params.dcuIp = this.meter.dcuIp;
				params.meterId = this.meter.meterId;
				params.day = day;
				const response = await EquipmentMeter.settingReadingDay(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`검침일 요청되었습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("검침일 설정도중 오류가 발생하였습니다.");
			}
		},
		async settingPeriod(period) {
			try {
				let params = {};
				params.dcuId = this.meter.dcuId;
				params.dcuIp = this.meter.dcuIp;
				params.meterId = this.meter.meterId;
				params.period = period;
				const response = await EquipmentMeter.settingPeriod(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`LP주기 변경 요청되었습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("LP주기 설정도중 오류가 발생하였습니다.");
			}
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/modal/modalDetailEquipmentMeter.scss";
</style>
