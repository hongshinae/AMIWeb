<template>
	<b-modal id="detailEquipmentDcu" size="xl" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ address }}</h4>
				</li>
				<li>
					<h4><input-normal v-model="dcu.dcuId" :label="$t('equipment.dcu.modal.dcuId')" /></h4>
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
						<b-tab :title="$t('equipment.tab.default')" active>
							<template #title> </template>
							<div class="modal-1st-box">
								<input-normal v-model="dcu.sysSerial" :label="$t('equipment.dcu.modal.dcuOriginalNumber')" :disabled="true" />
								<input-normal v-model="dcu.sysModel" :label="$t('equipment.dcu.modal.dcuModel')" :disabled="true" />
								<input-normal v-model="dcu.sysMac" :label="$t('equipment.dcu.modal.dcuMac')" :disabled="true" />
								<input-normal v-model="dcu.sysDcuType" :label="$t('equipment.dcu.modal.dcuType')" :disabled="true" />
								<input-normal v-model="dcu.sysWanCode" :label="$t('equipment.dcu.modal.sysWanCode')" :disabled="true" />
								<input-normal v-model="dcu.sysCommCode" :label="$t('equipment.dcu.modal.sysCommCode')" :disabled="true" />
								<input-normal v-model="dcu.dcuCurrentTime" :label="$t('equipment.dcu.modal.dtime')" :disabled="true" />
								<input-normal v-model="dcu.sysOsVersion" :label="$t('equipment.dcu.modal.osVersion')" :disabled="true" />
								<input-normal v-model="dcu.sysFirmWareVersion" :label="$t('equipment.dcu.modal.firmwareVersion')" :disabled="true" />
							</div>
							<div class="modal-2nd-box">
								<input-ip :ip="dcu.dcuIp" :modify="true" :label="$t('equipment.dcu.modal.dcuIp')" />
								<input-normal v-model="dcu.dcuPort" :label="$t('equipment.dcu.modal.dcuPort')" :modify="true" />
								<input-ip :ip="dcu.routerIp" :modify="true" :label="$t('equipment.dcu.modal.routerIp')" />
								<input-normal :label="$t('equipment.dcu.modal.meterCount')" :disabled="true" />
								<input-normal v-model="dcu.sysUpTime" :label="$t('equipment.dcu.modal.upTime')" :disabled="true" />
								<input-normal v-model="dcu.sysMibEncrypt" :label="$t('equipment.dcu.modal.snmpEncrypt')" :disabled="true" />
								<input-normal v-model="dcu.sysSecurityStatus" :label="$t('equipment.dcu.modal.snmpSecurityStatus')" :disabled="true" />
								<input-normal v-model="dcu.sysState" :label="$t('equipment.dcu.modal.dcuStatus')" :disabled="true" />
								<input-normal v-model="dcu.sysHardWareVersion" :label="$t('equipment.dcu.modal.hardwareVersion')" :disabled="true" />
								<input-normal v-model="dcu.sysMibVersion" :label="$t('equipment.dcu.modal.mibVersion')" :disabled="true" />
							</div>
						</b-tab>
						<b-tab :title="$t('equipment.tab.settings')" class="setting-info-wrap">
							<div class="modal-1st-box">
								<input-normal v-model="dcu.fepIp" :label="$t('equipment.dcu.modal.fepIpPort')" />
								<input-normal v-model="dcu.tmask" :label="$t('equipment.dcu.modal.tMask')" />
								<input-normal v-model="dcu.packetLength" :label="$t('equipment.dcu.modal.packetLength')" />
							</div>
							<div class="modal-2nd-box">
								<input-normal v-model="dcu.timeOut" :label="$t('equipment.dcu.modal.dcuFepTimeout')" />
								<input-normal v-model="dcu.trapInterval" :label="$t('equipment.dcu.modal.dcuFepTrap')" />
								<input-normal v-model="dcu.sysReset" :label="$t('equipment.dcu.modal.cpuReset')" />
							</div>
							<div class="modal-3rd-box">
								<div class="table-wrap">
									<div class="basic-table">
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
						<b-tab :title="$t('equipment.tab.security')">
							<div class="modal-1st-box">
								<input-normal v-model="dcu.pnid" :label="$t('equipment.dcu.modal.pnID')" :disabled="true" />
								<input-normal :label="$t('equipment.dcu.modal.osPassword')" :disabled="true" />
								<input-normal v-model="dcu.acodeReadOnly" :label="$t('equipment.dcu.modal.acodeRO')" :disabled="true" />
								<input-normal v-model="dcu.acodeReadWrite" :label="$t('equipment.dcu.modal.acodeRW')" :disabled="true" />
								<input-normal v-model="dcu.snmpReadOnly" :label="$t('equipment.dcu.modal.snmpRO')" :disabled="true" />
								<input-normal v-model="dcu.snmpReadWrite" :label="$t('equipment.dcu.modal.snmpRW')" :disabled="true" />
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
									<b>{{ dcu.sysState }}</b>
								</li>
								<li>
									<span>{{ $t("equipment.dcu.modal.dcuCoverStatus") }}</span>
									<b>{{ dcu.sysDcuCoverStatus }}</b>
								</li>
							</ul>
							<div class="middle">
								<ul>
									<li>
										<div class="info-box-name">
											<span>{{ $t("equipment.dcu.modal.equipmentTemperature") }}</span>
										</div>
										<div class="info-box-svgwrap">
											<div class="temperature">
												<img src="@/assets/svg/temperature.svg" />
											</div>
										</div>
										<div class="info-box-data">
											<b>{{ dcu.sysTempValue }}</b
											><span>˚c</span>
										</div>
									</li>
									<li>
										<div class="info-box-name"><span>CPU</span></div>
										<div class="info-box-svgwrap">
											<div class="monitor">
												<img src="@/assets/svg/monitor.svg" />
											</div>
										</div>
										<div class="info-box-data">
											<b>{{ dcu.sysCpuUsage }}</b
											><span>%</span>
										</div>
									</li>
									<li>
										<div class="info-box-name"><span>MEMORY</span></div>
										<div class="info-box-svgwrap">
											<div class="memory">
												<img src="@/assets/svg/memory.svg" />
											</div>
										</div>
										<div class="info-box-data">
											<b>{{ dcu.sysMemoryUsage }}</b
											><span>%</span>
										</div>
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
import EquipmentDcu from "@/service/equipment/dcu";

export default {
	props: { item: { type: Object } },
	components: { InputIp, InputLocation, InputNormal },
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
