<template>
	<b-modal id="detailEquipmentDcu" size="xl" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ address }}</h4>
				</li>
				<li>
					<b-button size="sm" variant="modal-header" disabled>
						SNMP READ
					</b-button>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ cancel }">
			<div class="btn-wrap">
				<ul>
					<li v-if="tabIndex == 0">
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.informationSetting") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.timeSetting") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.time1") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.time2") }}</b-button>
					</li>
					<li v-if="tabIndex == 1">
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.security") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.deleteDcu") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.rebootDcu") }}</b-button>
					</li>
					<li v-if="tabIndex == 2">
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.reskinModem") }}</b-button>
					</li>
					<li>
						<b-button variant="light" @click="cancel()">{{ $t("equipment.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="modal-content-wrap">
			<ul class="left-wrap">
				<li class="left">
					<b-tabs v-model="tabIndex" :no-nav-style="true">
						<b-tab title="기본설정" active>
							<template #title> </template>
							<div class="modal-1st-box">
								<input-normal v-model="dcu.sysSerial" :label="$t('equipment.dcu.modal.dcuOriginalNumber')" />
								<input-normal v-model="dcu.sysModel" :label="$t('equipment.dcu.modal.dcuModel')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuMac')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuType')" />
								<input-select v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.network1')" :options="network1" />
								<input-select v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.network1')" :options="network2" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dtime')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.osVersion')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.firmwareVersion')" />
							</div>
							<div class="modal-2nd-box">
								<input-ip :ip="dcu.dcuIp" :port="dcu.dcuPort" :modify="true" :label="$t('equipment.dcu.modal.dcuIp')" />
								<input-ip :ip="dcu.dcuIp" :modify="true" :label="$t('equipment.dcu.modal.routerIp')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.meterType.title')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.itime')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.snmpEncrypt')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.snmpFunctionState')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuStatus')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.hardwareVersion')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.mibVersion')" />
								<b-form-group label="ROUTER IP" label-for="">
									<b-input-group>
										<b-form-input placeholder="10"></b-form-input>
										<b-input-group-append>
											<b-button variant="light">검침일</b-button>
										</b-input-group-append>
									</b-input-group>
								</b-form-group>
							</div>
						</b-tab>
						<b-tab title="설정 정보" class="setting-info-wrap">
							<div class="modal-1st-box">
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.fepIpPort')" />
							</div>
							<div class="modal-2nd-box">
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuFepTimeout')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuFepTrap')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.cpuReset')" />
							</div>
							<div class="modal-3rd-box">
								<div class="table-wrap">
									<div class="basic-table">
										<b-table :striped="true" :items="meterTypeList"> </b-table>
										<table class="table b-table">
											<thead role="rowgroup">
												<tr role="row">
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.title") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.period") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.lpPeriod") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.avgVoltagePeriod") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.instVoltagePeriod") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.timePeriod") }}</div>
													</th>
													<th>
														<div>{{ $t("equipment.dcu.modal.meterType.timeErrorLimit") }}</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th>S-Type</th>
													<td>{{ dcu.stypePeriod }}</td>
													<td>{{ dcu.stypeLpPeriod }}</td>
													<td>-</td>
													<td>-</td>
													<td>-</td>
													<td>-</td>
												</tr>
												<tr>
													<th>E-Type</th>
													<td>-</td>
													<td>{{ dcu.etypeLpPeriod }}</td>
													<td>-</td>
													<td>-</td>
													<td>{{ dcu.etypeTimePeriod }}</td>
													<td>{{ dcu.etypeTimeErrorLimit }}</td>
												</tr>
												<tr>
													<th>G-Type</th>
													<td>-</td>
													<td>{{ dcu.gtypeLpPeriod }}</td>
													<td>{{ dcu.gtypeAvgVoltagePeriod }}</td>
													<td>{{ dcu.gtypeInstVoltagePeriod }}</td>
													<td>{{ dcu.gtypeTimePeriod }}</td>
													<td>{{ dcu.gtypeTimeErrorLimit }}</td>
												</tr>
												<tr>
													<th>EA-Type</th>
													<td>-</td>
													<td>{{ dcu.eaTypeLpPeriod }}</td>
													<td>{{ dcu.eaTypeAvgVoltagePeriod }}</td>
													<td>{{ dcu.eaTypeInstVoltagePeriod }}</td>
													<td>{{ dcu.eaTypeTimePeriod }}</td>
													<td>{{ dcu.eaTypeTimeErrorLimit }}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</b-tab>
						<b-tab title="보안 정보">
							<div class="modal-1st-box">
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.pnID')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.osPassword')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.acodeRO')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.acodeRW')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.snmpRO')" />
								<input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.snmpRW')" />
							</div>
							<div class="modal-2nd-box"></div>
						</b-tab>
					</b-tabs>
				</li>
				<li class="right">
					<div class="modal-4th-box">
						<div class="info-box">
							<ul class="top">
								<li>
									<span>{{ $t("equipment.dcu.modal.dcuStatus") }}</span>
									<b>{{ dcu.dcuStatus }}</b>
								</li>
								<li>
									<span>{{ $t("equipment.dcu.modal.dcuCoverStatus") }}</span>
									<b>{{ dcu.dcuCoverStatus }}</b>
								</li>
							</ul>
							<div class="middle">
								<ul>
									<li>
										<div class="info-box-name"><span>설비온도</span></div>
										<div class="info-box-svgwrap">
											<div class="temperature">
												<img src="@/assets/svg/temperature.svg" />
											</div>
										</div>
										<div class="info-box-data"><b>34.4</b><span>˚c</span></div>
									</li>
									<li>
										<div class="info-box-name"><span>CPU</span></div>
										<div class="info-box-svgwrap">
											<div class="monitor">
												<img src="@/assets/svg/monitor.svg" />
											</div>
										</div>
										<div class="info-box-data"><b>99</b><span>%</span></div>
									</li>
									<li>
										<div class="info-box-name"><span>MEMORY</span></div>
										<div class="info-box-svgwrap">
											<div class="memory">
												<img src="@/assets/svg/memory.svg" />
											</div>
										</div>
										<div class="info-box-data"><b>15</b><span>%</span></div>
									</li>
								</ul>
							</div>
							<ul class="bottom">
								<li>
									<b-row>
										<b-col>
											<div>BPS UP</div>
											<div class="small">Bit / SEC</div>
										</b-col>
										<b-col>
											<b>{{ dcu.sysUpBps }}</b>
											<span>BPS</span>
										</b-col>
									</b-row>
								</li>
								<li>
									<b-row>
										<b-col>
											<div>BPS DOWN</div>
											<div class="small">Bit / SEC</div>
										</b-col>
										<b-col>
											<b>{{ dcu.sysDownBps }}</b>
											<span>BPS</span>
										</b-col>
									</b-row>
								</li>
							</ul>
						</div>
						<input-location :label="$t('equipment.dcu.modal.installLocation')" :latitude.sync="dcu.latitude" :longitude.sync="dcu.longitude" />

						<div class="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
								width="100%"
								height="200"
								style="border:0;"
								allowfullscreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</b-modal>
</template>

<script>
import InputIp from "@/components/InputIp";
import InputLocation from "@/components/InputLocation";
import InputNormal from "@/components/InputNormal";
import InputSelect from "@/components/InputSelect";
import EquipmentDcu from "@/service/equipment/dcu";

export default {
	props: { item: { type: Object } },
	components: { InputIp, InputLocation, InputNormal, InputSelect },
	computed: {
		address() {
			return "서울 서울아파트 101동 101호";
		},
		meterTypeList() {
			return [];
		}
	},
	data() {
		return {
			dcu: {},
			network1: [
				{ text: "LTE", value: 1 },
				{ text: "5G", value: 2 }
			],
			network2: [
				{ text: "HS-PLC", value: 1 },
				{ text: "HS-PLC2", value: 2 }
			],
			form: {},
			tabIndex: 0
		};
	},
	methods: {
		show() {},
		shown() {
			this.getDcu({ dcuId: this.item.dcuId });
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async getDcu(params) {
			try {
				const response = await EquipmentDcu.info(params);
				const result = response.data.response;
				this.dcu = result;
			} catch (error) {
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
