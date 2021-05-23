<template>
	<b-modal id="detailEquipmentDcu" title="DCU상세" size="xl">
		<div class="b-overlay-wrap position-relative" id="overlay-background">
			<div class="modal-content-wrap">
				<ul class="left-wrap">
					<li class="left">
						<div class="tabs">
							<div>
								<ul role="tablist" class="nav">
									<li class="nav-item">
										<a href="#" target="_self" class="nav-link active">기본 설정</a>
									</li>
									<li class="nav-item">
										<a href="#" target="_self" class="nav-link">설정 정보</a>
									</li>
									<li class="nav-item">
										<a href="#" target="_self" class="nav-link">보안 정보</a>
									</li>
								</ul>
							</div>
							<div class="tab-content">
								<div class="tab-pane active">
									<div class="modal-1st-box">
										<fieldset class="form-group">
											<legend>DCU 고유번호</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU 모델번호</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>MAC 번호</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU 종류</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>간선망</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>인입망</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU 현재시간</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>OS 버전</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>펌웨어버전</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
									</div>
									<div class="modal-2nd-box">
										<input-ip />
										<fieldset class="form-group">
											<legend>DCU PORxxxxT</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
													<div class="input-group-append">
														<button type="button" class="btn btn-light">수정</button>
													</div>
												</div>
											</div>
										</fieldset>
										<input-ip />
										<fieldset class="form-group">
											<legend>Meter count</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU 동작시간</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>SNMP 암호화</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>SNMP 기능 상태</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU 동작상태</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>하드웨어버전</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>MIB 비전</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
									</div>
								</div>
								<div class="tab-pane setting-info-wrap" style="display: none;">
									<div class="modal-1st-box">
										<fieldset class="form-group">
											<legend>FEP IP / PORT</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>T-Mask</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>패킷 Length</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
									</div>
									<div class="modal-2nd-box">
										<fieldset class="form-group">
											<legend>DCU-FEP Timeout (초)</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>DCU-FEP Trap 주기 (분)</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>CPU Reset</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
									</div>
									<div class="modal-3rd-box">
										<div class="table-wrap">
											<div class="basic-table">
												<table class="table b-table">
													<thead>
														<tr>
															<th><div>Meter Type</div></th>
															<th><div>현재 검침</div></th>
															<th><div>LP</div></th>
															<th><div>평균 전압전류</div></th>
															<th><div>순시 전압전류</div></th>
															<th><div>시간 확인주기</div></th>
															<th><div>시간오차 한계</div></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th>S-Type</th>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td>-</td>
															<td>-</td>
															<td>-</td>
															<td>-</td>
														</tr>
														<tr>
															<th>E-Type</th>
															<td>-</td>
															<td><input type="text" class="form-control" /></td>
															<td>-</td>
															<td>-</td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
														</tr>
														<tr>
															<th>G-Type</th>
															<td>-</td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
														</tr>
														<tr>
															<th>EA-Type</th>
															<td>-</td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
															<td><input type="text" class="form-control" /></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane setting-info-wrap" style="display: none;">
									<div class="modal-1st-box">
										<fieldset class="form-group">
											<legend>pnID</legend>
											<div>
												<div class="input-group">
													<input type="text" disabled="disabled" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>OS 패스워드</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>ACODE (RO)</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>ACODE (RW)</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>SNMP (R0)</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
										<fieldset class="form-group">
											<legend>SNMP (RW)</legend>
											<div>
												<div class="input-group">
													<input type="text" class="form-control" />
												</div>
											</div>
										</fieldset>
									</div>
									<div class="modal-2nd-box"></div>
								</div>
							</div>
						</div>
					</li>
					<li class="right">
						<div class="modal-4th-box">
							<div class="info-box">
								<ul class="top">
									<li><span>DCU 동작상태</span><b>정상</b></li>
									<li><span>커버 개폐상태</span><b>닫힘</b></li>
								</ul>
								<div class="middle">
									<ul>
										<li>
											<div class="info-box-name"><span>설비 온도</span></div>
											<div class="info-box-svgwrap">
												<div class="temperature"><img src="/img/temperature.c4865ab8.svg" /></div>
											</div>
											<div class="info-box-data"><b>0</b><span>˚c</span></div>
										</li>
										<li>
											<div class="info-box-name"><span>CPU</span></div>
											<div class="info-box-svgwrap">
												<div class="monitor"><img src="/img/monitor.07a6bab2.svg" /></div>
											</div>
											<div class="info-box-data"><b>14</b><span>%</span></div>
										</li>
										<li>
											<div class="info-box-name"><span>MEMORY</span></div>
											<div class="info-box-svgwrap">
												<div class="memory"><img src="/img/memory.abab7c9f.svg" /></div>
											</div>
											<div class="info-box-data"><b>16</b><span>%</span></div>
										</li>
									</ul>
								</div>
								<ul class="bottom">
									<li>
										<div class="row">
											<div class="col">
												<div>BPS UP</div>
												<div class="small">Bit / SEC</div>
											</div>
											<div class="col"><b>594</b><span>BPS</span></div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col">
												<div>BPS DOWN</div>
												<div class="small">Bit / SEC</div>
											</div>
											<div class="col"><b>2294</b><span>BPS</span></div>
										</div>
									</li>
								</ul>
							</div>
							<fieldset class="form-group install-Location">
								<legend>설치 위치</legend>
								<div>
									<div class="input-group modify">
										<div class="input-group-prepend"><div class="input-group-text">위도</div></div>
										<input type="number" placeholder="위도" min="-90" max="90" class="form-control" />
									</div>
									<div class="input-group modify">
										<div class="input-group-prepend"><div class="input-group-text">경도</div></div>
										<input type="number" placeholder="경도" min="-90" max="90" class="form-control" />
									</div>
									<button type="button" class="btn btn-light">확인</button>
								</div>
							</fieldset>
							<div class="map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.442877125704!2d127.1048765274144!3d37.3964194786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5809134e293f%3A0x88afd0f7bd09e638!2z7YyQ6rWQ7Jet!5e0!3m2!1sko!2skr!4v1615713261342!5m2!1sko!2skr"
									width="100%"
									height="200"
									loading="lazy"
									style="border: 0px;"
								>
								</iframe>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</b-modal>
</template>

<script>
import InputIp from "@/Template/components/InputIp";

export default {
	components: {
		InputIp
	}
};
</script>
<style lang="scss">
@import "~@/assets/scss/modal/modalDetailEquipmentDcu.scss";
</style>
