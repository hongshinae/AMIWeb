<template>
	<b-modal id="detailEquipmenetMeter" size="lg">
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
						<b-button variant="light">Meter 삭제</b-button>
					</li>
					<li>
						<b-button variant="light">정보 수정</b-button>
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="svg-wrap">
			<div class="svg">
				<!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 290 280"
					enable-background="new 0 0 290 280"
					xml:space="preserve"
				>
					<path
						fill="#8C8B8B"
						d="M287,257c0,5.522-4.478,10-10,10H13c-5.522,0-10-4.478-10-10V13C3,7.477,7.478,3,13,3h264
	c5.522,0,10,4.477,10,10V257z"
					/>
					<rect x="49" y="39" fill="#565252" width="190" height="81" />
					<path
						fill="#3F3939"
						d="M235,105c0,5.523-4.478,10-10,10H63c-5.523,0-10-4.477-10-10V53c0-5.523,4.477-10,10-10h162
	c5.522,0,10,4.477,10,10V105z"
					/>
					<path
						fill="#9B9B9B"
						d="M37.413,80.999c2.406-2.251,3.919-5.444,3.919-9c0-6.812-5.521-12.333-12.333-12.333
	s-12.333,5.521-12.333,12.333c0,3.556,1.513,6.749,3.919,9c-2.406,2.251-3.919,5.445-3.919,9c0,6.812,5.521,12.333,12.333,12.333
	s12.333-5.521,12.333-12.333C41.332,86.444,39.819,83.25,37.413,80.999z"
					/>
					<circle fill="#9B9B9B" cx="255.999" cy="79.999" r="12.333" />
					<path
						fill="#3F3939"
						d="M171.332,230.332c0-15.279-12.387-27.666-27.666-27.666c-15.28,0-27.667,12.387-27.667,27.666
	c0,0.153,0.009,0.305,0.012,0.458c-0.002,0.07-0.011,0.139-0.011,0.21v35c0,5.522,4.477,10,10,10h35c5.522,0,10-4.478,10-10v-31.381
	C171.218,233.222,171.332,231.791,171.332,230.332z"
					/>
					<circle fill="#3F3939" cx="255.666" cy="80.332" r="6" />
					<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="13.75" cy="14.75" r="2.75" />
					<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="13.75" cy="253.75" r="2.75" />
					<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="275.75" cy="253.75" r="2.75" />
					<circle fill="#3F3939" stroke="#000000" stroke-miterlimit="10" cx="275.75" cy="14.75" r="2.75" />
					<path
						fill="#FFFFFF"
						d="M260,237c0,5.523-4.478,10-10,10H38c-5.523,0-10-4.477-10-10v-82c0-5.523,4.477-10,10-10h212
	c5.522,0,10,4.477,10,10V237z"
					/>
					<g>
						<rect x="177" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="109" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="171" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="166" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="160" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="154" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="149" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="143" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="137" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="132" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="126" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="120" y="128" fill="#3F3939" width="1" height="8" />
						<rect x="115" y="128" fill="#3F3939" width="1" height="8" />
					</g>
					<text transform="matrix(1 0 0 1 91.8501 31.332)" font-family="'MyriadPro-Regular'" font-size="14px">S M A R T M E T E R</text>
					<text transform="matrix(1 0 0 1 195.665 104.6655)" fill="#FFFFFF" font-family="'MyriadPro-Regular'" font-size="12px">k W h</text>
					<circle fill="#3F3939" cx="28.999" cy="71.999" r="6.112" />
					<path
						fill="#211E1E"
						d="M32.055,71.999c0,1.688-1.367,3.056-3.056,3.056c-1.689,0-3.056-1.367-3.056-3.056
	c0-1.688,1.367-3.056,3.056-3.056C30.688,68.943,32.055,70.312,32.055,71.999z"
					/>
					<circle fill="#3F3939" cx="28.999" cy="89.999" r="6.112" />
					<path
						fill="#211E1E"
						d="M32.055,89.999c0,1.688-1.367,3.056-3.056,3.056c-1.689,0-3.056-1.367-3.056-3.056
	c0-1.688,1.367-3.056,3.056-3.056C30.688,86.943,32.055,88.312,32.055,89.999z"
					/>
					<path
						fill="#332F2F"
						d="M161,265c0,1.104-0.896,2-2,2h-30c-1.104,0-2-0.896-2-2v-9c0-1.105,0.896-2,2-2h30c1.104,0,2,0.895,2,2V265z
	"
					/>
				</svg>
			</div>
			<div class="svg-input">
				<ul>
					<li>
						<div class="meter-value">451245</div>
						<b-form-group label="Meter ID" label-for="">
							<b-form-input id="" placeholder="Meter ID"></b-form-input>
						</b-form-group>
						<b-form-group label="Modem MAC" label-for="">
							<b-form-input id="" placeholder="00:00:AC:5E:A0;39:04"></b-form-input>
						</b-form-group>
						<b-form-group label="Device Name" label-for="">
							<b-form-input id="" placeholder="WZT 161201a 21"></b-form-input>
						</b-form-group>
					</li>
					<li>
						<b-form-group label="Gateway ID" label-for="">
							<b-form-input id="" placeholder="NS09_0101A"></b-form-input>
						</b-form-group>
						<b-form-group label="검침일" label-for="">
							<b-input-group>
								<b-form-input v-model="text" placeholder="10"></b-form-input>
								<b-input-group-append>
									<b-button variant="light">검침일</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
						<b-form-group label="계량기 시각" label-for="">
							<b-input-group>
								<b-form-input v-model="text" placeholder="2019-05-09 11:11:00" disabled></b-form-input>
								<b-input-group-append>
									<b-button variant="light">시각설정</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
						<b-form-group label="LP 주기" label-for="">
							<b-input-group>
								<b-form-input v-model="text" placeholder="15"></b-form-input>
								<b-input-group-append>
									<b-button variant="light">LP 주기</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
						<b-form-group label="SNMP (RO)" label-for="">
							<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
						</b-form-group>
						<b-form-group label="SNMP (RW)" label-for="">
							<b-form-input id="" placeholder="kepsnmpro" disabled></b-form-input>
						</b-form-group>
					</li>
				</ul>
			</div>
		</div>
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
