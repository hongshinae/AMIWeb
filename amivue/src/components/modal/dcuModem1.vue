<template>
	<b-modal id="dcuModem1">
		<template #modal-header="{ close }">
			<ul>
				<li><h4>DCU MODEMV1</h4></li>
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
		<div class="modal-content-wrap">
			<div class="btn-wrap">
				<ul>
					<li><b-button variant="light">DCU 재부팅</b-button></li>
				</ul>
			</div>
			<div class="test-wrap">
				1121.2102.ss.ss25122ss d ssd d d4512<br />
				1121.2ssss102..2512sss2 d d d d4512<br />
				1121.2102.ss.25122 d sssd d d4512<br />
				1121.21sss
			</div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
