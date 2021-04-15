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
					<li>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.informationSetting") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.timeSetting") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.time1") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.time2") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.security") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.deleteDcu") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.rebootDcu") }}</b-button>
						<b-button variant="light">{{ $t("equipment.dcu.modal.button.reskinModem") }}</b-button>
					</li>
					<li>
						<b-button variant="light" @click="cancel()">{{ $t("equipment.button.cancel") }}</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="center">
			<ul class="left">
				<li>
					<div class="modal-1st-box">
						<b-form-group label="DCU 동작시간" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="DCU 고유번호" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="DCU 모델번호" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="MAC 번호" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<input-ip :label="$t('equipment.dcu.modal.dcuIp')" />
						<input-ip :label="$t('equipment.dcu.modal.routerIp')" />
						<b-form-group label="T-Mask" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="Master mod. A" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="Master mod. B" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="Master mod. C" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
					</div>
					<div class="modal-2nd-box">
						<b-form-group label="간선망" label-for="">
							<b-form-select>
								<b-form-select-option value="i1">LTE</b-form-select-option>
								<b-form-select-option value="i1">5G</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group label="인입망" label-for="">
							<b-form-select>
								<b-form-select-option value="i1">HS-PLC</b-form-select-option>
								<b-form-select-option value="i1">HS-PLC2</b-form-select-option>
							</b-form-select>
						</b-form-group>
						<b-form-group label=">DCU 종류" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="Meter count" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="검침 Agent" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="SNMP (RO)" label-for="">
							<b-form-input id="" disabled></b-form-input>
						</b-form-group>
						<b-form-group label="SNMP (RW)" label-for="">
							<b-form-input id="" disabled></b-form-input>
						</b-form-group>
						<b-form-group label="FEP IP / PORT" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="DCU 현재시간" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
						<b-form-group label="MAC 번호" label-for="">
							<b-form-input id=""></b-form-input>
						</b-form-group>
					</div>
					<div class="modal-3rd-box">
						<div class="table-wrap">
							<div class="basic-table">
								<table class="table b-table" id="">
									<thead role="rowgroup" class="">
										<tr role="row" class="">
											<th class=""><div>Meter Type</div></th>
											<th class=""><div>현재 검침</div></th>
											<th class=""><div>LP</div></th>
											<th class=""><div>평균 전압전류</div></th>
											<th class=""><div>순시 전압전류</div></th>
											<th class=""><div>시간 확인주기</div></th>
											<th class=""><div>시간오차 한계</div></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th class="">S-Type</th>
											<td class="">15분</td>
											<td class="">15분</td>
											<td class="">60분</td>
											<td class="">60분</td>
											<td class="">15분</td>
											<td class="">1분</td>
										</tr>
										<tr>
											<th class="">E-Type</th>
											<td class="">15분</td>
											<td class="">15분</td>
											<td class="">60분</td>
											<td class="">60분</td>
											<td class="">15분</td>
											<td class="">1분</td>
										</tr>
										<tr>
											<th class="">G-Type</th>
											<td class="">15분</td>
											<td class="">15분</td>
											<td class="">60분</td>
											<td class="">60분</td>
											<td class="">15분</td>
											<td class="">1분</td>
										</tr>
										<tr>
											<th class="">AE-Type</th>
											<td class="">15분</td>
											<td class="">15분</td>
											<td class="">60분</td>
											<td class="">60분</td>
											<td class="">15분</td>
											<td class="">1분</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="modal-4th-box">
						<div class="info-box">
							<ul class="top">
								<li><span>DCU 동작상태</span><b>정상</b></li>
								<li><span>커버 개폐상태</span><b>close</b></li>
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
											<b>154</b>
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
											<b>154</b>
											<span>BPS</span>
										</b-col>
									</b-row>
								</li>
							</ul>
						</div>
						<b-row class="double-input">
							<b-col cols="6">
								<b-form-group label="OS 버전" label-for="" c->
									<b-form-input id=""></b-form-input>
								</b-form-group>
							</b-col>
							<b-col cols="6">
								<b-form-group label="펌웨어 버전" label-for="">
									<b-form-input id=""></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row class="double-input">
							<b-col cols="6">
								<b-form-group label="하드웨어 버전" label-for="" c->
									<b-form-input id=""></b-form-input>
								</b-form-group>
							</b-col>
							<b-col cols="6">
								<b-form-group label="SNMP 암호화" label-for="">
									<b-form-input id=""></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>

						<b-form-group label="위치 정보" label-for="" class="install-Location">
							<b-input-group :prepend="$t('common.placeholder.latitude')">
								<b-form-input type="number" :min="-90" :max="90" :placeholder="$t('common.placeholder.latitude')"></b-form-input>
							</b-input-group>
							<b-input-group :prepend="$t('common.placeholder.longitude')">
								<b-form-input type="number" :min="-90" :max="90" :placeholder="$t('common.placeholder.longitude')"></b-form-input>
							</b-input-group>
						</b-form-group>

						<div class="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
								width="100%"
								height="252"
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
import EquipmentDcu from "@/service/equipment/dcu";

export default {
	props: { item: { type: Object } },
	components: { InputIp },
	computed: {
		address() {
			return "서울 서울아파트 101동 101호";
		}
	},
	data() {
		return {
			dcu: {}
		};
	},
	methods: {
		show() {},
		shown() {
			console.log(this.item);
			this.getMeter({ dcuId: this.item.dcuId });
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async getMeter(params) {
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

<style lang="scss">
.install-Location {
	.input-group {
		margin-bottom: 5px;
	}
}
</style>
