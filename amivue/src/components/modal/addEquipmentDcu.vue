<template>
	<b-modal id="addEquipmenetDcu">
		<template #modal-header="{ close }">
			<ul>
				<li><h4>DCU 등록</h4></li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ ok, cancel }">
			<div class="btn-wrap">
				<ul>
					<li><!-- Button with custom close trigger value --></li>
					<li>
						<b-button variant="light" @click="ok()">등록</b-button>
						<b-button variant="light" @click="cancel()">취소</b-button>
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
				<b-form-group label="DCU ID" label-for="">
					<b-form-input id="" placeholder="DCU_ID_123"></b-form-input>
				</b-form-group>
				<b-form-group label="IP Address" label-for="">
					<b-form-input id="" placeholder="20.101.235.100"></b-form-input>
				</b-form-group>
				<b-form-group label="IP Router" label-for="">
					<b-form-input id="" placeholder="20.1.1.235.254"></b-form-input>
				</b-form-group>
				<b-form-group label="설치 일자" label-for="">
					<b-form-input id="" placeholder="2020-12-29 13:45:00"></b-form-input>
				</b-form-group>
				<b-form-group label="설치 위치" label-for="">
					<b-form-input id="" placeholder="위도 : 0,  경도 : 0"></b-form-input>
				</b-form-group>
			</div>
		</div>
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
