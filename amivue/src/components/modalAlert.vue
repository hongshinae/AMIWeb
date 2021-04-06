<template>
	<b-modal id="alert" no-close-on-backdrop auto-focus-button="ok">
		<template #modal-header="{ close }">
			<ul>
				<li>
					<h4>{{ title }}</h4>
				</li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ ok }">
			<div class="btn-wrap">
				<ul>
					<li><!-- Button with custom close trigger value --></li>
					<li>
						<b-button variant="light" @click="ok()" autofocus>확인</b-button>
					</li>
				</ul>
			</div>
			<!-- Button with custom close trigger value -->
		</template>
		<div class="modal-content-wrap">
			<div class="modal-box">
				{{ message }}
			</div>
		</div>
		<!---->
	</b-modal>
</template>

<script>
export default {
	props: { message: { type: String, default: "오류가 발생하였습니다." }, title: { type: String, default: "알 수 없는 오류" } },
	methods: {}
};
</script>

<style></style>
