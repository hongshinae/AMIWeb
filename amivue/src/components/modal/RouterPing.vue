<template>
	<b-modal id="routerPing" @shown="shown" @show="show" @hide="hide" @hidden="hidden" @ok="ok" @cancel="cancel" no-close-on-backdrop>
		<template #modal-header="{ close }">
			<ul>
				<li><h4>ROUTER Ping</h4></li>
				<li>
					<b-button size="sm" variant="outline-light" @click="close()">
						X
					</b-button>
				</li>
			</ul>
		</template>
		<template #modal-footer="{ close }">
			<div class="btn-wrap">
				<ul>
					<li>
						<b-button variant="light" @click="close()">닫기</b-button>
					</li>
				</ul>
			</div>
		</template>
		<div class="modal-content-wrap">
			<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm">
				<div v-show="false" class="btn-wrap">
					<ul>
						<li><b-button variant="light" @click="sendDcuReboot">DCU 재부팅</b-button></li>
					</ul>
				</div>
				<div class="test-wrap">{{ result }}</div>
			</b-overlay>
		</div>
		<!---->
	</b-modal>
</template>

<script>
import Status from "@/service/status";

export default {
	props: ["dcuId", "dcuIp", "routerIp"],
	data() {
		return {
			isLoading: true,
			result: ""
		};
	},
	methods: {
		show() {},
		shown() {
			this.sendRouterPing();
		},
		hide() {},
		hidden() {},
		ok() {},
		cancel() {},
		async sendRouterPing() {
			try {
				this.isLoading = true;
				const response = await Status.ping({ ip: this.routerIp });
				const result = response.data.response;

				if (result == null) {
					this.result = "ping 시도중에 오류가 발생하였습니다.";
				} else {
					this.result = result;
				}
			} catch (error) {
				const result = [];
				this.result = result;
			} finally {
				this.isLoading = false;
			}
		},
		async sendDcuReboot() {
			try {
				const response = await Status.reboot({ dcuId: this.dcuId, dcuIp: this.dcuIp });
				const result = response.data.response;
				console.log(result);
			} catch (error) {
				const result = [];
				this.regularList = result;
			}
		}
	}
};
</script>
<style lang="scss">
@import "~@/assets/scss/modal/modalCommon.scss";
</style>
