<template>
	<b-modal id="detailEquipmentDcu" size="xl" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ address }}</h4>
				</li>
				<li>
					<h4><b-form-input v-model="dcu.dcuId" disabled /></h4>
				</li>
				<li>
					<b-button size="sm" variant="modal-header" disabled style="display:none">
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
						<b-button variant="light" :disabled="!isDcu" @click="settingDcuTime">{{ $t("equipment.dcu.modal.button.resetTime") }}</b-button>
						<b-button variant="light" :disabled="!isDcu" @click="settingDcuReboot">{{ $t("equipment.dcu.modal.button.rebootDcu") }}</b-button>
						<b-button variant="light" :disabled="!isDcu" @click="settingDcuRescan">{{ $t("equipment.dcu.modal.button.modemRescan") }}</b-button>
					</li>
					<li v-if="tabIndex == 1">
						<b-button variant="light" :disabled="!isDcu">{{ $t("equipment.dcu.modal.button.settingInforamtion") }}</b-button>
					</li>
					<li v-if="tabIndex == 2">
						<b-button variant="light" :disabled="!isDcu">{{ $t("equipment.dcu.modal.button.settingSecurity") }}</b-button>
					</li>
					<li>
						<b-button variant="light" @click="cancel()" :disabled="isDcu">{{ $t("equipment.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
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
									<input-normal v-model="dcuType" :label="$t('equipment.dcu.modal.dcuType')" :disabled="true" />
									<input-normal v-model="wanCode" :label="$t('equipment.dcu.modal.sysWanCode')" :disabled="true" />
									<input-normal v-model="commCode" :label="$t('equipment.dcu.modal.sysCommCode')" :disabled="true" />
									<input-normal v-model="dcu.dcuCurrentTime" :label="$t('equipment.dcu.modal.dtime')" :disabled="true" />
									<input-normal v-model="dcu.sysOsVersion" :label="$t('equipment.dcu.modal.osVersion')" :disabled="true" />
									<input-normal v-model="dcu.sysFirmWareVersion" :label="$t('equipment.dcu.modal.firmwareVersion')" :disabled="true" />
								</div>
								<div class="modal-2nd-box">
									<input-ip v-model="dcu.dcuIp" :modify="true" :label="$t('equipment.dcu.modal.dcuIp')" @handle:modify="modifyDcuIp" />
									<input-normal
										v-model="dcu.dcuPort"
										:label="$t('equipment.dcu.modal.dcuPort')"
										button="수정"
										@handle:modify="modifyDcuPort"
									/>
									<input-ip
										v-model="dcu.routerIp"
										:modify="true"
										:label="$t('equipment.dcu.modal.routerIp')"
										@handle:modify="modifyRouterIp"
									/>
									<input-normal v-model="dcu.meterCount" :label="$t('equipment.dcu.modal.meterCount')" :disabled="true" />
									<input-normal v-model="dcu.sysUpTime" :label="$t('equipment.dcu.modal.upTime')" :disabled="true" />
									<input-normal v-model="mibEncrypt" :label="$t('equipment.dcu.modal.snmpEncrypt')" :disabled="true" />
									<input-normal v-model="dcuSecurityStatus" :label="$t('equipment.dcu.modal.snmpSecurityStatus')" :disabled="true" />
									<input-normal v-model="dcuStatus" :label="$t('equipment.dcu.modal.dcuStatus')" :disabled="true" />
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
														<td><b-form-input v-model="dcu.stypePeriod" /></td>
														<td><b-form-input v-model="dcu.stypeLpPeriod" /></td>
														<td>-</td>
														<td>-</td>
														<td>-</td>
														<td>-</td>
													</tr>
													<tr>
														<th>E-Type</th>
														<td>-</td>
														<td><b-form-input v-model="dcu.etypeLpPeriod" /></td>
														<td>-</td>
														<td>-</td>
														<td><b-form-input v-model="dcu.etypeTimePeriod" /></td>
														<td><b-form-input v-model="dcu.etypeTimeErrorLimit" /></td>
													</tr>
													<tr>
														<th>G-Type</th>
														<td>-</td>
														<td><b-form-input v-model="dcu.gtypeLpPeriod" /></td>
														<td><b-form-input v-model="dcu.gtypeAvgVoltagePeriod" /></td>
														<td><b-form-input v-model="dcu.gtypeInstVoltagePeriod" /></td>
														<td><b-form-input v-model="dcu.gtypeTimePeriod" /></td>
														<td><b-form-input v-model="dcu.gtypeTimeErrorLimit" /></td>
													</tr>
													<tr>
														<th>EA-Type</th>
														<td>-</td>
														<td><b-form-input v-model="dcu.eaTypeLpPeriod" /></td>
														<td><b-form-input v-model="dcu.eaTypeAvgVoltagePeriod" /></td>
														<td><b-form-input v-model="dcu.eaTypeInstVoltagePeriod" /></td>
														<td><b-form-input v-model="dcu.eaTypeTimePeriod" /></td>
														<td><b-form-input v-model="dcu.eaTypeTimeErrorLimit" /></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</b-tab>
							<b-tab :title="$t('equipment.tab.security')">
								<div class="modal-1st-box">
									<input-normal v-model="dcu.pnid" :label="$t('equipment.dcu.modal.pnID')" />
									<input-normal v-model="dcu.osPass" :label="$t('equipment.dcu.modal.osPassword')" />
									<input-normal v-model="dcu.acodeReadOnly" :label="$t('equipment.dcu.modal.acodeRO')" />
									<input-normal v-model="dcu.acodeReadWrite" :label="$t('equipment.dcu.modal.acodeRW')" />
									<input-normal v-model="dcu.snmpReadOnly" :label="$t('equipment.dcu.modal.snmpRO')" />
									<input-normal v-model="dcu.snmpReadWrite" :label="$t('equipment.dcu.modal.snmpRW')" />
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
										<b>{{ dcuStatus }}</b>
									</li>
									<li>
										<span>{{ $t("equipment.dcu.modal.dcuCoverStatus") }}</span>
										<b>{{ dcuCoverStatus }}</b>
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
							<input-location
								:label="$t('equipment.dcu.modal.installLocation')"
								:latitude.sync="dcu.latitude"
								:longitude.sync="dcu.longitude"
								:modify="true"
								@handle:modify="modifyLocation"
							/>

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
		</b-overlay>
	</b-modal>
</template>

<script>
import InputIp from "@/components/InputIp";
import InputLocation from "@/components/InputLocation";
import InputNormal from "@/components/InputNormal";
import EquipmentDcu from "@/service/equipment/dcu";

let sse;

export default {
	props: { item: { type: Object } },
	components: { InputIp, InputLocation, InputNormal },
	computed: {
		isDcu() {
			if (this.dcu === {}) {
				return false;
			} else {
				return true;
			}
		},
		address() {
			return this.dcu.regionName + " " + this.dcu.estateName + " " + this.dcu.buildingName + "동";
		},
		dcuType() {
			if (this.dcu.sysDcuType == "1") {
				return "TDU 내장된 DCU";
			} else if (this.dcu.sysDcuType == "2") {
				return "TDU 내장되지 않은 DCU";
			}

			return this.$t("common.unknown");
		},
		wanCode() {
			if (this.dcu.sysWanCode == "1") {
				return "HFC";
			} else if (this.dcu.sysWanCode == "2") {
				return "Optical";
			} else if (this.dcu.sysWanCode == "3") {
				return "LTE";
			}

			return this.$t("common.unknown");
		},
		commCode() {
			if (this.dcu.sysCommCode == "1") {
				return "HS-PLC(ISO/IEC12139-1)";
			} else if (this.dcu.sysCommCode == "2") {
				return "HPGP";
			} else if (this.dcu.sysCommCode == "3") {
				return "Wi-SUN";
			} else if (this.dcu.sysCommCode == "4") {
				return "Zigbee";
			}

			return this.$t("common.unknown");
		},
		mibEncrypt() {
			if (this.dcu.sysMibEncrypt == "0") {
				return "암호화 미적용";
			} else if (this.dcu.sysMibEncrypt == "1") {
				return "PDU의 value값 암호화";
			}

			return this.$t("common.unknown");
		},
		dcuSecurityStatus() {
			if (this.dcu.sysSecurityStatus == "0") {
				return "정상";
			} else if (this.dcu.sysSecurityStatus == "1") {
				return "DCU 보안키 Not Found";
			} else if (this.dcu.sysSecurityStatus == "2") {
				return "암호모듈 초기화 실패";
			} else if (this.dcu.sysSecurityStatus == "3") {
				return "암호모듈 연동 실패";
			} else if (this.dcu.sysSecurityStatus == "4") {
				return "암호화 실패";
			} else if (this.dcu.sysSecurityStatus == "5") {
				return "복호화 실패";
			} else if (this.dcu.sysSecurityStatus == "6") {
				return "기타(정의되지 않는 오류)";
			}

			return this.$t("common.unknown");
		},
		dcuStatus() {
			if (this.dcu.sysState == "0") {
				return "이상";
			} else if (this.dcu.sysState == "1") {
				return "정상";
			}

			return this.$t("common.unknown");
		},
		dcuCoverStatus() {
			if (this.dcu.sysState == "0") {
				return "열림";
			} else if (this.dcu.sysState == "1") {
				return "닫힘";
			}

			return this.$t("common.unknown");
		}
	},
	data() {
		return {
			dcu: {},
			form: {},
			tabIndex: 0,
			isLoading: true
		};
	},
	methods: {
		show() {
			this.isLoading = true;
		},
		shown() {
			this.getDcu({ dcuId: this.item.dcuId });
			sse = EquipmentDcu.dcuStatus(this.item.dcuId, this.item.dcuIp, 5);
			sse.onerror = function() {};
			sse.onopen = function() {};
			sse.onmessage = e => {
				const data = JSON.parse(e.data).response;
				console.log(data);
			};
		},
		hide() {
			if (sse) {
				sse.close();
				console.log("DCU Status SSE Destroyed!!");
			}
		},
		hidden() {},
		ok() {},
		cancel() {},
		async getDcu(params) {
			try {
				const response = await EquipmentDcu.info(params);
				const result = response.data.response;
				this.dcu = result;
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
		async modifyDcuIp(dcuIp) {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.dcuIp = dcuIp;
				await EquipmentDcu.updateDcuIp(params);
				this.$bvToast.toast(dcuIp + " 수정 요청하였습니다.", { title: "알림", variant: "primary", solid: true });
			} catch (error) {
				if (error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("DCU IP 설정도중 오류가 발생하였습니다.");
			}
		},
		async modifyDcuPort(port) {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.dcuPort = port;
				await EquipmentDcu.updateDcuPort(params);
				this.$bvToast.toast(port + " 수정 요청하였습니다.", { title: "알림", variant: "primary", solid: true });
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("DCU Port 설정도중 오류가 발생하였습니다.");
			}
		},
		async modifyRouterIp(routerIp) {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.routerIp = routerIp;
				await EquipmentDcu.updateRouterIp(params);
				this.$bvToast.toast(routerIp + " 수정 요청하였습니다.", { title: "알림", variant: "primary", solid: true });
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("ROUTER IP 설정도중 오류가 발생하였습니다.");
			}
		},
		async modifyLocation(latitude, longitude) {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.latitude = latitude;
				params.longitude = longitude;
				await EquipmentDcu.updateLocation(params);
				this.$bvToast.toast(`위도:${latitude}, 경도:${longitude} 수정 요청하였습니다.`, { title: "알림", variant: "primary", solid: true });
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("위치 설정도중 오류가 발생하였습니다.");
			}
		},
		async settingDcuTime() {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.dcuIp = this.dcu.dcuIp;
				const response = await EquipmentDcu.settingTime(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`시간설정 요청하였습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("위치 설정도중 오류가 발생하였습니다.");
			}
		},
		async settingDcuReboot() {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.dcuIp = this.dcu.dcuIp;
				const response = await EquipmentDcu.settingReboot(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`DCU Reboot 요청하였습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("재부팅 설정도중 오류가 발생하였습니다.");
			}
		},
		async settingDcuRescan() {
			try {
				let params = {};
				params.dcuId = this.dcu.dcuId;
				params.dcuIp = this.dcu.dcuIp;
				const response = await EquipmentDcu.settingRescan(params);
				const result = response.data.response.result;

				if (!result) {
					alert("실패하였습니다. 관리자에게 문의해주세요.");
				} else {
					this.$bvToast.toast(`모뎀 재스캔 요청하였습니다.`, { title: "알림", variant: "primary", solid: true });
				}
			} catch (error) {
				if (error.response && error.response.data.response) {
					alert(error.response.data.response.error_message);
					return;
				}

				console.log(error);
				alert("재스캔 설정도중 오류가 발생하였습니다.");
			}
		}
	}
};
</script>
<style lang="scss">
@import "~@/assets/scss/modal/modalDetailEquipmentDcu.scss";
</style>
