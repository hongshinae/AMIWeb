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
			핑테스트? 재부팅... 포토샵 디자인 필요
			<div class=""></div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {};
</script>

<style></style>
