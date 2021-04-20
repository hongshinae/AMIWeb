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
		<div class="modal-content-wrap">
			<div class="svg-wrap">
				<div class="svg">
					<img src="@/assets/svg/meter.svg" alt="" title="" />
				</div>
				<div class="svg-input">
					<ul>
						<li>
							<div class="meter-value">10000<span class="blink">.</span>00</div>
							<b-form-group :label="$t('equipment.meter.modal.meterId')" label-for="">
								<b-form-input v-model="meter.meterId" disabled></b-form-input>
							</b-form-group>
							<b-form-group :label="$t('equipment.meter.modal.mac')" label-for="">
								<b-form-input v-model="meter.mac" disabled></b-form-input>
							</b-form-group>
							<b-form-group :label="$t('equipment.meter.modal.deviceName')" label-for="">
								<b-form-input v-model="meter.deviceName" disabled></b-form-input>
							</b-form-group>
						</li>
						<li>
							<b-form-group :label="$t('equipment.meter.modal.dcuId')" label-for="">
								<b-form-input v-model="meter.dcuId" disabled></b-form-input>
							</b-form-group>
							<b-form-group :label="$t('equipment.meter.modal.meterReadingDay')" label-for="">
								<b-input-group>
									<b-form-input v-model="meter.meterReadingDay" readonly></b-form-input>
									<b-input-group-append>
										<b-button variant="light">{{ $t("equipment.button.meterReadingDay") }}</b-button>
									</b-input-group-append>
								</b-input-group>
							</b-form-group>
							<b-form-group :label="$t('equipment.meter.modal.meterTime')" label-for="">
								<b-input-group>
									<b-form-input :value="$moment(meter.meterTime).format('YYYY-MM-DD HH:mm:ss')" readonly></b-form-input>
									<b-input-group-append>
										<b-button variant="light">{{ $t("equipment.button.meterTime") }}</b-button>
									</b-input-group-append>
								</b-input-group>
							</b-form-group>
							<b-form-group :label="$t('equipment.meter.modal.lpPeriod')" label-for="">
								<b-input-group>
									<b-form-input v-model="meter.lpPeriod" placeholder="15" readonly></b-form-input>
									<b-input-group-append>
										<b-button variant="light">{{ $t("equipment.button.lpPeriod") }}</b-button>
									</b-input-group-append>
								</b-input-group>
							</b-form-group>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</b-modal>
</template>

<script>
import EquipmentMeter from "@/service/equipment/meter";

export default {
	props: { item: { type: Object } },
	computed: {
		address() {
			return "서울 서울아파트 101동 101호";
		}
	},
	data() {
		return {
			meter: {}
		};
	},
	methods: {
		show() {},
		shown() {
			console.log(this.item);
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
			} catch (error) {
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
							alert("삭제 되었습니다.");
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
		}
	}
};
</script>

<style>
/* for MS계열 브라우저 */
@keyframes blink {
	0% {
		color: rgba(255, 255, 255, 0.5);
	}
	50% {
		color: rgba(255, 255, 255, 1);
	}
}

/* for Chrome, Safari */
@-webkit-keyframes blink {
	0% {
		color: rgba(255, 255, 255, 0.5);
	}
	50% {
		color: rgba(255, 255, 255, 1);
	}
}
.blink {
	animation: blink 1s step-end infinite;
	-webkit-animation: blink 1s step-end infinite;
}
</style>
