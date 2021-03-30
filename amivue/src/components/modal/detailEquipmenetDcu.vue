<template>
	<b-modal id="detailEquipmenetDcu" size="xl" title="서울 아파트">
		<div class="modal-content-wrap modal-equip">
			<form>
				<b-row align-h="center">
					<b-form>
						<ul class="left">
							<li>
								<div class="modal-1st-box">
									<b-form-group label="DCU 동작시간" label-for="">
										<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
									</b-form-group>
									<b-form-group label="DCU 고유번호" label-for="">
										<b-form-input id="" placeholder="cnu111"></b-form-input>
									</b-form-group>
									<b-form-group label="DCU 모델번호" label-for="">
										<b-form-input id="" placeholder="a12d125"></b-form-input>
									</b-form-group>
									<b-form-group label="MAC 번호" label-for="">
										<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
									</b-form-group>
									<b-form-group label="DCU IP / PORT" label-for="">
										<b-form-input id="" placeholder="20.200.11.11 / 1234"></b-form-input>
									</b-form-group>
									<b-form-group label="T-Mask" label-for="">
										<b-form-input id="" placeholder="0x0000000"></b-form-input>
									</b-form-group>
									<b-form-group label="Master mod. A" label-for="">
										<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
									</b-form-group>
									<b-form-group label="T-Mask" label-for="">
										<b-form-input id="" placeholder="0x0000000"></b-form-input>
									</b-form-group>
									<b-form-group label="Master mod. B" label-for="">
										<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
									</b-form-group>
									<b-form-group label="Master mod. C" label-for="">
										<b-form-input id="" placeholder="00:00:AC:5E:8C:01:99:7C"></b-form-input>
									</b-form-group>
								</div>
								<div class="modal-2nd-box">
									<b-form-group label="간선망" label-for="">
										<b-form-select v-model="selected">
											<b-form-select-option>LTE</b-form-select-option>
											<b-form-select-option>5G</b-form-select-option>
										</b-form-select>
									</b-form-group>
									<b-form-group label="인입망" label-for="">
										<b-form-select v-model="selected">
											<b-form-select-option>HS-PLC</b-form-select-option>
											<b-form-select-option>HS-PLC2</b-form-select-option>
										</b-form-select>
									</b-form-group>
									<b-form-group label=">DCU 종류" label-for="">
										<b-form-input id="" placeholder="DCU A type"></b-form-input>
									</b-form-group>
									<b-form-group label="Meter count" label-for="">
										<b-form-input id="" placeholder="110"></b-form-input>
									</b-form-group>
									<b-form-group label="검침 Agent" label-for="">
										<b-form-input id="" placeholder="2020-12-01 15:00:00"></b-form-input>
									</b-form-group>
									<b-form-group label="SNMP (RO)" label-for="">
										<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
									</b-form-group>
									<b-form-group label="SNMP (RW)" label-for="">
										<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
									</b-form-group>
									<b-form-group label="FEP IP / PORT" label-for="">
										<b-form-input id="" placeholder="20.200.11.11 / 1234"></b-form-input>
									</b-form-group>
									<b-form-group label="DCU 현재시간" label-for="">
										<b-form-input id="" placeholder="2021-01-29 12:11:26"></b-form-input>
									</b-form-group>
									<b-form-group label="MAC 번호" label-for="">
										<b-form-input id="" placeholder="2021-01-29 12:11:26"></b-form-input>
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
														<th class="">표준형</th>
														<td class="">15분</td>
														<td class="">15분</td>
														<td class="">60분</td>
														<td class="">60분</td>
														<td class="">15분</td>
														<td class="">1분</td>
													</tr>
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
										<div class="middle"></div>
										<ul class="bottom">
											<li>
												<b-row>
													<b-col>
														<div>BPS UP</div>
														<div>Bit / SEC</div>
													</b-col>
													<b-col>
														<b>154</b>
														<span>BPS</span>
													</b-col>
												</b-row>
											</li>
											<li><span>커버 개폐상태</span><b>close</b></li>
										</ul>
									</div>
									<b-row class="double-input">
										<b-col cols="6">
											<b-form-group label="OS 버전" label-for="" c->
												<b-form-input id="" placeholder="Linux 10.0"></b-form-input>
											</b-form-group>
										</b-col>
										<b-col cols="6">
											<b-form-group label="펌웨어 버전" label-for="">
												<b-form-input id="" placeholder="FW 2.3"></b-form-input>
											</b-form-group>
										</b-col>
									</b-row>
									<b-row class="double-input">
										<b-col cols="6">
											<b-form-group label="하드웨어 버전" label-for="" c->
												<b-form-input id="" placeholder="HW 20"></b-form-input>
											</b-form-group>
										</b-col>
										<b-col cols="6">
											<b-form-group label="SNMP 암호화" label-for="">
												<b-form-input id="" placeholder="false"></b-form-input>
											</b-form-group>
										</b-col>
									</b-row>

									<b-form-group label="위치 정보" label-for="">
										<b-form-input id="" placeholder="위도 :0, 경도 : 0"></b-form-input>
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
					</b-form>
				</b-row>
			</form>
		</div>
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
