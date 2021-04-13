<template>
	<b-modal id="detailEquipmenetEtc" size="lg">
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
						<b-button variant="light" @click="cancel()">돌아 가기</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="svg-wrap">
			<div class="svg">
				<img src="@/assets/svg/DCU.svg" alt="" title="" />
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
								<b-form-input v-model="text" placeholder="10" disabled></b-form-input>
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
								<b-form-input v-model="text" placeholder="15" disabled></b-form-input>
								<b-input-group-append>
									<b-button variant="light">LP 주기</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
						<b-form-group label="계량기 타입" label-for="">
							<b-form-input id="" placeholder="계량기 타입"></b-form-input>
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
